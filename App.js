import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppLoading } from "expo";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ForgotpasswordScreen from "./app/screens/ForgotpasswordScreen";
import FourdigitScreen from "./app/screens/FourdigitScreen";
import NewpasswordScreen from "./app/screens/NewpasswordScreen";
import AppNavigator from "./app/navigation/AppNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AuthNavigator from "./app/navigation/AuthNavigator";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import LoginScreen from "./app/screens/LoginScreen";
import SignupScreen from "./app/screens/SignupScreen";
import { useState } from "react";
import AuthContext from "./app/auth/context";
import authstorage from "./app/auth/storage";

export default function App(props) {
  const [user, setUser] = useState();

  const restoreToken = async () => {
    const token = await authstorage.getToken();
    if (!token) return;
    setUser((await authApi.login(username, password)).data.data.access_token);
  };

  useEffect(() => {
    restoreToken();
  }, []);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
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
