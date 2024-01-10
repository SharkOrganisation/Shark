import { StatusBar } from 'expo-status-bar';
import {React,useState} from 'react';
import { View, Image, StyleSheet,Text, Pressable,TouchableHighlight } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// import Carousel from 'react-native-snap-carousel';   
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/MaterialIcons"



export default function DetailProducts() {
  const images = [
    "https://outdoor-gym.com/wp-content/uploads/street-workout-single-twister-300x300.webp",
    "https://outdoor-gym.com/wp-content/uploads/street-workout-single-twister-300x300.webp",
    "https://outdoor-gym.com/wp-content/uploads/street-workout-single-twister-300x300.webp",
  ];

  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  const renderItem = ({ item }) => (
    <Image source={{ uri: item }} style={styles.carouselImage} />
  );

  return (

    <View style={styles.container}>
     {/* <Pressable style={styles.reviewIcon } >
        <Icon name="star-rate" style={styles.icon} size={28} color="white" />
        <Icon name="star-rate" style={styles.icon} size={28} color="white" />
        <Icon name="star-rate" style={styles.icon} size={28} color="white" />
        <Icon name="star-border" style={styles.icon} size={28} color="white" />
      </Pressable>
  <Pressable style={styles.like} onPress={toggleLike}>
        <Icon name={liked ? "favorite" : "favorite-border"} size={30} color="black" />
      </Pressable>
      <Pressable  style={styles.iconContainer}>
        <Ionicons name="arrow-back-circle-sharp" style={styles.icon} size={40} color="black" />
      </Pressable >
     {/* <Text>\n</Text>  */}
       {/* <View style={styles.carouselContainer}>
        <Carousel data={images} renderItem={renderItem} sliderWidth={300} itemWidth={300} />
      </View>
      <View style={styles.blackBackground}>
  <Text style={styles.whiteText}>hi you can use this product only at nights when you are within your wife</Text>
</View>
<TouchableHighlight style={styles.addButon}>
  <Text style={styles.buttonText}>Add To Basket</Text>
</TouchableHighlight> */}

    </View>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    
  },
  iconContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
  },
  icon: {
    marginBottom: 10,
  },
  carouselContainer: {
    flex: 1,
    backgroundColor: "#97d91c", 
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselImage: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    position: 'absolute',
    top:40,
  },
  blackBackground: {
    flex: 2,
    backgroundColor: "black",
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', // Add this line
  },
  whiteText: {
    color: 'white',
    fontSize: 15,
    position: 'absolute', // Use absolute positioning for the text
    top: 40, // Adjust the top value as needed
    left: 20, // Adjust the left value as needed
  },
  like:{
    position: 'absolute',
    top: 250,
    left: 320,
    zIndex: 1,
  },
  addButon: {
    backgroundColor: '#97d91c', // Set background color to make it visible
    position: 'absolute',
    bottom: 330, // Adjust the bottom value as needed
    padding: 10,
    borderRadius: 60,
    marginLeft:150
  },
  reviewIcon: {
    position: 'absolute',
    top: 294, // Adjust the top value as needed
    right: 10, // Adjust the right value as needed
    zIndex: 1,
    flexDirection:"row"
  },
  });
