import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./home";
import UserProfile from "./UserProfile";
import GymProfile from "./GymProfile";

const Tab = createBottomTabNavigator();
const BottomTabScreens = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="gymProfile"
        component={GymProfile}
        options={{
          headerStyle: {
            backgroundColor: "black",
            borderBottomColor: 'black',
            shadowColor: "#9AC61C",
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.39,
            shadowRadius: 8.30,

            elevation: 13,

          },
          headerTitleAlign: "center",
          headerTintColor: "#9AC61C",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
          },
          title: "Profile"
        }}
      />
      <Tab.Screen name="Home" component={Home} options={{
        headerStyle: {
          backgroundColor: "black",
        },
        headerTitleAlign: "center",
        headerTintColor: "#9AC61C",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 20,
        },
        title: "Home"
      }} />

    </Tab.Navigator>
  );
};

export default BottomTabScreens;
