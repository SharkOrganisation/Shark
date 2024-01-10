import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import UserPlan from "../../Components/UserProfileComponents/UserPlan";
import Ionicons from "react-native-vector-icons/Ionicons";
import EditIcon from "react-native-vector-icons/EvilIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Save from "react-native-vector-icons/Fontisto";
import Dumbbell from "react-native-vector-icons/FontAwesome5";
import MembershipIcon from "react-native-vector-icons/AntDesign";
import MembershipUser from "../../Components/UserProfileComponents/MembershipUser";
import SavedUser from "../../Components/UserProfileComponents/SavedUser";

const UserProfile = ({ navigation }) => {
  const [myplan, setMyplan] = useState(true);
  const [membership, setMembership] = useState(false);
  const [saved, setSaved] = useState(false);
  const [active, setActive] = useState("My Plan");
  const [planDetails, setPlanDetails] = useState("Plan Details");


  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons
          name="arrow-left-box"
          size={40}
          color={"#9AC61C"}
        />
      </TouchableOpacity>
      {/* <Text onPress={()=>navigation.navigate('getStarted')}>test screen</Text> */}
      <View style={styles.staticContainer}>
        <View style={styles.pfImageContainer}>
          <Image
            source={{
              uri: "https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png",
            }}
            style={styles.pfImage}
          />
        </View>
        <View style={styles.information}>
          <View>
            <Text style={styles.name}>@username</Text>
          </View>
          <TouchableOpacity>
            <EditIcon name="pencil" size={30} style={{ color: "#9AC61C" }} />
          </TouchableOpacity>
        </View>
        <View style={styles.followContainer}>
          <TouchableOpacity>
            <Text style={styles.numberFollower}>50K</Text>
          </TouchableOpacity>
          <Text style={styles.FollowText}>Following</Text>
        </View>
      </View>

      <View style={styles.tabProfile}>
        <TouchableOpacity
            style={ !myplan? styles.iconPlanContainer : styles.iconPlanContainerEdit}
          onPress={() => {
            setMyplan(true);
            setMembership(false);
            setSaved(false);
            setActive("My Plan");

          }}
        >
          <Text style={!myplan?styles.planText:styles.planTextEdit}>My Plans</Text>
          <Dumbbell name="dumbbell" style={!myplan?styles.tabIcon:styles.tabIconEdit} />
        </TouchableOpacity>

        <TouchableOpacity
          style={!membership?styles.iconPlanContainer:styles.iconPlanContainerEdit}
          onPress={() => {
            setMembership(true);
            setMyplan(false);
            setSaved(false);
            setActive("Membership");
          }}
          >
          <Text style={!membership?styles.planText:styles.planTextEdit}>Membership</Text>
          <MembershipIcon name="idcard" style={!membership?styles.tabIcon:styles.tabIconEdit} />
        </TouchableOpacity>

        <TouchableOpacity
          style={!saved?styles.iconPlanContainer:styles.iconPlanContainerEdit}
          onPress={() => {
            setSaved(true);
            setMyplan(false);
            setMembership(false);
            setActive("Saved");

          }}
        >
          <Text style={!saved?styles.planText:styles.planTextEdit}> Saved </Text>
          <Save name="favorite" style={!saved?styles.tabIcon:styles.tabIconEdit} />
        </TouchableOpacity>
      </View>
          {active==="My Plan"&& <UserPlan/>}
          {active==="Membership"&& <MembershipUser/>}
          {active==="Saved"&& <SavedUser/>}
          {/* {active==="PlanDetails"&& <PlanDetails/>} */}
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
    marginTop: "15%",
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

  planTextEdit:{
    color: "#9AC61C",
    fontSize: 15,
  },
  tabIconEdit:{
    color:"#9AC61C",
    fontSize: 25,  
  },
  iconPlanContainerEdit:{
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor:"#9AC61C",
    borderWidth:5,
  }

});

export default UserProfile;
