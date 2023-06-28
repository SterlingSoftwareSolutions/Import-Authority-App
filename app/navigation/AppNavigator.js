import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import colors from "../config/colors";
import ApplicationCreateNavigator from "../navigation/ApplicationCreateNavigator";
import TransactionNavigator from "./TransactionNavigator";
import DraftApplicationScreen from "../screens/DraftApplicationScreen";
import CompletedApplicationScreen from "../screens/CompletedApplicationScreen";
import PendingApplicationScreen from "../screens/PendingApplicationScreen";
import RejectedApplicationScreen from "../screens/RejectedApplicationScreen";
import ProfileDetailsScreen from "../screens/ProfileDetailsScreen";
const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      style: styles.tabBar,
      tabStyle: styles.tab,
      showLabel: false,
      keyboardHidesTabBar:true
    }}
  >
    <Tab.Screen
      name="Home"
      component={TransactionNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="create"
      component={ApplicationCreateNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="file-plus" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Complete"
      component={CompletedApplicationScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="file-check" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Draft"
      component={DraftApplicationScreen}
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
      name="Pending"
      component={PendingApplicationScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="file-clock" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Reject"
      component={RejectedApplicationScreen}
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
