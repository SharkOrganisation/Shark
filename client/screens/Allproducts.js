import {React,useState,useEffect} from "react";
import { View, Text, StyleSheet,Image, TouchableOpacity , ScrollView} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function Paiment() {

  const navigation =useNavigation()
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://192.168.1.14:3000/api/product/get/products');
      const result = await response.json();
      console.log("dataaaaaa",result);
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
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
      {data.map((product) => (
        <View key={product.id}>
          <TouchableOpacity style={styles.cardContainer} onPress={() => {
            navigation.navigate('DetailProducts', { productId: product.id, product:product });
          }}>
            <Image source={{ uri: product.images[0] }} style={styles.cardImage} />
          </TouchableOpacity>
          <View style={styles.cardContent}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={styles.cardTitle}>{product.quantity}</Text>
        <Icon name="production_quantity_limits" style={styles.icon} />
      </View>
            <Text style={styles.cardcategory}>{product.name}</Text>
            <Text style={styles.cardPrice}>{product.price}</Text>
          </View>
        </View>
      ))}
    </View>
    </ScrollView>
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
marginTop:-9,
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
    color:'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardcategory:{
    top:-5,
    color:'#033',
    fontWeight: 'bold',
    fontSize:15,
  },
  cardPrice: {
    fontWeight: 'bold',
    top:-4,
    color: '#033',
  },
  icon1: {
    fontSize: 20, // Adjust the size as needed
    marginRight: 5, // Adjust the spacing as needed
  },
});
