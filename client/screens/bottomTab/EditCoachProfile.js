import axios from "axios";
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import {
  getStorage,
  ref,
  uploadString,
  getDownloadURL,
  uploadBytes,
} from "firebase/storage";
import { FIREBASE_APP } from "../../firebase";
import { ipAddress } from "../../ipConfig";
const storage = getStorage(FIREBASE_APP);

const EditCoachProfile = ({ route }) => {
  const [fullname, setFullname] = useState("");
  const [bio, setBio] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [perSession, setPerSession] = useState("");
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const { coach } = route.params;
  const navigation = useNavigation();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const uploadImage = async () => {
    try {
      if (image) {
        const response = await fetch(image);
        const blob = await response.blob();
        const storageRef = ref(storage, `gym_profiles/${Date.now()}.jpg`);

        await uploadBytes(storageRef, blob);
        const downloadURL = await getDownloadURL(storageRef);
        setImageUrl(downloadURL);
        console.log("Image uploaded. Download URL:", downloadURL);
      } else {
        console.error("No image selected.");
      }
    } catch (error) {
      console.error("Error uploading image:", error.message);
    }
  };

  const updateCoachProfile = async () => {
    try {
      const response = await axios.put(
        `http://${process.env.EXPO_PUBLIC_IP_ADRESS}:3000/api/coach/uptadeInfoCoach/${coach.id}`,
        {
          pfImage: imageUrl,
          fullname,
          bio,
          speciality,
          perSession: +perSession,
        }
      );
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileInfo}>
        <TouchableOpacity onPress={() => pickImage()}>
          <Image
            source={{
              uri: imageUrl || coach.pfImage,
            }}
            style={styles.pfImage}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.editPic} onPress={() => uploadImage()}>
          <Icon name="camera" style={{ fontSize: 20 }} />
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <View>
          <Text style={{ color: "#9AC61C", fontWeight: "bold" }}>
            COACHNAME
          </Text>
          <TextInput
            style={styles.Input}
            placeholder="change your name"
            placeholderTextColor={"gray"}
            defaultValue={coach.fullname}
            onChangeText={(text) => setFullname(text)}
          />
        </View>
        <View>
          <Text style={{ color: "#9AC61C", fontWeight: "bold" }}>BIO</Text>
          <TextInput
            style={styles.Input}
            placeholder="change your bio"
            placeholderTextColor={"gray"}
            defaultValue={coach.bio}
            onChangeText={(text) => setBio(text)}
          />
        </View>
        <View>
          <Text style={{ color: "#9AC61C", fontWeight: "bold" }}>
            SPECIALITY
          </Text>
          <TextInput
            style={styles.Input}
            placeholder="change your speciality"
            placeholderTextColor={"gray"}
            defaultValue={coach.speciality}
            onChangeText={(text) => setSpeciality(text)}
          />
        </View>
        <View>
          <Text style={{ color: "#9AC61C", fontWeight: "bold" }}>
            PER SESSION
          </Text>
          <TextInput
            style={styles.Input}
            placeholder="change your per session"
            placeholderTextColor={"gray"}
            defaultValue={coach.perSession}
            keyboardType="numeric"
            onChangeText={(text) => setPerSession(text)}
          />
        </View>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            updateCoachProfile();
            navigation.navigate("Coachprofile");
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
    marginTop: "5%",
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
    marginTop: "8%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
  },
  Input: {
    backgroundColor: "transparent",
    borderColor: "#BEFF03",
    borderWidth: 1,
    color: "white",
    borderRadius: 10,
    marginRight: 10,
    width: 350,
    height: 50,
    padding: 10,
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

export default EditCoachProfile;
