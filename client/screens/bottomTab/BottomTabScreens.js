import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import ChatIcon from 'react-native-vector-icons/Ionicons';
import Home from "./home";
import UserProfile from "./UserProfile";
import GymProfile from "./GymProfile";
import ChatScreen from "./chatScreen";

const Tab = createBottomTabNavigator();

const BottomTabScreens = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          display: 'flex',
          position: 'absolute',
          bottom: 20,
          left: 25,
          right: 25,
          backgroundColor: '#192126',
          borderRadius: 30,
          height: 60,
          borderTopWidth: 0,
        },
        tabBarShowLabel: false,
      })}>
      <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon: ({ focused }) => (
          <View
            style={{
              top: Platform.OS === 'ios' ? 10 : 0,
            }}>
            <Icon
              name="home"
              size={30}
              color={focused ? '#9AC61C' : 'white'}
            />
          </View>
        ),
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

      <Tab.Screen
        name="chat"
        component={ChatScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                top: Platform.OS === 'ios' ? 10 : 0,
              }}>
              <ChatIcon
                name="chatbubbles-outline"
                size={30}
                color={focused ? '#9AC61C' : 'white'}
              />
            </View>
          ),
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
          title: "CHAT COMMUNITY"
        }}
      />

      <Tab.Screen
        name="gymProfile"
        component={GymProfile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                top: Platform.OS === 'ios' ? 10 : 0,
              }}>
              <Icon
                name="user"
                size={30}
                color={focused ? '#9AC61C' : 'white'}
              />
            </View>
          ),
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

    </Tab.Navigator>
  );
};

export default BottomTabScreens;