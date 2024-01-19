import {React,useState,useEffect} from "react";
import {FlatList, View, Text, StyleSheet,Image, TouchableOpacity , ScrollView, Dimensions} from "react-native";
import { useNavigation } from '@react-navigation/native';
import {ipAddress} from '../../ipConfig'
import { LinearGradient } from 'expo-linear-gradient';
import { Animated } from 'react-native';

export default function Allproducts({route}) {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const { role } = route?.params || { role: undefined };
  console.log(role, "rrrrrrrrrrrrrrrrrrrrr");
  const [translateX, setTranslateX] = useState(new Animated.Value(0));
  



  const animateText = () => {
    Animated.loop(
     Animated.timing(translateX, {
       toValue: 400,
       duration: 3000,
       useNativeDriver: true,
     }),
    ).start();
   };
   

  const fetchData = async () => {
    try {
      const response = await fetch(`http://${ipAddress}:3000/api/product/get/products`);
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
    animateText()
  }, []);

  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
    
    let filteredProducts;
    if (category === "All") {
      filteredProducts = data;
    } else {
      filteredProducts = category
        ? data.filter((product) =>
            (product.catergory || "").replace(/['"]+/g, '') === category
          )
        : data;
    }
   
    setFilteredData(filteredProducts);
   };
   
   
   
  return (
    <LinearGradient
   colors={['#97d91c', 'black']} 
   style={styles.containerA}
 >


    <ScrollView contentContainerStyle={{ paddingBottom: 50 }} >
    
    <Animated.Text style={{ fontSize:20, color:"#030000",fontWeight:"bold", top:45,left:20, transform: [{ translateX }]} }>
 {selectedCategory ? selectedCategory + " (" + filteredData.length + ")" : "Allproducts (" + data.length + ")"}
</Animated.Text>

      <ScrollView horizontal={true}>
      <View style={{ flexDirection: "row", marginTop: 70 }}>
      <TouchableOpacity
    style={{
      backgroundColor: selectedCategory === "All" ? "white" : "black",
      padding: 8,
      borderRadius: 90,
      width: 80,
      alignItems: "center",
      marginLeft: 10,
    }}
    onPress={() => handleCategoryPress("All")}
  >
    <Text
      style={{
        color: selectedCategory === "All" ? "black" : "white",
      }}
    >
      All
    </Text>
  </TouchableOpacity>
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
        <TouchableOpacity
   style={{
     backgroundColor: selectedCategory === "Snacks" ? "white" : "black",
     padding: 8,
     borderRadius: 90,
     width: 130,
     alignItems: "center",
     marginLeft: 10,
   }}
   onPress={() => handleCategoryPress("Snacks")}
 >
   <Text
     style={{
       color: selectedCategory === "Snacks" ? "black" : "white",
     }}
   >
     Snacks
   </Text>
 </TouchableOpacity>
      </View>
      </ScrollView>
       <FlatList
   data={(selectedCategory ? filteredData : data)}
   keyExtractor={(item) => item.id.toString()}
   renderItem={({ item }) => (
     <View key={item.id} style={styles.itemContainer}>
      <TouchableOpacity   onPress={() => {
                navigation.navigate("DetailProducts", {
                  productId: item.id,
                  product:item,
                  role
                });

              }}>  
       <Image source={{ uri: item.images[0] }} style={styles.image} />
       </TouchableOpacity>
       <View style={styles.infoContainer}>
         <Text style={styles.name}>{item.name}</Text>
         <Text style={styles.price}>{item.price} USD</Text>
       </View>
       <View style={styles.quantityContainer}>
         <Text>Stack({item.quantity})</Text>
       </View>
     </View>
   )}
   numColumns={2}
 />
    </ScrollView>
    </LinearGradient>
  );
}
const windowWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  containerA: {
    flex: 1,
  },
  itemContainer: {
    backgroundColor: '#f0f8ff',
    paddingHorizontal: 20,
    paddingVertical: 20,
    margin: 25,
    borderRadius: 10,
    width: windowWidth / 2 - 50,
    height: 190, 
    paddingBottom:50,
  },
  image: {
    width: '90%',
    height: '70%', 
  },
  infoContainer: {
    marginTop: 10,
  },
  name: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color:'#97d91c'
  },
  quantityContainer: {
    marginTop: 7,
    color: '#787878',
    
  },

});