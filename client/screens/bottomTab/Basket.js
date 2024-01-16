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

export default function Basket() {
  const navigation = useNavigation();
  const [basketData, setBasketData] = useState([]);
  const [loading, setLoading] = useState(true); 
  const route=useRoute()
  const role = route.params?.role
  console.log(role,"roleloggggg");
  const idUser=FIREBASE_AUTH.currentUser.uid
  console.log("iddddddd",idUser);




  const getBasketByRole = async () => {
    try {
      let endpoint = '';
  
    
      if (role === 'user') {
        endpoint = `http://172.29.0.18:3000/api/basket/getOneByUser/${idUser}`;
      } else if (role === 'Gym') {
        endpoint = `http://172.29.0.18:3000/api/basket/getOneByGym/${idUser}`;
      } else if (role === 'coach') {
        endpoint = `http://172.29.0.18:3000/api/basket/getOneByCoach/${idUser}`;
      } else {
        console.error('Invalid role');
        return;
      }
  
      const response = await axios.get(endpoint);
      console.log('Basket data:', response.data);
      setBasketData(response.data);
    } catch (error) {
      console.error('Error fetching basket:', error.message || 'Network error');
      setBasketData([]);
    }
  };
  
  useEffect(() => {
    getBasketByRole(); 
  }, []);
 


 


  const deleteBasketItem=async(role, id, userId)=> {
    
    try {
      const url = `http://172.29.0.18:3000/api/basket/delete/${role}/${id}/${userId}`;
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
         
            <View>
            <TouchableOpacity onPress={() => deleteBasketItem(role, basketItem.id, idUser)}>
            <MaterialIcons name="delete" size={30} color="gray" top={-20} left={330}/>
          </TouchableOpacity>

            </View>
            <View style={styles.box}>
              <Text style={styles.id}>{basketItem.Product.id}</Text>
            </View>
          </View>
             
        ))
      }

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  cardContainer: {
    backgroundColor: 'black',
    flex:1,
    borderRadius: 10,
    padding: 15,
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
    padding: 10,
  },
  cardTitle: {
    top:-80,
    left:180,
    color:"white",
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
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
    top:-50,
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

});
