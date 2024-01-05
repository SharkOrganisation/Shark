import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// first page:
import GetStarted from './screens/getStarted';
// welcome page:
import WelcomeScreen from './screens/welcome';
// login page :
import Login from './screens/login';
//home page:
import Home from './screens/home';

const Stack = createNativeStackNavigator();



export default function App() {
  return (
  
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="getStarted" component={GetStarted} options={{ headerShown: false }} />
        <Stack.Screen name="welcome" component={WelcomeScreen} options={{ headerShown: false }}   />
        <Stack.Screen name='login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='home' component={Home} options={{ headerShown: false }}/>
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

