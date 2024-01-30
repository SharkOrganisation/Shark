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
import axios from "axios";
import Search from "react-native-vector-icons/AntDesign";

const AllCoaches = () => {
  const [coaches, setCoaches] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredCoaches, setFilteredCoaches] = useState([]);
  const [followingStates, setFollowingStates] = useState([]);
  const [showSearchInput, setShowSearchInput] = useState(false);
  const handleSearchIconClick = () => {
    setShowSearchInput((prevShowSearchInput) => !prevShowSearchInput);
  };
  const getAllCoaches = async () => {
    try {
      const response = await axios.get(
        `http://${process.env.EXPO_PUBLIC_IP_ADRESS}:3000/api/coach/getAll`
      );
      setCoaches(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllCoaches();
  }, []);

  const handleSearch = (text) => {
    setSearch(text);
    const filtered = coaches.filter(
      (coach) =>
        coach.fullname.toUpperCase().includes(text.toUpperCase()) ||
        coach.speciality.toUpperCase().includes(text.toUpperCase()) ||
        // coach.Gym.fullname.toUpperCase().includes(text.toUpperCase()) ||
        coach.perSession.toString().toUpperCase().includes(text.toUpperCase())
    );

    setFilteredCoaches(filtered);
  };

  useEffect(() => {
    if (search === "") {
      setFilteredCoaches(coaches);
    } else {
      setFilteredCoaches(filteredCoaches);
    }
  }, [coaches, filteredCoaches, search]);

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
            placeholder="Search by name or by speciality or by price..."
            placeholderTextColor={"gray"}
            value={search}
            onChangeText={handleSearch}
          />
        )}
        <TouchableOpacity onPress={handleSearchIconClick}>
          <Search
            name="search1"
            size={30}
            top={20}
            position={"relative"}
            color={"#9AC61C"}
          />
        </TouchableOpacity>
      </View>
      {(search === "" ? coaches : filteredCoaches).length === 0 ? (
        <Text style={styles.noGymText}>
          No coach found, please try again with another search criteria or
          refine your preferences !!{" "}
        </Text>
      ) : (
        (search === "" ? coaches : filteredCoaches).map((coach, index) => (
          <View key={coach.id} style={styles.cardContainer}>
            <View style={styles.cardContent}>
              <Image
                source={{ uri: coach.pfImage }}
                style={styles.followerPic}
              />
              <View>
                <Text style={styles.followerName}>{coach.fullname}</Text>
                <Text style={styles.gmailName}>{coach.email}</Text>
                <Text style={styles.gmailName}>
                  speciality:{coach.speciality}
                </Text>
                <Text style={styles.gmailName}>
                  workin in:
                  {coach.Gym?.fullname ? coach.Gym?.fullname : "no specified"}
                </Text>
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
    width: 300,
    color: "white",
    top: 20,
  },
  cardContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "#9AC61C",
    borderBottomWidth: 10,
    paddingBottom: 5,
    borderRadius: 30,
    borderColor: "gray",
    borderWidth: 0.5,
    marginTop: 40,
    top: 30,
  },
  noGymText: {
    color: "#9AC61C",
    textAlign: "center",
    justifyContent: "center",
    fontSize: 30,
    fontWeight: "200q",
    marginTop: 120,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    margin: 10,
  },
  followerPic: {
    height: 70,
    width: 70,
    borderRadius: 100,
  },
  followerName: {
    color: "white",
    fontWeight: "400",
    fontSize: 18,
  },
  gmailName: {
    color: "gray",
    fontWeight: "400",
    fontSize: 16,
    width: 155,
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

export default AllCoaches;
