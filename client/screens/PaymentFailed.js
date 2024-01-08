import * as React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

const PaymentFailed = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>Payment Failed</Text>
        <Text style={styles.subtitleText}>Wael</Text>
        <Text style={styles.descriptionText}>
          please check your information
        </Text>
      </View>
      <View style={styles.priceContainer}>
       
          <AntDesign name="closecircle" size={100} style={styles.icon} />
      
        <Text style={styles.priceText}>Rp 89.100</Text>
      </View>
      <View style={styles.longDescriptionContainer}>
        <Text style={styles.longDescriptionText}>
        Oops! 🙁 It looks like the payment didn't go through. Please check your payment details and ensure you have enough funds in your account. If the issue persists, reach out to your financial institution for assistance.        </Text>
        <View>
          <TouchableOpacity style={styles.doneBtn}>
            <Text style={styles.btnText}>Failed</Text>
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
    fontSize: 25,
  },
  subtitleText: {
    color: "#000",
    fontWeight: "700",
    fontSize: 14,
  },
  descriptionText: {
    textAlign: "center",
    fontSize: 9,
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
    alignItems: "center",
    marginVertical: 100,
    maxWidth: 255,
  },
  longDescriptionText: {
    color: "black",
    fontWeight: "700",
    fontSize: 10,
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
    color: "white",
    textAlign: "center",
    fontSize: 21,
    fontWeight: "bold",
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
