import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Dropdown from "../Components/Dropdown";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";

const CreateProgram = () => {
  const data = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  const handleDropdownChange = (value) => {
    console.log("Selected value:", value);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.pageTitle}>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="arrow-left-box"
              size={40}
              color={"black"}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Create Program</Text>
        </View>
        <View style={styles.searchContainer}>
          <TextInput style={styles.searchInput} placeholder="Search..." />
          <TouchableOpacity>
            <MaterialCommunityIcons name="magnify" size={30} color={"black"} />
          </TouchableOpacity>
        </View>
      </View>
      <Dropdown items={data} onValueChange={handleDropdownChange} />
      <View style={styles.inputContainer}>
        <View>
          <TextInput placeholder="" style={styles.input} />
          <TouchableOpacity style={styles.plusBtn}>
            <Entypo
              name="squared-plus"
              size={30}
              color={"#9AC61C"}
            />
          </TouchableOpacity>
        </View>
        <View>
          <TextInput placeholder="" style={styles.input} />
          <TouchableOpacity style={styles.plusBtn}>
            <Entypo
              name="squared-plus"
              size={30}
              color={"#9AC61C"}
            />
          </TouchableOpacity>
        </View>
        <View>
          <TextInput placeholder="" style={styles.input} />
          <TouchableOpacity style={styles.plusBtn}>
            <Entypo
              name="squared-plus"
              size={30}
              color={"#9AC61C"}
            />
          </TouchableOpacity>
        </View>
        <View>
          <TextInput placeholder="" style={styles.input} />
          <TouchableOpacity style={styles.plusBtn}>
            <Entypo
              name="squared-plus"
              size={30}
              color={"#9AC61C"}
            />
          </TouchableOpacity>
        </View>
        <View>
          <TextInput placeholder="" style={styles.input} />
          <TouchableOpacity style={styles.plusBtn}>
            <Entypo
              name="squared-plus"
              size={30}
              color={"#9AC61C"}
            />
          </TouchableOpacity>
        </View>
        <View style={{width:'100%', justifyContent:'center', alignItems:'center'}}>
        <TouchableOpacity style={styles.doneBtn}>
          <Text style={styles.btnText}>Done</Text>
        </TouchableOpacity>
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
  title: {
    flex: 1,
    textAlign: "center",
    fontWeight: "900",
    letterSpacing: 1,
  },
  header: {
    backgroundColor: "#9AC61C",
    marginTop: "10%",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: 50,
    paddingHorizontal: 10,
    borderBottomEndRadius: 150,
    borderBottomStartRadius: 150,
  },
  pageTitle: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  searchContainer: {
    flexDirection: "row",
    marginTop: "10%",
  },
  searchInput: {
    backgroundColor: "transparent",
    borderColor: "black",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 100,
    marginRight: 10,
    width: 250,
  },
  inputContainer: {
    flexDirection: "column",
    gap: 25,
    justifyContent: "center",
    marginTop: 80,

  },
  input: {
    color: "white",
    borderWidth: 1,
    borderColor: "#BEFF03",
    width: "100%",
    padding: 15,
    borderRadius: 10,
  },
  plusBtn: {
    position: "absolute",
    right: 10,
    top: 10,
  },
  doneBtn:{
    backgroundColor:"#BEFF03",
    width:150,
    padding:15,
    borderRadius: 10,
   
  },
  btnText:{
    textAlign: "center",
    fontSize:21,
    fontWeight:'bold'
  }
});

export default CreateProgram;
