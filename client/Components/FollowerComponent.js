import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import { ipAddress } from '../ipConfig'
const FollowerComponent = ({ onFollowersChange }) => {

  const [followers, setFollowers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  const handleSearchChange = (text) => {
    setSearchTerm(text);
   };

  useEffect(() => {
    const fetchFollowers = async () => {
       try {
         const response1 = await fetch(`http://${ipAddress}:3000/api/followingGym/gymFollowers/PtOTwsqkU1MJ29N7FR29XpOtySB2`);
         const data1 = await response1.json()
   
         const mergedFollowers = [...data1];
   
         setFollowers(mergedFollowers);
         onFollowersChange(mergedFollowers.length);
         console.log(mergedFollowers.length);
       } catch (error) {
         console.error('Error fetching followers:', error);
       }
    };
   
    fetchFollowers();
   }, []);
  
  return (
    <View style={styles.container}>
    {followers.map((follower, index) => (
      <View key={index} style={styles.followersContainer}>
        <View style={styles.follwerProfile}>
          <Image source={{ uri: follower.profilePic }} style={styles.followerPic} />
          <Text style={styles.followerName}>{follower.fullname}</Text>
        </View>
        <TouchableOpacity style={styles.unfollowBtn}>
          <Text style={styles.unfollowBtnText}>
            {follower.isFollowing ? 'UNFOLLOW' : 'FOLLOW +'}
          </Text>
        </TouchableOpacity>
      </View>
    ))}
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap:20,
    position:'absolute',
    top:200,
  },
  followersContainer: {
    width: 350,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor:'white',
    borderBottomWidth: 0.2,
    paddingBottom:10
  },
  follwerProfile:{
    flexDirection: 'row',
    alignItems: 'center',
    gap:10
  },
  followerPic: {
    height: 50,
    width: 50,
    borderRadius: 100,
  },
  followerName: {
    color: 'white',
    fontWeight: '400',
    fontSize: 18
  },
  unfollowBtn: {
    borderColor: '#9AC61C',
    borderRadius: 5,
    borderWidth: 1,
    width: 100,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  unfollowBtnText:{
    color: '#9AC61C',
  }
})

export default FollowerComponent
