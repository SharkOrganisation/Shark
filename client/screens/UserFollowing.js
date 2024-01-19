import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Following from "../Components/UserProfileComponents/Following.js";
import { FIREBASE_AUTH } from "../firebase.js";
import axios from "axios";
import { ipAddress } from "../ipConfig.js";
const UserFollowing = () => {
  const [gymFollowing, setGymFollowing] = useState([]);
  const [coachFollowing,setCoachFollowing]=useState([])
  const user = FIREBASE_AUTH.currentUser;
  const getFollowers = async () => {
    try {
      const getGymFollowing = await axios.get(
        `http://${ipAddress}:3000/api/followingGym/userFollowers/${user.uid}`
      );
      setGymFollowing(getGymFollowing.data);
    } catch (err) {
      console.log(err);
    }
  };
  const getCoachFollowing=async()=>{
    try{
      const coachFollow=await axios.get(`http://${ipAddress}:3000/api/followingCoach/userFollowers/${user.uid}`)
      setCoachFollowing(coachFollow.data)
    }catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    getFollowers();
    getCoachFollowing();
  }, []);
  console.log(gymFollowing);
  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.navbar}>
        <Text style={styles.navItemText}>Following</Text>

        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            placeholderTextColor={"gray"}
          />
          <TouchableOpacity
            style={{
              position: "absolute",
              right: 15,
              top: 7,
            }}
          >
            <MaterialCommunityIcons
              name="magnify"
              size={30}
              color={"#9AC61C"}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.FollowContainer}>
        {gymFollowing.map((follow) => {
          return <Following key={follow.id} data={follow} />;
        })}
        {coachFollowing.map((following)=>{
          return(<Following key={following.id} data={following}/>)
        })}
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  FollowContainer:{
    gap:20,
    position:'relative',
    top:"1%",
  },
  navbar: {
    position: "absolute",
    top: 30,
    borderBottomColor: "white",
    borderBottomWidth: 2,
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  navItemText: {
    color: "#9AC61C",
    fontSize: 18,
    fontWeight: "600",
    paddingBottom: 4,
  },
  searchContainer: {
    flexDirection: "row",
    position: "absolute",
    top: 90,
  },
  searchInput: {
    backgroundColor: "transparent",
    borderColor: "#9AC61C",
    borderWidth: 2,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginRight: 10,
    height: 50,
    width: 320,
  },
});
export default UserFollowing;
