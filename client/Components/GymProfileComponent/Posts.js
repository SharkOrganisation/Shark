import {
  Image,
  Modal,
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import HeartIcon from "react-native-vector-icons/AntDesign";
import CommentIcon from "react-native-vector-icons/FontAwesome";
import SaveIcon from "react-native-vector-icons/Fontisto";
import ShareIcon from "react-native-vector-icons/SimpleLineIcons";
import CloseIcon from "react-native-vector-icons/AntDesign";
import SendIcon from "react-native-vector-icons/Ionicons";
import { ipAddress } from "../../ipConfig.js";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FIREBASE_AUTH } from "../../firebase.js";

const Posts = ({ data }) => {
  const currentUser = FIREBASE_AUTH.currentUser;
  const [heartActive, setHeartActive] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [posts, setPosts] = useState([]);
  const [saved, SetSaved] = useState(false);
  const [likes, setLikes] = useState({});
  const [commentText, setCommentText] = useState("");
  const [padrino, setPadrino] = useState(false);

  const getPost = async () => {
    try {
      const response = await axios.get(
        `http://${ipAddress}:3000/api/posts/Gymposts/${data.id}`
      );
      setPosts(response.data.reverse());
      setPadrino(!padrino)
    } catch (err) {
      <Text>Try Later</Text>;
    }
  };

  const savedPost = async (postId) => {
    try {
      await axios.post(
        `http://${ipAddress}:3000/api/savedPost/save/${postId}/${currentUser.uid}`
      );
      console.log("added");
    } catch (err) {
      console.log(err);
    }
  };

  const Unsaved = async (postId) => {
    try {
      await axios.delete(
        `http://${ipAddress}:3000/api/savedPost/${currentUser.uid}/${postId}`
      );
    } catch (err) {
      console.log(err);
    }
  };
  const toggleLike = (postId) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [postId]: !prevLikes[postId],
    }));
  };
  const toggleSave = async (postId) => {
    if (saved[postId]) {
      try {
        await Unsaved(postId);
        SetSaved((prevSave) => ({
          ...prevSave,
          [postId]: false,
        }));
      } catch (err) {
        console.error("An error occurred while removing the post", err);
      }
    } else {
      try {
        await savedPost(postId);
        SetSaved((prevSave) => ({
          ...prevSave,
          [postId]: true,
        }));
      } catch (err) {
        console.error("An error occurred while saving the post", err);
      }
    }
  };

  const addComment = async (postId) => {
    try {
      await axios.post(`http://${ipAddress}:3000/api/comments/post`, {
        content: commentText,
        userId: currentUser.uid,
        postId,
      });
      setPadrino(!padrino);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPost();
  }, [padrino]);

  return (
    <View style={styles.container}>
      {posts.map((post) => {
        return (
          <View style={styles.postContainer} key={post.id}>
            <View style={styles.postHeader}>
              <View style={styles.gymProfile}>
                <Image
                  source={{
                    uri: data.pfImage,
                  }}
                  style={styles.profilePic}
                />
                <Text style={styles.profileName}>{data.fullname}</Text>
              </View>
              <Icon
                name="options-vertical"
                size={20}
                style={{ color: "white" }}
              />
            </View>
            <Image
              source={{
                uri: post.image[0],
              }}
              style={styles.postImage}
            />
            <View style={styles.postContent}>
              <Text style={styles.postText}>{post.content}</Text>
            </View>

            <View style={styles.iconsContainer}>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 18 }}
              >
                <HeartIcon
                  onPress={() => toggleLike(post.id)}
                  name="hearto"
                  size={24}
                  style={{ color: likes[post.id] ? "#9AC61C" : "white" }}
                />

                <CommentIcon
                  name="comment-o"
                  size={26}
                  style={{ color: "white" }}
                  onPress={() => setModalVisible(true)}
                />
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={() => {
                    setModalVisible(!modalVisible);
                  }}
                >
                  <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                      <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}
                      >
                        <CloseIcon
                          name="down"
                          size={24}
                          style={{ color: "gray" }}
                        />
                      </Pressable>
                    </View>
                    <View style={styles.modalTitle}>
                      <Text style={styles.titleText}>Comments</Text>
                    </View>
                  </View>
                  <View style={styles.commentsContainer}>
                    {post.comments.map((comment) => {
                      return (
                        <View style={styles.commentContainer}>
                          <View style={styles.commentProfile}>
                            <Image
                              source={{
                                uri: comment.User.pfImage,
                              }}
                              style={styles.commentPic}
                            />
                            <View style={styles.profileNameContainer}>
                              <Text style={styles.commentProfileName}>
                                {comment.User.fullname}
                              </Text>
                              <Text style={styles.commentText}>
                                {comment.content}
                              </Text>
                            </View>
                          </View>
                          <HeartIcon
                            name="hearto"
                            size={20}
                            style={{ color: heartActive ? "#9AC61C" : "white" }}
                          />
                        </View>
                      );
                    })}
                  </View>
                  <View style={styles.commentInputContainer}>
                    <Image
                      source={{
                        uri: data.pfImage,
                      }}
                      style={styles.commentPic}
                    />
                    <TextInput
                      placeholder="Add a comment"
                      placeholderTextColor={"gray"}
                      style={styles.commentInput}
                      onChangeText={(text) => setCommentText(text)}
                    />
                    <SendIcon
                      onPress={() => {
                        addComment(post.id);
                      }}
                      name="send"
                      size={24}
                      style={{
                        color: "#9AC61C",
                        position: "absolute",
                        right: 20,
                        bottom: 22,
                      }}
                    />
                  </View>
                </Modal>
                <ShareIcon name="share" size={22} style={{ color: "white" }} />
              </View>
              <SaveIcon
                name="bookmark"
                size={24}
                style={{ color: saved[post.id] ? "#9AC61C" : "white" }}
                onPress={() => toggleSave(post.id)}
              />
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default Posts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  postContainer: {
    flexDirection: "column",
    width: "100%",
    padding: 10,
    marginBottom: 50,
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "black",
    borderRadius: 20,
    padding: 35,
    width: "100%",
    height: "100%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    borderBottomColor: "gray",
    borderWidth: 0.2,
    height: 50,
    position: "absolute",
    top: 60,
    width: "100%",
  },
  titleText: {
    fontSize: 21,
    color: "white",
    textAlign: "center",
  },
  commentInputContainer: {
    width: "100%",
    height: 60,
    position: "absolute",
    bottom: 0,
    paddingHorizontal: 10,
  },
  commentPic: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  commentInput: {
    width: "85%",
    height: 50,
    borderRadius: 50,
    borderColor: "#9AC61C",
    borderWidth: 1,
    position: "absolute",
    right: 5,
    paddingHorizontal: 10,
    color: "white",
  },
  commentsContainer: {
    width: "100%",
    height: "75%",
    position: "absolute",
    top: "15%",
    paddingHorizontal: 15,
    gap: 20,
  },
  commentProfileName: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    alignItems: "center",
  },
  commentProfile: {
    flexDirection: "row",
    gap: 8,
  },
  commentText: {
    color: "white",
  },
  commentContainer: {
    borderBottomColor: "white",
    borderBottomWidth: 0.2,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
