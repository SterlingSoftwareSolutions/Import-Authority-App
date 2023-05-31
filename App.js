import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ForgotpasswordScreen from "./app/screens/ForgotpasswordScreen";
import FourdigitScreen from "./app/screens/FourdigitScreen";
import NewpasswordScreen from "./app/screens/NewpasswordScreen";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./app/navigation/AppNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AuthNavigator from "./app/navigation/AuthNavigator";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import LoginScreen from "./app/screens/LoginScreen";
import SignupScreen from "./app/screens/SignupScreen";

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AuthNavigator/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
