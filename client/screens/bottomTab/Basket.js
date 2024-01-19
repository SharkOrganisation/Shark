import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet,Pressable,Image,TouchableOpacity } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';

// import { useRoute } from '@react-navigation/native';
import { ScrollView } from "@gluestack-ui/themed";
// import Ionicons from "react-native-vector-icons/Ionicons";
// import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation, useRoute } from '@react-navigation/native';
import {FIREBASE_AUTH} from "../../firebase";
import {ipAddress} from '../../ipConfig'

export default function Basket() {
  const navigation = useNavigation();
  const [basketData, setBasketData] = useState([]);
  const [loading, setLoading] = useState(true); 
  const route=useRoute()
  const role = route.params?.role
  console.log(role,"roleloggggg");
  const idUser=FIREBASE_AUTH.currentUser.uid
  console.log("iddddddd",idUser);
  const [totalPrice, setTotalPrice] = useState(0);




  const getBasketByRole = async () => {
    try {
      let endpoint = '';
  
    
      if (role === 'user') {
        endpoint = `http://${ipAddress}:3000/api/basket/getOneByUser/${idUser}`;
      } else if (role === 'Gym') {
        endpoint = `http://${ipAddress}:3000/api/basket/getOneByGym/${idUser}`;
      } else if (role === 'coach') {
        endpoint = `http://${ipAddress}:3000/api/basket/getOneByCoach/${idUser}`;
      } else {
        console.error('Invalid role');
        return;
      }
  
      const response = await axios.get(endpoint);
      console.log('Basket data:', response.data);
      setBasketData(response.data);
      const total = response.data.reduce((acc, item) => {
        return acc + (item.Product.price || 0); 
      }, 0);
      setTotalPrice(total);
    } catch (error) {
      console.error('Error fetching basket:', error.message || 'Network error');
      setBasketData([]);
    }
  };
  
  useEffect(() => {
    getBasketByRole(); 
  }, []);


  console.log(totalPrice, "Totaaaaaaal");
 


 


  const deleteBasketItem=async(role, id, userId)=> {
    
    try {
      const url = `http://${ipAddress}:3000/api/basket/delete/${role}/${id}/${userId}`;
      await axios.delete(url)
      getBasketByRole(); 
      console.log("deleted");
    } catch (error) {
      console.log('Error deleting basket item:', error.message);
    }
  }
  


  return (
    <ScrollView style={styles.cardContainer}>
    

      {
        basketData.length > 0 && basketData.map((basketItem) => (
          <View key={basketItem.id} style={styles.cardContent}>
            {basketItem.Product.images?.length > 0 && (
              <Image source={{ uri: basketItem.Product.images[0] }} style={styles.cardImage} />
            )}

            <Text style={styles.cardTitle}>{basketItem?.Product?.name?.replace(/['"]+/g, '')}</Text>
            <Text style={styles.cardPrice}>{basketItem?.Product?.price} USD</Text>
         
            <View>
            <TouchableOpacity onPress={() => deleteBasketItem(role, basketItem.id, idUser)}>
            <MaterialIcons name="delete" size={30} color="gray" top={-40} left={330}/>
          </TouchableOpacity>

            </View>
            <View style={styles.box}>
              <Text style={styles.id}>{basketItem.Product.id}</Text>
            </View>
        
          </View>
             
        ))
      }
          {basketData.length > 0 && (
        <TouchableOpacity style={styles.checkoutButton} onPress={()=>{navigation.navigate('Checkout', { totalPrice })}}>
          <Text style={styles.buttonText}>Checkout</Text>
        </TouchableOpacity>
      )}

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  cardContainer: {
    backgroundColor: 'black',
    flex:1,
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
  },
  pageTitle:{
    flexDirection: "row",
    marginTop: 66,
    gap: 90,
    display: "flex",
    justifyContent: "10px",
  },
  text: {
    color:'#97d91c',
    top:4,
    fontSize: 27,
    alignItems: "center",
    fontWeight: "700",
  },
  icon:{
    top:4,
  },
  marketicon:{
    top:11,
    right:17,
  },
  cardImage: {
    left:10, 
    borderColor:'#97d91c',
    borderWidth:2,
    top:40,
    width: '40%',
    height: 120,
    borderRadius: 4,
  },
  cardContent: {
    padding: 5,
  },
  cardTitle: {
    top:-80,
    left:180,
    color:"white",
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardPrice:{
    color:"white",
    left:180,
    top:-74,
    fontSize: 17
  },

  cardButton: {
    width:70,
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    marginTop: -104,
    left:190,
  },
  
  id: {
    top:-72,
    color: "black",
    height: 30,
    width: 30,
    borderRadius: 8, 
    backgroundColor: "white",
    textAlign: "center", 
    lineHeight: 30, 
    marginLeft: 180,
  },

    box:{
    backgroundcolor: "#ffffff",
    borderradius: 10,
    // boxshadow:" 0px 4px 4px #00000040",
    height: "30",
    left: 0,
    position: "fixed",
    top: 0,
    width: 30,
    },
    checkoutButton: {
      borderRadius: 45, // Adjust the border radius as needed
      borderWidth:20,
      backgroundColor: '#97d91c',
      padding: 20, // Adjust the padding as needed
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      color: 'black',
      fontSize: 16,
      // fontWeight:900 // Adjust the font size as needed
    },

});
