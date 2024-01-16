import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const FollowingComponent = () => {
  return (
    <View style={styles.container}>
    <View style={styles.followersContainer}>
      <View style={styles.follwerProfile}>
        <Image source={{
          uri: 'https://miro.medium.com/v2/resize:fit:513/1*nC9LUnAtdn-z7bW0Kjhm8w.jpeg'
        }}
          style={styles.followerPic}
        />
        <Text style={styles.followerName}>ronie colman</Text>
      </View>
      <TouchableOpacity style={styles.unfollowBtn}>
        <Text style={styles.unfollowBtnText}>UNFOLLOW</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.followersContainer}>
      <View style={styles.follwerProfile}>
        <Image source={{
          uri:"data:image/jpeg;base64,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"
        }}
          style={styles.followerPic}
        />
        <Text style={styles.followerName}>scott adkins</Text>
      </View>
      <TouchableOpacity style={styles.unfollowBtn}>
        <Text style={styles.unfollowBtnText}>UNFOLLOW</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.followersContainer}>
      <View style={styles.follwerProfile}>
        <Image source={{
          uri: 'https://www.premiere.fr/sites/default/files/styles/scale_crop_1280x720/public/2023-03/CuO8VFRXEAAjBOe.jpeg'
        }}
          style={styles.followerPic}
        />
        <Text style={styles.followerName}>John Wick</Text>
      </View>
      <TouchableOpacity style={styles.unfollowBtn}>
        <Text style={styles.unfollowBtnText}>UNFOLLOW</Text>
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
    <View style={styles.followersContainer}>
      <View style={styles.follwerProfile}>
        <Image source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTero4_hx74JybYk8y4EJSVTtYSUGV_v7RIcA6LOv8toYr9fDMwl5bGXKusC_l_Kokp_jw&usqp=CAU'
        }}
          style={styles.followerPic}
        />
        <Text style={styles.followerName}>Omar Jlassi</Text>
      </View>
      <TouchableOpacity style={styles.unfollowBtn}>
        <Text style={styles.unfollowBtnText}>UNFOLLOW</Text>
      </TouchableOpacity>
    </View>
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

export default FollowingComponent

