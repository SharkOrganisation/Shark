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
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
const CreateDiet = ({route}) => {
  const navigation = useNavigation();
  const [diet, setDiet] = useState([]);
  const [name, setName] = useState("");
  const [dietId, setDietId] = useState("")
  const [meals, setMeals] = useState("");
  const {programId} = route.params
  console.log(programId,"from diet");

  const postDiet = async () => {
    
    try {
    const dietData = {
        name: name,
        meals: meals,
      };
      const response = await axios.post(
        `http://${process.env.EXPO_PUBLIC_IP_ADRESS}:3000/api/diet/post`,
        dietData
        );
        navigation.navigate("CreateProgram",{programId,dietId:response.data.id});
       
      } catch (error) {
        console.error("Error posting diet:", error);
      }
    };


  const done = () => {
    postDiet();
  };
  const arrow = () => {
    navigation.navigate("CreateAllProgram");
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
            <Text style={styles.title}>Create Diet</Text>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <View>
            <Text style={styles.label}>Name</Text>
            <TextInput
              placeholder="Enter the name of the diet"
              placeholderTextColor={"gray"}
              style={styles.input}
              onChangeText={(text) => setName(text)}
            />
            <TouchableOpacity style={styles.plusBtn}></TouchableOpacity>
          </View>
          <View>
            <Text style={styles.label}>Meals</Text>
            <TextInput
              placeholder="Enter the meals of the diet"
              placeholderTextColor={"gray"}
              style={styles.meals}
              onChangeText={(text) => setMeals(text)}

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
            <TouchableOpacity style={styles.doneBtn} onPress={() => done()}>
              <Text style={styles.btnText}>Done</Text>
            </TouchableOpacity>
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
  meals: {
    color: "white",
    borderWidth: 1,
    borderColor: "#BEFF03",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    height: 120,
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

export default CreateDiet;
