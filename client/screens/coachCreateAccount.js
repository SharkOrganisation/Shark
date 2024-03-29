import { View, Text, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, TextInput, ScrollView, Pressable, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import React, { useState } from 'react'
import { FIREBASE_AUTH } from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';
import { setDoc, doc } from 'firebase/firestore';
import { FIRESTORE_DB } from '../firebase';

const CoachCreateAccount = ({ route }) => {
  const [date, setDate] = useState(new Date())
  const [showPicker, setShowPicker] = useState(false)
  const [dateBirth, setDateBirth] = useState()
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [speciality, setSpeciality] = useState('')
  const [perSession, setPerSession] = useState('')

  const { role } = route.params
  const auth = FIREBASE_AUTH
  const navigation = useNavigation()

  const formatDate = (inputDate) => {
    const year = inputDate.getFullYear();
    const month = String(inputDate.getMonth() + 1).padStart(2, '0');
    const day = String(inputDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const toggleDatepicker = () => {
    setShowPicker(!showPicker)
  }

  const onPickerChange = ({ type }, selectedDate) => {
    if (type === 'set') {
      const currentDate = selectedDate || date;
      setDate(currentDate);
      if (Platform.OS === 'android') {
        toggleDatepicker();
        setDateBirth(formatDate(currentDate));
      }
    } else {
      toggleDatepicker();
    }
  };


  const onSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const { user } = userCredential;
      await setDoc(doc(FIRESTORE_DB, "users", user.uid),
      {
          uid: user.uid,
          email: email,
          name: fullname,
          avatar: "https://i.pravatar.cc/300"
      });
      await axios.post(`http://${process.env.EXPO_PUBLIC_IP_ADRESS}:3000/api/auth/addUser/${role}`, {
        id: user.uid,
        fullname,
        email,
        datebirth: dateBirth,
        speciality,
        perSession: parseFloat(perSession)
      })
      Alert.alert('coach added successfully')
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        Alert.alert('Email already exists', 'Please use a different email.');
      } else if (error.code === 'auth/weak-password') {
        Alert.alert('Weak Password', 'Password should be at least 6 characters');
      } else {
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
            placeholderTextColor={'gray'}
            style={styles.Input}
            onChangeText={(value) => setFullname(value)}
          />
        </View>
        <View>
          <Text style={{ color: "#BEFF03", fontWeight: 'bold' }}>E-mail</Text>
          <TextInput
            placeholder='ENTER YOUR EMAIL'
            placeholderTextColor={'gray'}
            style={styles.Input}
            onChangeText={(value) => setEmail(value)}
          />
        </View>
        <View>
          <Text style={{ color: "#BEFF03", fontWeight: 'bold' }}>PASSWORD</Text>
          <TextInput
            placeholder='ENTER YOUR PASSWORD'
            placeholderTextColor={'gray'}
            style={styles.Input}
            secureTextEntry={true}
            onChangeText={(value) => setPassword(value)}
          />
        </View>
        <View>
          <Text style={{ color: "#BEFF03", fontWeight: 'bold' }}>Date Of Birth</Text>


          <Pressable onPress={toggleDatepicker}>
            {
              showPicker && (
                <DateTimePicker
                  mode='date'
                  display='spinner'
                  value={date}
                  onChange={onPickerChange}
                />
              )
            }
            <TextInput
              placeholder='ENTER YOUR DATE OF BIRTH'
              placeholderTextColor={"gray"}
              style={styles.Input}
              editable={false}
              value={dateBirth}
            />
          </Pressable>
        </View>
        <View>
          <Text style={{ color: "#BEFF03", fontWeight: 'bold' }}>SPECIALITY</Text>
          <TextInput
            placeholder='ENTER YOUR SPECIALITY'
            placeholderTextColor={'gray'}
            style={styles.Input}
            onChangeText={(value) => setSpeciality(value)}
          />
        </View>
        <View>
          <Text style={{ color: "#BEFF03", fontWeight: 'bold' }}>PRICE PER SESSION</Text>
          <TextInput p
            laceholder='SESSION PRICE $'
            placeholderTextColor={'gray'}
            style={styles.Input}
            keyboardType='numeric'
            onChangeText={(value) => setPerSession(value)}

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


export default CoachCreateAccount