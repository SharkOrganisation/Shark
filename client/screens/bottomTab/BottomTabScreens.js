import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./home";
import UserProfile from "./UserProfile";
import GymProfile from "./GymProfile";

const Tab = createBottomTabNavigator();
const BottomTabScreens = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home}  options={{
          headerStyle: {
            backgroundColor: "black",
          },
          headerTitleAlign: "center",
          headerTintColor: "#9AC61C",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
          },
          title:"Home"
        }}/>

      <Tab.Screen
        name="gymProfile"
        component={GymProfile}
        options={{
          headerStyle: {
            backgroundColor: "black",
          },
          headerTitleAlign: "center",
          headerTintColor: "#9AC61C",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
          },
          title:"Profile"
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabScreens;
