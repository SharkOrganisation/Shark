import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import UserPlan from "../../Components/UserProfileComponents/UserPlan";
// import Ionicons from "react-native-vector-icons/Ionicons";
import EditIcon from "react-native-vector-icons/EvilIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Save from "react-native-vector-icons/Fontisto";
import Dumbbell from "react-native-vector-icons/FontAwesome5";
import MembershipIcon from "react-native-vector-icons/AntDesign";
import MembershipUser from "../../Components/UserProfileComponents/MembershipUser";
import SavedUser from "../../Components/UserProfileComponents/SavedUser";
import { useNavigation, useIsFocused  } from "@react-navigation/native";
import { FIREBASE_AUTH } from "../../firebase";
import axios from "axios";
import { ipAddress } from "../../ipConfig";

const UserProfile = ({ navigation }) => {
  const navigations = useNavigation();
  const [myplan, setMyplan] = useState(true);
  const [membership, setMembership] = useState(false);
  const [saved, setSaved] = useState(false);
  const [active, setActive] = useState("My Plan");
  const [planDetails, setPlanDetails] = useState("Plan Details");
  const [userData, setUserData] = useState([]);
  const user = FIREBASE_AUTH.currentUser;
  // console.log(process.env.EXPO_PUBLIC_IP_ADRESS,'ip');
  const isFocused = useIsFocused()

  const getUser = async () => {
    try {
      const getUserData = await axios.get(
        `http://${ipAddress}:3000/api/user/getOne/${user.uid}`
      );
      setUserData(getUserData.data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    console.log("triggered");
    getUser();
  }, [isFocused]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.staticContainer}>
        <View style={styles.pfImageContainer}>
          <Image
            source={{
              uri: `${userData.pfImage}`,
            }}
            style={styles.pfImage}
          />
        </View>
        <View style={styles.information}>
          <View>
            <Text style={styles.name}>{userData.fullname}</Text>
          </View>
          <TouchableOpacity>
            <EditIcon
              name="pencil"
              size={30}
              style={{ color: "#9AC61C" }}
              onPress={() => {
                navigations.navigate("EditUserProfile", { userData });
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.followContainer}>
          <TouchableOpacity>
            <Text style={styles.numberFollower}>400</Text>
          </TouchableOpacity>
          <Text style={styles.FollowText}>Following</Text>
        </View>
      </View>

      <View style={styles.tabProfile}>
        <TouchableOpacity
          style={
            !myplan ? styles.iconPlanContainer : styles.iconPlanContainerEdit
          }
          onPress={() => {
            setMyplan(true);
            setMembership(false);
            setSaved(false);
            setActive("My Plan");
          }}
        >
          <Text style={!myplan ? styles.planText : styles.planTextEdit}>
            My Plans
          </Text>
          <Dumbbell
            name="dumbbell"
            style={!myplan ? styles.tabIcon : styles.tabIconEdit}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={
            !membership
              ? styles.iconPlanContainer
              : styles.iconPlanContainerEdit
          }
          onPress={() => {
            setMembership(true);
            setMyplan(false);
            setSaved(false);
            setActive("Membership");
          }}
        >
          <Text style={!membership ? styles.planText : styles.planTextEdit}>
            Membership
          </Text>
          <MembershipIcon
            name="idcard"
            style={!membership ? styles.tabIcon : styles.tabIconEdit}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={
            !saved ? styles.iconPlanContainer : styles.iconPlanContainerEdit
          }
          onPress={() => {
            setSaved(true);
            setMyplan(false);
            setMembership(false);
            setActive("Saved");
          }}
        >
          <Text style={!saved ? styles.planText : styles.planTextEdit}>
            {" "}
            Saved{" "}
          </Text>
          <Save
            name="favorite"
            style={!saved ? styles.tabIcon : styles.tabIconEdit}
          />
        </TouchableOpacity>
      </View>
      {active === "My Plan" && <UserPlan />}
      {active === "Membership" && <MembershipUser />}
      {active === "Saved" && <SavedUser />}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  staticContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    margin: "10%",
  },
  pfImageContainer: {
    justifyContent: "center",
  },
  pfImage: {
    width: 150,
    height: 150,
    borderColor: "white",
    borderWidth: 5,
    borderColor: "#9AC61C",
    borderRadius: "100%",
    backgroundColor: "white",
  },
  name: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  information: {
    flexDirection: "row",
    gap: 6,
  },
  followContainer: {
    flexDirection: "column",
    gap: 1,
    alignItems: "center",
  },
  numberFollower: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  FollowText: {
    color: "#E5E4E2",
    letterSpacing: 2,
    fontSize: 15,
  },
  tabProfile: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomColor: "white",
    borderBottomWidth: 3,
    alignItems: "center",
    gap: 10,
  },
  tabIcon: {
    color: "#E5E4E2",
    fontSize: 25,
  },
  iconPlanContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  planText: {
    color: "white",
    fontSize: 15,
  },

  planTextEdit: {
    color: "#9AC61C",
    fontSize: 15,
  },
  tabIconEdit: {
    color: "#9AC61C",
    fontSize: 25,
  },
  iconPlanContainerEdit: {
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#9AC61C",
    borderWidth: 5,
  },
});

export default UserProfile;
