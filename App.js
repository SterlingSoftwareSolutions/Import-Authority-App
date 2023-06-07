import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import LoginScreen from "./app/screens/LoginScreen";
import SignupScreen from "./app/screens/SignupScreen";
import ForgotpasswordScreen from "./app/screens/ForgotpasswordScreen";
import FourdigitScreen from "./app/screens/FourdigitScreen";
import NewpasswordScreen from "./app/screens/NewpasswordScreen";
import CreateApplicationImageScreen from "./app/screens/CreateApplicationImageScreen";
import CreateApplicationDocScreen from "./app/screens/CreateApplicationDocScreen";
import Dashboard from "./app/screens/Dashboard";
import PaymentHistoryScreen from "./app/screens/PaymentHistoryScreen";
import PaymentScreen from "./app/screens/PaymentScreen";
import PaymentSuccessScreen from "./app/screens/PaymentSuccessScreen";
import TransactionScreen from "./app/screens/TransactionScreen";
import UpdateInformationScreen from "./app/screens/UpdateInformationScreen";
import ViewApplicationScreen from "./app/screens/ViewApplicationScreen";
import UpdatePasswordScreen from "./app/screens/UpdatePasswordScreen";
import AllApplicationScreen from "./app/screens/AllApplicationScreen";
import CreateApplicationScreen from "./app/screens/CreateApplicationScreen";




export default function App() {
  return <CreateApplicationScreen/>;

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
