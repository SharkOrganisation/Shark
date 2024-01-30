import { View, Text , StyleSheet,Image} from 'react-native'
import React from 'react'

const SavedUserDetails = ({data}) => {
  console.log(data);
  return (
    <View>
      <Image source={{uri:data.Post.image[0]}}/>
      <Text style={{color:"white"}}>{data.Post.content}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  
})
export default SavedUserDetails