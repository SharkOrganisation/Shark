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
import Products from "react-native-vector-icons/MaterialIcons"
import CardImg from "../../assets/HomePicture/CoverCard.jpg";
import QuoteImg from "../../assets/HomePicture/QuoteImg.jpg";
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
                uri:'https://exclusive-fit.fr/wp-content/uploads/2021/01/delts-machine-700-technogym-par-exclusive-fit1.jpg'
              
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
                uri:'https://exclusive-fit.fr/wp-content/uploads/2021/01/delts-machine-700-technogym-par-exclusive-fit1.jpg'
              
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
                uri:'https://exclusive-fit.fr/wp-content/uploads/2021/01/delts-machine-700-technogym-par-exclusive-fit1.jpg'
              
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
                uri:'https://exclusive-fit.fr/wp-content/uploads/2021/01/delts-machine-700-technogym-par-exclusive-fit1.jpg'
              
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
                uri:'https://exclusive-fit.fr/wp-content/uploads/2021/01/delts-machine-700-technogym-par-exclusive-fit1.jpg'
              
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
        <View style={{flexDirection:'row',gap:5,alignItems:'center', margin:10}} >
          <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }} >Our Services</Text>
          <Services name='handshake-o'  style={{color: "#85B202", fontSize: 18, fontWeight: "bold"}}/>
        </View>
        <View style={styles.servicesContainer}>
              <View style={styles.serviceCard}>
                <Program size={90} name="newspaper-outline" /> 
                <Text style={styles.serviceName}>Personolized Plans</Text>
              </View>
              <View style={styles.serviceCard}>
                <GymServices size={90} name="email-fast-outline"/> 
                <Text style={styles.serviceName}>Easy Communication</Text>
              </View>
              <View style={styles.serviceCard}>
                <Products size={90} name="shopping-bag"/> 
                <Text style={styles.serviceName}>Find The Best Products</Text>
              </View>

        </View>
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
  productsCardsContainer:{
    flexDirection:'row',
    marginVertical:15
  },
  productCard:{
    width:150,
    height:200,
    borderWidth:2,
    borderColor:'white',
    borderRadius:20,
    backgroundColor:'white',  
    marginRight:25
  },
  productImage:{
    width:'100%',
    height:'80%',
    borderRadius:50
  },
  productName:{
    fontWeight:'bold',
    letterSpacing:1,
    marginLeft:2

  },
  productPrice:{
    color:'#85B202',
    fontWeight:'bold',
    marginLeft:5
  },
  servicesContainer:{
    width:'100%',
    height:200,
    paddingHorizontal:5,
    flexDirection:'row',
    justifyContent:"space-between",
    alignItems:'flex-start'
  },
  serviceCard:{
    width:130,
    height:130,
    backgroundColor:"#BEFF03",
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center'
    
  },
  serviceName:{
    fontWeight:'700',
    textAlign:'center',
  }
});

export default Home;
