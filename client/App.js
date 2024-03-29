import { StyleSheet, Text, View, LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./screens/welcome";
import Allproducts from "./screens/bottomTab/Allproducts.js";
import DetailProducts from "./screens/bottomTab/DetailProducts.js";
import Checkout from "./screens/Checkout.js";
import Login from "./screens/login";
import CreateUser from "./screens/userCreateAccount";
import CreateCoach from "./screens/coachCreateAccount";
import CreateGym from "./screens/gymCreateAccount";
import CreateProgram from "./screens/createProgram";
import CreateDiet from "./screens/CreateDiet";
import CreatePlan from "./screens/CreatePlan";
import GetStarted from "./screens/getStarted";
import ResetPassword from "./screens/resetPassword";
import CreateAllProgram from "./screens/CreateAllProgram";
import Home from "./screens/bottomTab/home";
import PaymentSucces from "./screens/PaymentSucces";
import PaymentFailed from "./screens/PaymentFailed";
import BottomTabScreens from "./screens/bottomTab/BottomTabScreens";
import Basket from "./screens/bottomTab/Basket.js";
import EditGymProfile from "./screens/bottomTab/EditGymProfile.js";
import Coachprofile from "./screens/bottomTab/Coachprofile.js";
import EditCoachProfile from "./screens/bottomTab/EditCoachProfile.js";
import EditUserProfile from "./screens/bottomTab/EditUserProfile.js";
import Followers from "./screens/Followers.js";
import { StripeProvider } from "@stripe/stripe-react-native";
import UserFollowing from "./screens/UserFollowing.js";
import ChatScreen from "./screens/bottomTab/chatScreen.js";
import AllCoaches from "./screens/AllCoaches.js";
import AllGyms from "./screens/AllGyms.js";
import CoachFollow from "./screens/CoachFollow.js";
import GymDetails from "./screens/bottomTab/GymDetails.js";
import CoachDetails from "./screens/bottomTab/CoachDetails.js";
import JoinUs from "./screens/bottomTab/JoinUs.js";
const Stack = createNativeStackNavigator();
const STRIPE_KEY =
  "pk_test_51OZEfiH6PIz9b3JmefGizu6JOqL1NoKap1KNDkrsf0NXyf0Jc7mwr7CLtbVvHMYdzCOnkIQ6qya6yh4dPte536bi00GBMIlpuI";

export default function App() {
  LogBox.ignoreAllLogs();
  return (
    <StripeProvider publishableKey={STRIPE_KEY}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="getStarted">
          <Stack.Screen
            name="tabs"
            component={BottomTabScreens}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="editGymProfile"
            component={EditGymProfile}
            options={{
              headerStyle: {
                backgroundColor: "black",
                shadowColor: "#9AC61C",
                borderBottomColor: "black",
                shadowOffset: {
                  width: 0,
                  height: 6,
                },
                shadowOpacity: 0.39,
                shadowRadius: 8.3,

                elevation: 13,
              },
              headerTitleAlign: "center",
              headerTintColor: "#BEFF03",
              headerTitleStyle: {
                fontWeight: "bold",
              },
              title: "Edit Profile",
            }}
          />
          <Stack.Screen
            name="EditUserProfile"
            component={EditUserProfile}
            options={{
              headerStyle: {
                backgroundColor: "black",
                shadowColor: "#9AC61C",
                borderBottomColor: "black",
                shadowOffset: {
                  width: 0,
                  height: 6,
                },
                shadowOpacity: 0.39,
                shadowRadius: 8.3,

                elevation: 13,
              },
              headerTitleAlign: "center",
              headerTintColor: "#BEFF03",
              headerTitleStyle: {
                fontWeight: "bold",
              },
              title: "Edit Profile",
            }}
          />
          <Stack.Screen
            name="EditCoachProfile"
            component={EditCoachProfile}
            options={{
              headerStyle: {
                backgroundColor: "black",
                shadowColor: "#9AC61C",
                borderBottomColor: "black",
                shadowOffset: {
                  width: 0,
                  height: 6,
                },
                shadowOpacity: 0.39,
                shadowRadius: 8.3,

                elevation: 13,
              },
              headerTitleAlign: "center",
              headerTintColor: "#BEFF03",
              headerTitleStyle: {
                fontWeight: "bold",
              },
              title: "Edit Profile",
            }}
          />
          <Stack.Screen
            name="JoinUs"
            component={JoinUs}
            options={{
              headerStyle: {
                backgroundColor: "black",
                shadowColor: "#9AC61C",
                borderBottomColor: "black",
                shadowOffset: {
                  width: 0,
                  height: 6,
                },
                shadowOpacity: 0.39,
                shadowRadius: 8.3,

                elevation: 13,
              },
              headerTitleAlign: "center",
              headerTintColor: "#BEFF03",
              headerTitleStyle: {
                fontWeight: "bold",
              },
              title: "Membership",
            }}
          />
          <Stack.Screen
            name="follower"
            component={Followers}
            options={{
              headerStyle: {
                backgroundColor: "black",
                shadowColor: "#9AC61C",
                borderBottomColor: "black",
                shadowOffset: {
                  width: 0,
                  height: 6,
                },

                shadowOpacity: 0.39,
                shadowRadius: 8.3,

                elevation: 13,
              },
              headerTitleAlign: "center",
              headerTintColor: "#BEFF03",
              headerTitleStyle: {
                fontWeight: "bold",
              },
              title: "Profile",
            }}
          />
          <Stack.Screen
            name="UserFollowing"
            component={UserFollowing}
            options={{
              headerStyle: {
                backgroundColor: "black",
                shadowColor: "#9AC61C",
                borderBottomColor: "black",
                shadowOffset: {
                  width: 0,
                  height: 6,
                },

                shadowOpacity: 0.39,
                shadowRadius: 8.3,

                elevation: 13,
              },
              headerTitleAlign: "center",
              headerTintColor: "#BEFF03",
              headerTitleStyle: {
                fontWeight: "bold",
              },
              title: "Profile",
            }}
          />
          <Stack.Screen
            name="CoachFollow"
            component={CoachFollow}
            options={{
              headerStyle: {
                backgroundColor: "black",
                shadowColor: "#9AC61C",
                borderBottomColor: "black",
                shadowOffset: {
                  width: 0,
                  height: 6,
                },
                shadowOpacity: 0.39,
                shadowRadius: 8.3,

                elevation: 13,
              },
              headerTitleAlign: "center",
              headerTintColor: "#BEFF03",
              headerTitleStyle: {
                fontWeight: "bold",
              },
              title: "Profile",
            }}
          />
          <Stack.Screen
            name="Basket"
            component={Basket}
            options={{
              headerStyle: {
                backgroundColor: "black",
                shadowColor: "#9AC61C",
                borderBottomColor: "black",
                shadowOffset: {
                  width: 0,
                  height: 6,
                },
                shadowOpacity: 0.39,
                shadowRadius: 8.3,
                elevation: 13,
              },
              headerTitleAlign: "center",
              headerTintColor: "#BEFF03",
              headerTitleStyle: {
                fontWeight: "bold",
              },
              title: "Basket",
            }}
          />
          <Stack.Screen
            name="DetailProducts"
            component={DetailProducts}
            options={{
              headerStyle: {
                backgroundColor: "black",
                shadowColor: "#9AC61C",
                borderBottomColor: "black",
                shadowOffset: {
                  width: 0,
                  height: 6,
                },
                shadowOpacity: 0.39,
                shadowRadius: 8.3,

                elevation: 13,
              },
              headerTitleAlign: "center",
              headerTintColor: "#BEFF03",
              headerTitleStyle: {
                fontWeight: "bold",
              },
              title: "Details",
            }}
          />
          <Stack.Screen
            name="chatScreen"
            component={ChatScreen}
            options={{
              headerStyle: {
                backgroundColor: "black",
                shadowColor: "#9AC61C",
                borderBottomColor: "black",
                shadowOffset: {
                  width: 0,
                  height: 6,
                },
                shadowOpacity: 0.39,
                shadowRadius: 8.3,

                elevation: 13,
              },
              headerTintColor: "#BEFF03",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Stack.Screen
            name="PaymentSucces"
            component={PaymentSucces}
            options={{
              headerStyle: {
                backgroundColor: "#97d91c",
                shadowColor: "#9AC61C",
                borderBottomColor: "black",
                shadowOffset: {
                  width: 0,
                  height: 6,
                },
                shadowOpacity: 0.39,
                shadowRadius: 8.3,
                elevation: 13,
              },
              headerTitleAlign: "center",
              headerTintColor: "#97d91c",
              headerTitleStyle: {
                fontWeight: "bold",
              },
              title: "Payment Succes",
            }}
          />
          <Stack.Screen
            name="PaymentFailed"
            component={PaymentFailed}
            options={{
              headerStyle: {
                backgroundColor: "#97d91c",
                shadowColor: "#97d91c",
                borderBottomColor: "black",
                shadowOffset: {
                  width: 0,
                  height: 6,
                },
                shadowOpacity: 0.39,
                shadowRadius: 8.3,

                elevation: 13,
              },
              headerTitleAlign: "center",
              headerTintColor: "#97d91c",
            }}
          />
          <Stack.Screen
            name="AllCoaches"
            component={AllCoaches}
            options={{
              headerStyle: {
                backgroundColor: "black",
                shadowColor: "#97d91c",
                borderBottomColor: "black",
                shadowOffset: {
                  width: 0,
                  height: 6,
                },
                shadowOpacity: 0.39,
                shadowRadius: 8.3,

                elevation: 13,
              },
              headerTitleAlign: "center",
              headerTintColor: "#97d91c",
            }}
          />
          <Stack.Screen
            name="AllGyms"
            component={AllGyms}
            options={{
              headerStyle: {
                backgroundColor: "black",
                shadowColor: "#97d91c",
                borderBottomColor: "black",
                shadowOffset: {
                  width: 0,
                  height: 6,
                },
                shadowOpacity: 0.39,
                shadowRadius: 8.3,

                elevation: 13,
              },
              headerTitleAlign: "center",
              headerTintColor: "#97d91c",
            }}
          />
          <Stack.Screen
            name="GymDetails"
            component={GymDetails}
            options={{
              headerStyle: {
                backgroundColor: "black",
                shadowColor: "#9AC61C",
                borderBottomColor: "black",
                shadowOffset: {
                  width: 0,
                  height: 6,
                },
                shadowOpacity: 0.39,
                shadowRadius: 8.3,

                elevation: 13,
              },
              headerTitleAlign: "center",
              headerTintColor: "#BEFF03",
              headerTitleStyle: {
                fontWeight: "bold",
              },
              title: "Profile",
            }}
          />
          <Stack.Screen
            name="CoachDetails"
            component={CoachDetails}
            options={{
              headerStyle: {
                backgroundColor: "black",
                shadowColor: "#9AC61C",
                borderBottomColor: "black",
                shadowOffset: {
                  width: 0,
                  height: 6,
                },
                shadowOpacity: 0.39,
                shadowRadius: 8.3,

                elevation: 13,
              },
              headerTitleAlign: "center",
              headerTintColor: "#BEFF03",
              headerTitleStyle: {
                fontWeight: "bold",
              },
              title: "Profile",
            }}
          />
          <Stack.Screen
            name="Checkout"
            component={Checkout}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CreateProgram"
            component={CreateProgram}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="getStarted"
            component={GetStarted}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CreateAllProgram"
            component={CreateAllProgram}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CreateDiet"
            component={CreateDiet}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CreatePlan"
            component={CreatePlan}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="welcome"
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="createUser"
            component={CreateUser}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="createCoach"
            component={CreateCoach}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="createGym"
            component={CreateGym}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Allproducts"
            component={Allproducts}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="resetPassword"
            component={ResetPassword}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Coachprofile"
            component={Coachprofile}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </StripeProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgrounColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
});
