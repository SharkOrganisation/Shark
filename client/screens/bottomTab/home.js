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
} from "react-native";
import React from "react";
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
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
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
            <View style={styles.productCard}>
              <Image
                source={{
                  uri: "https://exclusive-fit.fr/wp-content/uploads/2021/01/delts-machine-700-technogym-par-exclusive-fit1.jpg",
                }}
                style={styles.productImage}
              />
              <View style={styles.productInfo}>
                <Text style={styles.productName}>Delts Machine</Text>
                <Text style={styles.productPrice}>8.500 DT</Text>
              </View>
            </View>
            <View style={styles.productCard}>
              <Image
                source={{
                  uri: "https://exclusive-fit.fr/wp-content/uploads/2021/01/delts-machine-700-technogym-par-exclusive-fit1.jpg",
                }}
                style={styles.productImage}
              />
              <View style={styles.productInfo}>
                <Text style={styles.productName}>Delts Machine</Text>
                <Text style={styles.productPrice}>8.500 DT</Text>
              </View>
            </View>
            <View style={styles.productCard}>
              <Image
                source={{
                  uri: "https://exclusive-fit.fr/wp-content/uploads/2021/01/delts-machine-700-technogym-par-exclusive-fit1.jpg",
                }}
                style={styles.productImage}
              />
              <View style={styles.productInfo}>
                <Text style={styles.productName}>Delts Machine</Text>
                <Text style={styles.productPrice}>8.500 DT</Text>
              </View>
            </View>
            <View style={styles.productCard}>
              <Image
                source={{
                  uri: "https://exclusive-fit.fr/wp-content/uploads/2021/01/delts-machine-700-technogym-par-exclusive-fit1.jpg",
                }}
                style={styles.productImage}
              />
              <View style={styles.productInfo}>
                <Text style={styles.productName}>Delts Machine</Text>
                <Text style={styles.productPrice}>8.500 DT</Text>
              </View>
            </View>
            <View style={styles.productCard}>
              <Image
                source={{
                  uri: "https://exclusive-fit.fr/wp-content/uploads/2021/01/delts-machine-700-technogym-par-exclusive-fit1.jpg",
                }}
                style={styles.productImage}
              />
              <View style={styles.productInfo}>
                <Text style={styles.productName}>Delts Machine</Text>
                <Text style={styles.productPrice}>8.500 DT</Text>
              </View>
            </View>
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
        <ScrollView horizontal style={styles.coachProfileCardsContainer}>
          <View style={styles.profileCard}>
            <Image
              source={{
                uri: "https://i.pinimg.com/564x/49/96/65/499665fdd9ea36b270d756a50d34f0e1.jpg",
              }}
              style={styles.coachCover}
            />
            <Image
            source={{
              uri:"https://www.afrik.com/wp-content/uploads/2021/03/big-ramy.jpg"
            }}
            style={styles.coachProfilePic}
            />
            <View style={styles.coachProfileInfo}>
              <Text style={styles.coachName}>
                Big Rami
              </Text>
              <View style={styles.otherInfoContainer}>
                <View>
                  <Text style={styles.otherInfoTitle}>SPECIALITY</Text>
                  <Text style={{textAlign:'center'}}>BodyBuilding</Text>
                </View>
                <View>
                  <Text style={styles.otherInfoTitle}>PER SESSION</Text>
                  <Text style={{textAlign:'center'}}>50.99$</Text>
                </View>
              
              </View>
            </View>
            <TouchableOpacity style={styles.followBtn}>
              <Text style={{fontWeight:'500'}}>FOLLOW +</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.profileCard}>
            <Image
              source={{
                uri: "https://i.pinimg.com/564x/49/96/65/499665fdd9ea36b270d756a50d34f0e1.jpg",
              }}
              style={styles.coachCover}
            />
            <Image
            source={{
              uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Arnold_Schwarzenegger_1974.jpg/220px-Arnold_Schwarzenegger_1974.jpg"
            }}
            style={styles.coachProfilePic}
            />
            <View style={styles.coachProfileInfo}>
              <Text style={styles.coachName}>
                Arnold 
              </Text>
              <View style={styles.otherInfoContainer}>
                <View>
                  <Text style={styles.otherInfoTitle}>SPECIALITY</Text>
                  <Text style={{textAlign:'center'}}>BodyBuilding</Text>
                </View>
                <View>
                  <Text style={styles.otherInfoTitle}>PER SESSION</Text>
                  <Text style={{textAlign:'center'}}>50.99$</Text>
                </View>
              
              </View>
            </View>
            <TouchableOpacity style={styles.followBtn}>
              <Text style={{fontWeight:'500'}}>FOLLOW +</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.profileCard}>
            <Image
              source={{
                uri: "https://i.pinimg.com/564x/49/96/65/499665fdd9ea36b270d756a50d34f0e1.jpg",
              }}
              style={styles.coachCover}
            />
            <Image
            source={{
              uri:"https://cdn.discordapp.com/attachments/1189842036891856978/1197855594871259156/IMG_20231114_004007.jpg?ex=65bcc8f4&is=65aa53f4&hm=9691dd7221c1cc4859747813484d86afb4c31959e9bf2ef1fb14dd99fc5038c7&"
            }}
            style={styles.coachProfilePic}
            />
            <View style={styles.coachProfileInfo}>
              <Text style={styles.coachName}>
                Ahmed Messoud
              </Text>
              <View style={styles.otherInfoContainer}>
                <View>
                  <Text style={styles.otherInfoTitle}>SPECIALITY</Text>
                  <Text style={{textAlign:'center'}}>Dancing</Text>
                </View>
                <View>
                  <Text style={styles.otherInfoTitle}>PER SESSION</Text>
                  <Text style={{textAlign:'center'}}>1.3$</Text>
                </View>
              
              </View>
            </View>
            <TouchableOpacity style={styles.followBtn}>
              <Text style={{fontWeight:'500'}}>FOLLOW +</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.profileCard}>
            <Image
              source={{
                uri: "https://i.pinimg.com/564x/49/96/65/499665fdd9ea36b270d756a50d34f0e1.jpg",
              }}
              style={styles.coachCover}
            />
            <Image
            source={{
              uri:"data:image/jpeg;base64,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"
            }}
            style={styles.coachProfilePic}
            />
            <View style={styles.coachProfileInfo}>
              <Text style={styles.coachName}>
               amine fakhfakh
              </Text>
              <View style={styles.otherInfoContainer}>
                <View>
                  <Text style={styles.otherInfoTitle}>SPECIALITY</Text>
                  <Text style={{textAlign:'center'}}>BodyBuilding</Text>
                </View>
                <View>
                  <Text style={styles.otherInfoTitle}>PER SESSION</Text>
                  <Text style={{textAlign:'center'}}>99.99$</Text>
                </View>
              
              </View>
            </View>
            <TouchableOpacity style={styles.followBtn}>
              <Text style={{fontWeight:'500'}}>FOLLOW +</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
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
        <ScrollView horizontal style={[styles.coachProfileCardsContainer,{marginBottom:100}]}>
          <View style={styles.profileCard}>
            <Image
              source={{
                uri: "https://i.pinimg.com/564x/1f/91/c3/1f91c38cac327e780f4f7ba5787d8111.jpg",
              }}
              style={styles.coachCover}
            />
            <Image
            source={{
              uri:"https://www.novojob.com/attachments/company_logo/logo_2416684.jpg"
            }}
            style={styles.coachProfilePic}
            />
            <View style={styles.coachProfileInfo}>
              <Text style={styles.coachName}>
                California Gym
              </Text>
              <View style={styles.otherInfoContainer}>
                <View>
                  <Text style={styles.otherInfoTitle}>TYPE</Text>
                  <Text style={{textAlign:'center'}}>Cross Fit</Text>
                </View>
                <View>
                  <Text style={styles.otherInfoTitle}>LOCATION</Text>
                  <Text style={{textAlign:'center'}}>Sousse</Text>
                </View>
              
              </View>
            </View>
            <TouchableOpacity style={styles.followBtn}>
              <Text style={{fontWeight:'500'}}>FOLLOW +</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.profileCard}>
            <Image
              source={{
                uri: "https://i.pinimg.com/564x/1f/91/c3/1f91c38cac327e780f4f7ba5787d8111.jpg",
              }}
              style={styles.coachCover}
            />
            <Image
            source={{
              uri:"https://yt3.googleusercontent.com/ytc/AIf8zZRDDXvC7cQPFYFVjU9il9GEVed-mZMsJ7QPADlY=s900-c-k-c0x00ffffff-no-rj"
            }}
            style={styles.coachProfilePic}
            />
            <View style={styles.coachProfileInfo}>
              <Text style={styles.coachName}>
              binous
              </Text>
              <View style={styles.otherInfoContainer}>
                <View>
                  <Text style={styles.otherInfoTitle}>TYPE</Text>
                  <Text style={{textAlign:'center'}}>Cross Fit</Text>
                </View>
                <View>
                  <Text style={styles.otherInfoTitle}>LOCATION</Text>
                  <Text style={{textAlign:'center'}}>Dubai</Text>
                </View>
              
              </View>
            </View>
            <TouchableOpacity style={styles.followBtn}>
              <Text style={{fontWeight:'500'}}>FOLLOW +</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.profileCard}>
            <Image
              source={{
                uri: "https://i.pinimg.com/564x/1f/91/c3/1f91c38cac327e780f4f7ba5787d8111.jpg",
              }}
              style={styles.coachCover}
            />
            <Image
            source={{
              uri:"data:image/jpeg;base64,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"
            }}
            style={styles.coachProfilePic}
            />
            <View style={styles.coachProfileInfo}>
              <Text style={styles.coachName}>
              L'olympe GYM
              </Text>
              <View style={styles.otherInfoContainer}>
                <View>
                  <Text style={styles.otherInfoTitle}>TYPE</Text>
                  <Text style={{textAlign:'center'}}>Cross Fit</Text>
                </View>
                <View>
                  <Text style={styles.otherInfoTitle}>LOCATION</Text>
                  <Text style={{textAlign:'center'}}>Sousse</Text>
                </View>
              
              </View>
            </View>
            <TouchableOpacity style={styles.followBtn}>
              <Text style={{fontWeight:'500'}}>FOLLOW +</Text>
            </TouchableOpacity>
          </View>

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
  coachProfileCardsContainer:{
    marginTop:50,
    marginBottom:60
    
  },
  profileCard: {
    width: 220,
    height:300,
    backgroundColor: "white",
    borderRadius: 20,
    marginRight:20
  },
  coachCover:{
    width:'100%',
    height:'40%',
    borderWidth:1,
    borderColor:'black',
    borderTopStartRadius:20,
    borderTopEndRadius:20,
    position:'relative'
  },
  coachProfilePic:{
    height:120,
    width:120,
    borderRadius:100,
    position:'absolute',
    left:50,
    top:50,
    borderWidth:5,
    borderColor:'white',
    objectFit:'fill'
  },
  coachProfileInfo:{
    width:'100%',
    position:'absolute',
    bottom:60,
  },
  coachName:{
    textAlign:'center',
    fontSize:21,
    textTransform:'uppercase',
    letterSpacing:2
  },
  otherInfoContainer:{
    flexDirection:'row',
    justifyContent:'space-around',
    marginTop:10
  },
  otherInfoTitle:{
    fontWeight:'bold',
    letterSpacing:1,
    color:"#85B202"
  },
  followBtn:{
    position:'absolute',
    bottom:10,
    left:65,
    backgroundColor:"#85B202",
    padding:10,
    borderRadius:8
  }
});

export default Home;
