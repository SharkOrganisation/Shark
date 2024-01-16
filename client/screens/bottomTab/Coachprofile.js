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
  Modal
} from "react-native";
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import HeartIcon from 'react-native-vector-icons/AntDesign'
import CommentIcon from 'react-native-vector-icons/FontAwesome'
import SaveIcon from 'react-native-vector-icons/Fontisto'
import ShareIcon from 'react-native-vector-icons/SimpleLineIcons'
import Icons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import EditIcon from "react-native-vector-icons/EvilIcons";
import axios from "axios";
import { FIREBASE_AUTH } from "../../firebase";
import EditCoachProfile from "./EditCoachProfile";


const PostContent = () => {
  const [posts, setPosts] = useState([]);
  const coachId = FIREBASE_AUTH.currentUser;
  const [heartActive, setHeartActive] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const getPosts = async () => {
    try {
      const response = await axios.get(
        `http://${process.env.EXPO_PUBLIC_IP_ADRESS}:3000/api/posts/Coachposts/${coachId.uid}`
      );
      console.log(response.data);
      setPosts(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <View style={stylesPost.container}>
      {console.log(posts)}
      {posts.map((post) => (
        <View key={post.id} style={stylesPost.postContainer}>
          <View style={stylesPost.postHeader}>
            <View style={stylesPost.gymProfile}>
              <Image
                source={{
                  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVVA_E2Q6ohZwBq822E9NBMA1XD1g1ZJS6PA&usqp=CAU",
                }}
                style={stylesPost.profilePic}
              />
            </View>
            <View style={stylesPost.optionsContainer}>
              <Icon name="options-vertical" size={20} style={{ color: 'white' }} />
            </View>
          </View>
          <Image
            source={{
              // uri: 'https://ceinture-de-force.fr/cdn/shop/articles/Blog_body_france_1.png?v=1692176612&width=1100',
              // uri: post.image,
              uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVVA_E2Q6ohZwBq822E9NBMA1XD1g1ZJS6PA&usqp=CAU"

            }}
            style={stylesPost.postImage}
          />
          <View style={stylesPost.postContent}>
            <Text style={stylesPost.postText}>{post.content}</Text>
          </View>

          <View style={stylesPost.iconsContainer}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', gap: 18 }}>
              <HeartIcon
                onPress={() => {
                  setHeartActive(!heartActive);
                }}
                name={heartActive ? 'heart' : 'hearto'}
                size={24}
                style={{ color: heartActive ? 'red' : 'white' }}
              />
              <CommentIcon
                name="comment-o"
                size={26}
                style={{ color: 'white' }}
                onPress={() => setModalVisible(true)}
              />
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  setModalVisible(!modalVisible);
                }}>
                <View style={stylesPost.centeredView}>
                  <View style={stylesPost.modalView}>
                    <Text style={stylesPost.modalText}>Hello World!</Text>
                    <Pressable
                      style={[stylesPost.button, stylesPost.buttonClose]}
                      onPress={() => setModalVisible(!modalVisible)}>
                      <Text style={stylesPost.textStyle}>Hide Modal</Text>
                    </Pressable>
                  </View>
                </View>
              </Modal>
              <ShareIcon name="share" size={22} style={{ color: 'white' }} />
            </View>
            <SaveIcon name="favorite" size={22} style={{ color: 'white' }} />
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  postContainer: {
    flexDirection: 'column',
    width: '100%',
    padding: 10,
    marginBottom: 100,
  },
  postHeader: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  gymProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
  },
  profileName: {
    color: 'white',
    fontWeight: 'bold',
  },
  postImage: {
    height: '100%',
    height: 250,
    borderRadius: 10,
    // backgroundColor: '#FFFFFF',
  },
  postContent: {
    width: '100%',
    height: 'auto',
    justifyContent: 'center',
    paddingHorizontal: 5,
    marginTop: 5,
  },
  postText: {
    color: 'white',
    textAlign: 'justify',
  },
  iconsContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    width: '100%',
    height: '50%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  optionsContainer: {
    flex: 1,
    alignItems: 'flex-end',
    // backgroundColor:"white"
  },
});

const PlanContent = () => {
  const [plans, setPlans] = useState([]);
  const coachId = FIREBASE_AUTH.currentUser;
  const nav = useNavigation();
  const getPlans = async () => {
    try {
      const response = await axios.get(
        `http://${process.env.EXPO_PUBLIC_IP_ADRESS}:3000/api/plan/getByCoach/${coachId.uid}`
      );
      console.log(response.data);
      setPlans(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getPlans();
  }, []);

  const handlePlanPress = () => {
    nav.navigate("PlanDetails", { plans });
  };
  return (
    <ScrollView>
      {/* <TouchableOpacity onPress={()=>{
        handlePlanPress()
      }}> */}
      {plans.map((plan, index) => (
        <View key={index} style={stylesPlan.likesContainer}>
          <Image
            style={stylesPlan.avatar}
            source={{
              uri: "https://i1.sndcdn.com/artworks-000464548089-wbl999-t500x500.jpg",
            }}
          />
          <View>
            <Text style={stylesPlan.likesText}>Plan Name: {plan.name}</Text>
            <Text style={stylesPlan.likesText}>Price: {plan.price}</Text>
            <Text style={stylesPlan.likesText}>
              Program Name: {plan.program.name}
            </Text>
            <Text style={stylesPlan.likesText}>
              Program Duration: {plan.program.duration}
            </Text>
            <Text style={stylesPlan.likesText}>
              Diet Name: {plan.Diet.name}
            </Text>
            <Text style={stylesPlan.likesText}>
              Diet Meals: {plan.Diet.meals}
            </Text>
          </View>
        </View>
      ))}
      {/* </TouchableOpacity> */}
    </ScrollView>
  );
};

const stylesPlan = StyleSheet.create({
  likesContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "black",
    padding: 10,
    marginVertical: 10,
    borderRadius: 6,
    shadowColor: "#9AC61C",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.89,
    shadowRadius: 8.3,
    marginBottom: 80,
  },
  avatar: {
    width: 150,
    height: 100,
    borderRadius: 20,
    marginRight: 10,
  },
  likesText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

const MembershipContent = () => {
  const coachId = FIREBASE_AUTH.currentUser;
  const [member, setMember] = useState([]);
  const getMembership = async () => {
    try {
      const response = await axios.get(
        `http://${process.env.EXPO_PUBLIC_IP_ADRESS}:3000${coachId.uid}`
      );
      console.log(response.data);
      setMember(response.data)
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View style={stylesMembership.membershipContainer}>
      <Image
        style={stylesMembership.memberImage}
        source={{
          uri: "https://i.ytimg.com/vi/EMpZCJL6zwc/maxresdefault.jpg",
        }}
      />
      <Text style={stylesMembership.membershipText}>
        Member since 1920. Active and dedicated fitness enthusiast.
      </Text>
    </View>
  );
};
const stylesMembership = StyleSheet.create({
  membershipContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
  },
  memberImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  membershipText: {
    fontSize: 16,
    color: "#444",
    fontStyle: "italic",
  },
});

const Coachprofile = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
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
  const [coach, setCoach] = useState([]);
  const coachId = FIREBASE_AUTH.currentUser;

  const getCoachProfile = async () => {
    try {
      const response = await axios.get(
        `http://${process.env.EXPO_PUBLIC_IP_ADRESS}:3000/api/coach/getOne/${coachId.uid}`
      );
      console.log(response.data);
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
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("CreateAllProgram");
          }}
        >
          <View style={styles.icon}>
            <Text style={styles.program}>New program</Text>
            <Icons name="create" style={{ color: "#BEFF03", fontSize: 25 }} />
          </View>
        </TouchableOpacity>
        <View style={styles.header}>
          <View style={styles.pageTitle}>
            <View style={styles.profileContainer}>
              <Image
                style={styles.avatar}
                source={{
                  uri: `${coach.pfImage}`,
                }}
              />
              <View style={styles.nameContainer}>
                <Text style={styles.name}>{coach.fullname}</Text>
                <TouchableOpacity style={styles.editIconContainer}>
                  <EditIcon
                    name="pencil"
                    size={30}
                    style={{ color: "#9AC61C" }}
                    onPress={() => {
                      navigation.navigate("EditCoachProfile", { coach });
                    }}
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.bio}>{coach.bio}</Text>
              <View style={styles.followContainer}>
                <TouchableOpacity>
                  <Text style={styles.FollowText}>Speciality</Text>
                  <Text style={styles.numberFollower}>{coach.speciality}</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity>
                  <Text style={styles.FollowText}>followers</Text>
                  <Text style={styles.follow}></Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.FollowText}>following</Text>
                  <Text style={styles.follow}></Text>
                </TouchableOpacity> */}
                <TouchableOpacity>
                  <Text style={styles.FollowText}>PerSession</Text>
                  <Text style={styles.numberFollower}>{coach.perSession}</Text>
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
                    Plan
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
                    Gym
                  </Text>
                </TouchableOpacity>
              </View>
              {activeTab === "post" && <PostContent />}
              {activeTab === "likes" && <PlanContent />}
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
  icon: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center", 
    paddingRight: 250,
    gap: 5
  },
  program: {
    fontSize: 20,
    fontWeight: "bold",
    textDecorationColor: "#BEFF03",
    textDecorationLine: "underline",
    color: "#BEFF03",
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
  nameContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  editIconContainer: {
    right: 115,
  },
  bio: {
    color: "white",
    fontSize: 16,
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

export default Coachprofile;
