import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./home"
import UserProfile from "./UserProfile";


const Tab = createBottomTabNavigator();
const BottomTabScreens = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="userProfile" component={UserProfile} />
    </Tab.Navigator>
  )
}

export default BottomTabScreens