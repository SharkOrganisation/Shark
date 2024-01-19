import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { FIREBASE_AUTH } from "../../firebase";
import {ipAddress} from "../../ipConfig";
import axios from "axios"
const Following = ({ data }) => {
  const [follow, setFollow] = useState(false);
  const user = FIREBASE_AUTH.currentUser;

  // console.log(data);

const newGymFollow=async(gymId)=>{
  try{
    await axios.post(`http://${ipAddress}:3000/api/followingGym/follow/${gymId}/${user.uid}`)
  }catch(err){
    <Text style={{color:"white"}}>Try Again</Text>
  }
} 
const removeGymFollow =async(gymId)=>{
  try{
    await axios.delete(`http://${ipAddress}:3000/api/followingGym/remove/${gymId}/${user.uid}`)
  }catch(err){
    <Text style={{color:"white"}}>Try Again</Text>
  }
}

const newCoachFollow=async(coachId)=>{
  try{
    await axios.post(`http://${ipAddress}:3000/api/followingCoach/follow/${coachId}/${user.uid}`)
  }catch(err){
    <Text style={{color:"white"}}>Try Again</Text>
  }
}
const removeCoachFollow=async(coachId)=>{
  try{
    await axios.delete(`http://${ipAddress}:3000/api/followingCoach/remove/${coachId}/${user.uid}`)
  }catch(err){
    <Text style={{color:"white"}}>Try Again</Text>
  }
}

 return (
    // <View style={styles.container}>
    <View style={styles.followersContainer}>
      <View style={styles.follwerProfile}>
        <Image
          source={{
            uri: data.pfImage,
          }}
          style={styles.followerPic}
        />
        <Text style={styles.followerName}>{data.fullname}</Text>
      </View>
      {!follow && (
        <TouchableOpacity
          style={styles.unfollowBtn}
          onPress={() => {
            setFollow(true);
          }}
        >
          <Text style={styles.unfollowBtnText}>UNFOLLOW</Text>
        </TouchableOpacity>
      )}
      {follow && (
        <TouchableOpacity
          style={styles.unfollowBtn}
          onPress={() => {
            setFollow(false);
          }}
        >
          <Text style={styles.unfollowBtnText}>FOLLOW +</Text>
        </TouchableOpacity>
      )}
    </View>
    // </View>
  );
};
const styles = StyleSheet.create({
  container: {
    gap: 20,
    position: "relative",
    top: 200,
  },
  followersContainer: {
    width: 410,
    flexDirection: "row",
    justifyContent: "space-around",
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
export default Following;
