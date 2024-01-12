import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/EvilIcons'
import Posts from '../../Components/GymProfileComponent/Posts'
import Memberships from '../../Components/GymProfileComponent/Memberships'
import Saved from '../../Components/GymProfileComponent/Saved'
import { useNavigation,useIsFocused } from "@react-navigation/native";
import axios from 'axios'
import { FIREBASE_AUTH } from '../../firebase'
import { ipAddress } from '../../ipConfig'
const GymProfile = () => {
    const [postsActive, setPostsActive] = useState(true)
    const [membershipsActive, setMembershipsActive] = useState(false)
    const [savedActive, setSavedActive] = useState(false)
    const [view, setView] = useState("posts")
    const [gymData, setGymData] = useState([])
    const navigation = useNavigation()
    const isFocused = useIsFocused()
    const currentUser = FIREBASE_AUTH.currentUser


    useEffect(() => {
        axios
            .get(`http://${ipAddress}:3000/api/gym/getOne/${currentUser.uid}`)
            .then((response) => {
                setGymData(response.data)
            })
            .catch((error) => {
                console.log(error);
            })

    }, [isFocused])

    return (
        <ScrollView style={styles.container}>
            <View style={styles.profileInfo}>
                <Image
                    source={{
                        uri: gymData.pfImage
                    }}
                    style={styles.pfImage}
                />
                <View style={styles.profileContainer}>
                    <Text style={styles.profileName}>{gymData.fullname}</Text>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('editGymProfile', { gymData })
                        }}
                    >
                        <Icon name='pencil' style={{ color: '#9AC61C', fontSize: 30 }} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.profileBio}>{gymData.bio}</Text>
            </View>
            <View style={styles.followingAndFollowerContainer}>
                <View style={styles.box}>
                    <Text style={styles.number}>100K</Text>
                    <Text style={styles.text}>FOLLOWERS</Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.number}>90K</Text>
                    <Text style={styles.text}>FOLLOWING</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.followBtn}>
                <Text style={styles.followBtnText}>FOLLOW +</Text>
            </TouchableOpacity>
            <View style={styles.navbar}>
                <TouchableOpacity onPress={() => {
                    setPostsActive(true)
                    setMembershipsActive(false)
                    setSavedActive(false)
                    setView('posts')

                }}>
                    <Text
                        style={[styles.navItemText, postsActive ? { color: "#9AC61C", borderBottomColor: "#9AC61C", borderBottomWidth: 4 } : null]}
                    >
                        Posts
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        setMembershipsActive(true)
                        setPostsActive(false)
                        setSavedActive(false)
                        setView('memberships')
                    }}
                >
                    <Text style={[styles.navItemText, membershipsActive ? { color: "#9AC61C", borderBottomColor: "#9AC61C", borderBottomWidth: 4 } : null]}>Memberships</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        setSavedActive(true)
                        setMembershipsActive(false)
                        setPostsActive(false)
                        setView('saved')
                    }}
                >
                    <Text style={[styles.navItemText, savedActive ? { color: "#9AC61C", borderBottomColor: "#9AC61C", borderBottomWidth: 4 } : null]}>Saved</Text>
                </TouchableOpacity>

            </View>
            {view === 'posts' && <Posts />}
            {view === 'memberships' && <Memberships />}
            {view === 'saved' && <Saved />}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
    },
    profileInfo: {
        marginTop: "5%",
        alignItems: 'center'
    },
    pfImage: {
        width: 120,
        height: 120,
        borderRadius: 100,
        borderColor: "#9AC61C",
        borderWidth: 3,
    },
    profileName: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    profileBio:{
        color: 'white',
        fontSize: 18,
        alignSelf: 'center'
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    followingAndFollowerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: '8%'
    },
    box: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    number: {
        color: 'white',
        fontSize: 23,
        fontWeight: 'bold',
    },
    text: {
        color: 'white',
    },
    followBtn: {
        marginTop: '8%',
        borderColor: "#9AC61C",
        borderWidth: 1,
        width: 150,
        padding: 10,
        alignSelf: 'center',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    followBtnText: {
        color: '#9AC61C',
        fontWeight: '500'
    },
    navbar: {
        marginTop: '8%',
        borderBottomColor: 'white',
        borderBottomWidth: 2,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    navItemText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500',
        paddingBottom: 5,


    }
})

export default GymProfile