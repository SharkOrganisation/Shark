import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FIREBASE_AUTH } from "../../firebase.js";
import { ipAddress } from "../../ipConfig";
import SavedUserDetails from "./UserProfileDetails/SavedUserDetails.js";

const SavedUser = () => {
  const [SavedPosts, setSavedPosts] = useState([]);
  const [postDetails, setPostDetails] = useState("onePost");
  const user = FIREBASE_AUTH.currentUser;

  const getSavedPosts = async () => {
    try {
      const saved = await axios.get(
        `http://${ipAddress}:3000/api/savedPost/${user.uid}`
      );
      setSavedPosts(saved.data);
    } catch (err) {
      console.error("Error fetching saved posts:", err);
    }
  };

  useEffect(() => {
    getSavedPosts();
  }, []);

  const renderImagePairs = () => {
    const pairs = [];
    for (let i = 0; i < SavedPosts.length; i += 2) {
      pairs.push(SavedPosts.slice(i, i + 2));
    }
    return pairs.map((pair, index) => (
      <View key={index} style={styles.imageRowContainer}>
        {pair.map((post, index) => (
          <TouchableOpacity key={index} style={styles.imageContainer}>
            <Image
              style={styles.imgStyle}
              source={{ uri: post.Post.image[0] }}
            />
          </TouchableOpacity>
        ))}
      </View>
    ));
  };

  return (
    <ScrollView style={styles.savedContainer}>
      <TouchableOpacity
        style={styles.container}
        onPress={() => setPostDetails("Details")}
      >
        {postDetails === "onePost" && renderImagePairs()}
      </TouchableOpacity>
      {postDetails === "Details" &&
        SavedPosts.map((post, index) => (
          <SavedUserDetails key={index} data={post} />
        ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  savedContainer: {
    flex: 1,
    backgroundColor: "black",
    marginBottom: "25%",
  },
  container: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 20,
    marginTop: "5%",
    width: "60%",
  },
  imageRowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    margin: "1%",
    marginTop: "5%",
  },
  imageContainer: {
    width: "48%",
    aspectRatio: 1,
    marginBottom: 10,
  },
  imgStyle: {
    flex: 1,
    borderRadius: 20,
    borderColor: "white",
    borderWidth: 1,
  },
});

export default SavedUser;
