import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import React, {useState } from "react";
import { ipAddress } from "../../ipConfig.js";
import axios from "axios";
import { reload } from "firebase/auth";

const EditUserProfile = ({ route }) => {
  const { userData } = route.params;
  const navigation = useNavigation();
  const [fullname, setFullname] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const editProfile = async () => {
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    try {
      await axios.put(`http://${ipAddress}:3000/api/user/update/${userData.id}`, {
        fullname,
        height,
        weight,
        age: +age,
        bmi,
      });
    } catch (err) {
      console.log(err);
      alert("Try Later");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileInfo}>
        <Image
          source={{
            uri: userData.pfImage,
          }}
          style={styles.pfImage}
        />
        <TouchableOpacity style={styles.editPic}>
          <Icon name="camera" style={{ fontSize: 20 }} />
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <View>
          <Text style={{ color: "#BEFF03", fontWeight: "bold" }}>USERNAME</Text>
          <TextInput
            style={styles.Input}
            defaultValue={userData.fullname}
            onChangeText={(value) => setFullname(value)}
          />
        </View>
        {/* <View>
          <Text style={{ color: "#BEFF03", fontWeight: "bold" }}>E-mail</Text>
          <TextInput
            style={styles.Input}
            defaultValue={userData.email}
            onChangeText={(value) => setEmail(value)}
          />
        </View> */}
        <View style={styles.smallInptContainer}>
          <View>
            <Text style={{ color: "#BEFF03", fontWeight: "bold" }}>Height</Text>
            <TextInput
              style={styles.smallInput}
              onChangeText={(value) => setHeight(value)}
            />
          </View>
          <View>
            <Text style={{ color: "#BEFF03", fontWeight: "bold" }}>Weight</Text>
            <TextInput
              style={styles.smallInput}
              onChangeText={(value) => setWeight(value)}
            />
          </View>
          <View>
            <Text style={{ color: "#BEFF03", fontWeight: "bold" }}>Age</Text>
            <TextInput
              style={styles.smallInput}
              onChangeText={(value) => setAge(value)}
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            console.log("test");
            editProfile(),
              navigation.navigate("userProfile")
          }}
        >
          <Text style={styles.btnText}>EDIT PROFILE</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  profileInfo: {
    marginTop: "33%",
    alignItems: "center",
  },
  pfImage: {
    width: 120,
    height: 120,
    borderRadius: 100,
    borderColor: "#9AC61C",
    borderWidth: 3,
  },
  editPic: {
    backgroundColor: "#9AC61C",
    width: 30,
    height: 30,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    bottom: 38,
    left: 45,
  },
  inputContainer: {
    marginTop: "6%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
  },
  Input: {
    backgroundColor: "transparent",
    borderColor: "#BEFF03",
    borderWidth: 1,
    color: "#BEFF03",
    borderRadius: 10,
    marginRight: 10,
    width: 350,
    height: 50,
    padding: 10,
  },
  smallInptContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 350,
  },
  smallInput: {
    width: 90,
    height: 50,
    backgroundColor: "transparent",
    borderColor: "#BEFF03",
    borderWidth: 1,
    color: "white",
    borderRadius: 10,
    padding: 5,
    color: "#BEFF03",
  },
  btn: {
    width: 250,
    backgroundColor: "#BEFF03",
    padding: 18,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    flexDirection: "row",
    gap: 20,
  },
  btnText: {
    textAlign: "center",
    fontWeight: "bold",
  },
});
export default EditUserProfile;
