import React from 'react'
import { View,Text } from 'react-native'

const Test = ({navigation}) => {
  return (
    <View>
        <Text onPress={()=>navigation.navigate('getStarted')}>test screen</Text>
    </View>
  )
}
export default Test;