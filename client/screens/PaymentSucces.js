import * as React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const PaymentSuccess = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>Payment Success</Text>
        <Text style={styles.subtitleText}>wael</Text>
        <Text style={styles.descriptionText}>
          Thank you for using our service
        </Text>
      </View>
      <View style={styles.priceContainer}>
       
          <FontAwesome name="check-circle" size={100} style={styles.icon} />
      
        <Text style={styles.priceText}>Rp 89.100</Text>
      </View>
      <View style={styles.longDescriptionContainer}>
        <Text style={styles.longDescriptionText}>
        Hooray! 🎉 Your payment was successful! Funds have been securely transferred, and your transaction is complete. Thank you for using our service. If you have any questions, feel free to reach out to our support team
        </Text>
        <View>
          <TouchableOpacity style={styles.doneBtn}>
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
    left: 8,
    top: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1  ,
    shadowRadius: 30,
   },
 
});

export default PaymentSuccess;
