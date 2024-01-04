
import React from 'react';
import { View, Text, Image,Button, StyleSheet ,TouchableOpacity} from 'react-native';


export default function Paiment() {

   
  return (
    <View style={styles.container}>
    <View style={styles.KKK  } >
      <Text style={styles.text}>Payment Success</Text>
    </View>
    <View>
      <Button title="Success"  />
    </View>
    
    
  </View>

  );
};


const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#97d91c',
      },
    KKK: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      text: {
        marginBottom:600,
        fontSize: 20,
        // fontFamily: 'Cochin',
      },
      successButton: {
        backgroundColor: '#97d91c', // Background color for the button
        padding: 10,
        borderRadius: 5,
        
      },
     
  
})

