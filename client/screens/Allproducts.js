import React from "react";
import { View, Text, StyleSheet,Image, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Paiment() {
  return (
    <View style={styles.container}>
      <View style={styles.pageTitle}>
       <TouchableOpacity>   
        <Ionicons name="arrow-back-circle-sharp" style={styles.icon} size={40} color="black" />
          </TouchableOpacity>
        <Text style={styles.text}>All Products</Text>
      </View>
      <View style={{flexDirection:"row" , marginTop:70}}>
      <TouchableOpacity
      style={{ backgroundColor: 'black', padding: 8, borderRadius: 90, width:130,  alignItems: 'center' ,marginLeft:10}}
    >
      <Text style={{ color: 'white' }}>Gym Equipment</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={{ backgroundColor: 'black', padding: 8, borderRadius: 90, width:130,  alignItems: 'center' ,marginLeft:10}}
    >
      <Text style={{ color: 'white' }}>protein</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={{ backgroundColor: 'black', padding: 8, borderRadius: 90, width:130,  alignItems: 'center' ,marginLeft:10}}
    >
      <Text style={{ color: 'white' }}>clothes</Text>
    </TouchableOpacity>
      </View>
<View>
<TouchableOpacity style={styles.cardContainer} onPress={() => {
      // Handle card press (e.g., navigate to product details)
    }}>
      <Image source={{ uri:"https://outdoor-gym.com/wp-content/uploads/street-workout-single-twister-300x300.webp" }} style={styles.cardImage} />
    </TouchableOpacity>
    <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>altere</Text>
        <Text style={styles.cardPrice}>150£</Text>
      </View>
    </View>
</View>
     
  );
}




const styles = StyleSheet.create({
  container: {
    backgroundColor: "#97d91c",
    flex: 1,
  },
  pageTitle: {
    flexDirection: "row",
    marginTop: 80,
    gap: 90,
    display: "flex",
    justifyContent: "10px",
  },
  text: {
    fontSize: 27,
    alignItems: "center",
    fontWeight: "700",
  },
  icon:{
marginLeft:15,
  },
  cardContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    marginBottom: 15,
    marginTop:20,
    marginLeft:10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    width:"30%",
    justifyContent: 'center',
    
  },
  cardImage: {
    width:"100%",
    height: 80,
    borderRadius: 5,
  },
  cardContent: {
    padding: 15,
   marginVertical:-20
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardPrice: {
    color: '#333',
  },
});
