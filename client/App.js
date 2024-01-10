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
import CreateProgram from './screens/createProgram';
import CreateDiet from './screens/CreateDiet';
import CreatePlan from './screens/CreatePlan';
import GetStarted from './screens/getStarted';
import ResetPassword from './screens/resetPassword';
import ChatScreen from './screens/chatScreen'
import CreateAllProgram from './screens/CreateAllProgram';
import Home from './screens/bottomTab/home';
import PaymentSucces from './screens/PaymentSucces';
import PaymentFailed from './screens/PaymentFailed';
import BottomTabScreens from './screens/bottomTab/BottomTabScreens';

import Coachprofile from './screens/Coachprofile';
const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='getStarted'>
        <Stack.Screen name="tabs" component={BottomTabScreens} options={{
          headerShown: false
        }
        } />
        <Stack.Screen
          name='ChatScreen'
          component={ChatScreen}
          options={{
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTitleAlign: 'center',
            headerTintColor: '#BEFF03',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            title: 'CHAT COMMUNITY'
          }}
        />
        <Stack.Screen name="CreateProgram" component={CreateProgram} options={{ headerShown: false }} />
        <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='home' component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="getStarted" component={GetStarted} options={{ headerShown: false }} />
        <Stack.Screen name="CreateAllProgram" component={CreateAllProgram} options={{ headerShown: false }} />
        <Stack.Screen name="CreateDiet" component={CreateDiet} options={{ headerShown: false }} />
        <Stack.Screen name="CreatePlan" component={CreatePlan} options={{ headerShown: false }} />
        <Stack.Screen name="welcome" component={WelcomeScreen} options={{ headerShown: false }}   />
        <Stack.Screen name='createUser' component={CreateUser} options={{ headerShown: false }} />
        <Stack.Screen name='createCoach' component={CreateCoach} options={{ headerShown: false }} />
        <Stack.Screen name='createGym' component={CreateGym} options={{ headerShown: false }} />
        <Stack.Screen name="Allproducts" component={Allproducts} options={{ headerShown: false }} />
        <Stack.Screen name="DetailProducts" component={DetailProducts} options={{ headerShown: false }} />
        <Stack.Screen name="resetPassword" component={ResetPassword} options={{ headerShown: false }} />
      <Stack.Screen name='PaymentSucces' component={PaymentSucces} options={{ headerShown: false }} />
      <Stack.Screen name='PaymentFailed' component={PaymentFailed} options={{ headerShown: false }} />
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
