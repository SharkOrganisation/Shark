import React, { useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, StatusBar, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import Facebook from 'react-native-vector-icons/Entypo'
import Icon from 'react-native-vector-icons/AntDesign'


export default function WelcomeScreen({route}) {

  const navigation = useNavigation()
  const {role} = route.params

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#9AC61C' }}>
      <StatusBar backgroundColor={'black'} />
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image
            resizeMode="contain"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/1d6ac96ecf3ac7fe4d95439a91ba1bd0cb1e5ea6bdebd8f592a73845e134f838",
            }}
            style={styles.image1}
          />
          <Text style={styles.logoText}>GYMSHARK</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Welcome To</Text>
          <Text style={styles.title}> Gymshark</Text>
          <Text style={styles.subtitle}>Create an account</Text>
        </View>
        <View style={styles.btnGroup}>
          <TouchableOpacity style={styles.btn}>
            <Facebook name='facebook-with-circle' style={{ color: 'white', fontSize: 22 }} />
            <Text style={styles.btnText}>CONTINUE WITH FACEBOOK</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Icon name='google' style={{ color: 'white', fontSize: 22 }} />
            <Text style={styles.btnText}>CONTINUE WITH GOOGLE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Icon name='apple1' style={{ color: 'white', fontSize: 22 }} />
            <Text style={styles.btnText}>CONTINUE WITH APPLE</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginVertical: 30 }}>
          <Text style={{ fontSize: 18 }}>Or</Text>
        </View>
        <TouchableOpacity 
        onPress={()=>{
          if(role === 'user'){
            navigation.navigate('createUser',{role});
          }else if(role === 'Gym'){
            navigation.navigate('createGym',{role});
          }else if(role === 'coach'){
            navigation.navigate('createCoach',{role});
          }
        }}
        style={styles.btnCreate}>
          <Text style={styles.btnTextCreate}>Create an account</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginTop: 25 }}
          onPress={() => {
            navigation.navigate('login',{role});
          }}
        >
          <Text
            style={{ textTransform: 'uppercase', fontWeight: 'bold', textDecorationLine: 'underline' }}>login</Text>
        </TouchableOpacity>
        <Text style={{ marginTop: '10%' }} >© GYMSHARK COMMUNITY</Text>
      </View>
    </SafeAreaView>


  );
};

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#9AC61C',
    flex: 1,
    paddingVertical: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    fontWeight: '800',
    letterSpacing: 2,
  },
  subtitle: {
    fontSize: 18,
    marginVertical: '10%',
    fontWeight: '500'
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    alignItems: 'center',
    marginBottom: '9%',
  },
  logoText: {
    fontWeight: '900',
    fontSize: 12,
  },
  image1: {
    overflow: "hidden",
    width: 90,
    aspectRatio: "1.7",
  },
  btnGroup: {
    flexDirection: 'column',
    gap: 20,

  },
  btn: {
    width: 300,
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 20,
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
  },
  btnCreate: {
    backgroundColor: 'transparent',
    borderColor: 'black',
    borderWidth: 1,
    width: 250,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
  },
  btnTextCreate: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  }
});