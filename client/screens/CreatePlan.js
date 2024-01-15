import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Footer from "../Components/Footer";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { FIREBASE_AUTH } from "../firebase";
const CreatePlan = ({ route }) => {
  const navigation = useNavigation();
  const [plan, setPlan] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const { programId, dietId, exerciceId } = route.params??{}
  const coach= FIREBASE_AUTH.currentUser;
  // // console.log(programId, dietId, exerciceId, "from plan");
  console.log(coach.uid,"hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh");
  const postPlan = async () => {
    try {
      const PlanData = {
        name: name,
        price: +price,
        programId: programId,
        dietId: dietId,
        coachId:coach.uid,
        exerciceId: exerciceId || 1
      };
      await axios.post(
        `http://${process.env.EXPO_PUBLIC_IP_ADRESS}:3000/api/plan/post`,
        PlanData,
      );
      console.log('success')
    } catch (error) {
      console.error("Error posting plan:", error);
    }
  };

  const arrow = () => {
    navigation.navigate("CreateProgram");
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.pageTitle}>
            <TouchableOpacity onPress={() => arrow()}>
              <MaterialCommunityIcons
                name="arrow-left-box"
                size={40}
                color={"black"}
              />
            </TouchableOpacity>
            <Text style={styles.title}>Create Plan</Text>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <View>
            <Text style={styles.label}>Name</Text>
            <TextInput
              placeholder="Enter the name of the plan"
              placeholderTextColor={"gray"}
              style={styles.input}
              onChangeText={(text) => setName(text)}
            />
            <TouchableOpacity style={styles.plusBtn}></TouchableOpacity>
          </View>
          <View>
            <Text style={styles.label}>Price</Text>
            <TextInput
              placeholder="Enter the price of the plan"
              placeholderTextColor={"gray"}
              keyboardType="numeric"
              style={styles.input}
              onChangeText={(text) => setPrice(text)}
            />
            <TouchableOpacity style={styles.plusBtn}></TouchableOpacity>
          </View>

          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity style={styles.doneBtn} onPress={() => postPlan()}>
              <Text style={styles.btnText}>Start</Text>
            </TouchableOpacity>
            {/* <Footer/> */}
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  title: {
    flex: 1,
    textAlign: "center",
    fontWeight: "900",
    letterSpacing: 1,
    right: 20,
  },
  header: {
    backgroundColor: "#9AC61C",
    marginTop: "10%",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: 50,
    paddingHorizontal: 10,
    borderBottomEndRadius: 150,
    borderBottomStartRadius: 150,
  },
  pageTitle: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10%",
  },
  inputContainer: {
    flexDirection: "column",
    gap: 25,
    justifyContent: "center",
    marginTop: 80,
  },
  label: {
    color: "#BEFF03",
    fontSize: 20,
    marginBottom: 5,
    fontWeight: "600",
  },
  input: {
    color: "white",
    borderWidth: 1,
    borderColor: "#BEFF03",
    width: "100%",
    padding: 15,
    borderRadius: 10,
  },

  doneBtn: {
    backgroundColor: "#BEFF03",
    width: 150,
    padding: 15,
    borderRadius: 10,
  },
  btnText: {
    textAlign: "center",
    fontSize: 21,
    fontWeight: "bold",
  },
});

export default CreatePlan;
