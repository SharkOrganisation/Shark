import { View, Text, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import React, { useState } from 'react'
import { FIREBASE_AUTH } from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import axios from 'axios';

const GymCreateAccount = ({ route }) => {
  const { role } = route.params
  const auth = FIREBASE_AUTH
  const navigation = useNavigation({ route })
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [type, setType] = useState('')
  const [location, setLocation] = useState('')


  const onSignUp = async () => {


    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const { user } = userCredential;
      await axios.post(`http://${process.env.EXPO_PUBLIC_IP_ADRESS}:3000/api/auth/addUser/${role}`, {
        id: user.uid,
        fullname,
        email,
        type,
        location
      })
      Alert.alert('Gym added successfully')

    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        Alert.alert('Email already exists', 'Please use a different email.');
      }else if(error.code === 'auth/weak-password'){
        Alert.alert('Weak Password', 'Password should be at least 6 characters');
      }
       else {
        console.log(error.message);
      }
    }


  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'black' }}>
      <StatusBar backgroundColor={'black'} />
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Create</Text>
          <Text style={styles.title}>{role} account</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('welcome', { route })}
        >
          <View style={styles.goBack}>
            <Icon name='caretleft' style={{ color: '#BEFF03', fontSize: 22 }} />
            <Text style={styles.goBackText}>Back</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <View>
          <Text style={{ color: "#BEFF03", fontWeight: 'bold' }}>USERNAME</Text>
          <TextInput
            placeholder='ENTER YOUR FULLNAME'
            placeholderTextColor={"#BEFF03"}
            style={styles.Input}
            onChangeText={(value) => setFullname(value)}
          />
        </View>
        <View>
          <Text style={{ color: "#BEFF03", fontWeight: 'bold' }}>E-mail</Text>
          <TextInput
            placeholder='ENTER YOUR EMAIL'
            placeholderTextColor={"#BEFF03"}
            style={styles.Input}
            onChangeText={(value) => setEmail(value)}
          />
        </View>
        <View>
          <Text style={{ color: "#BEFF03", fontWeight: 'bold' }}>PASSWORD</Text>
          <TextInput
            placeholder='ENTER YOUR PASSWORD'
            placeholderTextColor={"#BEFF03"}
            style={styles.Input} secureTextEntry={true}
            onChangeText={(value) => setPassword(value)}
          />
        </View>
        <View>
          <Text style={{ color: "#BEFF03", fontWeight: 'bold' }}>TYPE</Text>
          <TextInput
            placeholder='ENTER YOUR GYM TYPE'
            placeholderTextColor={"#BEFF03"}
            style={styles.Input}
            onChangeText={(value) => setType(value)}
          />
        </View>
        <View>
          <Text style={{ color: "#BEFF03", fontWeight: 'bold' }}>LOCATION</Text>
          <TextInput
            placeholder='ENTER YOUR LOCATION'
            placeholderTextColor={"#BEFF03"}
            style={styles.Input}
            onChangeText={(value) => setLocation(value)}
          />
        </View>
        <TouchableOpacity
          style={styles.btn}
          onPress={onSignUp}
        >
          <Text style={styles.btnText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.termsContainer}>
        <Text style={styles.termText}>By continuing you have accepted the <Text style={styles.underline}>terms</Text></Text>
        <Text style={styles.termText}> <Text style={styles.underline}>and condition</Text> of the company</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#9AC61C',
    flex: 1,
    paddingVertical: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  header: {
    padding: 10,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    textAlign: 'left',
    color: '#BEFF03'

  },
  goBack: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center'
  },
  goBackText: {
    fontSize: 20,
    fontWeight: 'bold',
    textDecorationColor: '#BEFF03',
    textDecorationLine: 'underline',
    color: '#BEFF03'
  }, Input: {
    backgroundColor: "transparent",
    borderColor: "#BEFF03",
    borderWidth: 1,
    color: '#BEFF03',
    borderRadius: 10,
    marginRight: 10,
    width: 350,
    height: 50,
    padding: 10
  },
  inputContainer: {
    marginTop: '8%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30
  },
  btn: {
    width: 250,
    backgroundColor: '#BEFF03',
    padding: 18,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    gap: 20,
  },
  btnText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  termsContainer: {
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  termText: {
    color: 'gray',
    fontSize: 15,
  },
  underline: {
    textDecorationLine: 'underline',
  }
});

export default GymCreateAccount