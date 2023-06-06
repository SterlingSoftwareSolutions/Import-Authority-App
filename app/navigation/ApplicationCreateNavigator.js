import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CreateApplicationScreen from "../screens/CreateApplicationScreen";
import CreateApplicationImageScreen from "../screens/CreateApplicationImageScreen";
import CreateApplicationDocScreen from "../screens/CreateApplicationDocScreen";
import PaymentScreen from "../screens/PaymentScreen";
import PaymentSuccessScreen from "../screens/PaymentSuccessScreen";
import PaymentHistoryScreen from "../screens/PaymentHistoryScreen";
import Dashboard from "../screens/Dashboard";
import CreateApplicationMain from "../screens/CreateApplicationMain";



const Stack = createStackNavigator();

const ApplicationCreateNavigator = () => {
return(
  <Stack.Navigator>
      <Stack.Screen
      name="CreateApplicationMain"
      component={CreateApplicationMain}
      options={{ headerShown: false }}
    />
      <Stack.Screen
      name="StepTwoImage"
      component={CreateApplicationImageScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="CreateApplicationDocScreen"
      component={CreateApplicationDocScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="StepThreePayment"
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
      component={PaymentHistoryScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Dashboard"
      component={Dashboard}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>)
};

export default ApplicationCreateNavigator;
