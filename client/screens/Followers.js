import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FollowerComponent from '../Components/FollowerComponent';
import FollowingComponent from '../Components/FollowingComponent';
const Followers = () => {
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
                        Followers
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        setFollowersActive(false)
                        setFollowingActive(true)
                        setView('following')
                    }}
                >
                    <Text style={[styles.navItemText, followingActive ? { color: "#9AC61C", borderBottomColor: "#9AC61C", borderBottomWidth: 4 } : null]}>Following</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search..."
                    placeholderTextColor={"gray"}
                />
                <TouchableOpacity
                 style={{
                    position: "absolute",
                    right:15,
                    top:7,
                 }}
                 >
                    <MaterialCommunityIcons
                        name="magnify"
                        size={30}
                        color={"#9AC61C"}
                    />
                </TouchableOpacity>
            </View>
            {view === "followers" && <FollowerComponent/>}
            {view === "following" && <FollowingComponent/>}
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
        borderColor: "#9AC61C",
        borderWidth: 2,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginRight: 10,
        height:50,
        width: 320,
    },
})

export default Followers