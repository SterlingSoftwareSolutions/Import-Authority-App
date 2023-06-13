import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { AppLoading } from "expo";

import { StyleSheet } from "react-native";
import AppNavigator from "./app/navigation/AppNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AuthNavigator from "./app/navigation/AuthNavigator";
import { useState } from "react";
import AuthContext from "./app/auth/context";
import authstorage from "./app/auth/storage";

export default function App() {
  const [user, setUser] = useState();

  const restoreUser = async () => {
    const user = await authstorage.getUser();
    if (user) setUser(user);
  };

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
