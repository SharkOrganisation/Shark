import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './screens/welcome';
import Login from './screens/login';
import Paiment from './screens/paiment';
import Allproducts from './screens/Allproducts'
import DetailProducts from './components/DetailProducts'
const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Home" component={WelcomeScreen} options={{ headerShown: false }}  /> */}
        {/* <Stack.Screen name="pay" component={Paiment} options={{ headerShown: false }}  /> */}
        {/* <Stack.Screen name="Allproducts" component={Allproducts} options={{ headerShown: false }}  /> */}
        <Stack.Screen name="DetailProducts" component={DetailProducts} options={{ headerShown: false }}  />

        <Stack.Screen name='login' component={Login} />
        
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

