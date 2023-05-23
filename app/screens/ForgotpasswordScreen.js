import React from "react";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../config/colors";

const ForgotpasswordScreen = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#8FBF45", "#079BB7"]}
        style={styles.gradient}
        start={{ x: 0.5, y: 0.5 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.content}>
          <Image
            style={styles.displayPic}
            source={require("../assets/displaypic.jpg")}
          />
          <Image
            style={styles.logo}
            source={require("../assets/ImportAuthorityLogo.jpg")}
          />
          <Text style={styles.text1}>Forget Password</Text>
          <Text style={styles.text2}>
            Enter your email for verification process.We will send 4 digits code
            to your email
          </Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="Email" />
          </View>
        </View>
      </LinearGradient>
      <LinearGradient
        colors={["#8FBF45", "#079BB7"]}
        style={styles.buttonContainer}
        start={{ x: 0.1, y: 0.5 }}
        end={{ x: 1, y: 1 }}
      >
        <TouchableOpacity style={styles.continueButton}>
          <Text style={styles.buttonText}>CONTINUE</Text>
        </TouchableOpacity>
      </LinearGradient>
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>
          Already have an Account?{" "}
          <Text style={styles.signupText}> LOGIN </Text>
        </Text>
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>Import Authority</Text>
          <Text style={styles.footerText}>All rights reserved</Text>
          <Text style={styles.footerTextTerms}>
            Terms of use | Privacy Policy
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  gradient: {
    flex: 1,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  displayPicContainer: {
    paddingBottom: 40,
    paddingHorizontal: 20,
    paddingHorizontal: 0,
  },
  displayPic: {
    height: "75%",
    width: "100%",
    borderBottomRightRadius: 70,
    borderBottomLeftRadius: 70,
    paddingHorizontal: 0,
  },

  logo: {
    width: 170,
    height: 45,
    resizeMode: "contain",
    position: "absolute",
    top: 50,
    alignSelf: "center",
  },
  inputContainer: {
    marginTop: 25,
    paddingHorizontal: 25,
  },
  input: {
    backgroundColor: "white",
    borderRadius: 15,
    height: 41,
    marginBottom: 10,
    paddingHorizontal: 10,
    fontSize: 12,
  },
  forgotPassword: {
    color: "white",
    textAlign: "right",
    top: -4,
    fontSize: 12,
  },
  acceptTermsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
    marginTop: 20,
    alignSelf: "center",
  },
  checkbox: {
    width: 11,
    height: 11,
    borderRadius: 2,
    borderWidth: 1,
    marginRight: 10,
  },
  acceptTermsText: {
    fontSize: 10,
  },
  buttonContainer: {
    width: "50%",
    height: 41,
    borderRadius: 15,
    marginTop: 10,
    alignItems: "center",
    alignSelf: "center",
    top: 10,
  },
  continueButton: {
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
  footerContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 5,
  },
  footerText: {
    color: "black",
    fontSize: 10,
    textAlign: "center",
  },
  signupText: {
    color: colors.primary,
    fontSize: 12,
  },
  footerTextTerms: {
    color: colors.tertiary,
    fontSize: 10,
    textAlign: "center",
  },
  text1: {
    color: colors.white,
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  text2: {
    color: colors.white,
    fontSize: 12,
    paddingHorizontal: 20,
  },
});

export default ForgotpasswordScreen;
