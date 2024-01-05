import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Modal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import Dropdown from "../Components/Dropdown";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";

const CreateProgram = () => {
  const navigation = useNavigation();
  const data = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
    { label: "Option 4", value: "option4" },
    { label: "Option 5", value: "option5" },
  ];

  const [modalVisible, setModalVisible] = useState(false);
  const [sets, setSets] = useState(0);
  const [reps, setReps] = useState(0);
  const [selectedDropdownValue, setSelectedDropdownValue] = useState("");

  const handleDropdownChange = (value) => {
    console.log("Selected value:", value);
    setSelectedDropdownValue(value);
  };

  const openModal = () => {
    setSets(0);
    setReps(0);
    setModalVisible(true);
  };

  const handlenavigation = () => {
    navigation.navigate("CreateAllProgram");
  };

  const done = () => {
    setModalVisible(false);
  };

  const incrementSets = () => {
    setSets(sets + 1);
  };

  const decrementSets = () => {
    if (sets > 0) {
      setSets(sets - 1);
    }
  };

  const incrementReps = () => {
    setReps(reps + 1);
  };

  const decrementReps = () => {
    if (reps > 0) {
      setReps(reps - 1);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.pageTitle}>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="arrow-left-box"
                size={40}
                color={"black"}
              />
            </TouchableOpacity>
            <Text style={styles.title}>Create Program</Text>
          </View>
          <View style={styles.searchContainer}>
            <TextInput style={styles.searchInput} placeholder="Search..." />
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="magnify"
                size={30}
                color={"black"}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Dropdown items={data} onValueChange={handleDropdownChange} />
        <View style={styles.inputContainer}>
          {[1, 2, 3, 4, 5].map((index) => (
            <View key={index}>
              <TextInput
                placeholder=""
                style={styles.input}
                value={selectedDropdownValue} 
                onChangeText={(text) => setSelectedDropdownValue(text)} 
              />
              <TouchableOpacity
                style={styles.plusBtn}
                onPress={() => openModal()}
              >
                <Entypo name="squared-plus" size={30} color={"#9AC61C"} />
              </TouchableOpacity>
            </View>
          ))}
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={styles.doneBtn}
              onPress={() => handlenavigation()}
            >
              <Text style={styles.btnText}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisible}
          onRequestClose={() => done()}
          onShow={() => {
            setSets(0);
            setReps(0);
          }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>SETS : {sets}</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  onPress={incrementSets}
                  style={styles.modalButton}
                >
                  <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={decrementSets}
                  style={styles.modalButton}
                >
                  <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
              </View>

              <Text style={styles.modalText}>REPS : {reps}</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  onPress={incrementReps}
                  style={styles.modalButton}
                >
                  <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={decrementReps}
                  style={styles.modalButton}
                >
                  <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                onPress={() => done()}
                style={styles.doneButton}
              >
                <Text style={styles.doneButtonText}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
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
  },
  searchContainer: {
    flexDirection: "row",
    marginTop: "10%",
  },
  searchInput: {
    backgroundColor: "transparent",
    borderColor: "black",
    borderWidth: 2,
    paddingHorizontal: 10,
    borderRadius: 100,
    marginRight: 10,
    width: 250,
  },
  inputContainer: {
    flexDirection: "column",
    gap: 25,
    justifyContent: "center",
    marginTop: 80,
  },
  input: {
    color: "white",

    borderWidth: 1,
    borderColor: "#BEFF03",
    width: "100%",
    padding: 15,
    borderRadius: 10,
  },
  plusBtn: {
    position: "absolute",
    right: 10,
    top: 10,
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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#BEFF03",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    height: 300,
    width: 250,
  },
  modalText: {
    fontSize: 20,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
    gap: 20,
  },
  modalButton: {
    width: 50,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "900",
    left: 9,
  },
  doneButton: {
    backgroundColor: "black",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  doneButtonText: {
    color: "#BEFF03",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CreateProgram;
