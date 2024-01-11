import React, { useEffect, useState } from "react";
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
import axios from "axios";
import Dropdown from "../components/Dropdown";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import Footer from "../components/Footer";

const CreateProgram = ({ route }) => {
  const [dataa, setDataa] = useState([]);
  const navigation = useNavigation();
  const [search, setSearch] = useState("");
  const [test, setTest] = useState({
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
  });
  const { programId, dietId } = route.params;
  console.log(programId, dietId, "from  create program");
  const [indexSelected, setIndexSelected] = useState(0);
  let exercices = [];
  const handleChange = (name, val) => {
    setTest((prev) => ({
      ...prev,
      [name]: val,
    }));
  };
  const getExercise = async () => {
    try {
      const response = await axios.get(
        `http://${process.env.EXPO_PUBLIC_IP_ADRESS}:3000/api/exercice/getAll`
      );
      setDataa(response.data);
    } catch (error) {
      console.error("Error fetching exercises:", error);
    }
  };

  useEffect(() => {
    getExercise();
  }, []);

  const postExercise = async () => {
    try {
      const exerciceData = {
        reps: reps,
        sets: sets,
      };
      await axios.post(
        `http://${process.env.EXPO_PUBLIC_IP_ADRESS}:3000/api/programEx/add`,
        {
          reps,
          sets,
          programId,
          exerciceId: 1,
        }
      );
      console.log("Success");
    } catch (error) {
      console.error(error, "Error posting exercise");
    }
  };

  const handlePush = (name) => {
    setData((prevData) => [...prevData, name]);
  };
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState([]);
  const [sets, setSets] = useState(0);
  const [reps, setReps] = useState(0);
  const [selectedDropdownValue, setSelectedDropdownValue] = useState("");
  const [exerciseData, setExerciseData] = useState([]);

  const handleDropdownChange = (value) => {
    // console.log("Selected value:", value);
    setSelectedDropdownValue(value);
  };

  const openModal = () => {
    setSets(0);
    setReps(0);
    setModalVisible(true);
  };

  const handlenavigation = () => {
    navigation.navigate("CreatePlan");
  };
  const arrow = () => {
    navigation.navigate("CreateDiet");
  };

  const done = async () => {
    await postExercise();
    await handleChange(indexSelected, `${sets}/${reps}`);
    await setModalVisible(false);
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
  // const filteredExercises = exercices.filter(
  //   (exercise) =>{
  //     exercise.toUppercase().includes(search.toUpperCase())
  //   });
  // const handleSearch = (query) => {
  //   const filteredExercises = dataa.filter((exercise) => {
  //     return exercise.name.toUpperCase().includes(query.toUpperCase());
  //   });
  // Assuming you have a setDataa function to update dataa state
  //   setDataa(filteredExercises);
  // };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.pageTitle}>
            <TouchableOpacity onPress={() => arrow()}>
              <MaterialCommunityIcons
                name="arrow-left-box"
                size={40}
                color={"black"}
              />
            </TouchableOpacity>
            <Text style={styles.title}>Create Program</Text>
          </View>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search..."
              onChangeText={(text) => {
                setSearch(text);
              }}
            />
            <TouchableOpacity onPress={() => {}}>
              <MaterialCommunityIcons
                name="magnify"
                size={30}
                color={"black"}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* {dataa.map((ele) => {
          // exercices.push(ele.name);
        })} */}
        <Dropdown
          items={dataa}
          setData={setData}
          onValueChange={handleDropdownChange}
          searchQuery={search}
        />
        <View style={styles.inputContainer}>
          {data
            ?.filter(
              (ele) => ele !== undefined && ele !== null && ele !== "wael"
            )
            .map((ele, index) => (
              <View key={index}>
                <TextInput
                  name={String(index)}
                  placeholder={""}
                  style={styles.input}
                  value={ele + test[String(index)]}
                  onChangeText={(text) => setSelectedDropdownValue(text)}
                />
                <TouchableOpacity
                  style={styles.plusBtn}
                  onPress={() => {
                    setIndexSelected(index);
                    openModal();
                  }}
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
              // onPress={() => handlenavigation()}
              onPress={() =>
                navigation.navigate("CreatePlan", {
                  programId,
                  exerciceId: 1,
                  dietId,
                })
              }
            >
              <Text style={styles.btnText}>Done</Text>
            </TouchableOpacity>

            <Footer />
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
  footer: {
    backgroundColor: "#192126",
    flexDirection: "row",
    width: 350,
    height: 60,
    padding: 10,
    borderRadius: 100,
    marginTop: 20,
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default CreateProgram;
