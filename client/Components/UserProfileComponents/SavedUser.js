import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const SavedUser = () => {
  return (
      <ScrollView>
    <View style={styles.savedContainer}>
      <TouchableOpacity style={styles.savedPosts}>
      <Image source={{uri:""}} styles={styles.imgPost}/>
      <Image source={{uri:""}} styles={styles.imgPost}/>
      <Image source={{uri:""}} styles={styles.imgPost}/>
      <Image source={{uri:""}} styles={styles.imgPost}/>
      </TouchableOpacity>
    </View>
      </ScrollView>
  )
}
const styles = StyleSheet.create({
  savedContainer:{
    flex:1,
    backgroundColor:"black"
  },
  imgPost:{

  },
  savedPosts:{
    flexDirection:"row",
    
  }
})
export default SavedUser