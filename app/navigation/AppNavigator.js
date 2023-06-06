import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import navigationTheme from "./../navigation/navigationTheme";

import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import NewpasswordScreen from "../screens/NewpasswordScreen";
import FourdigitScreen from "../screens/FourdigitScreen";
import CreateNewAppButton from "../components/CreateNewAppButton";
import WelcomeScreen from "../screens/WelcomeScreen";
import ForgotpasswordScreen from "../screens/ForgotpasswordScreen";
import colors from "../config/colors";
import UpdatePassword from "../screens/UpdatePasswordScreen";
import UpdateProfileScreen from "../screens/UpdateProfileScreen";
import Dashboard from "../screens/Dashboard";
import CreateApplicationScreen from "../screens/CreateApplicationScreen";
import ApplicationCreateNavigator from "../navigation/ApplicationCreateNavigator";
import AllApplicationScreen from "../screens/AllApplicationScreen";
import TransactionScreen from "../screens/TransactionScreen";
import CreateApplicationImageScreen from "../screens/CreateApplicationImageScreen";
import CreateApplicationMain from "../screens/CreateApplicationMain";
import { NavigationContainer } from "@react-navigation/native";


const Tab = createBottomTabNavigator();

const AppNavigator = () => (
 // <NavigationContainer theme={navigationTheme}>
  <Tab.Navigator
    tabBarOptions={{
      style: styles.tabBar,
      tabStyle: styles.tab,
      showLabel: false,
    }}
  >
    <Tab.Screen
      name="Home"
      component={Dashboard}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Create"
      component={CreateApplicationMain}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="file-plus" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Complete"
      component={AllApplicationScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="file-check" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Draft"
      component={UpdatePassword}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="file-document-edit"
            color={color}
            size={size}
          />
        ),
      }}
    />
    {/* <Tab.Screen
      name="CreateApplication"
      component={CreateApplicationScreen}
      options={({ navigation }) => ({
        tabBarButton: () => (
          <CreateNewAppButton onPress={() => navigation.navigate("CreateApplication")} />
        ),
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="plus-circle"
            color={color}
            size={size}
          />
        ),
      })}
    /> */}
    <Tab.Screen
      name="Pending"
      component={CreateApplicationMain}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="file-clock" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Reject"
      component={UpdateProfileScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="note-remove"
            color={color}
            size={size}
          />
        ),
      }}
    />
  </Tab.Navigator>
 // </NavigationContainer>
);

const styles = StyleSheet.create({
  tabBar: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#E5E5E5",
    elevation: 10,
    shadowColor: colors.black,
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },

  tab: {
    backgroundColor: "transparent",
  },
});

export default AppNavigator;
