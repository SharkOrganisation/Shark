import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import CoachFollowing from '../Components/CoachProfile/CoachFollowing';
import CoachFollowers from '../Components/CoachProfile/CoachFollowers';
const CoachFollow = () => {
    const [follwersActive, setFollowersActive] = useState(true)
    const [followingActive, setFollowingActive] = useState(false)
    const [view, setView] = useState("followers")

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.navbar}>
                <TouchableOpacity onPress={() => {
                    setFollowersActive(true)
                    setFollowingActive(false)
                    setView('followers')

                }}>
                    <Text
                        style={[styles.navItemText, follwersActive ? { color: "#9AC61C", borderBottomColor: "#9AC61C", borderBottomWidth: 4 } : null]}
                    >
                        Following
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        setFollowersActive(false)
                        setFollowingActive(true)
                        setView('following')
                    }}
                >
                    <Text style={[styles.navItemText, followingActive ? { color: "#9AC61C", borderBottomColor: "#9AC61C", borderBottomWidth: 4 } : null]}>Followers</Text>
                </TouchableOpacity>
            </View>

            {view === "followers" && <CoachFollowers/>}
            {view === "following" && <CoachFollowing/>}
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
    navbar: {
        position: "absolute",
        top: 30,
        borderBottomColor: "white",
        borderBottomWidth: 2,
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
        gap: 20,
    },
    navItemText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500',
        paddingBottom: 5,


    },
    searchContainer: {
        flexDirection: "row",
        position:"absolute",
        top:90
    },
    searchInput: {
        backgroundColor: "transparent",
        color: "white",
        borderColor: "#9AC61C",
        borderWidth: 2,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginRight: 10,
        height:50,
        width: 320,
    },
})

export default CoachFollow