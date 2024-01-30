import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  TouchableOpacity,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import axios from "axios";

// import { useRoute } from '@react-navigation/native';
import { ScrollView } from "@gluestack-ui/themed";
// import Ionicons from "react-native-vector-icons/Ionicons";
// import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation, useRoute } from "@react-navigation/native";
import { FIREBASE_AUTH } from "../../firebase";
import { ipAddress } from "../../ipConfig";

export default function Basket() {
  const navigation = useNavigation();
  const [basketData, setBasketData] = useState([]);
  const [loading, setLoading] = useState(true);
  const route = useRoute();
  const role = route.params?.role;
  console.log(role, "roleloggggg");
  const idUser = FIREBASE_AUTH.currentUser.uid;
  console.log("iddddddd", idUser);
  const [totalPrice, setTotalPrice] = useState(0);
  const [quantities, setQuantities] = useState({});

  //this for get the products of the basket

  const getBasketByRole = async () => {
    try {
      let endpoint = "";

      if (role === "user") {
        endpoint = `http://${ipAddress}:3000/api/basket/getOneByUser/${idUser}`;
      } else if (role === "Gym") {
        endpoint = `http://${ipAddress}:3000/api/basket/getOneByGym/${idUser}`;
      } else if (role === "coach") {
        endpoint = `http://${ipAddress}:3000/api/basket/getOneByCoach/${idUser}`;
      } else {
        console.error("Invalid role");
        return;
      }

      const response = await axios.get(endpoint);
      console.log("Basket data:", response.data);
      setBasketData(response.data);
      const total = response.data.reduce((acc, item) => {
        return acc + (item.Product.price || 0);
      }, 0);
      setTotalPrice(total);
    } catch (error) {
      console.error("Error fetching basket:", error.message || "Network error");
      setBasketData([]);
    }
  };

  useEffect(() => {
    getBasketByRole();
  }, []);
  useEffect(() => {
    const initialQuantities = {};
    basketData.forEach((item) => {
        initialQuantities[item.id] = 1;
    });
    setQuantities(initialQuantities);
   }, [basketData]);
   
   useEffect(() => {
    let total = 0;
    basketData.forEach((item) => {
       total += (item.Product.price || 0) * (quantities[item.id] || 0);
    });
    setTotalPrice(total);
   }, [quantities, basketData]);

  console.log(totalPrice, "Totaaaaaaal");

  // function to handle delete of product from the basket
  const deleteBasketItem = async (role, basketId, userId) => {
    try {
      console.log("Deleting basket item with:", role, basketId, userId);
      const lowercasedRole = role.toLowerCase();
      await axios.delete(
        `http://${ipAddress}:3000/api/basket/delete/${lowercasedRole}/${basketId}/${userId}`
      );
      await getBasketByRole();
    } catch (error) {
      if (error.response) {
        console.error("Response data:", error.response.data);
      }
    }
  };


  return (
    <ScrollView style={styles.cardContainer}>
      {basketData.length > 0 &&
        basketData.map((basketItem) => (
          <View key={basketItem.id} style={styles.cardContent}>
            {basketItem.Product.images?.length > 0 && (
              <Image
                source={{ uri: basketItem.Product.images[0] }}
                style={styles.cardImage}
              />
            )}
            <Text style={styles.cardTitle}>
              {basketItem?.Product?.name?.replace(/['"]+/g, "")}
            </Text>
            <Text style={styles.cardPrice}>
 {(basketItem?.Product?.price || 0) * (quantities[basketItem.id] || 1)} TND
</Text>

            <View>
              <TouchableOpacity
                onPress={() =>
                  deleteBasketItem(role, basketItem.productId, idUser)
                }
              >
                {console.log(role, basketItem.productId, idUser, "litfs5")}
                <MaterialIcons
                  name="delete"
                  size={30}
                  color="gray"
                  top={-40}
                  left={330}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.box}>
            <TouchableOpacity
 style={styles.button}
 onPress={() => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [basketItem.id]: (prevQuantities[basketItem.id] || 0) - 1,
    }));
 }}
>
 <Text style={styles.buttonm}>-</Text>
</TouchableOpacity>
<Text style={{color:"white",fontSize:20,top:10, }}>{quantities[basketItem.id] || 0}</Text>
<TouchableOpacity
 onPress={() => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [basketItem.id]: (prevQuantities[basketItem.id] || 0) + 1,
    }));
 }}
>
 <Text style={styles.button}>+</Text>
</TouchableOpacity>
      </View>

          </View>
        ))}
      {basketData.length > 0 && (
        <TouchableOpacity
          style={styles.checkoutButton}
          onPress={() => {
            navigation.navigate("Checkout", { totalPrice });
          }}
        >
          <Text style={styles.buttonText}>Checkout</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "black",
    flex: 1,
    // borderRadius: 10,
    padding: 12,
    // marginBottom: 15,
  },
  pageTitle: {
    flexDirection: "row",
    marginTop: 66,
    gap: 90,
    display: "flex",
    justifyContent: "10px",
  },
  text: {
    color: "#97d91c",
    top: 4,
    fontSize: 27,
    alignItems: "center",
    fontWeight: "700",
  },
  icon: {
    top: 4,
  },
  marketicon: {
    top: 11,
    right: 17,
  },
  cardImage: {
    left: 10,
    borderColor: "#97d91c",
    borderWidth: 2,
    top: 40,
    width: "40%",
    height: "50%",
    borderRadius: 4,
    objectFit:"fill"
  },
  cardContent: {
    padding: 5,
    // width:"20%"
    // borderColor:"white",
    // borderWidth:5,
    marginBottom:-50
  },
  cardTitle: {
    top: -90,
    left: 180,
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
       // borderColor:"white",
    // borderWidth:5,
    width:"50%"
  },
  cardPrice: {
    color: "white",
    left: 180,
    top: -74,
    fontSize: 17,
  },

  cardButton: {
    width: 70,
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
    marginTop: -104,
    left: 190,
  },

  quantity: {
    top: -72,
    color: "black",
    height: 30,
    width: 30,
    borderRadius: 8,
    backgroundColor: "white",
    textAlign: "center",
    lineHeight: 30,
    marginLeft: 180,
  },

  box: {
    flexDirection:"row",
    gap:20,
    backgroundcolor: "#ffffff",
    borderradius: 10,
    height: "30",
    left: 180,
    position: "fixed",
    top: -80,
    width: 30,
  },
  checkoutButton: {
    borderRadius: 45,
    borderWidth: 20,
    backgroundColor: "#97d91c",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "black",
    fontSize: 16,
  },
  button: {
    top:3,
    // padding: 10,
    borderRadius: 5,
    color:"#97d91c",
    fontSize: 28
 },
 buttonm:{
  color:"#97d91c",
  fontSize: 28
 },

});
