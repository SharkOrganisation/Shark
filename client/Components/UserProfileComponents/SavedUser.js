import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const SavedUser = () => {
  return (
      <ScrollView>
    <View style={styles.savedContainer}>
      <TouchableOpacity>
      <Image source={{uri:""}} styles={styles.imgPost}/>
      <Text style={styles.titlePost}>Post Title</Text>
      </TouchableOpacity>
    </View>
      </ScrollView>
  )
}
const styles = StyleSheet.create({
  
  savedContainer:{

  },
  imgPost:{

  },
  titlePost:{

  }
})
export default SavedUser