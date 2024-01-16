import { View, Text, StyleSheet, ScrollView,Image ,TouchableOpacity} from "react-native";
import React from "react";

const Following = ({data}) => {
  console.log(data);
  return (
    // <View style={styles.container}>
      <View style={styles.followersContainer}>
        <View style={styles.follwerProfile}>
          <Image source={{
            uri: data.pfImage
          }}
            style={styles.followerPic}
          />
          <Text style={styles.followerName}>{data.fullname}</Text>
        </View>
        <TouchableOpacity style={styles.unfollowBtn}>
          <Text style={styles.unfollowBtnText}>UNFOLLOW +</Text>
        </TouchableOpacity>
      </View>
    // </View>
  );
};
const styles = StyleSheet.create({
  container: {
    gap:20,
    position:'relative',
    top:200,
  },
  followersContainer:{
    width: 410,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomColor:'white',
    borderBottomWidth: 0.2,
    paddingBottom:10,
  },
  follwerProfile:{
    flexDirection: 'row',
    alignItems: 'center',
    gap:10
  },
  followerPic:{
    height: 50,
    width: 50,
    borderRadius: 100,
  },
  followerName:{
    color: 'white',
    fontWeight: '400',
    fontSize: 18
  },
  unfollowBtn:{
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
});
export default Following;
