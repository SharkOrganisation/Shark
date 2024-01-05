import { View, Text, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import React from 'react'

const CoachCreateAccount = ({route}) => {
  const {role} = route.params
  const navigation = useNavigation()

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#9AC61C' }}>
      <StatusBar backgroundColor={'black'} />
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Create</Text>
          <Text style={styles.title}>{role} account</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('welcome',{route})}
        >
          <View style={styles.goBack}>
            <Icon name='caretleft' style={{ color: 'black', fontSize: 22 }} />
            <Text style={styles.goBackText}>Back</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <View>
          <Text style={{ color: "black", fontWeight: 'bold' }}>USERNAME</Text>
          <TextInput placeholder='ENTER YOUR FULLNAME' style={styles.Input} />
        </View>
        <View>
          <Text style={{ color: "black", fontWeight: 'bold' }}>E-mail</Text>
          <TextInput placeholder='ENTER YOUR EMAIL' style={styles.Input} />
        </View>
        <View>
          <Text style={{ color: "black", fontWeight: 'bold' }}>PASSWORD</Text>
          <TextInput placeholder='ENTER YOUR PASSWORD' style={styles.Input} secureTextEntry={true} />
        </View>
        <View>
          <Text style={{ color: "black", fontWeight: 'bold' }}>Date Of Birth</Text>
          <TextInput placeholder='ENTER YOUR DATE OF BIRTH' style={styles.Input} />
        </View>
        <View>
          <Text style={{ color: "black", fontWeight: 'bold' }}>SPECIALITY</Text>
          <TextInput placeholder='ENTER YOUR SPECIALITY' style={styles.Input} />
        </View>
        <View>
          <Text style={{ color: "black", fontWeight: 'bold' }}>PRICE PER SESSION</Text>
          <TextInput placeholder='SESSION PRICE $' style={styles.Input} keyboardType='numeric' />
        </View>

        <TouchableOpacity style={styles.btn}>
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
    textAlign: 'left'

  },
  goBack: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center'
  },
  goBackText: {
    fontSize: 20,
    fontWeight: 'bold',
    textDecorationColor: 'black',
    textDecorationLine: 'underline'
  }, Input: {
    backgroundColor: "transparent",
    borderColor: "black",
    borderWidth: 1,
    color: 'black',
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
    backgroundColor: 'black',
    padding: 18,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    gap: 20,
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  termsContainer:{
    marginVertical:20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  termText:{
    color:'gray',
    fontSize:15,
  },
  underline:{
    textDecorationLine: 'underline',
  }
});


export default CoachCreateAccount