import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { FIREBASE_AUTH } from "../../firebase";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const CoachFollowing = () => {
  const [following, setFollowing] = useState([]);
  const [filtredFollowing, setFiltredFollowing] = useState([]);
  const [search, setSearch] = useState("");
  const coachId = FIREBASE_AUTH.currentUser;

  const getCoachFollowing = async () => {
    try {
      const response = await axios.get(
        `http://${process.env.EXPO_PUBLIC_IP_ADRESS}:3000/api/followingCoach/coachFollowers/${coachId.uid}`
      );
      console.log(response.data);
      setFollowing(response.data);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getCoachFollowing();
  }, []);
  const handleSearch = (text) => {
    setSearch(text);
    const filtered = following.filter((coach) =>
      coach.fullname.toUpperCase().includes(text.toUpperCase())
    );

    setFiltredFollowing(filtered);
  };
  useEffect(() => {
    if (search === "") {
      setFiltredFollowing(following);
    } else {
      setFiltredFollowing(filtredFollowing);
    }
  }, [following, filtredFollowing, search]);
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor={"gray"}
          value={search}
          onChangeText={handleSearch}
        />
      </View>
      <TouchableOpacity
        style={{
          position: "absolute",
          right: 40,
          top: -60,
        }}
      >
        <MaterialCommunityIcons name="magnify" size={30} color={"#9AC61C"} />
      </TouchableOpacity>
      <ScrollView>
        {filtredFollowing.map((follower) => (
          <View style={styles.followersContainer}>
            <View style={styles.follwerProfile}>
              <Image
                source={{
                  uri: follower.pfImage,
                }}
                style={styles.followerPic}
              />
              <Text style={styles.followerName}>{follower.fullname}</Text>
            </View>
            <TouchableOpacity style={styles.unfollowBtn}>
              <Text style={styles.unfollowBtnText}>UNFOLLOW</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 20,
    position: "absolute",
    height: "100%",
    top: 200,
  },
  searchContainer: {
    flexDirection: "row",
    top: -70,
  },
  searchInput: {
    backgroundColor: "transparent",
    color: "white",
    borderColor: "#9AC61C",
    borderWidth: 2,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginRight: 10,
    height: 50,
    width: 320,
  },
  followersContainer: {
    width: 350,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "white",
    borderBottomWidth: 0.2,
    paddingBottom: 10,
  },
  follwerProfile: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  followerPic: {
    height: 50,
    width: 50,
    borderRadius: 100,
  },
  followerName: {
    color: "white",
    fontWeight: "400",
    fontSize: 18,
  },
  unfollowBtn: {
    borderColor: "#9AC61C",
    borderRadius: 5,
    borderWidth: 1,
    width: 100,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  unfollowBtnText: {
    color: "#9AC61C",
  },
});

export default CoachFollowing;
