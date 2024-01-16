import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Following from "../Components/UserProfileComponents/Following.js"
const UserFollowing = () => {
  const [showFollowing,setShowFollowing]=useState("following")
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.navbar}> 
      <Text style={styles.navItemText}>Following</Text>
    </View>
    {showFollowing==="following"&& <Following/>}
    </SafeAreaView>
  )
}
const styles=StyleSheet.create({
  container:{
    flex: 1,
    // paddingVertical: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  navbar:{
    position: 'absolute',
    top: 30,
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    flexDirection: 'row',
    justifyContent: "center",
    width: '100%',
  },
  navItemText:{
    color: '#9AC61C',
    fontSize: 18,
    fontWeight: '600',
    paddingBottom: 4,
    borderBottomColor:"#9AC61C",
    borderBottomWidth: 2,
    // borderWidth:2,
    // borderColor:"white"
  }
})
export default UserFollowing