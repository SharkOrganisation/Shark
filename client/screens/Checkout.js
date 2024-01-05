import React from "react";
import { View, Text, StyleSheet , TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Checkout() {
  return (
    <View style={styles.container}>
      <View style={styles.pageTitle}>
       <TouchableOpacity>   
        <Ionicons name="arrow-back-circle-sharp" style={styles.icon} size={40} color="#97d91c" />
          </TouchableOpacity>
        <Text style={styles.text}>Checkout</Text>
      </View>
      <View> 
      <Text style={{ fontSize: 20, color: 'white', fontWeight:"bold", top:100 , left:20 }}>Shipping adress</Text>
      <Text style={{fontSize: 18, color: 'gray',left:20, top:120 }}>hjqchskhsqc scqjhcqj csqjnkhx scjx jbk xw nks yuc sqc</Text>
      </View>

      <View>
      <Text style={{fontSize: 20, color: 'black',left:20, top:120, borderBottomColor:"white",borderWidth:3, padding:8}}>hj</Text>
      </View>

      <View style={styles.totprice}>
      <View style={styles.label}>
      <Text style={styles.textWrapper}>Total Items 1</Text>
      </View>
      <View style={{}}>
      <Text style={{color:"white" ,top:178,fontSize:20, left:300}}> Rp 89.000</Text>
      </View>
      <View style={{ fontWeight: 'bold' }}>
      <Text style={styles.total}>Total</Text>
     </View>
      <Text style={{color:"white" ,top:170,fontSize:35, left:230}}> Rp 89.000</Text>
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
     <TouchableOpacity style={styles.pay}>
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
  icon:{
marginLeft:15,
  },
  label: {
    top:200,
    height: 15,
    width: 72,
    left:20
    // Consider using a wrapper with position: 'absolute' or 'relative' to position within a parent
  },
  textWrapper: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '400',
    textAlign: 'center',
  },
  total:{
    color: '#ffffff',
    left:20,
    top:220,
    fontSize:25,
  },
  totprice:{
    top:-50,
  },
  container2: {
    gap:15,
    top:55,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'black',
    borderWidth: 4,
    borderColor: "#97d91c",
    padding: 17,
    borderRadius: 80,
    width:350,
  },
  buttonText: {
    color: '#9ac61c',
    textAlign: 'center',
    fontSize:30
  },
  pay:{
    backgroundColor: "#97d91c",
    borderWidth: 2,
    padding: 6,
    borderRadius: 40,
    width:200,
    left:110,
    bottom:20,
  },
  PayText:{
    color:'black',
    textAlign: 'center',
    fontSize:30
  }
});
