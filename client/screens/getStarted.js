import { View, Text, StyleSheet, Image, TouchableOpacity, Alert,Vibration, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native'
import { useNavigation , useRoute } from '@react-navigation/native';
import GymLogo from 'react-native-vector-icons/FontAwesome'
import UserLogo from 'react-native-vector-icons/Entypo'

const GetStarted = () => {
    const [role, setRole] = useState('')
    const [disabled, setDisabled] = useState(true)
    const [borderGym,setBorderGym] = useState(false)
    const [borderUser,setBorderUser] = useState(false)
    const [borderCoach,setBorderCoach] = useState(false)


    const navigation = useNavigation()
    const route = useRoute();

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>

            
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
            <View style={styles.titleContainer}>
                <Text style={styles.title}> Who You Are?</Text>
            </View>
            <View style={styles.titleContainer}>
                <TouchableOpacity
                    onPress={() => {
                        setRole('coach')
                        setDisabled(false)
                        setBorderCoach(true)
                        setBorderGym(false)
                        setBorderUser(false)
                    }}
                >
                    <Image source={require("../assets/LogoUsers/Coach.png")} style={[styles.coachImage,{borderWidth: borderCoach ? 8 : 1}]} />
                </TouchableOpacity>
                <Text style={styles.textAvatar}>Coach</Text>
            </View>
            <View style={styles.allIcons}>
                <View style={styles.avatarContainer}>
                    <TouchableOpacity
                        style={[styles.avatar,{borderWidth: borderGym ? 8 : 1}]}
                        onPress={() => {
                            setRole('Gym')
                            setDisabled(false)
                            setBorderGym(true)
                            setBorderCoach(false)
                            setBorderUser(false)
                        }}
                    >
                        <GymLogo name="building" style={styles.iconGym} />
                    </TouchableOpacity>
                    <Text style={styles.textAvatar}>Gym Owner</Text>
                </View>
                <View style={styles.avatarContainer}>
                    <TouchableOpacity
                        style={[styles.avatar,{borderWidth: borderUser ? 8 : 1}]}
                        onPress={() => {
                            setRole('user')
                            setDisabled(false)
                            setBorderGym(false)
                            setBorderCoach(false)
                            setBorderUser(true)
                        }}
                    >
                        <UserLogo name="user" style={styles.iconGym} />
                    </TouchableOpacity>
                    <Text style={styles.textAvatar}>User</Text>
                </View>

            </View>

            <View style={styles.Started}>
                <TouchableOpacity
                    style={[styles.btnStarted, { opacity: disabled ? 0.5 : 1 }]}
                    onPress={() => {
                        if (disabled) {
                            Alert.alert("Please Select A Role");
                            Vibration.vibrate()
                        } else {
                            navigation.navigate('welcome',{role})
                        }
                    }}
                >
                    <Text
                        style={styles.textStarted}>Get Started</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        alignContent: "center",
        justifyContent: "center",
    },
    image1: {
        overflow: "hidden",
        width: 90,
        aspectRatio: "1.7",
    },
    logo: {
        alignItems: 'center',
        marginTop: '15%',
        marginBottom: '9%',
    },
    logoText: {
        fontWeight: '900',
        fontSize: 12,
        color: "#BEFF03"
    },
    titleContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        color: "gray",
        fontWeight: '900',
        fontSize: 50,
        marginTop: 30,
        marginBottom: 50,
        textTransform: "uppercase",
    },
    allIcons: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"

    },
    iconGym: {
        color: "#BEFF03",
        fontSize: 60,
        textAlign: "center",
    },
    iconUser: {
        maxHeight: 30
    },
    textStarted: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    btnStarted: {
        backgroundColor: "#BEFF03",
        width: 270,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginTop: 100,
        marginBottom: 50,

    },
    Started: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    coachImage: {
        width: 120,
        height: 120,
        objectFit: 'contain',
        borderColor: "#BEFF03",
        borderWidth: 2,
        padding: 20,
        borderRadius: 100,

    },
    avatarContainer: {
        alignItems: 'center',
    },
    avatar: {
        borderColor: "#BEFF03",
        borderWidth: 2,
        padding: 20,
        width: 120,
        height: 120,
        borderRadius: 100
    },
    textAvatar: {
        color: "#BEFF03",
        fontSize: 21,
        fontWeight: 'bold',
    }



})


export default GetStarted