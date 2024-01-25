import * as React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation ,useRoute} from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';



const PaymentSuccess = () => {
  const navigation = useNavigation();
  const route =useRoute();
  const totalPrice=route.params.totalPrice || 0
  console.log(totalPrice);

  return (
    <View
     
    style={styles.container}
  >
    <View >
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>Success</Text>
        {/* <Text style={styles.subtitleText}>wael</Text> */}
        <Text style={styles.descriptionText}>
          Thank you for using our service
        </Text>
      </View>
      <View style={styles.priceContainer}>
       
          <FontAwesome name="check-circle" size={150} style={styles.icon} />
      
        <Text style={styles.priceText}>{totalPrice}USD</Text>
      </View>
      <View style={styles.longDescriptionContainer}>
        <Text style={styles.longDescriptionText}>
        {' '}{' '}{' '} Hooray! 🎉{'\n'}  Your payment was successful! {'\n'} Funds have been securely transferred, {'\n'} and your transaction is complete.{'\n'} Thank you for using our service.{'\n'} If you have any questions,{'\n'} feel free to reach out to our support team 
          </Text>
      </View>
      <View>
          <TouchableOpacity  onPress={()=>{navigation.navigate('home')}}>
            <Text style={styles.btnText}>Success</Text>
          </TouchableOpacity>
        </View>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9AC61C",
    padding: 60,
  },
  textContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  titleText: {
    color: "#000",
    fontWeight: "700",
    fontSize: 35,
  },
 
  descriptionText: {
    top:10,
    textAlign: "center",
    fontSize: 15,
  },
  priceContainer: {
    alignSelf: "center",
    marginVertical: 44,
    gap: 20,
  },
  priceText: {
    fontWeight: "700",
    fontSize: 20,
    left:25,
  },
  longDescriptionContainer: {
    marginVertical: 100,

  },
  longDescriptionText: {
    bottom:100,
    color: "black",
    fontWeight: "700",
    fontSize: 15,
    textAlign: "center",
  },

  btnText: {
    bottom:100,
    color: "white",
    textAlign: "center",
    fontSize: 21,
    fontWeight: "bold",
    backgroundColor: "black",
    width: 200,
    padding: 10,
    borderRadius: 20,
    marginVertical: 44,
    left:60
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    top: 10,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 2  ,
    shadowRadius: 30,
   },
 
});

export default PaymentSuccess;
