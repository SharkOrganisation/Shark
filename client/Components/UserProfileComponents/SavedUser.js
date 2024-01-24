import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const SavedUser = () => {
  
  return (
      <ScrollView>
    <View style={styles.savedContainer}>
      <TouchableOpacity style={styles.savedPosts}>
      <Image source={{uri:"https://upload.wikimedia.org/wikipedia/commons/c/c8/Lionel_Messi_WC2022.jpg"}} styles={{}} height={110} width={100}/>
      <Image source={{uri:"https://s.france24.com/media/display/48615024-e4b0-11eb-9773-005056a90284/w:980/p:16x9/1bb7e4c7fba86598de2f5df9df91cc53fbc8e8c6.jpg"}} styles={styles.imgPost}/>
      <Image source={{uri:"https://s.france24.com/media/display/48615024-e4b0-11eb-9773-005056a90284/w:980/p:16x9/1bb7e4c7fba86598de2f5df9df91cc53fbc8e8c6.jpg"}} styles={styles.imgPost}/>
      <Image source={{uri:"https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt12dbddde5342ce4c/648866ff21a8556da61fa167/GOAL_-_Blank_WEB_-_Facebook_-_2023-06-13T135350.847.png?auto=webp&format=pjpg&width=3840&quality=60"}} styles={styles.imgPost}/>
      </TouchableOpacity>
    </View>
      </ScrollView>
  )
}
const styles = StyleSheet.create({
  savedContainer:{
    flex:1,
    backgroundColor:"black",
  },
  imgPost:{
    width:600,
    height:800,
    borderColor:"red",
    borderWidth:10
    // margin:"10%"
  },
  savedPosts:{
    flexDirection:"row",
    borderColor:"white",
    borderWidth:5,
    marginTop:"5%"
  }
})
export default SavedUser