import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from './screens/welcome';
import Login from './screens/login';
import GetStarted from './screens/getStarted';
const Stack = createNativeStackNavigator();


export default function App() {
  return (
  
    <NavigationContainer>
      <Stack.Navigator initialRouteName='getStarted'>
        <Stack.Screen name="getStarted" component={GetStarted} options={{ headerShown: false }} />
        <Stack.Screen name="welcome" component={WelcomeScreen} options={{ headerShown: false }}   />
        <Stack.Screen name='login' component={Login} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgrounColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

