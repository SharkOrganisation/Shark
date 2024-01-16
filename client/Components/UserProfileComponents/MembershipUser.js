import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useIsFocused  } from "@react-navigation/native";

import { FIREBASE_AUTH } from "../../firebase.js";
import {ipAddress} from "../../ipConfig";

import axios from "axios";

const MembershipUser = () => {
  const [userMemb,setUserMemb]=useState([])
  const user = FIREBASE_AUTH.currentUser;
  const isFocused = useIsFocused()
  const getMembership=async()=>{
    try{
      let membership=await axios.get(`http://${ipAddress}:3000/api/memberShip/getByUser/${user.uid}`)
      setUserMemb(membership.data[0])
    }catch(err){[]
      console.log(err);
    }
  }
useEffect(()=>{
  if(isFocused){

    getMembership()
  }
},[isFocused])
console.log(userMemb);
if (!userMemb || !userMemb.Gym || !userMemb.user) {
  return <Text style={{color:"white"}}>is loading...</Text>
}

  return (
    <View style={styles.allcontainer}>
      <ImageBackground
        style={styles.container}
        source={require("../../assets/MembershipCard/membershipCard.png")}
        resizeMode="cover"
      >
        <View style={styles.LeftContainer}>
          <View style={styles.gymInfo}>
            <Text style={styles.gymText}>{userMemb.Gym.fullname}</Text>
            <Image
              style={styles.gymPic}
              source={{
                uri: userMemb.Gym.pfImage
              }}
            />
          </View>
          <Text>{userMemb.Gym.location}</Text>
          <Text style={styles.membershipDuration}>Membership Duration:</Text>
          <Text>{userMemb.type}</Text>
          <View style={styles.qrContainer}>
            <View>
              <Text style={styles.membershipDuration}>Expired At:</Text>
              <Text>15-01-2025</Text>
            </View>
            <View style={styles.Qr}>
              <Text style={{ fontSize: 8, fontWeight: "700" }}>QR CODE:</Text>
              <Image
                style={styles.QrImg}
                source={{
                  uri: "https://www.bdc.ca/globalassets/digizuite/40415-bdc-qr-code.jpg?v=498d76",
                }}
              />
            </View>
          </View>
        </View>
        <View style={styles.RightContainer}>
          <Image
            style={styles.userPf}
            source={{
              uri: `${userMemb.user.pfImage}`,
            }}
          />
          <View style={styles.userInfo}>
            <Text style={styles.title}>Name Adherent:</Text>
            <Text style={styles.name}> {userMemb.user.fullname}</Text>
          </View>
        </View>
      </ImageBackground> 
    </View>
  );
};
const styles = StyleSheet.create({
  allcontainer: {
    flex: 1,
    margin: "5%",
    marginTop: "10%",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10%",
    borderColor: "#9AC61C",
    borderWidth: 2,
    flexDirection: "row",
    gap: "25%",
    shadowColor: "#9AC61C",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.88,
    shadowRadius: 8.3,
  },
  LeftContainer: {
    flexDirection: "column",
    gap: "10%",
    marginLeft: "5%",
  },
  gymPic: {
    width: 40,
    height: 40,
    marginTop: "3%",
    objectFit: "fill",
    borderWidth: 2,
    borderColor: "#9AC61C",
    borderRadius: "100%",
  },
  gymInfo: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "2%",
  },
  gymText: {
    color: "black",
    fontSize: 20,
    letterSpacing: 2,
    fontWeight: "bold",
    textDecorationLine: "underline",
    textDecorationColor: "#9AC61C",
  },
  membershipDuration: {
    fontWeight: "600",
  },
  qrContainer: {
    flexDirection: "row",
    gap: 35,
  },
  Qr: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "-6%",
  },
  QrImg: {
    width: 50,
    height: 50,
    borderColor: "white",
    borderWidth: 2,
    borderColor: "#9AC61C",
  },
  RightContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
  },
  userPf: {
    width: 110,
    height: 110,
    borderColor: "white",
    borderWidth: 2,
    borderColor: "#9AC61C",
    borderRadius: "100%",
    backgroundColor: "white",
  },
  userInfo: {
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
  title: {
    color: "white",
    fontSize: 10,
    fontWeight: "500",
  },
  name: {
    color: "white",
    fontWeight: "bold",
    fontSize: 11,
  },
});
export default MembershipUser;
