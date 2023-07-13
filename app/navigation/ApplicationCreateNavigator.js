import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CreateApplicationScreen from "../screens/CreateApplicationScreen";
import CreateApplicationImageScreen from "../screens/CreateApplicationImageScreen";
import PaymentScreen from "../screens/PaymentScreen";
import PaymentSuccessScreen from "../screens/PaymentSuccessScreen";
import Dashboard from "../screens/Dashboard";
import TransactionHistory from "../screens/TransactionsHistory";

const Stack = createStackNavigator();

const ApplicationCreateNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CreateApplicationScreen"
        component={CreateApplicationScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CreateApplicationImageScreen"
        component={CreateApplicationImageScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PaymentScreen"
        component={PaymentScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PaymentSuccess"
        component={PaymentSuccessScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ViewTransactions"
        component={TransactionHistory}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default ApplicationCreateNavigator;
