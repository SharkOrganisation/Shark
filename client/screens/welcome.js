import React from 'react';
import { Text, View, StyleSheet, Button, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'


export default function WelcomeScreen() {


  return (
    <View style={{flex:1}}>
      <StatusBar backgroundColor={'black'}/>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Welcome To</Text>
          <Text style={styles.title}> GymShark</Text>
        </View>
      </View>
    </View>


  );
};

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#9AC61C',
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    letterSpacing: 2,
    worldSpacing:5
  },
  textContainer:{
    alignItems:'center',
    justifyContent: 'center'
  }
});

