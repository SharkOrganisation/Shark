import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { usePaymentSheet, useStripe } from "@stripe/stripe-react-native";
import { ipAddress } from "../ipConfig";
import { LinearGradient } from "expo-linear-gradient";

export default function Checkout() {
  const navigation = useNavigation();
  const route = useRoute();
  const totalPrice = route.params.totalPrice || 0;
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(false);

  // this is to post the amount
  const fetchPaymentSheetParams = async () => {
    const response = await fetch(
      `http://${ipAddress}:3000/api/payment/create-payment-intent`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: totalPrice * 100,
        }),
      }
    );
    const { paymentIntent, ephemeralKey, customer } = await response.json();
    return {
      paymentIntent,
      ephemeralKey,
      customer,
    };
  };

  const initializePaymentSheet = async () => {
    const { paymentIntent, ephemeralKey, customer, publishableKey } =
      await fetchPaymentSheetParams();

    const { error } = await initPaymentSheet({
      merchantDisplayName: "Example, Inc.",
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,

      allowsDelayedPaymentMethods: true,
      defaultBillingDetails: {
        name: "Gymshark",
      },
    });
    if (!error) {
      setLoading(true);
    }
  };

  // handle payment operation
  const openPaymentSheet = async (totalPrice) => {
    const { error } = await presentPaymentSheet();

    if (error) {
      navigation.navigate("PaymentFailed", { totalPrice });
      // Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      // Alert.alert('Success', 'Your order is confirmed!');
      navigation.navigate("PaymentSucces", { totalPrice });
    }
  };

  useEffect(() => {
    initializePaymentSheet();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.pageTitle}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Basket");
          }}
        >
          <Ionicons
            name="arrow-back-circle-sharp"
            style={styles.icon}
            size={40}
            color="#97d91c"
          />
        </TouchableOpacity>
        <Text style={styles.text}>Checkout</Text>
      </View>
      <View>
        <Text
          style={{
            fontSize: 20,
            color: "lightgray",
            fontWeight: "bold",
            top: 100,
            left: 20,
          }}
        >
          Shipping adress
        </Text>
        <Text style={{ fontSize: 18, color: "gray", left: 20, top: 120 }}>
          Streamline your shopping journey here – enjoy a seamless process and
          swift order confirmation for a convenient and efficient shopping
          experience.
        </Text>
      </View>

      <View>
        <Text
          style={{
            fontSize: 20,
            color: "black",
            left: 20,
            top: 120,
            borderBottomColor: "white",
            borderWidth: 3,
            padding: 8,
          }}
        >
          hj
        </Text>
      </View>

      <View style={styles.totprice}>
        <Text style={styles.total}>Total</Text>
        <Text style={{ color: "#cccccc", top: 174, fontSize: 30, left: 260 }}>
          {" "}
          {totalPrice} Usd
        </Text>
      </View>

      <View style={styles.container2}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Credit card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>PayPall</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>E-Dinar</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.pay}
        onPress={() => {
          openPaymentSheet(totalPrice);
        }}
      >
        <Text style={styles.PayText}>Pay Now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
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
    color: "#97d91c",
  },
  icon: {
    marginLeft: 15,
  },

  textWrapper: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
  },
  total: {
    color: "#cccccc",
    left: 20,
    top: 210,
    fontSize: 25,
  },
  totprice: {
    top: -60,
  },
  container2: {
    gap: 15,
    top: 45,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "black",
    borderWidth: 1,
    borderColor: "#97d91c",
    padding: 15,
    borderRadius: 80,
    width: 350,
  },
  buttonText: {
    color: "#9ac61c",
    textAlign: "center",
    fontSize: 25,
  },
  pay: {
    backgroundColor: "#97d91c",
    borderWidth: 2,
    padding: 6,
    borderRadius: 40,
    width: 200,
    left: 110,
    bottom: 40,
  },
  PayText: {
    color: "black",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
});
