import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

const PostContent = () => {
  return (
    <View>
      <Text style={stylesPost.PostContent}>
        hevimevcimvcmi vecmiévecvavcjavkcjvackvackv
      </Text>
    </View>
  );
};
const stylesPost = StyleSheet.create({
  PostContent: {
    backgroundColor: "white",
  },
});

const LikesContent = () => {
  return (
    <View>
      <Image
        style={styles.avatar}
        source={{
          uri: "https://i.ytimg.com/vi/EMpZCJL6zwc/maxresdefault.jpg",
        }}
      />
      <Image
        style={styles.avatar}
        source={{
          uri: "https://i.ytimg.com/vi/EMpZCJL6zwc/maxresdefault.jpg",
        }}
      />
      <Text>cjcjhcccccccccccccccccccccccccccccccccccccc</Text>
    </View>
  );
};

const MembershipContent = () => {
  return (
    <View style={stylesMember.container} >
      <Image
        style={stylesMember.member}
        source={{
          uri: "https://i.ytimg.com/vi/EMpZCJL6zwc/maxresdefault.jpg",
        }}
      />
      <Image
        style={stylesMember.member}
        source={{
          uri: "https://i.ytimg.com/vi/EMpZCJL6zwc/maxresdefault.jpg",
        }}
      />
      <Image
        style={stylesMember.member}
        source={{
          uri: "https://i.ytimg.com/vi/EMpZCJL6zwc/maxresdefault.jpg",
        }}
      />
      <Text>,hccjcjcjccccccccccccccccccccccccc</Text>
    </View>
  );
};

const stylesMember = StyleSheet.create({
    container:{
flex : 1,
flexDirection:"row",
},
member:{
     width: 140,
    height: 140,
    borderRadius: 140,
    borderColor: "#9AC61C",
    borderWidth: 5,
},

})





const Coachprofile = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState("post");
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowToggle = () => {
    if (isFollowing) {
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
            onPress: () => setIsFollowing(false),
          },
        ],
        { cancelable: false }
      );
    } else {
      setIsFollowing((prevIsFollowing) => !prevIsFollowing);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.pageTitle}>
            <View style={styles.profileContainer}>
              <Image
                style={styles.avatar}
                source={{
                  uri: "https://i.ytimg.com/vi/EMpZCJL6zwc/maxresdefault.jpg",
                }}
              />
              <Text style={styles.name}>ishow speed</Text>
              <View style={styles.followContainer}>
                <TouchableOpacity>
                  <Text style={styles.FollowText}>Following</Text>
                  <Text style={styles.numberFollower}>50K</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.FollowText}>Followers</Text>
                  <Text style={styles.numberFollower}>0</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  style={styles.doneBtn}
                  onPress={handleFollowToggle}
                >
                  <Text style={styles.btnText}>
                    {isFollowing ? "Following" : "Follow +"}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.underline}>
          
                <TouchableOpacity onPress={() => setActiveTab("post")}>
                  <Text
                    style={[
                      styles.post,
                      { color: activeTab === "post" ? "#9AC61C" : "white" },
                      activeTab === "post" && styles.selectedText,
                    ]}
                  >
                    Post
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setActiveTab("likes")}>
                  <Text
                    style={[
                      styles.like,
                      { color: activeTab === "likes" ? "#9AC61C" : "white" },
                      activeTab === "likes" && styles.selectedText,
                    ]}
                  >
                    Likes
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setActiveTab("membership")}>
                  <Text
                    style={[
                      styles.member,
                      {
                        color: activeTab === "membership" ? "#9AC61C" : "white",
                      },
                      activeTab === "membership" && styles.selectedText,
                    ]}
                  >
                    Membership
                  </Text>
                </TouchableOpacity>
              </View>
              {activeTab === "post" && <PostContent />}
              {activeTab === "likes" && <LikesContent />}
              {activeTab === "membership" && <MembershipContent />}

            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  name: {
    flex: 1,
    textAlign: "center",
    fontWeight: "900",
    letterSpacing: 1,
    color: "white",
  },
  profileContainer: {
    flexDirection: "column",
    gap: 20,
    alignItems: "center",
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 140,
    borderColor: "#9AC61C",
    borderWidth: 5,
  },
  pageTitle: {
    width: "100%",
    marginTop: "10%",
  },
  followContainer: {
    flexDirection: "row",
    gap: 60,
    alignItems: "center",
  },
  numberFollower: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center",
  },
  FollowText: {
    color: "#E5E4E2",
    letterSpacing: 2,
    fontSize: 15,
  },
  doneBtn: {
    backgroundColor: "transparent",
    width: 190,
    padding: 15,
    borderRadius: 10,
    borderColor: "#9AC61C",
    borderWidth: 1,
    alignSelf: "center",
  },
  btnText: {
    color: "#9AC61C",
    textAlign: "center",
    fontSize: 21,
    fontWeight: "200",
  },
  underline: {
    borderBottomColor: "white",
    borderBottomWidth: 2,
    flexDirection:'row',
    justifyContent:'space-around',
    width: "100%",
  },

  post: {
    color: "white",
    fontWeight: "900",
  },
  like: {
    color: "white",
    fontWeight: "900",
    right: -10,
  },
  member: {
    color: "white",
    fontWeight: "900",
  },
  selectedText: {
    borderBottomColor:"#9AC61C",
    borderBottomWidth:5,
    
    
  },
});

export default Coachprofile;
