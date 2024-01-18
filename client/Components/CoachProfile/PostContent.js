import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
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

import axios from "axios";
import { FIREBASE_AUTH } from "../../firebase";

const PostContent = ({ data }) => {

  const [posts, setPosts] = useState([]);
  const coachId = FIREBASE_AUTH.currentUser;
  const [likedPosts, setLikedPosts] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [heartActiveArray, setHeartActiveArray] = useState([]);

  const getPosts = async () => {
    try {
      const response = await axios.get(
        `http://${process.env.EXPO_PUBLIC_IP_ADRESS}:3000/api/posts/Coachposts/${coachId.uid}`
      );

      setPosts(response.data);
    } catch (err) {
      console.error(err);
    }
  };
  const [comments, setComments] = useState([]);
  const getComments = async () => {
    try {
      const response = await axios.get(
        `http://${process.env.EXPO_PUBLIC_IP_ADRESS}:3000/api/comments/get/4oCiSci45LU15a9rBQazug9837z2/3`
      );
      setComments(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getComments();
    getPosts();
  }, []);

  const toggleLike = (index) => {
    const updatedLikedPosts = [...likedPosts];
    updatedLikedPosts[index] = !updatedLikedPosts[index];
    setLikedPosts(updatedLikedPosts);

    const updatedHeartActiveArray = [...heartActiveArray];
    updatedHeartActiveArray[index] = !updatedHeartActiveArray[index];
    setHeartActiveArray(updatedHeartActiveArray);
  };

  return (
    <View style={stylesPost.container}>
      {posts.map((post, index) => (
        <View key={post.id} style={stylesPost.postContainer}>
          <View style={stylesPost.postHeader}>
            <View style={stylesPost.gymProfile}>
              <Image
                source={{
                  uri: data.pfImage,
                }}
                style={stylesPost.profilePic}
              />
              <Text style={stylesPost.profileName}>{data.fullname}</Text>
            </View>
            <View style={stylesPost.optionsContainer}>
              <Icon
                name="options-vertical"
                size={20}
                style={{ color: "white" }}
              />
            </View>
          </View>
          <Image
            source={{
              uri: post.image[0],
            }}
            style={stylesPost.postImage}
          />
          <View style={stylesPost.postContent}>
            <Text style={stylesPost.postText}>{post.content}</Text>
          </View>

          <View style={stylesPost.iconsContainer}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-end",
                gap: 18,
              }}
            >
              <HeartIcon
                onPress={() => toggleLike(index)}
                name={likedPosts[index] ? "heart" : "hearto"}
                size={24}
                style={{ color: likedPosts[index] ? "#9AC61C" : "white" }}
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
                <View style={stylesPost.centeredView}>
                  <View style={stylesPost.modalView}>
                    <Pressable
                      style={[stylesPost.button, stylesPost.buttonClose]}
                      onPress={() => setModalVisible(!modalVisible)}
                    >
                      <CloseIcon
                        name="down"
                        size={24}
                        style={{ color: "gray" }}
                      />
                    </Pressable>
                  </View>
                  <View style={stylesPost.modalTitle}>
                    <Text style={stylesPost.titleText}>Comments</Text>
                  </View>
                </View>

                <ScrollView style={stylesPost.commentsContainer}>
                  {comments.map((comment) => (
                    <View key={comment.id} style={stylesPost.commentContainer}>
                      <View style={stylesPost.commentProfile}>
                        <Image
                          source={{ uri: comment.User.pfImage }}
                          style={stylesPost.commentPic}
                        />
                        <View style={stylesPost.profileNameContainer}>
                          <Text style={stylesPost.commentProfileName}>
                            {comment.User.fullname}
                          </Text>
                          <Text style={stylesPost.commentText}>
                            {comment.content}
                          </Text>
                        </View>
                      </View>
                      <HeartIcon
                        onPress={() => toggleLike(index)}
                        name={heartActiveArray[index] ? "heart" : "hearto"}
                        size={24}
                        style={{
                          color: heartActiveArray[index] ? "#9AC61C" : "white",
                        }}
                      />
                    </View>
                  ))}
                </ScrollView>

                <View style={stylesPost.commentInputContainer}>
                  <Image
                    source={{
                      uri: data.pfImage,
                    }}
                    style={stylesPost.commentPic}
                  />
                  <TextInput
                    placeholder="Add a comment"
                    placeholderTextColor={"gray"}
                    style={stylesPost.commentInput}
                  />
                  <SendIcon
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
            <SaveIcon name="favorite" size={22} style={{ color: "white" }} />
          </View>
        </View>
      ))}
    </View>
  );
};

const stylesPost = StyleSheet.create({
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
    marginBottom: 100,
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
    backgroundColor: "#FFFFFF",
  },
  profileName: {
    color: "white",
    fontWeight: "bold",
  },
  postImage: {
    height: "100%",
    height: 250,
    borderRadius: 10,
    // backgroundColor: '#FFFFFF',
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
    top: 80,
    width: "100%",
  },

  titleText: {
    fontSize: 20,
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
    top: "20%",
    paddingHorizontal: 2,
    gap: 7,
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

  button: {
    borderRadius: 35,
    padding: 10,
    elevation: 2,
  },
  // buttonOpen: {
  //   backgroundColor: "#F194FF",
  // },
  buttonClose: {
    backgroundColor: "#9AC61C",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  optionsContainer: {
    flex: 1,
    alignItems: "flex-end",
    // backgroundColor:"white"
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
export default PostContent;
