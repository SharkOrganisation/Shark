import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import Locations from "react-native-vector-icons/EvilIcons";
import Search from "react-native-vector-icons/AntDesign";

const AllGyms = () => {
  const [coaches, setCoaches] = useState([]);
  const [search, setSearch] = useState("");
  const [followingStates, setFollowingStates] = useState([]);
  const [filteredCoaches, setFilteredCoaches] = useState([]);
  const [showSearchInput, setShowSearchInput] = useState(false);

  const handleSearchIconClick = () => {
    setShowSearchInput((prevShowSearchInput) => !prevShowSearchInput);
  };
  //   const follow = async () => {
  //     try {
  //       await axios.post(
  //         `http://${process.env.EXPO_PUBLIC_IP_ADRESS}:3000/api/followingGym/follow/${}/${}`
  //       );
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  const getAllGyms = async () => {
    try {
      const response = await axios.get(
        `http://${process.env.EXPO_PUBLIC_IP_ADRESS}:3000/api/gym/getAllGyms`
      );
      setCoaches(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllGyms();
  }, []);

  const handleSearch = (text) => {
    setSearch(text);
    const filtered = coaches.filter(
      (coach) =>
        coach.fullname.toUpperCase().includes(text.toUpperCase()) ||
        coach.region.toUpperCase().includes(text.toUpperCase())
    );

    setFilteredCoaches(filtered);
  };

  useEffect(() => {
    if (search === "") {
      setFilteredCoaches(coaches);
    } else {
      setFilteredCoaches(
        coaches.filter(
          (coach) =>
            coach.fullname.toUpperCase().includes(search.toUpperCase()) ||
            coach.region.toUpperCase().includes(search.toUpperCase())
        )
      );
    }
  }, [coaches, search]);

  const handleFollowToggle = (index) => {
    const isCurrentlyFollowing = followingStates[index];

    if (isCurrentlyFollowing) {
      Alert.alert(
        "Unfollow",
        "Are you sure you want to unfollow?",
        [
          {
            text: "No",
            style: "cancel",
          },
          {
            text: "Yes",
            onPress: () => {
              const updatedFollowingStates = [...followingStates];
              updatedFollowingStates[index] = !isCurrentlyFollowing;
              setFollowingStates(updatedFollowingStates);
            },
          },
        ],
        { cancelable: false }
      );
    } else {
      const updatedFollowingStates = [...followingStates];
      updatedFollowingStates[index] = !isCurrentlyFollowing;
      setFollowingStates(updatedFollowingStates);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {showSearchInput && (
          <TextInput
            style={styles.searchInput}
            placeholder="Search by gym name or by location"
            placeholderTextColor={"gray"}
            value={search}
            onChangeText={handleSearch}
          />
        )}
        <TouchableOpacity onPress={handleSearchIconClick}>
          <Search name="search1" size={30} top={40} position={"relative"} color={"#9AC61C"} />
        </TouchableOpacity>
      </View>

      {(search === "" ? coaches : filteredCoaches).length === 0 ? (
        <Text style={styles.noGymText}>No gym found !! try again with gym name or by region </Text>
      ) : (
        // <View>
        //   <View style={styles.logo}>
        //     <Image
        //       source={{
        //         uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/1d6ac96ecf3ac7fe4d95439a91ba1bd0cb1e5ea6bdebd8f592a73845e134f838",
        //       }}
        //       style={styles.image1}
        //     />
        //   </View>
        // </View>
        (search === "" ? coaches : filteredCoaches).map((coach, index) => (
          <View key={coach.id} style={styles.cardContainer}>
            <View style={styles.cardContent}>
              <Image
                source={{ uri: coach.pfImage }}
                style={styles.followerPic}
              />
              <View>
                <Text style={styles.followerName}>{coach.fullname}</Text>
                <Text style={styles.gmailName}>{coach.Email}</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Locations name="location" size={20}  color={"#9AC61C"} />
                  <Text style={styles.gmailName}>{coach.location}</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={styles.unfollowBtn}
              onPress={() => handleFollowToggle(index)}
            >
              <Text style={styles.unfollowBtnText}>
                {followingStates[index] ? "Following" : "Follow +"}
              </Text>
            </TouchableOpacity>
          </View>
        ))
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 10,
  },
  searchInput: {
    backgroundColor: "transparent",
    alignItems: "center",
    borderColor: "gray",
    borderWidth: 2,
    paddingHorizontal: 10,
    borderRadius: 100,
    marginRight: 10,
    height: 40,
    color: "white",
    position:"relative",
    width: 300,
    top: 40,
  },
  noGymText: {
    color: "#9AC61C",
    textAlign: "center",
    justifyContent: "center",
    fontSize: 30,
    marginTop: 120,
  },
  //   image1: {
  //     width: 500,
  //     // borderColor:"red",
  //     borderWidth:2,
  //     aspectRatio: "1.7",
  //   },
  //   logo: {
  //     alignItems: "center",
  //     marginTop: "15%",
  //     marginBottom: "9%",
  //     borderRadius: 200,
  //   },

  cardContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "#9AC61C",
    borderBottomWidth: 10,
    paddingBottom: 10,
    borderRadius: 30,
    borderColor: "gray",
    borderWidth: 0.5,
    marginTop: 40,
    top: 30,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    margin: 10,
  },
  followerPic: {
    height: 60,
    width: 60,
    borderRadius: 90,
  },
  followerName: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  gmailName: {
    color: "gray",
    fontWeight: "200",
    fontSize: 16,
    width: 150,
    fontWeight: "400",
  },
  unfollowBtn: {
    borderColor: "#9AC61C",
    borderRadius: 5,
    borderWidth: 1,
    width: 100,
    right: 10,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  unfollowBtnText: {
    color: "#9AC61C",
  },
});

export default AllGyms;
