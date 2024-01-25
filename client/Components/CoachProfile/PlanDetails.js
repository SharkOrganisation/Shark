import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Modal,
  Pressable,
  TextInput,
  Alert,
} from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { FIREBASE_AUTH } from "../../firebase";
import SendBtn from "react-native-vector-icons/Feather";
import { Ionicons } from "@expo/vector-icons";
import AlertMessage from "../AlertMessage";
import { ipAddress } from "../../ipConfig";

const PlanDetails = ({ data }) => {
  const [plans, setPlans] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [users, setUsers] = useState([]);
  const coachId = FIREBASE_AUTH.currentUser;
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [alertTitle, setAlertTitle] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [isAlertVisible, setAlertVisible] = useState(false);
  const getPlans = async () => {
    try {
      const response = await axios.get(
        `http://${ipAddress}:3000/api/plan/getByCoach/${data.id}`
      );
      setPlans(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const getUsers = async () => {
    try {
      const response = await axios.get(
        `http://${ipAddress}:3000/api/user/getAll`
      );
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPlans();
    getUsers();
  }, []);

  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);



  return (
    <ScrollView>
      {plans.map((plan, index) => (
        <View key={plan.id} style={stylesPlan.likesContainer}>
          <Image
            style={stylesPlan.avatar}
            source={{
              uri: "https://www.digital-discovery.tn/wp-content/uploads/2023/09/Gattouz0-1200x675.jpg",
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
            <TouchableOpacity
                onPress={() => {
                  setAlertTitle("Hey!");
                  setAlertMessage(
                    `To Get Acces For This Plan Contact ${data.fullname}`
                  );
                  setAlertVisible(true);
                }}
    
            >
              <View
                style={stylesPlan.sendButtonContainer}
              >
                <Text style={stylesPlan.sendButtonText}>Get Plan</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      ))}
      {/* <ScrollView>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
          
        >
          <ScrollView contentContainerStyle={stylesModal.scrollView}>
            <View style={stylesModal.centeredView}>
              <View style={stylesModal.modalView}>
                <Text style={stylesModal.modalText}>
                  Select a user to send the plan:
                </Text>
                <TouchableOpacity
                  style={stylesModal.closeIconContainer}
                  onPress={() => setModalVisible(false)}
                >
                  <Ionicons
                    name="close"
                    size={30}
                    style={{ left: 130, top: -60 }}
                    color="#9AC61C"
                  />
                </TouchableOpacity>
                <TextInput
                  style={stylesModal.searchInput}
                  placeholder="Search..."
                  placeholderTextColor={"gray"}
                  value={search}
                  onChangeText={handleSearch}
                />
                {filteredUsers.map((user) => (
                  <Pressable
                    key={user.id}
                    style={stylesModal.userItem}
                    onPress={() => handleSendPlan(user)}
                  >
                    <Text style={{ color: "white", fontWeight: "bold" }}>
                      Name :{user.fullname}
                    </Text>
                    <Text style={{ color: "white", fontWeight: "bold" }}>
                      E-mail :{user.email}
                    </Text>
                    <Text style={{ color: "white", fontWeight: "bold" }}>
                      Age : {user.age}
                    </Text>
                    <Text style={{ color: "white", fontWeight: "bold" }}>
                      BMI : {user.bmi}
                    </Text>
                  </Pressable>
                ))}
                <Pressable
                  style={[stylesModal.userItem, stylesModal.cancelButton]}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={stylesModal.cancelButtonText}>Cancel</Text>
                </Pressable>
              </View>
            </View>
          </ScrollView>
        </Modal>
      </ScrollView> */}
      <AlertMessage
        modalVisible={isAlertVisible}
        setModalVisible={setAlertVisible}
        title={alertTitle}
        message={alertMessage}
      />
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
  sendButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginLeft: "15%",
  },

  sendButtonText: {
    color: "#BEFF03",
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 5,
    left: 120,
    letterSpacing: 0.7,
  },
});

const stylesModal = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "black",
    borderRadius: 20,
    padding: 50,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    gap: 7,
  },
  modalText: {
    marginBottom: 10,
    textAlign: "center",
    color: "gray",
  },
  searchInput: {
    backgroundColor: "transparent",
    borderColor: "gray",
    borderWidth: 2,
    paddingHorizontal: 10,
    borderRadius: 100,
    marginRight: 10,
    width: 200,
    height: 40,
    color: "white",
  },
  userItem: {
    padding: 10,
    width: 250,
    marginVertical: 5,
    borderRadius: 5,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },
  cancelButton: {
    backgroundColor: "#BEFF03",
    marginTop: 10,
  },
  cancelButtonText: {
    color: "black",
    textAlign: "center",
  },
});

export default PlanDetails;
