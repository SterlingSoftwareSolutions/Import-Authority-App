import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "../screens/Dashboard";
import Transaction from "../screens/Transaction";
import PaymentScreen from "../screens/PaymentScreen";
import CreateApplicationScreen from "../screens/CreateApplicationScreen";
import ViewApplicationScreen from "../screens/ViewApplicationScreen";

const Stack = createStackNavigator();

const TransactionNavigator = ({}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Dashboard"
      component={Dashboard}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Transaction"
      component={Transaction}
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
      name="ViewApplication"
      component={ViewApplicationScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default TransactionNavigator;
