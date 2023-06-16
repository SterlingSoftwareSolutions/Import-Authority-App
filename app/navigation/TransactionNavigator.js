import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "../screens/Dashboard";
import Transaction from "../screens/Transaction";
import PaymentScreen from "../screens/PaymentScreen";

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
  </Stack.Navigator>
);

export default TransactionNavigator;
