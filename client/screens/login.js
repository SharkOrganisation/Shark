import React, { useState } from 'react'
import { View, Text, SafeAreaView, StatusBar, StyleSheet, Image, TextInput, TouchableOpacity,Alert } from 'react-native'
import { FIREBASE_AUTH } from '../firebase'
import {signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigation } from '@react-navigation/native';
import AlertMessage from '../Components/AlertMessage';
import { ipAddress } from '../ipConfig';

const Login = ({ route }) => {
    const { role } = route.params;
    const auth = FIREBASE_AUTH;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
    const [isAlertVisible, setAlertVisible] = useState(false);
    const [alertTitle, setAlertTitle] = useState('');
    const [alertMessage, setAlertMessage] = useState('');
    const [gym,setGym] = useState()

    const signIn = async () => {




        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            // console.log(response);
            setAlertTitle('Success');
            setAlertMessage('User logged in successfully');
            setAlertVisible(true);
            // navigation.navigate('Allproducts',{role})
            navigation.navigate('tabs', { role });
        } catch (error) {
            console.log(error.code);
            if (error.code === 'auth/invalid-credential') {
                setAlertTitle('Wrong Credentials');
                setAlertMessage('Please Check Your Credentials!');
            } else if (error.code === 'auth/invalid-email') {
                setAlertTitle('Invalid Email');
                setAlertMessage('Please Check your email');
            } else {
                console.log(error.message);
            }
            setAlertVisible(true);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={'black'} />
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
            <Text style={styles.title}>LOGIN</Text>
            <View style={styles.inputContainer}>
                <View>
                    <Text style={{ color: "#BEFF03" }}>E-mail</Text>
                    <TextInput
                        style={styles.Input}
                        onChangeText={(value) => setEmail(value)}
                    />
                </View>

                <View>
                    <View style={styles.lable}>
                        <Text style={{ color: "#BEFF03" }}>PASSWORD</Text>
                        <TouchableOpacity
                        onPress={()=>{
                            navigation.navigate('resetPassword',{role})
                        }}
                        >
                            <Text style={{ color: "#BEFF03", fontSize: 8 }}>FORGOT PASSWORD ?</Text>
                        </TouchableOpacity>
                    </View>
                    <TextInput
                        style={styles.Input}
                        secureTextEntry={true}
                        onChangeText={(value) => setPassword(value)}

                    />
                </View>
            </View>
            <TouchableOpacity 
            style={styles.loginBtn}
            onPress={signIn}
            >
                <Text style={{ fontWeight: 'bold' }}>LOGIN</Text>
            </TouchableOpacity>
            <Text style={{ marginTop: '20%', color: "#BEFF03" }} >© GYMSHARK COMMUNITY</Text>

            <AlertMessage
                modalVisible={isAlertVisible}
                setModalVisible={setAlertVisible}
                title={alertTitle}
                message={alertMessage}
            />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 50,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: 'black'
    },
    image1: {
        overflow: "hidden",
        width: 90,
        aspectRatio: "1.7",
    },
    logo: {
        alignItems: 'center',
        marginBottom: '9%',
    },
    logoText: {
        fontWeight: '900',
        fontSize: 12,
        color: "#BEFF03"
    },
    title: {
        color: "#BEFF03",
        fontSize: 60,
        fontWeight: "700",
        marginVertical: 50
    },
    Input: {
        backgroundColor: "transparent",
        borderColor: "#BEFF03",
        borderWidth: 1,
        color: 'white',
        paddingHorizontal: 10,
        borderRadius: 10,
        marginRight: 10,
        width: 350,
        height: 50,
    },
    inputContainer: {
        flexDirection: 'column',
        gap: 50
    },
    lable: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    loginBtn:{
        backgroundColor:"#BEFF03",
        width:270,
        padding:20,
        justifyContent:'center',
        alignItems: 'center',
        borderRadius:10,
        marginVertical:50
    }
})

export default Login;