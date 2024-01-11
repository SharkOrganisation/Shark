import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import UserPlanDetails from "./UserProfileDetails/UserPlanDetails";
import { FIREBASE_AUTH } from "../../firebase";

import axios from "axios"
const UserPlan = () => {
  const [view, setView] = useState("main");
  const [userPlan,setUserPlan]=useState([])

  const user = FIREBASE_AUTH.currentUser;
console.log(user.uid,"iduser");
  const getUserPlan=async()=>{
    try{
    const getPlan=await axios.get(`http://${"172.29.0.5"}:3000/api/userPlan/${user.uid}`)
      setUserPlan(getPlan.data[0].Plan)
    }catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{
   getUserPlan() 
  },[])
  return (
    <ScrollView>
      {view === "main" && (
        <View style={styles.stylePlanContainer}>
          <TouchableOpacity
            style={styles.planCard}
            onPress={() => {
              setView("details");
            }}
          >
            <Image
              source={{
                uri: "https://i.pinimg.com/736x/e0/b1/88/e0b188f0eb5e4de05f0649b79e6f50d6.jpg",
              }}
              style={styles.imgPlan}
            />
          <Text style={styles.text}>{userPlan.name}</Text>
          </TouchableOpacity>
          
          
        </View>
      )}

      {view === "details" && <UserPlanDetails data={userPlan} />}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  stylePlanContainer: {
    padding: 20,
    flexDirection: "row",
    flex: "wrap",
    flexWrap:"wrap",
    justifyContent: "space-evenly"
  },
  planCard:{
    margin:10
  },
  text: {
    color: "white",
    fontSize: 20,
    position:"relative",
    alignSelf: "center",
  },
  imgPlan: {
    width: 150,
    height: 250,
    borderRadius: 25,
    objectFit: "fill",
  },
});
export default UserPlan;
