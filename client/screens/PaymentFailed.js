import * as React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation ,useRoute} from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';


const PaymentFailed = () => {
  const navigation=useNavigation()
  const route=useRoute
  const { totalPrice } = route.params || {};
  return (
    <LinearGradient
    colors={['#97d91c', 'black']} 
    style={styles.container}
  >
    <View >
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>Payment Failed</Text>
        {/* <Text style={styles.subtitleText}>Wael</Text> */}
        <Text style={styles.descriptionText}>
          please check your information
        </Text>
      </View>
      <View style={styles.priceContainer}>
       
          <AntDesign name="closecircle" size={100} style={styles.icon} />
      
        <Text style={styles.priceText}>{totalPrice}</Text>
      </View>
      <View style={styles.longDescriptionContainer}>
        <Text style={styles.longDescriptionText}>
        {' '}{' '}{' '} Oops! 🙁 {'\n'}It looks like the payment didn't go through.{'\n'} Please check your payment details and ensure you have enough funds in your account.{'\n'} If the issue persists, reach out to your financial institution for assistance.        </Text>
        
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate('home')}>
            <Text style={styles.btnText}>Failed</Text>
          </TouchableOpacity>
    </View>
    </LinearGradient>
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
  // subtitleText: {
  //   color: "#000",
  //   fontWeight: "700",
  //   fontSize: 14,
  // },
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
    top: 30,
  },
  longDescriptionContainer: {
    // alignItems: "center",
    marginVertical: 100,
    // maxWidth: 255,

  },
  longDescriptionText: {
     bottom:100,
    color: "black",
    fontWeight: "700",
    fontSize: 15,
    textAlign: "center",
  },
  doneBtn: {
    backgroundColor: "black",
    width: 200,
    padding: 10,
    borderRadius: 20,
    marginVertical: 44,
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
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1  ,
    shadowRadius: 30,
   },
 
});

export default PaymentFailed;
