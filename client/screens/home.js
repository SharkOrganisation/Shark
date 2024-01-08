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
import CardImg from "../assets/HomePicture/CoverCard.jpg";
import QuoteImg from "../assets/HomePicture/QuoteImg.jpg";

const Home = () => {
  return (
    <SafeAreaView style={styles.Container}>
      {/* <ScrollView > */}

      <View style={styles.textHeader}>
        <TouchableOpacity>
          <Previous name="leftcircleo" style={styles.headerIcon} />
        </TouchableOpacity>
        <Text style={styles.title}>Discover</Text>
      </View>
      <View style={styles.cardContainer}>
        <ImageBackground source={CardImg} style={styles.card}>
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
            <TouchableOpacity>
              <Text
                style={{
                  color: "white",
                  fontSize: 11,
                  fontWeight: "500",
                  textDecorationLine: "underline",
                  textDecorationColor: "#BEFF03",
                }}
              >
                Let The Experience Begin
                <Begin name="doubleright" style={{ color: "#BEFF03" }} />
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <View style={styles.Shop}>
          <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>
            Shop Now{" "}
            <Shop
              name="shopping-bag"
              style={{ color: "#85B202", fontSize: 18, fontWeight: "bold" }}
            />
          </Text>
          <View style={styles.allproducts}>
            <ImageBackground
              style={styles.productCard}
              resizeMode="contain"
              source={{
                uri: "https://webapi-prod.technogym.com/dw/image/v2/BFLQ_PRD/on/demandware.static/-/Sites-tg-catalog-master/default/dwa7cbc57d/product/PA06-ANV0GG/PA06_scottbench_element_related_01_7.jpg?sw=1100&sh=1100",
              }}
            >

              <View style={styles.productDetails}>
              <Text style={styles.nameProduct}>name</Text>
              <Text style={styles.priceProduct}> price</Text>
              </View>

            </ImageBackground>
          </View>
        </View>
      </View>

      <View>
        <ImageBackground
          source={QuoteImg}
          resizeMode="cover"
          style={styles.card}
        >
          <View style={styles.quoteContainer}>
            <Text style={styles.firstLine}>
              First You Start Fitness To Look Good
            </Text>
            <Text style={styles.secondLine}>Then It Becomes A Lifestyle.</Text>
          </View>
        </ImageBackground>
      </View>

      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "black",
  },
  containerHeader: {
    flex: 1,
    marginVertical: 30,
  },
  image: {
    marginVerticall: 5,
    justifyContent: "center",
    opacity: 0.9,
  },
  textHeader: {
    flexDirection: "row",
    justifyContent: "space-start",
    gap: 40,
    alignItems: "center",
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
  },
  headerIcon: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 20,
  },
  headerImg: {
    borderColor: "black",
    borderColor: "white",
    borderBottomLeftRadius: 3,
    borderTopLeftRadius: 3,
  },
  cardContainer: {},
  card: {
    backgroundColor: "#FFFFF",
    borderRadius: 10,
    padding: 55,
    // paddingRight: 150,
    margin: 10,
    borderColor: "#9AC61C",
    borderWidth: 1,
  },
  titleCardContainer: {
    flexDirection: "column",
    // paddingLeft:30,
    backgroundColor: "transparent",
    left: -30,
    gap: 10,
  },
  titleCard: {
    color: "white",
    fontSize: 10,
    fontWeight: "700",
    color: "#9AC61C",
    backgroundColor: "black",
  },
  secondtitleCard: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    left: 20,
    color: "#BEFF03",
  },
  Shop: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  allproducts: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  productCard: {
    marginTop: 13,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,

  },
  quoteContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  firstLine: {
    color: "#9AC61C",
    fontWeight: "bold",
    fontSize: 12,
    textAlign: "center",
  },
  secondLine: {
    color: "#BEFF03",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  nameProduct: {
    fontSize: 15,
    fontWeight: "bold",
  },
  priceProduct: {
    fontSize: 15,
    fontWeight: "bold",
  },
  productDetails:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    borderColor:"black",
    borderWidth: 1,
  }
});

export default Home;
