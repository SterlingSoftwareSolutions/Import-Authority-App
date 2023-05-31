import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import NewpasswordScreen from "../screens/NewpasswordScreen";
import FourdigitScreen from "../screens/FourdigitScreen";
import CreateNewAppButton from "../components/CreateNewAppButton";
import WelcomeScreen from "../screens/WelcomeScreen";
import ForgotpasswordScreen from "../screens/ForgotpasswordScreen";
import colors from "../config/colors";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      style: styles.tabBar,
      tabStyle: styles.tab,
      showLabel: false,
    }}
  >
    <Tab.Screen
      name="Complete"
      component={FourdigitScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="file-check" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Draft"
      component={FourdigitScreen}
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
    <Tab.Screen
      name="Create"
      component={FourdigitScreen}
      options={({ navigation }) => ({
        tabBarButton: () => (
          <CreateNewAppButton onPress={() => navigation.navigate("Login")} />
        ),
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="plus-circle"
            color={color}
            size={size}
          />
        ),
      })}
    />

    <Tab.Screen
      name="Pending"
      component={FourdigitScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="file-clock" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Reject"
      component={FourdigitScreen}
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
