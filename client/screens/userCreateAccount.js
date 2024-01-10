import { View, Text, Platform, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, TextInput, ScrollView, Pressable, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import React, { useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
import { FIREBASE_AUTH } from '../firebase'
import axios from 'axios';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const UserCreateAccount = ({ route }) => {
    const [date, setDate] = useState(new Date())
    const [showPicker, setShowPicker] = useState(false)
    const [dateBirth, setDateBirth] = useState()
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [age, setAge] = useState('');
    const { role } = route.params
    const navigation = useNavigation()
    const auth = FIREBASE_AUTH

    const toggleDatepicker = () => {
        setShowPicker(!showPicker)
    }

    const formatDate = (inputDate) => {
        const year = inputDate.getFullYear();
        const month = String(inputDate.getMonth() + 1).padStart(2, '0');
        const day = String(inputDate.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

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

        const heightInMeters = height / 100;
        const bmi = weight / (heightInMeters * heightInMeters);

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            const { user } = userCredential;
            await axios.post(`http://${process.env.EXPO_PUBLIC_IP_ADRESS}:3000/api/auth/addUser/${role}`, {
                id: user.uid,
                fullname,
                email,
                datebirth: dateBirth,
                age: +age,
                bmi
            })
            Alert.alert('user added successfully')


        } catch (error) {
            console.log(error.code)
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
                        placeholderTextColor={"gray"}
                        style={styles.Input}
                        onChangeText={(value) => setFullname(value)}
                    />
                </View>
                <View>
                    <Text style={{ color: "#BEFF03", fontWeight: 'bold' }}>E-mail</Text>
                    <TextInput
                        placeholder='ENTER YOUR EMAIL'
                        placeholderTextColor={"gray"}
                        style={styles.Input}
                        onChangeText={(value) => setEmail(value)}
                    />
                </View>
                <View>
                    <Text style={{ color: "#BEFF03", fontWeight: 'bold' }}>PASSWORD</Text>
                    <TextInput
                        placeholder='ENTER YOUR PASSWORD'
                        placeholderTextColor={"gray"}
                        style={styles.Input} secureTextEntry={true}
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
                <View style={styles.smallInptContainer}>
                    <View>
                        <Text style={{ color: "#BEFF03", fontWeight: 'bold' }} >Height</Text>
                        <TextInput
                            style={styles.smallInput}
                            keyboardType="numeric"
                            onChangeText={(value) => setHeight(value)}
                        />
                    </View>
                    <View>
                        <Text style={{ color: "#BEFF03", fontWeight: 'bold' }}>Weight</Text>
                        <TextInput
                            style={styles.smallInput}
                            keyboardType="numeric"
                            onChangeText={(value) => setWeight(value)}
                        />
                    </View>
                    <View>
                        <Text style={{ color: "#BEFF03", fontWeight: 'bold' }}>Age</Text>
                        <TextInput
                            style={styles.smallInput}
                            keyboardType="numeric"
                            onChangeText={(value) => setAge(value)}
                        />
                    </View>
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
        color: "#BEFF03"

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
        color: "#BEFF03"
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
    smallInptContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 350
    },
    smallInput: {
        width: 90,
        height: 50,
        backgroundColor: "transparent",
        borderColor: "#BEFF03",
        borderWidth: 1,
        color: 'white',
        borderRadius: 10,
        padding: 5,
        color: '#BEFF03',
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
        color: 'black',
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



export default UserCreateAccount