import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const ExercicesDetails = ({ data }) => {
  // console.log(data.Exercice.gifUrl);
  return (
    <View style={styles.Container}>
      <View style={styles.leftContainer}>
        <Image
          style={styles.exerciceImg}
          source={{ uri: data.Exercice.gifUrl }}
        />
        <View style={styles.Repeat}>
          <View style={styles.RepatSets}>
            <Text style={styles.title}> Sets:</Text>
            <Text style={styles.Content}> {data.sets}</Text>
          </View>
          <View style={styles.RepatSets}>
            <Text style={styles.title}> Reps: </Text>
            <Text style={styles.Content}> {data.reps}</Text>
          </View>
        </View>
      </View>
      <View style={styles.rightContainer}>
          <View style={styles.details}>
            <Text style={styles.title}>Name:</Text>
            <Text style={styles.Content}>{data.Exercice.name}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.title}>BodyPart:</Text>
            <Text style={styles.Content}>{data.Exercice.bodyPart}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.title}>Target:</Text>
            <Text style={styles.Content}>{data.Exercice.target}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.title}>Equipment:</Text>
            <Text style={styles.Content}>{data.Exercice.equipment}</Text>
          </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    flexDirection: "row",
    gap:2,
    marginTop:15,
    marginLeft:"-14%"
  },
  leftContainer: {
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    gap:10,
    marginLeft:"15%"
  },
  exerciceImg: {
    width: 150,
    height: 190,
    borderRadius: 25,
    objectFit: "fill",
    margin:2
  },
  Repeat: {
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center"
  },
  RepatSets:{
    justifyContent:"center",
    alignItems:"center"
  },
  title:{
    color:"#9AC61C",
    fontWeight:"800",
    fontSize:15
  },
  Content:{
    color:"white",
    fontWeight:"bold",
    fontSize:15
  },
  rightContainer:{
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    gap:5,
    marginLeft:"-1%",
    marginRight:"12%",
    width:190

  },
  details:{
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    gap:2
  }

});
export default ExercicesDetails;
