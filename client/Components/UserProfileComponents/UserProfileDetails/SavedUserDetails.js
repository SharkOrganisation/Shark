import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import { ipAddress } from "../../../ipConfig.js";
import { FIREBASE_AUTH } from "../../../firebase.js";

import Icon from "react-native-vector-icons/SimpleLineIcons";
import HeartIcon from "react-native-vector-icons/AntDesign";
import CommentIcon from "react-native-vector-icons/FontAwesome";
import SaveIcon from "react-native-vector-icons/Fontisto";
import ShareIcon from "react-native-vector-icons/SimpleLineIcons";
import axios from "axios";

const SavedUserDetails = ({ data }) => {
  const [saved, SetSaved] = useState(false);
  const [likes, setLikes] = useState(false);
  const user = FIREBASE_AUTH.currentUser;

  const savedPost = async (postId) => {
    try {
      await axios.post(
        `http://${ipAddress}:3000/api/savedPost/save/${postId}/${user.uid}`
      );
      console.log("added");
    } catch (err) {
      console.log(err);
    }
  };

  const Unsaved = async (postId) => {
    try {
      await axios.delete(
        `http://${ipAddress}:3000/api/savedPost/remove/${user.uid}/${postId}`
        );
        console.log("removed")
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ScrollView>
      <View style={styles.postContainer}>
        <View style={styles.postHeader}>
          <View style={styles.gymProfile}>
            <Image
              source={{
                uri: data.Post.Gym.pfImage,
              }}
              style={styles.profilePic}
            />
            <Text style={styles.profileName}>{data.Post.Gym.fullname}</Text>
          </View>
          <Icon name="options-vertical" size={20} style={{ color: "white" }} />
        </View>
        <Image style={styles.postImage} source={{ uri: data.Post.image[0] }} />

        <View style={styles.postContent}>
          <Text style={styles.postText}>{data.Post.content}</Text>
        </View>
        <View style={styles.iconsContainer}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 18 }}>
            {/* {" "} */}
            <HeartIcon
              onPress={() => {
                setLikes(!likes);
              }}
              name="hearto"
              size={24}
              style={{
                color: likes ? "#9AC61C" : "white",
              }}
            />
            <CommentIcon
              name="comment-o"
              size={26}
              style={{ color: "white" }}
            />
            <ShareIcon name="share" size={22} style={{ color: "white" }} />
          </View>
          {saved && (
            <SaveIcon
              name="bookmark"
              size={24}
              style={{
                color: "white",
              }}
              onPress={() => {
                SetSaved(false);
                savedPost(data.Post.id)
              }}
            />
          )}
          {!saved && (
            <SaveIcon
              name="bookmark"
              size={24}
              style={{
                color: "#9AC61C",
              }}
              onPress={() => {
                SetSaved(true);
                Unsaved(data.Post.id)
              }}
            />
          )}
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  postContainer: {
    flexDirection: "column",
    width: "100%",
    padding: 10,
    marginBottom: "8%",
    marginTop: "3%",
  },
  postHeader: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  gymProfile: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  profileName: {
    color: "white",
    fontWeight: "bold",
  },
  postImage: {
    height: "100%",
    height: 250,
    borderRadius: 10,
    objectFit:"fill"
  },
  postContent: {
    width: "100%",
    height: "auto",
    justifyContent: "center",
    paddingHorizontal: 5,
    marginTop: 5,
  },
  postText: {
    color: "white",
    textAlign: "justify",
  },
  iconsContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
  },
});

export default SavedUserDetails;
