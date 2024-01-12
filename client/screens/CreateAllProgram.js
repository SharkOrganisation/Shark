import React, { useEffect, useState } from "react";
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
import Footer from "../Components/Footer";
const CreateAllProgram = () => {
  const navigation = useNavigation();

  const [program, setProgram] = useState([]);
  const [name, setName] = useState("")
  const [duration, setDuration] = useState("")
  const [description, setDescription] = useState("")
  const [programId, setProgramId] = useState("")

  const postProgram = async () => {
    try {
      const programData = {
        name: name,
        duration: duration,
        description: description,
      };
      const response = await axios.post(
        `http://${process.env.EXPO_PUBLIC_IP_ADRESS}:3000/api/program/create/program`,
        programData
      );
    
      navigation.navigate("CreateDiet",{programId: response.data.id});
      
    } catch (error) {
      console.error("Error posting program:", error);
    }
  };
  
  const done = () => {
    postProgram();
    
  };
  const arrow = () => {
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
            <Text style={styles.title}>Create All Program</Text>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <View>
            <Text style={styles.label}>Name</Text>
            <TextInput
              placeholder="Enter the name of the program"
              placeholderTextColor={"gray"}
              style={styles.input}
              onChangeText={(text)=>setName(text)}
            />
            <TouchableOpacity style={styles.plusBtn}></TouchableOpacity>
          </View>
          <View>
            <Text style={styles.label}>Duration</Text>
            <TextInput
              placeholder="Enter the duration of the program"
              placeholderTextColor={"gray"}
              style={styles.input}
              onChangeText={(text)=>setDuration(text)}
            />
            <TouchableOpacity style={styles.plusBtn}></TouchableOpacity>
          </View>
          <View>
            <Text style={styles.label}>Description</Text>
            <TextInput
              placeholder="Enter the description of the prgram"
              placeholderTextColor={"gray"}
              style={styles.input}
              onChangeText={(text)=>setDescription(text)}
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
            <Footer />
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
    fontWeight: "500",
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

export default CreateAllProgram;
