import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import axios from "axios";
import { FIREBASE_AUTH } from "../../firebase";

const MembershipContent = () => {
  const currentUser = FIREBASE_AUTH.currentUser;

  const [saved, setSaved] = useState([]);


  const getSavedPosts = async () => {      
    try {
      const response  = await axios.get(
        `http://${process.env.EXPO_PUBLIC_IP_ADDRESS}:3000/api/savedPost/${currentUser.uid}`
      );
      console.log(response.data,"ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss");
      setSaved(response.data);
    } catch (error) {
      console.error(error);
    } 
  };

  useEffect(() => {
    getSavedPosts();
  }, []);

  return (
    <TouchableOpacity
      style={styles.membershipContainer}
      onPress={() => console.log("Membership details clicked")}
    >
     
          <Image
            style={styles.memberImage}
            source={{
              uri: "https://i.ytimg.com/vi/EMpZCJL6zwc/maxresdefault.jpg",
            }}
          />
          <View style={styles.textContainer}>
            <Text style={styles.membershipText}>
              Member since 1920. Active and dedicated fitness enthusiast.
            </Text>
          </View>
      
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  membershipContainer: {
    paddingVertical: 50,
    justifyContent: "center",
    backgroundColor: "black",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 15,
    marginVertical: 10,
    marginBottom:80,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  memberImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  membershipText: {
    fontSize: 18,
    color: "#333",
    fontWeight: "bold",
    fontStyle: "italic",
  },
});

export default MembershipContent;