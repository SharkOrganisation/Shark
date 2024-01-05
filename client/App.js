import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './screens/welcome';
import Allproducts from './screens/Allproducts'
import DetailProducts from './Components/DetailProducts';
import Login from './screens/login';
import CreateUser from './screens/userCreateAccount'
import CreateCoach from './screens/coachCreateAccount'
import CreateGym from './screens/gymCreateAccount'
import CreateProgram  from './screens/createProgram';
import GetStarted from './screens/getStarted';
const Stack = createNativeStackNavigator();


export default function App() {
  return (
  
  
    <NavigationContainer>
      <Stack.Navigator initialRouteName='getStarted'>
        <Stack.Screen name="Home" component={CreateProgram} options={{ headerShown: false }}  />
        <Stack.Screen name="getStarted" component={GetStarted} options={{ headerShown: false }} />
        <Stack.Screen name="welcome" component={WelcomeScreen} options={{ headerShown: false }}   />
        <Stack.Screen name='login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='createUser' component={CreateUser} options={{ headerShown: false }} />
        <Stack.Screen name='createCoach' component={CreateCoach} options={{ headerShown: false }} />
        <Stack.Screen name='createGym' component={CreateGym} options={{ headerShown: false }} />
        <Stack.Screen name="Allproducts" component={Allproducts} options={{ headerShown: false }}  />
        <Stack.Screen name="DetailProducts" component={DetailProducts} options={{ headerShown: false }}  />

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

