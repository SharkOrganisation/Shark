import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./home"
import Test from "./UserProfile";
const Tab = createBottomTabNavigator();
const BottomTabScreens = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="userProfile" component={Test} />
    </Tab.Navigator>
  )
}

export default BottomTabScreens