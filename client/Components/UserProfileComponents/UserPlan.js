import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import UserPlanDetails from "./UserProfileDetails/UserPlanDetails";
import { Caption } from "react-native-paper";
const UserPlan = () => {
  const [view, setView] = useState("main");
  return (
    <ScrollView>
      {view === "main" && (
        <View style={styles.stylePlanContainer}>
          <TouchableOpacity
            style={styles.planCard}
            onPress={() => {
              setView("details");
            }}
          >
            <Image
              // contain="cover"
              source={{
                uri: "https://i.pinimg.com/564x/d7/71/09/d77109e5e0e8177416d9e4b90a20d5c2.jpg",
              }}
              style={styles.imgPlan}
            />
          <Text style={styles.text}>Plan Name</Text>
          </TouchableOpacity>
          
          
        </View>
      )}

      {view === "details" && <UserPlanDetails />}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  stylePlanContainer: {
    padding: 20,
    flexDirection: "row",
    flex: "wrap",
    flexWrap:"wrap",
    justifyContent: "space-evenly"
  },
  planCard:{
    margin:10
  },
  text: {
    color: "white",
    fontSize: 20,
    position:"relative",
    alignSelf: "center",
  },
  imgPlan: {
    width: 150,
    height: 250,
    borderRadius: 25,
    objectFit: "fill",
  },
});
export default UserPlan;
