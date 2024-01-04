import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import GymLogo from 'react-native-vector-icons/FontAwesome'
import UserLogo from 'react-native-vector-icons/Entypo'

const GetStarted = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={styles.container}>
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
                <TouchableOpacity >
                    <Image source={require("../assets/LogoUsers/Coach.png")} style={styles.coachImage} />
                </TouchableOpacity>
                <Text style={styles.textAvatar}>Coach</Text>
            </View>
            <View style={styles.allIcons}>
                <View style={styles.avatarContainer}>
                    <TouchableOpacity style={styles.avatar}>
                        <GymLogo name="building" style={styles.iconGym} />
                    </TouchableOpacity>
                    <Text style={styles.textAvatar}>Gym Owner</Text>
                </View>
                <View style={styles.avatarContainer}>
                    <TouchableOpacity style={styles.avatar}>
                        <UserLogo name="user" style={styles.iconGym} />
                    </TouchableOpacity>
                    <Text style={styles.textAvatar}>User</Text>
                </View>

            </View>

            <View style={styles.Started}>
                <TouchableOpacity 
                style={styles.btnStarted}
                onPress={()=>{
                    navigation.navigate('welcome')
                }}
                >
                    <Text style={styles.textStarted}>Get Started</Text>
                </TouchableOpacity>
            </View>

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
        marginTop:'5%',
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
        marginTop:30,
        marginBottom:50
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
    },
    btnStarted: {
        backgroundColor: "#BEFF03",
        width: 270,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginTop: 130,
        marginBottom:50,
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
        borderRadius: '100%'

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
        borderRadius: '100%'
    },
    textAvatar: {
        color: "#BEFF03",
        fontSize: 21,
        fontWeight: 'bold',
    }



})


export default GetStarted