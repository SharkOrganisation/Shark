import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import Previous from "react-native-vector-icons/AntDesign";

const image = {
  uri: "https://i.pinimg.com/564x/d0/19/e3/d019e38e1f225e69c55fcd7cb31cc466.jpg",
};

const Home = () => {
  return (
    <SafeAreaView style={styles.Container}>
      <View>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <View style={styles.HeaderContainer}>
            <View style={styles.textHeader}>
            <TouchableOpacity>
              <Previous name="leftcircleo" style={styles.headerIcon} />
            </TouchableOpacity>
            <Text style={styles.title}>Discover</Text>
            </View>
          <View>
            <Image
              resizeMode="cover"
              style={styles.headerImg}
              source={{
                  uri: "https://i.pinimg.com/564x/60/b4/85/60b485058cd84daacc7d94e73e225b3b.jpg",
                }}
                />
          </View>
                </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "black",
  },
  HeaderContainer: {
    alignItems: "center",
    backgroundColor: "#9AC61C",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    opacity: 0.8,
    gap: 20,
    justifyContent: "space-around",
  },
  image: {
    justifyContent: "center",
  },
  textHeader:{
    flexDirection:"row",
    justifyContent:"spaace-around"
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: "30",
  },
  headerIcon: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  headerImg: {
    borderColor: "black",
    borderColor: "white",
    borderBottomLeftRadius: 3,
    borderTopLeftRadius: 3,
  },
});

export default Home;
