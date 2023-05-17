import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";


function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/displaypic.jpg")}
    >
      <Image
        style={styles.logo}
        source={require("../assets/ImportAuthorityLogo.jpg")}
      />
      <Text style={styles.tagline}>Import Your Wheels With Us !</Text>
      <Text style={styles.tagline2}>
        ImportWise: Easy car imports. Browse, compare, get quotes, and access
        import specialists.
      </Text>
      <View style={styles.loginButton}></View>
      <View style={styles.signupButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#8FBF45",
  },
  logo: {
    width: 172,
    height: 53,
    resizeMode: "contain",
    position: "absolute",
    top: 50,
  },
  signupButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#0E9DB1",
  },
  tagline: {
    fontFamily:'Roboto',
    color: "white",
    fontWeight: "bold",
    fontSize:22,
  },
  tagline2: {
    color: "white",
    textAlign:"center",
    padding:20,
    fontFamily:'Roboto',
    fontSize:12,

  },
});

export default WelcomeScreen;
