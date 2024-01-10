import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";

const UserPlanDetails = () => {
  return (
    <ScrollView style={styles.Container}>
      <View style>
        <Text style={styles.text}>UserPlanDetails</Text>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  Container:{
    flex: 1,
  },
  text: {
    color: "white",
    fontSize: 30,
  },
  
});
export default UserPlanDetails;
