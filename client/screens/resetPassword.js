import React, { useState } from 'react'
import { View, Text, SafeAreaView, StatusBar, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import { FIREBASE_AUTH } from '../firebase'
import { fetchSignInMethodsForEmail, sendPasswordResetEmail } from 'firebase/auth'
import { useNavigation } from '@react-navigation/native';


const ResetPassword = ({route}) => {
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH
    const navigation = useNavigation()
    const {role} = route.params

    const handlePasswordReset = async () => {
        try {
            if (!email) {
                return;
            }
            setLoading(true);
            await sendPasswordResetEmail(auth, email);
            console.log('Password reset email sent successfully');
            setLoading(false);
            navigation.navigate('login',{role});
        } catch (error) {
            console.error('Error sending password reset email:', error.message);
            setLoading(false);
            Alert.alert('Invalid E-mail','Please Check Your Email Address')
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
            <Text style={styles.title}>RESET PASSWORD</Text>
            <View style={styles.inputContainer}>
                <View>
                    <Text style={{ color: "#BEFF03" }}>E-mail</Text>
                    <TextInput
                        style={styles.Input}
                        onChangeText={(value) => setEmail(value)}
                    />
                </View>


            </View>
            <TouchableOpacity
                style={styles.loginBtn}
                onPress={handlePasswordReset}
                disabled={loading}
            >
                <Text style={{ fontWeight: 'bold' }}>{loading ? 'LOADING ...' : 'SEND'}</Text>
            </TouchableOpacity>
            <Text style={{ marginTop: '20%', color: "#BEFF03" }} >© GYMSHARK COMMUNITY</Text>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 50,
        alignItems: 'center',
        justifyContent: 'center',
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
        fontSize: 30,
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
    loginBtn: {
        backgroundColor: "#BEFF03",
        width: 270,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginVertical: 50
    }
})

export default ResetPassword