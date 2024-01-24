import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import Previous from "react-native-vector-icons/AntDesign";
import Begin from "react-native-vector-icons/AntDesign";
import Shop from "react-native-vector-icons/Feather";
import Services from "react-native-vector-icons/FontAwesome";
import Program from "react-native-vector-icons/Ionicons";
import GymServices from "react-native-vector-icons/MaterialCommunityIcons";
import Products from "react-native-vector-icons/MaterialIcons";
import CoachIcon from "react-native-vector-icons/MaterialIcons";
import CardImg from "../../assets/HomePicture/CoverCard.jpg";
import QuoteImg from "../../assets/HomePicture/QuoteImg.jpg";
import CoachCover from "../../assets/HomePicture/coachCover.jpg";
import GymCover from "../../assets/HomePicture/gymCover.jpg";
import { FIREBASE_AUTH } from "../../firebase";
import { ipAddress } from "../../ipConfig.js";
import axios from "axios";

const Home = ({ navigation }) => {
  const [allpPoducts, setAllProducts] = useState([]);
  const [allPlans, setAllPlans] = useState([]);
  const [coachs, setCoachs] = useState([]);
  const [gyms, setGyms] = useState([]);
  const [followGym, setFollowGym] = useState([]);
  const [followCoach, setFollowCoach] = useState([]);
  const currentUser = FIREBASE_AUTH.currentUser;
  const getProducts = async () => {
    try {
      const products = await axios.get(
        `http://${ipAddress}:3000/api/product/get/products`
      );
      setAllProducts(products.data);
    } catch (err) {
      <Text>Try Again</Text>;
    }
  };

  const getPlans = async () => {
    try {
      const plans = await axios.get(
        `http://${ipAddress}:3000/api/plan/getAllPlans`
      );
      setAllPlans(plans.data);
    } catch (err) {
      <Text> Try Again </Text>;
    }
  };

  const getCoachs = async () => {
    try {
      const allCoachs = await axios.get(
        `http://${ipAddress}:3000/api/coach/getAll`
      );
      setCoachs(allCoachs.data);
    } catch (err) {
      <Text> Try Again </Text>;
    }
  };

  const getGyms = async () => {
    try {
      const allGyms = await axios.get(
        `http://${ipAddress}:3000/api/gym/getAllGyms`
      );
      setGyms(allGyms.data);
    } catch (err) {
      <Text> Try Again </Text>;
    }
  };

  const newFollow = async (idGym) => {
    try {
      await axios.post(
        `http://${ipAddress}:3000/api/followingGym/follow/${idGym}/${currentUser.uid}`
      );
    } catch {
      alert("Try Again");
    }
  };

  const removeFollow=async(idGym)=>{
    try{
        await axios.delete(`http://${ipAddress}:3000/api/followingGym/remove/${idGym}/${currentUser.uid}`)
    }catch(err){
        alert("try later")
    }
  };
  useEffect(() => {
    getProducts();
    getPlans();
    getCoachs();
    getGyms();
  }, []);
  const handleFollowCoach = (index) => {
    const isCurrentlyFollowing = followCoach[index];

    if (isCurrentlyFollowing) {
      Alert.alert(
        "Unfollow",
        "Are you sure you want to unfollow?",
        [
          {
            text: "No",
            style: "cancel",
          },
          {
            text: "Yes",
            onPress: () => {
              const updatedFollowingStates = [...followCoach];
              updatedFollowingStates[index] = !isCurrentlyFollowing;
              setFollowCoach(updatedFollowingStates);
            },
          },
        ],
        { cancelable: false }
      );
    } else {
      const updatedFollowingStates = [...followCoach];
      updatedFollowingStates[index] = !isCurrentlyFollowing;
      setFollowCoach(updatedFollowingStates);
    }
  };
  const handleFollowToggle = (index) => {
    const isCurrentlyFollowing = followGym[index];

    if (isCurrentlyFollowing) {
      Alert.alert(
        "Unfollow",
        "Are you sure you want to unfollow?",
        [
          {
            text: "No",
            style: "cancel",
          },
          {
            text: "Yes",
            onPress: () => {
              const updatedFollowingStates = [...followGym];
              updatedFollowingStates[index] = !isCurrentlyFollowing;
              setFollowGym(updatedFollowingStates);
            },
          },
        ],
        { cancelable: false }
      );
    } else {
      const updatedFollowingStates = [...followGym];
      updatedFollowingStates[index] = !isCurrentlyFollowing;
      setFollowGym(updatedFollowingStates);
    }
  };

  return (
    <ScrollView style={styles.homeContainer}>
      <View style={styles.landingPage}>
        <View style={styles.headerContainer}>
          <ImageBackground source={CardImg} style={styles.Headercard}>
            <View style={styles.titleCardContainer}>
              <Text style={styles.titleCard}>No Excuses</Text>
              <Text style={styles.secondtitleCard}>Just Results.</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                bottom: -50,
                justifyContent: "flex-end",
                right: -40,
              }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("")}
                style={{
                  position: "relative",
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 14,
                    fontWeight: "400",
                    textDecorationLine: "underline",
                    textDecorationColor: "#BEFF03",
                    position: "absolute",
                    right: -6,
                    top: 65,
                  }}
                >
                  Let The Experience Begin
                  <Begin
                    name="doubleright"
                    style={{ color: "#BEFF03", fontSize: 15 }}
                  />
                </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>

        <View style={styles.Shop}>
          <View>
            <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
              Shop Now{" "}
              <Shop
                name="shopping-bag"
                style={{ color: "#85B202", fontSize: 18, fontWeight: "bold" }}
              />
            </Text>
          </View>
          <ScrollView horizontal style={styles.productsCardsContainer}>
            {allpPoducts.map((product) => {
              return (
                <View style={styles.productCard} key={product.id}>
                  <Image
                    source={{
                      uri: product.images[0],
                    }}
                    style={styles.productImage}
                  />
                  <View style={styles.productInfo}>
                    <Text style={styles.productName}>{product.name}</Text>
                    <Text style={styles.productPrice}>{product.price} DT</Text>
                  </View>
                </View>
              );
            })}
          </ScrollView>
        </View>

        <View>
          <ImageBackground
            source={QuoteImg}
            resizeMode="cover"
            style={styles.Headercard}
          >
            <View style={styles.quoteContainer}>
              <Text style={styles.firstLine}>
                First You Start Fitness To Look Good
              </Text>
              <Text style={styles.secondLine}>
                Then It Becomes A Lifestyle.
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 5,
            alignItems: "center",
            margin: 10,
          }}
        >
          <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
            Our Services
          </Text>
          <Services
            name="handshake-o"
            style={{ color: "#85B202", fontSize: 18, fontWeight: "bold" }}
          />
        </View>
        <View style={styles.servicesContainer}>
          <View style={styles.serviceCard}>
            <Program size={90} name="newspaper-outline" />
            <Text style={styles.serviceName}>Personolized Plans</Text>
          </View>
          <View style={styles.serviceCard}>
            <GymServices size={90} name="email-fast-outline" />
            <Text style={styles.serviceName}>Easy Communication</Text>
          </View>
          <View style={styles.serviceCard}>
            <Products size={90} name="shopping-bag" />
            <Text style={styles.serviceName}>Find The Best Products</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "",
            justifyContent: "space-between",
            alignItems: "center",
            margin: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              gap: 5,
              alignItems: "center",
              margin: 10,
            }}
          >
            <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
              Our Coaches
            </Text>
            <CoachIcon
              name="sports-kabaddi"
              style={{ color: "#85B202", fontSize: 18, fontWeight: "bold" }}
            />
          </View>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => navigation.navigate("AllCoaches")}
          >
            <Text
              style={{
                color: "white",
                textDecorationLine: "underline",
                textDecorationColor: "#85B202",
              }}
            >
              See All
            </Text>
            <Begin name="doubleright" color={"#85B202"} />
          </TouchableOpacity>
        </View>

        <ScrollView horizontal style={styles.coachProfileCardsContainer}>
          {coachs.map((coach, index) => {
            return (
              <View style={styles.profileCard} key={coach.id}>
                <Image
                  source={{
                    uri: "https://i.pinimg.com/564x/49/96/65/499665fdd9ea36b270d756a50d34f0e1.jpg",
                  }}
                  style={styles.coachCover}
                />
                <Image
                  source={{
                    uri: coach.pfImage,
                  }}
                  style={styles.coachProfilePic}
                />
                <TouchableOpacity style={styles.coachProfileInfo}>
                  <Text style={styles.coachName}>{coach.fullname}</Text>
                  <View style={styles.otherInfoContainer}>
                    <View>
                      <Text style={styles.otherInfoTitle}>SPECIALITY</Text>
                      <Text style={{ textAlign: "center" }}>
                        {coach.speciality}
                      </Text>
                    </View>
                    <View>
                      <Text style={styles.otherInfoTitle}>PER SESSION</Text>
                      <Text style={{ textAlign: "center" }}>
                        {coach.perSession}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.followBtn}
                  onPress={() => handleFollowCoach(index)}
                >
                  <Text style={{ fontWeight: "500" }}>
                    {followCoach[index] ? "Following" : "FOLLOW +"}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
        <View
          style={{
            flexDirection: "row",
            alignItems: "",
            justifyContent: "space-between",
            alignItems: "center",
            margin: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              gap: 5,
              alignItems: "center",
              margin: 10,
            }}
          >
            <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
              Our Gyms
            </Text>
            <CoachIcon
              name="sports-kabaddi"
              style={{ color: "#85B202", fontSize: 18, fontWeight: "bold" }}
            />
          </View>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => navigation.navigate("AllGyms")}
          >
            <Text
              style={{
                color: "white",
                textDecorationLine: "underline",
                textDecorationColor: "#85B202",
              }}
            >
              See All
            </Text>
            <Begin name="doubleright" color={"#85B202"} />
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          style={[styles.coachProfileCardsContainer, { marginBottom: 100 }]}
        >
          {gyms.map((gym, index) => {
            return (
              <View style={styles.profileCard} key={gym.id}>
                <Image
                  source={{
                    uri: "https://i.pinimg.com/564x/1f/91/c3/1f91c38cac327e780f4f7ba5787d8111.jpg",
                  }}
                  style={styles.coachCover}
                />
                <Image
                  source={{
                    uri: gym.pfImage,
                  }}
                  style={styles.coachProfilePic}
                />
                <TouchableOpacity
                  style={styles.coachProfileInfo}
                  onPress={() => {
                    navigation.navigate("GymDetails", { gymId: gym.id });
                  }}
                >
                  <Text style={styles.coachName}>{gym.fullname}</Text>
                  <View style={styles.otherInfoContainer}>
                    <View>
                      <Text style={styles.otherInfoTitle}>TYPE</Text>
                      <Text style={{ textAlign: "center" }}>{gym.type}</Text>
                    </View>
                    <View>
                      <Text style={styles.otherInfoTitle}>LOCATION</Text>
                      <Text style={{ textAlign: "center" }}>
                        {gym.location}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.followBtn}
                  onPress={(() => handleFollowToggle(index))}
                >
                  <Text style={{ fontWeight: "500" }}>
                    {followGym[index] ? "Following" : "FOLLOW +" }
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: "black",
  },
  landingPage: {
    // margin:10
  },
  headerContainer: {
    flex: 1,
    marginVertical: 30,
  },

  headerImg: {
    borderColor: "black",
    borderColor: "white",
    borderBottomLeftRadius: 3,
    borderTopLeftRadius: 3,
  },
  Headercard: {
    backgroundColor: "#FFFFF",
    borderRadius: 10,
    padding: 55,
    margin: 10,
    height: 250,
    borderWidth: 1,
  },
  titleCardContainer: {
    flexDirection: "column",
    backgroundColor: "transparent",
    left: -30,
    gap: 10,
    top: 35,
  },
  titleCard: {
    color: "white",
    fontSize: 15,
    fontWeight: "700",
    color: "#9AC61C",
  },
  secondtitleCard: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    color: "#BEFF03",
  },
  Shop: {
    margin: 10,
  },
  quoteContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    borderColor: "white",
    // borderWidth:5,
    position: "absolute",
    left: 10,
    bottom: "50%",
    width: 400,
  },
  firstLine: {
    color: "#9AC61C",
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
  },
  secondLine: {
    color: "#BEFF03",
    fontWeight: "bold",
    fontSize: 28,
    textAlign: "center",
  },
  productsCardsContainer: {
    flexDirection: "row",
    marginVertical: 15,
  },
  productCard: {
    width: 150,
    height: 200,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 20,
    backgroundColor: "white",
    marginRight: 25,
  },
  productImage: {
    width: "100%",
    height: "80%",
    borderRadius: 50,
  },
  productName: {
    fontWeight: "bold",
    letterSpacing: 1,
    marginLeft: 2,
  },
  productPrice: {
    color: "#85B202",
    fontWeight: "bold",
    marginLeft: 5,
  },
  servicesContainer: {
    width: "100%",
    height: 200,
    paddingHorizontal: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  serviceCard: {
    width: 130,
    height: 130,
    backgroundColor: "#BEFF03",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  serviceName: {
    fontWeight: "700",
    textAlign: "center",
  },
  coachProfileCardsContainer: {
    marginTop: 50,
    marginBottom: 60,
  },
  profileCard: {
    width: 220,
    height: 300,
    backgroundColor: "white",
    borderRadius: 20,
    marginRight: 20,
  },
  coachCover: {
    width: "100%",
    height: "40%",
    borderWidth: 1,
    borderColor: "black",
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    position: "relative",
  },
  coachProfilePic: {
    height: 120,
    width: 120,
    borderRadius: 100,
    position: "absolute",
    left: 50,
    top: 50,
    borderWidth: 5,
    borderColor: "white",
    objectFit: "fill",
  },
  coachProfileInfo: {
    width: "100%",
    position: "absolute",
    bottom: 60,
  },
  coachName: {
    textAlign: "center",
    fontSize: 21,
    textTransform: "uppercase",
    letterSpacing: 2,
  },
  otherInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  otherInfoTitle: {
    fontWeight: "bold",
    letterSpacing: 1,
    color: "#85B202",
    // width:"60%"
  },
  followBtn: {
    position: "absolute",
    bottom: 10,
    left: 65,
    backgroundColor: "#85B202",
    padding: 10,
    borderRadius: 8,
  },
  EditFollowBtn: {
    position: "absolute",
    bottom: 10,
    left: 65,
    backgroundColor: "#85B202",
    padding: 10,
    borderRadius: 8,
  },
});

export default Home;
