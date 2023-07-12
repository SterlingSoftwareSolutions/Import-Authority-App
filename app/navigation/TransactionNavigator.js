import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "../screens/Dashboard";
import PaymentsList from "../screens/PaymentsList";
import PaymentScreen from "../screens/PaymentScreen";
import CreateApplicationScreen from "../screens/CreateApplicationScreen";
import ViewApplicationScreen from "../screens/ViewApplicationScreen";
import ProfileDetailsScreen from "../screens/ProfileDetailsScreen";

const Stack = createStackNavigator();

const TransactionNavigator = ({ }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Dashboard"
      component={Dashboard}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Transaction"
      component={PaymentsList}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="CardPayment"
      component={PaymentScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="CreateApplicationScreen"
      component={CreateApplicationScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ViewApplications"
      component={ViewApplicationScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Profile"
      component={ProfileDetailsScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default TransactionNavigator;
