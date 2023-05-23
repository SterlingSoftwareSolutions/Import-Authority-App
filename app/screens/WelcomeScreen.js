import React from "react";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../config/colors";

function WelcomeScreen(props) {
  return (
    <SafeAreaView style={styles.bgcolor}>
      <LinearGradient
        colors={["#8FBF45", "#079BB7"]}
        style={styles.greenbg}
        start={{ x: 0.5, y: 0.5 }}
        end={{ x: 1, y: 1 }}
      >
        <View>
          <Image
            style={styles.displaypic}
            source={require("../assets/displaypic.jpg")}
          />
          <Image
            style={styles.logo}
            source={require("../assets/ImportAuthorityLogo.jpg")}
          />
        </View>
        <Text style={styles.tagline}>Import Your Wheels With Us!</Text>
        <Text style={styles.tagline2}>
          ImportWise: Easy car imports. Browse, compare, get quotes, and access
          import specialists.
        </Text>
      </LinearGradient>
      <LinearGradient
        colors={["#8FBF45", "#079BB7"]}
        style={styles.buttonContainer}
        start={{ x: 0.1, y: 0.5 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.loginButton}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </View>
      </LinearGradient>
      <LinearGradient
        colors={["#8FBF45", "#079BB7"]}
        style={styles.buttonContainer}
        start={{ x: 0.1, y: 0.5 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.signupButton}>
          <Text style={styles.buttonText}>SIGNUP</Text>
        </View>
      </LinearGradient>
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Import Authority</Text>
        <Text style={styles.footerText}>All rights reserved</Text>
        <Text style={styles.footerTextTerms}>
          Terms of use | Privacy Policy
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bgcolor: {
    backgroundColor: "white",
    flex: 1,
  },
  displaypic: {
    height: "90%",
    width: "100%",
    borderBottomRightRadius: 70,
    borderBottomLeftRadius: 70,
  },
  greenbg: {
    flex: 1,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  buttonContainer: {
    width: "50%",
    height: 41,
    borderRadius: 15,
    marginTop: 10,
    alignItems: "center",
    alignSelf: "center",
  },
  loginButton: {
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  signupButton: {
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  logo: {
    width: 170,
    height: 45,
    resizeMode: "contain",
    position: "absolute",
    alignItems: "center",
    alignSelf: "center",
    top: 50,
  },
  tagline: {
    fontFamily: "Roboto",
    color: "white",
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "center",
    top: -30,
  },
  tagline2: {
    color: "white",
    textAlign: "center",
    fontSize: 12,
    paddingRight: 40,
    paddingLeft: 40,
    top: -15,
  },
  footerContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom:20
  },
  footerText: {
    color: "black",
    fontSize: 10,
    textAlign: "center",
  },
  footerTextTerms: {
    color: colors.tertiary,
    fontSize: 10,
    textAlign: "center",
  },
});

export default WelcomeScreen;
