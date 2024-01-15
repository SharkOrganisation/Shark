import { StatusBar } from 'expo-status-bar';
import {React,useState} from 'react';
import { View, Image, StyleSheet,Text, Pressable,TouchableHighlight, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/MaterialIcons"
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';
import{ FIREBASE_AUTH}  from "../firebase";



export default function DetailProducts () {
  const idUser=FIREBASE_AUTH.currentUser
  console.log(idUser.uid,"iddddddd");
  const navigation =useNavigation()
  const route=useRoute()
  const FromAllproduct=route.params.product
  const role = route.params?.role
 

  console.log(role,":roleeeeeeeeeeee")


  
  const addToBasket = async () => {
    try {
      if (role === 'user') {
        const response = await axios.post(`http://192.168.1.14:3001/api/basket/add`, {
          productId: FromAllproduct.id,
          userId: idUser.uid,
        });
  
        console.log("Response from server:", response.data);
      } else if (role === 'Gym' && role !== undefined) {
        const response = await axios.post(`http://192.168.1.14:3001/api/basket/add`, {
          productId: 1,
          gymId: idUser.uid,
        });
        console.log(idUser.uid,':iddddddddddd')
  
        console.log("Response from server:", response.data);
      } else if (role === 'coach') {
        const response = await axios.post(`http://192.168.1.14:3001/api/basket/add`, {
          productId: FromAllproduct.id,
          coachId: idUser.uid,
        });
  
        console.log("Response from server:", response.data);
      } else  {
        alert('please register');
      }
    } catch (error) {
      console.error('Error adding to basket:', error.message || 'Network error');
    }
  };
  


  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  const renderItem = ({ item }) => (
    <Image source={{ uri: item }} style={styles.carouselImage} />
  );
  
return (
  
    <SafeAreaView style={styles.container}>
     <Pressable style={styles.reviewIcon } >
        <Icon name="star-rate" style={styles.icon} size={28} color="#97d91c" />
        <Icon name="star-rate" style={styles.icon} size={28} color="#97d91c" />
        <Icon name="star-rate" style={styles.icon} size={28} color="#97d91c" />
        <Icon name="star-border" style={styles.icon} size={28} color="#97d91c" />
      </Pressable>
  <Pressable style={styles.like} onPress={toggleLike}>
        <Icon name={liked ? "favorite" : "favorite-border"} size={30} color="black" />
      </Pressable>
      <Pressable  style={styles.iconContainer}  onPress={() => navigation.navigate('Allproducts')}>
        <Ionicons name="arrow-back-circle-sharp" style={styles.icon} size={40} color="black" />
      </Pressable >
      <View style={styles.carouselContainer}>
        <Carousel data={FromAllproduct.images} renderItem={renderItem} sliderWidth={390} itemWidth={350} />
      </View>
      <View style={styles.blackBackground}>
  <Text style={styles.whiteText } marginBottom={100}>{FromAllproduct.description}</Text>
      <Text  style={{color:"#97d91c",right:150,marginBottom:480,fontSize:20,  fontWeight: 'bold',}}>_Description_</Text>
</View>
<TouchableHighlight style={styles.addButon} onPress={() => {
  console.log('Adding to basket:', FromAllproduct.id, idUser.uid , role);
  addToBasket();
}}>
  <Text style={styles.buttonText}>Add To Basket</Text>
</TouchableHighlight> 

    </SafeAreaView>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    
  },
  iconContainer: {
    position: 'absolute',
    top: 29,
    left: 10,
    zIndex: 1,
  },
  icon: {
    marginBottom: 10,
  },
  carouselContainer: {
    height:"100%",
    flex: 1,
    backgroundColor: "white", 
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    // resizeMode: 'cover',
    // position: 'absolute',
    top:10,
  },
  blackBackground: {
    top:40,
    flex: 2,
    backgroundColor: "black",
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', 
  },
  whiteText: {
    color: 'white',
    fontSize: 15,
    position: 'absolute', 
    top: 80, 
    left: 12, 
  },
  like:{
    position: 'absolute',
    top: 310,
    left: 380,
  },
  addButon: {
    backgroundColor: '#97d91c',
    position: 'absolute',
    bottom: 280,
    padding: 10,
    borderRadius: 60,
    marginLeft:150
  },
  reviewIcon: {
    position: 'absolute',
    top: 484, 
    right: 10, 
    zIndex: 1,
    flexDirection:"row"
  },

  });
