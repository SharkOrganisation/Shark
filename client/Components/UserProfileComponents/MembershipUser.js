import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const MembershipUser = () => {
  return (
    <View>
      <Text style={styles.text}>MembershipUser</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 30,
  },
})
export default MembershipUser