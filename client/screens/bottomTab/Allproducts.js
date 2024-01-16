import {React,useState,useEffect} from "react";
import { View, Text, StyleSheet,Image, TouchableOpacity , ScrollView} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Allproducts({route}) {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const { role } = route?.params || { role: undefined };
  console.log(role, "rrrrrrrrrrrrrrrrrrrrr");

  const fetchData = async () => {
    try {
      const response = await fetch('http://172.29.0.18:3000/api/product/get/products');
      const result = await response.json();
      // console.log("dataaaaaa", result);
      setData(result);
      setFilteredData(result); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
   
    const filteredProducts = category
     ? data.filter((product) =>
         (product.catergory || "").replace(/['"]+/g, '') === category
       )
     : data;
   
    setFilteredData(filteredProducts);
    // console.log(filteredProducts)
   };
   
   

  return (
    <ScrollView style={styles.container}>
    
      <Text style={{color:"#030000",fontWeight:"bold", top:45,left:20}}>{selectedCategory? selectedCategory+"("+filteredData.length+")": "Allproducts"+ "("+data.length+")"}</Text>
      <View style={{ flexDirection: "row", marginTop: 70 }}>
        <TouchableOpacity
          style={{
            backgroundColor: selectedCategory === "Gym Equipment" ? "white" : "black",
            padding: 8,
            borderRadius: 90,
            width: 130,
            alignItems: "center",
            marginLeft: 10,
          }}
          onPress={() => handleCategoryPress("Gym Equipment")}
        >
          <Text
            style={{
              color: selectedCategory === "Gym Equipment" ? "black" : "white",
            }}
          >
            Gym Equipment
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: selectedCategory === "protein" ? "white" : "black",
            padding: 8,
            borderRadius: 90,
            width: 130,
            alignItems: "center",
            marginLeft: 10,
          }}
          onPress={() => handleCategoryPress("protein")}
        >
          <Text
            style={{
              color: selectedCategory === "protein" ? "black" : "white",
            }}
          >
            Protein
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: selectedCategory === "clothes" ? "white" : "black",
            padding: 8,
            borderRadius: 90,
            width: 130,
            alignItems: "center",
            marginLeft: 10,
          }}
          onPress={() => handleCategoryPress("clothes")}
        >
          <Text
            style={{
              color: selectedCategory === "clothes" ? "black" : "white",
            }}
          >
            Clothes
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {(selectedCategory ? filteredData : data).map((product, index) => (
          <View
            key={product.id}
            style={{
              width: "48%",
              marginBottom: 10,
              marginRight: index % 2 === 0 ? 10 : 0,
            }}
          >
            <TouchableOpacity
              style={styles.cardContainer}
              onPress={() => {
                navigation.navigate("DetailProducts", {
                  productId: product.id,
                  product,
                  role
                });

              }}
            >
              <Image
                source={{ uri: product.images[0] }}
                style={styles.cardImage}
              />
              {console.log(product.images[0])}
            </TouchableOpacity>
            <View style={styles.cardContent}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={styles.cardquantity}>{product.quantity}</Text>
                <Text>
                  <Text>{product.icon}</Text>
                </Text>
              </View>
              <Text style={styles.cardTitle}>{product.name.replace(/['"]+/g, '')}</Text>
              <Text style={styles.cardPrice}>{product.price} TND</Text>
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
  icon: {
    marginLeft: 15,
    marginTop: -9,
  },
  marketicon:{
    top:3,
    right:19,
  },
  cardContainer: {
    padding: 10,
    // borderRadius: 15,
    marginBottom: 15,
    marginTop: 20,
    marginLeft: 15,
    shadowColor: "blue",
    shadowOffset: { width: 10, height: 20 },
    shadowOpacity: 6,
    shadowRadius: 2,
    elevation: 5,
    width: "80%",
    justifyContent: "center",
  },
  cardImage: {
    width: 140,
    height: 130,
    borderRadius: 3,
    justifyContent: "center",
  },
  cardContent: {
    padding: 15,
    marginVertical: -20,
  },
  cardTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  cardPrice: {
    fontWeight: "bold",
    top: -4,
    color: "#033",
  },
  cardquantity: {
    fontWeight: "bold",
    top: -4,
    color: "gray",
  },
  icon1: {
    fontSize: 20,
    marginRight: 5,
  },
});