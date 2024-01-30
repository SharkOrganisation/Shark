import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FIREBASE_AUTH } from "../../firebase.js";
import { ipAddress } from "../../ipConfig";
import SavedUserDetails from "./UserProfileDetails/SavedUserDetails.js"

const SavedUser = () => {
  const [SavedPosts,setSavedPosts]=useState([])
  const [postDetails,setPostDetails]=useState('onePost')
  const user = FIREBASE_AUTH.currentUser;

  const getSavedPosts=async()=>{
    try{
      const saved=await axios.get(`http://${ipAddress}:3000/api/savedPost/${user.uid}`)
      setSavedPosts(saved.data)
    }catch(err){
      <Text> Try Later </Text>
    }
  }
console.log(SavedPosts);
  useEffect(()=>{
      getSavedPosts()
  },[])
  return (
      <ScrollView style={styles.savedContainer}>
{  postDetails=== "onePost" &&  <TouchableOpacity style={styles.Container} onPress={()=>{
      setPostDetails("Details")
    }}>
      {SavedPosts.map((post,index)=>{return( index<2 && 
      <View style={styles.savedPosts} key={post.Post.id}>
      <Image source={{uri:post.Post.image[0]}} styles={{}} height={110} width={100}/>
      </View>
        )})}
        {SavedPosts.map(((post,index)=>{return(index>=2&&
        <View style={styles.savedPosts} key={post.id}>
      <Image source={{uri:post.Post.image[0]}} styles={{}} height={110} width={100}/>
        </View>
          )}))}
      </TouchableOpacity>}
      {postDetails==="Details" && SavedPosts.map((post)=>{return (
        
        <SavedUserDetails data={post}/>
      )})}
      </ScrollView>
  )
}
const styles = StyleSheet.create({
  savedContainer:{
    flex:1,
    backgroundColor:"black",
  },
  savedPosts:{
    flexDirection:"row",
    gap:10,
    marginTop:"2%",
    margin:"2%"
  },
  Container:{
    margin:"5%",
    borderColor:"gray",
    borderWidth:2,
    width:"52%",
    borderRadius:16
  },

})
export default SavedUser