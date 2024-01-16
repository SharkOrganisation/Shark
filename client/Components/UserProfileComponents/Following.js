import { View, Text, StyleSheet, ScrollView,Image ,TouchableOpacity} from "react-native";
import React from "react";

const Following = () => {
  return (
    <ScrollView style={styles.container}>
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
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    gap: 20,
    position: "absolute",
    top: "10%",
  },
  followersContainer:{
    width: "94%",
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
