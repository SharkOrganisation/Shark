import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from './screens/welcome';
import Login from './screens/login';
import CreateProgram  from './screens/createProgram';
import CreateDiet from './screens/CreateDiet';
import CreatePlan from './screens/CreatePlan';
import GetStarted from './screens/getStarted';
import CreateAllProgram from './screens/CreateAllProgram';
import PaymentSucces from './screens/PaymentSucces';
import PaymentFailed from './screens/PaymentFailed';
const Stack = createNativeStackNavigator();


export default function App() {
  return (
  
    <NavigationContainer>
      <Stack.Navigator initialRouteName='CreateProgram'>
        <Stack.Screen name="CreateProgram" component={CreateProgram} options={{ headerShown: false }}  />
        <Stack.Screen name="CreateAllProgram" component={CreateAllProgram} options={{ headerShown: false }}  />
        <Stack.Screen name="CreateDiet" component={CreateDiet} options={{ headerShown: false }}  />
        <Stack.Screen name="CreatePlan" component={CreatePlan} options={{ headerShown: false }} />
        <Stack.Screen name="welcome" component={WelcomeScreen} options={{ headerShown: false }}   />
      <Stack.Screen name='login' component={Login} options={{ headerShown: false }} />
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

