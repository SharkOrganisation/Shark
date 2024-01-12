import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import React from "react";

const UserPlanDetails = ({ data }) => {
  console.log(data);
  return (
    <ScrollView style={styles.Container}>
      <View style={styles.planContainer}>
        {/* <View style={styles.PlanTitleContainer}>
          <Text style={styles.planTitle}>Plan Name:</Text>
          <Text style={styles.planContent}>{data.name}</Text>
        </View> */}
        <Text style={styles.planTitle}>My Coach:</Text>
        <View style={styles.CoachContainer}>
          <Image
            style={styles.imgCoach}
            source={{ uri: `${data.Coach.pfImage}` }}
          />
          <Text style={styles.planContent}>{data.Coach.fullname}</Text>
        </View>
        <Text style={styles.planTitle}>My Diet:</Text>
        <View style={styles.planContainer}>
          <Text style={styles.planContent}> {data.Diet.name}</Text>
          <Text style={styles.planContent}>{data.Diet.meals}</Text>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  planContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    margin: 10,
  },
  PlanTitleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    margin: 10,
  },
  CoachContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  },
  planTitle: {
    color: "#999999",
    fontSize: 20,
    fontWeight: "bold",
  },
  planContent: {
    color: "white",
    fontWeight: "900",
    fontWeight: 15,
    fontSize: 20,
  },
  imgCoach: {
    borderRadius: "100%",
    borderColor: "#E5E4E2",
    objectFit: "fill",
    borderWidth: 1,
    height: 55,
    width: 50,
    // justifyContent:"center",
    // alignItems:"center"
  },
});
export default UserPlanDetails;
