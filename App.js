import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import LoginScreen from "./app/screens/LoginScreen";
import SignupScreen from "./app/screens/SignupScreen";
import ForgotpasswordScreen from "./app/screens/ForgotpasswordScreen";
import FourdigitScreen from "./app/screens/FourdigitScreen";
import NewpasswordScreen from "./app/screens/NewpasswordScreen";
import EmptyScreen from "./app/screens/EmptyScreen";

export default function App() {
  return <LoginScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
