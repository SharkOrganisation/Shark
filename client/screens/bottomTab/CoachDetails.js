import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
  Pressable,
  Modal,
} from "react-native";
import LogoutIcon from "react-native-vector-icons/Entypo";
import Icons from "react-native-vector-icons/Ionicons";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import EditIcon from "react-native-vector-icons/EvilIcons";
import axios from "axios";
import { FIREBASE_AUTH } from "../../firebase";
import PlanDetails from "../../Components/CoachProfile/PlanDetails.js"
import PostContent from "../../Components/CoachProfile/PostContent";
import MembershipContent from "../../Components/CoachProfile/MembershipContent";
import { ipAddress } from "../../ipConfig";

const CoachDetails = ({route}) => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [activeTab, setActiveTab] = useState("post");
  const [isFollowing, setIsFollowing] = useState(false);
  const { coachId } = route.params;
//   const currentUser = FIREBASE_AUTH.currentUser;

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
  const [coach, setCoach] = useState([]);
  const id = FIREBASE_AUTH.currentUser;
  // console.log(coachId.uid,"ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
  const getCoachProfile = async () => {
    try {
      const response = await axios.get(
        `http://${ipAddress}:3000/api/coach/getOne/${coachId}`
      );
      setCoach(response.data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getCoachProfile();
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <ScrollView>


        <View style={styles.header}>
          <View style={styles.pageTitle}>
            <View style={styles.profileContainer}>
              <Image
                style={styles.avatar}
                source={{
                  uri: `${coach?.pfImage}`,
                }}
              />
              <View style={styles.followInfoContainer}>
                <TouchableOpacity>
                  <Text style={styles.FollowText}>Followers</Text>
                  <Text style={styles.follow}>50</Text>
                </TouchableOpacity>
                <TouchableOpacity >
                  <Text style={styles.FollowText}>Following</Text>
                  <Text style={styles.follow}>5000</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.nameContainer}>
                <Text style={styles.name}>{coach.fullname}</Text>
                <TouchableOpacity style={styles.editIconContainer}>
                </TouchableOpacity>
              </View>
              <Text style={styles.bio}>{coach.bio}</Text>
              <View style={styles.followContainer}>
                <TouchableOpacity>
                  <Text style={styles.FollowText}>Speciality</Text>
                  <Text style={styles.numberFollower}>{coach.speciality}</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.FollowText}>PerSession</Text>
                  <Text style={styles.numberFollower}>{coach.perSession}$</Text>
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
                    Plans
                  </Text>
                </TouchableOpacity>

              </View>
              {activeTab === "post" && <PostContent data={coach} />}
              {activeTab === "likes" && <PlanDetails data={coach}/>}
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
  icon: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    // paddingRight: 225,
    gap: 5,
    width: 150,
    // backgroundColor:"red"
  },
  program: {
    fontSize: 20,
    fontWeight: "400",
    textDecorationColor: "#BEFF03",
    textDecorationLine: "underline",
    color: "#BEFF03",
    top: -2,
  },
  name: {
    flex: 1,
    fontWeight: "800",
    letterSpacing: 1,
    left: "150%",
    color: "white",
    top: -10,
  },
  profileContainer: {
    flexDirection: "column",
    gap: 20,
    alignItems: "center",
    position: "relative",
  },
  followInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    position: "absolute",
    top: 30,
    width: "60%",
    gap: 20,
    left: 140,
  },
  follow: {
    textAlign: "center",
    fontWeight: "100",
    letterSpacing: 1,
    color: "white",
  },
  avatar: {
    right: "30%",
    width: 100,
    height: 100,
    borderRadius: 100,
    borderColor: "#9AC61C",
    borderWidth: 5,
  },
  pageTitle: {
    width: "100%",
    marginTop: "5%",
  },
  nameContainer: {
    flexDirection: "row",
  },
  editIconContainer: {
    // right: "1200%",
    right: 210,
    top: -12,
  },
  bio: {
    color: "white",
    fontSize: 16,
    alignItems: "flex-start",
    right: 50,
    width:280,
    top: -20,
  },
  followContainer: {
    flexDirection: "row",
    gap: 60,
    alignItems: "center",
    justifyContent:"center",
    alignContent:"center"
  },
  numberFollower: {
    color: "white",
    fontSize: 18,
    fontWeight: "100",
    alignSelf: "center",
    letterSpacing:2
  },
  FollowText: {
    color: "#E5E4E2",
    letterSpacing: 2,
    fontSize: 15,
    fontWeight: "bold",
    justifyContent:"center",
    alignItems:"center"
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
    flexDirection: "row",
    justifyContent: "space-around",
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
    borderBottomColor: "#9AC61C",
    borderBottomWidth: 5,
  },
});

export default CoachDetails;
