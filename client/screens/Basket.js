import React from "react";
import { View, Text, StyleSheet,Pressable,Image,TouchableOpacity } from "react-native";
// import { useRoute } from '@react-navigation/native';
// import { ScrollView } from "@gluestack-ui/themed";
// import Ionicons from "react-native-vector-icons/Ionicons";
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import { useNavigation } from '@react-navigation/native';

export default function Basket() {
return(
  <View>
    <Text style={{color:"black"}}>hiiiiiiiii</Text>
  </View>
)

//   return (
//     <ScrollView style={styles.cardContainer}>
//       <View style={styles.pageTitle}>
//  <TouchableOpacity onPress={() => {
//                 navigation.navigate("Allproducts") }} >
//   <Ionicons
//     name="arrow-back-circle-sharp"
//     style={styles.icon}
//     size={40}
//     color="#97d91c"
//   />
//  </TouchableOpacity>
//  <Text style={styles.text}>MarketPlace</Text>
//  <Icon name="storefront" size={30} color="#97d91c" style={styles.marketicon} />
// </View>

//       <Image source={{ uri: images[0] }} style={styles.cardImage} />
//       <View style={styles.cardContent}>
//         <Text style={styles.cardTitle}>{name.replace(/['"]+/g, '')}</Text>
//       </View>
//       <View style={styles.box}>
//         <Text style={styles.id}> {id}</Text>
//         </View>
//       {/* <TouchableOpacity style={styles.delbut}>
//         <Text style={styles.delText}>Delete</Text>
//       </TouchableOpacity>
//       */}
       
//     </ScrollView>
//   );
}

// const styles = StyleSheet.create({

//   cardContainer: {
//     backgroundColor: 'black',
//     flex:1,
//     borderRadius: 10,
//     padding: 15,
//     marginBottom: 15,
//   },
//   pageTitle:{
//     flexDirection: "row",
//     marginTop: 66,
//     gap: 90,
//     display: "flex",
//     justifyContent: "10px",
//   },
//   text: {
//     color:'#97d91c',
//     top:4,
//     fontSize: 27,
//     alignItems: "center",
//     fontWeight: "700",
//   },
//   icon:{
//     top:4,
//   },
//   marketicon:{
//     top:11,
//     right:17,
//   },
//   cardImage: {
//     left:10, 
//     borderColor:'#97d91c',
//     borderWidth:2,
//     top:40,
//     width: '40%',
//     height: 120,
//     borderRadius: 4,
//   },
//   cardContent: {
//     padding: 10,
//   },
//   cardTitle: {
//     top:-80,
//     left:180,
//     color:"white",
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },

//   cardButton: {
//     width:70,
//     backgroundColor: 'red',
//     padding: 10,
//     borderRadius: 5,
//     marginTop: -104,
//     left:190,
//   },
//   delbut:{
//     backgroundColor: 'red',
//     width:70,
//     borderRadius: 5,
//     top:-80,
//     padding:10,
//     left:190,

//   },
  
//   id :{
//     height: 30,
//     width: 30,
//     },

//     box:{
//     backgroundcolor: "#ffffff",
//     borderradius: 10,
//     // boxshadow:" 0px 4px 4px #00000040",
//     height: "30",
//     left: 0,
//     position: "fixed",
//     top: 0,
//     width: 30,
//     },
//   delText: {
//     color: '#fff',
//     textAlign: 'center',
//   },
// });
