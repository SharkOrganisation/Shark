import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"black"} />
      <View style={styles.logo}>
        <Image
          resizeMode="contain"
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/1d6ac96ecf3ac7fe4d95439a91ba1bd0cb1e5ea6bdebd8f592a73845e134f838",
          }}
          style={styles.image1}
        />
        <Text style={styles.logoText}>GYMSHARK</Text>
      </View>
      <Text style={styles.title}>LOGIN</Text>
      <View style={styles.inputContainer}>
        <View>
          <Text style={{ color: "#BEFF03" }}>USERNAME</Text>
          <TextInput style={styles.Input} />
        </View>
        <View>
          <View style={styles.lable}>
            <Text style={{ color: "#BEFF03" }}>PASSWORD</Text>
            <TouchableOpacity>
              <Text style={{ color: "#BEFF03", fontSize: 8 }}>
                FORGOT PASSWORD ?
              </Text>
            </TouchableOpacity>
          </View>
          <TextInput style={styles.Input} secureTextEntry={true} />
        </View>
      </View>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={{ fontWeight: "bold" }}>LOGIN</Text>
      </TouchableOpacity>
      <Text style={{ marginTop: "20%", color: "#BEFF03" }}>
        © GYMSHARK COMMUNITY
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  image1: {
    overflow: "hidden",
    width: 90,
    aspectRatio: "1.7",
  },
  logo: {
    alignItems: "center",
    marginBottom: "9%",
  },
  logoText: {
    fontWeight: "900",
    fontSize: 12,
    color: "#BEFF03",
  },
  title: {
    color: "#BEFF03",
    fontSize: 60,
    fontWeight: "700",
    marginVertical: 50,
  },
  Input: {
    backgroundColor: "transparent",
    borderColor: "#BEFF03",
    borderWidth: 1,
    color: "white",
    paddingHorizontal: 10,
    borderRadius: 10,
    marginRight: 10,
    width: 350,
    height: 50,
  },
  inputContainer: {
    flexDirection: "column",
    gap: 50,
  },
  lable: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  loginBtn: {
    backgroundColor: "#BEFF03",
    width: 270,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 50,
  },
});

export default Login;
