import { View, Text, StyleSheet, TouchableOpacity,Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { ScrollView } from "@gluestack-ui/themed";
import Check from "react-native-vector-icons/AntDesign";
import Hand from "react-native-vector-icons/FontAwesome";
import axios from "axios";
import { FIREBASE_AUTH } from "../../firebase.js";
import { ipAddress } from "../../ipConfig.js";
import { usePaymentSheet, useStripe } from "@stripe/stripe-react-native";

const JoinUs = ({ route }) => {
  const [month, setMonth] = useState(true);
  const [monthly, setMonthly] = useState(false);
  const [yearly, setYearly] = useState(false);
  const [price, setPrice] = useState("80");
  const [membershipDays, setMembershipDays] = useState(30);
  const [memberType, setMemberType] = useState("1 Month");
  const [loading, setLoading] = useState(false);
  const currentUser = FIREBASE_AUTH.currentUser;
  const { gymId } = route.params;
  const { initPaymentSheet, presentPaymentSheet } = useStripe();

  const newMember = async () => {

    try {
      const response = await axios.post(
        `http://${ipAddress}:3000/api/memberShip/post/`,
        {
          type: memberType,
          price: +price,
          userId: currentUser.uid,
          gymId: gymId,
        }
      );

      console.log(response.data);
    } catch (err) {
      console.error(err.message);
    }
  };

  const fetchPaymentSheetParams = async () => {
    const response = await fetch(
      `http://${ipAddress}:3000/api/payment/create-payment-intent`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: +price * 100,
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

  const openPaymentSheet = async () => {
    const { error } = await presentPaymentSheet();

    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      newMember();
      Alert.alert('Success', 'Your order is confirmed!');
    }
  };

  useEffect(() => {
    initializePaymentSheet();
  }, [price]);
  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          justifyContent: "center",
          alignSelf: "center",
          marginTop: "12%",
        }}
      >
        <Text style={styles.Title}> GYM SHARK </Text>
      </View>
      <View style={styles.topBarContainer}></View>
      <View
        style={{
          justifyContent: "center",
          alignSelf: "center",
          marginTop: "7%",
          marginBottom: "-4%",
        }}
      >
        <Text style={{ color: "#9AC61C", letterSpacing: 1 }}>
          {" "}
          Choose Your Membership
        </Text>
      </View>
      <View style={styles.typeContainer}>
        <TouchableOpacity
          onPress={() => {
            setMonth(true);
            setMonthly(false);
            setYearly(false);
            setPrice("85");
            setMembershipDays(30);
            setMemberType("1 Month");
          }}
          style={month ? styles.editType : styles.typeTitle}
        >
          <Text style={month ? styles.editText : styles.type}>1 Month</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={monthly ? styles.editType : styles.typeTitle}
          onPress={() => {
            setMonth(false);
            setMonthly(true);
            setYearly(false);
            setPrice("480");
            setMembershipDays(180);
            setMemberType("6 Months");
          }}
        >
          <Text style={monthly ? styles.editText : styles.type}>6 Month</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={yearly ? styles.editType : styles.typeTitle}
          onPress={() => {
            setMonth(false);
            setMonthly(false);
            setYearly(true);
            setPrice("890");
            setMembershipDays(365);
            setMemberType("1 Year");
          }}
        >
          <Text style={yearly ? styles.editText : styles.type}> 1 Year </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.servicesContainer}>
        <View style={styles.service}>
          <Check name="checkcircleo" style={styles.CheckIcon} />
          <Text style={styles.textCheck}>Get acess to Gymshark membership</Text>
        </View>
        <View style={styles.service}>
          <Check name="checkcircleo" style={styles.CheckIcon} />
          <Text style={styles.textCheck}>Get early access to collection</Text>
        </View>
        <View style={styles.service}>
          <Check name="checkcircleo" style={styles.CheckIcon} />
          <Text style={styles.textCheck}>Get exciting offers</Text>
        </View>
        <View style={styles.service}>
          <Check name="checkcircleo" style={styles.CheckIcon} />
          <Text style={styles.textCheck}>Get delivery free</Text>
        </View>
        <View style={styles.service}>
          <Check name="checkcircleo" style={styles.CheckIcon} />
          <Text style={styles.textCheck}>Get extra cashback</Text>
        </View>
        <TouchableOpacity
          style={styles.joinContainer}
          onPress={() => {
            openPaymentSheet();
          }}
          
        >
          <Text style={styles.joinText}>BUY FOR {price} TND</Text>
        </TouchableOpacity>
        <View style={styles.JoinUs}>
          <Text style={styles.Lasttext}>JOIN US FOR A BETTER EXPERIENCE</Text>
          <Hand name="handshake-o" style={{ color: "#9AC61C" }} />
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  topBarContainer: {
    flexDirection: "row",
    marginTop: "6%",
    width: 350,
    // backgroundColor:"#9AC61C",
    borderColor: "#9AC61C",
    borderRadius: 30,
    borderWidth: 3,
    justifyContent: "center",
    alignSelf: "center",
  },
  Title: {
    color: "white",
    fontSize: 35,
    fontWeight: "bold",
    letterSpacing: 5,
  },
  typeContainer: {
    margin: 40,
    // padding:9,
    flexDirection: "row",
    borderColor: "gray",
    // borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    gap: 12,
  },
  typeTitle: {
    borderColor: "#9AC61C",
    borderWidth: 2,
    borderRadius: 50,
    color: "white",
    padding: 10,
    width: 107,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "800",
  },
  type: {
    color: "#9AC61C",
    fontWeight: "600",
  },
  editType: {
    borderColor: "#9AC61C",
    borderWidth: 2,
    borderRadius: 50,
    backgroundColor: "#9AC61C",
    padding: 10,
    width: 107,
    justifyContent: "center",
    alignItems: "center",
  },
  editText: {
    color: "black",
    fontWeight: "600",
  },
  servicesContainer: {
    flexDirection: "column",
    marginTop: "5%",
    gap: 2,
    borderWidth: 1,
    gap: 28,
    width: "80%",
    alignSelf: "center",
  },
  service: {
    flexDirection: "row",
    gap: 5,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  CheckIcon: {
    color: "#9AC61C",
    fontSize: 24,
    fontWeight: "bold",
  },
  textCheck: {
    color: "#C5C5C5",
    alignSelf: "flex-start",
    textAlign: "left",
    fontSize: 21,
  },
  joinContainer: {
    borderColor: "#9AC61C",
    borderWidth: 2,
    backgroundColor: "#9AC61C",
    borderRadius: 50,
    width: 250,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: "10%",
  },
  joinText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  JoinUs: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10%",
    flexDirection: "row",
    gap: 5,
  },
  Lasttext: {
    fontSize: 10,
    color: "white",
    fontWeight: "500",
  },
});
export default JoinUs;
