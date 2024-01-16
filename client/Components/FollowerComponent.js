import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const FollowerComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.followersContainer}>
        <View style={styles.follwerProfile}>
          <Image source={{
            uri: 'https://www.the-sun.com/wp-content/uploads/sites/6/2023/11/c380374e-5b5e-4178-ae9d-d81bd1d75466-1.jpg'
          }}
            style={styles.followerPic}
          />
          <Text style={styles.followerName}>jeremy buendia</Text>
        </View>
        <TouchableOpacity style={styles.unfollowBtn}>
          <Text style={styles.unfollowBtnText}>FOLLOW +</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.followersContainer}>
        <View style={styles.follwerProfile}>
          <Image source={{
            uri:"https://disciplean.com/wp-content/uploads/2023/05/image1-4-e1683748838131.jpeg"
          }}
            style={styles.followerPic}
          />
          <Text style={styles.followerName}>arnold schwarzenegger</Text>
        </View>
        <TouchableOpacity style={styles.unfollowBtn}>
          <Text style={styles.unfollowBtnText}>UNFOLLOW</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.followersContainer}>
        <View style={styles.follwerProfile}>
          <Image source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTero4_hx74JybYk8y4EJSVTtYSUGV_v7RIcA6LOv8toYr9fDMwl5bGXKusC_l_Kokp_jw&usqp=CAU'
          }}
            style={styles.followerPic}
          />
          <Text style={styles.followerName}>Omar jlassi</Text>
        </View>
        <TouchableOpacity style={styles.unfollowBtn}>
          <Text style={styles.unfollowBtnText}>FOLLOW +</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.followersContainer}>
        <View style={styles.follwerProfile}>
          <Image source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhTbPqK_O-fNwYsUnrJBxupn3rJR5CjotENOnaDGKvIjn2QuqJjnUia1-Cj1XZPa-Qh1M&usqp=CAU'
          }}
            style={styles.followerPic}
          />
          <Text style={styles.followerName}>Amine fakhfakh</Text>
        </View>
        <TouchableOpacity style={styles.unfollowBtn}>
          <Text style={styles.unfollowBtnText}>UNFOLLOW</Text>
        </TouchableOpacity>
      </View>
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
