import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import ChatIcon from 'react-native-vector-icons/Ionicons';
import ShopIcon from 'react-native-vector-icons/Entypo';
import BasketIcon from 'react-native-vector-icons/Feather';
import Home from "./home";
import UserProfile from "./UserProfile";
import Coachprofile from "./Coachprofile";
import GymProfile from "./GymProfile";
import ChatScreen from "./chatScreen";
import Allproducts from "./Allproducts";

const Tab = createBottomTabNavigator();

const BottomTabScreens = ({ route }) => {
  const { role } = route.params
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      screenOptions={() => ({
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
        name="marketplace"
        component={Allproducts}
        initialParams={{ role: role }}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                top: Platform.OS === 'ios' ? 10 : 0,
              }}>
              <ShopIcon
                name="shop"
                size={30}
                color={focused ? '#9AC61C' : 'white'}
              />
            </View>
          ),
          headerStyle: {
            backgroundColor: "#9AC61C",
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
          headerTintColor: "black",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
          },
          title: "Marketplace",
          headerRight: () => (
            <BasketIcon 
            name="shopping-cart" 
            size={30} color="black" 
            style={styles.marketicon} 
            onPress={() => { navigation.navigate('Basket',{ role: role }) }} />
          )
        }}
      />

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
      {role === 'Gym' && (
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

      )}
      {role === 'coach' && (

        <Tab.Screen name="Coachprofile" component={Coachprofile} options={{
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

        }} />
      )}
      {role === 'user' && (

        <Tab.Screen name="userProfile" component={UserProfile} options={{
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

        }} />
      )}

    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  marketicon:{
    top:3,
    right:19,
  }
})

export default BottomTabScreens;