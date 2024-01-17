import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ipAddress } from "../../../ipConfig.js";
import { FIREBASE_AUTH } from "../../../firebase.js";
import { useIsFocused } from "@react-navigation/native";
import ExercicesDetails from "./ExercicesDetails.js";
import Check from "react-native-vector-icons/AntDesign";
import Uncheck from "react-native-vector-icons/Feather";
import axios from "axios"                     
const user = FIREBASE_AUTH.currentUser;
const UserPlanDetails = ({ data }) => {
  const [competePlan,setCompletePlan]=useState([])
  const isFocused=useIsFocused()
  // console.log(data);

const updateUncheckPlan=async(idPlan)=>{
  try{
  await  axios.put(`http://${ipAddress}:3000/api/userPlan/${idPlan}/${user.uid}`,{status:false})

  }catch{
    <Text style={{color:"white",fontSize:18}}>Try Again</Text>
  }
}
const updateCheckPlan=async(idPlan)=>{
  try{
     await  axios.put(`http://${ipAddress}:3000/api/userPlan/${idPlan}/${user.uid}`,{status:true})
  }catch{
    <Text style={{color:"white",fontSize:18}}>Try Again</Text>
  }
}

useEffect(()=>{
if(isFocused){
}
},[isFocused])
  return (
    <ScrollView style={styles.Container}>
      <ImageBackground
        style={styles.planContainer}
        source={require("../../../assets/MembershipCard/CardPlan.png")}
        resizeMode="cover"
      >
        <View style={styles.CenterContainer}>
          <View style={styles.headerContainer}>
            <View style={styles.PlanContent}>
              <Text style={styles.Title}>My Coach:</Text>
              <View style={styles.allContent}>
                <Image
                  style={styles.imgCoach}
                  source={{ uri: data.Plan.Coach.pfImage }}
                />
                <Text style={styles.Content}>{data.Plan.Coach.fullname}</Text>
              </View>
            </View>
            <View style={styles.PlanDur}>
              <Text style={styles.Title}>Program Duration:</Text>
              <View style={styles.PlanDuration}>
                <Text style={styles.Content}> {data.Plan.program.name}</Text>
                <Text style={styles.Content}>{data.Plan.program.duration}</Text>
              </View>
            </View>
          </View>

          <View style={styles.PlanContent}>
            <Text style={styles.Title}>My Diet:</Text>
            <Text style={styles.Content}> {data.Plan.Diet.name}</Text>
            <Text style={styles.Content}>{data.Plan.Diet.meals}</Text>
          </View>
          <View style={styles.ExerciceContainer}>
            <Text style={styles.Title}>All The Exercices:</Text>
            {data.Plan.program.programExercice.map((ele) => {
              return <ExercicesDetails key={ele.id} data={ele} />;
            })}
          </View>
        </View>

        <View style={styles.selectContainer}>
          <TouchableOpacity style={styles.checkContainer} onPress={()=>{updateCheckPlan(data.id)}}>
            <Text style={data.status?styles.complete:styles.editComplete}>Complete</Text>
            <Check name="checkcircleo" style={data.Plan.status? styles.complete:styles.editComplete}/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.unCheckContainer} onPress={()=>{updateUncheckPlan(data.id)}}>
            <Text style={!data.status?styles.unComplete:styles.editUncomplete}>Uncomplete</Text>
            <Uncheck name="x" style={!data.Plan.status?styles.unComplete:styles.editUncomplete} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    margin: "1%",
    marginTop: "10%",
    marginBottom: "30%",
  },
  planContainer: {
    alignItems: "center",
    borderRadius: "10%",
    borderColor: "#9AC61C",
    borderWidth: 1,
    flexDirection: "column",
    gap: "20%",
    margin: 5,
  },
  CenterContainer: {
    flexDirection: "column",
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  PlanContent: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  },
  PlanDur: {
    alignItems: "center",
    gap: 15,
  },
  allContent: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 5,
  },
  imgCoach: {
    borderRadius: "100%",
    borderColor: "#E5E4E2",
    objectFit: "fill",
    borderWidth: 1,
    height: 55,
    width: 50,
    // justifyContent:"center",
    // alignItems:"center"
  },
  ExerciceContainer: {
    margin: 20,
    marginBottom:1
  },
  Title: {
    color: "#999999",
    fontSize: 18,
    fontWeight: "bold",
    justifyContent: "center",
    alignSelf: "center",
  },
  Content: {
    color: "white",
    fontWeight: "900",
    fontWeight: "bold",
    fontSize: 15,
  },
  PlanDuration: {
    flexDirection: "column",
    gap: 4,
  },
  rightContainer: {
    flexDirection: "column",
  },
  selectContainer: {
    flexDirection: "row",
    marginBottom:"10%",
    gap: 50,
  },
  checkContainer: {
    flexDirection: "row",
    justifyContent:"center",
    alignItems:"center",
    gap: "10",
  },
  unCheckContainer: {
    flexDirection: "row",
    justifyContent:"center",
    alignItems:"center",
    gap: 10,
  },
  complete: {
    color: "#9AC61C",
    fontSize: 18,
    fontWeight: "bold",
  },
  unComplete: {
    color: "red",
    fontWeight: "bold",
    fontSize: 18,
  },
  editComplete:{
    color:"#567a18",
    fontWeight: "bold",
    fontSize: 18,
  },
  editUncomplete:{
    color:"#7c100e",
    fontWeight: "bold",
    fontSize: 18,
  }

});
export default UserPlanDetails;
