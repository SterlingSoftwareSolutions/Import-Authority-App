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
import CustomButton from "../components/CustomButton";

const LoginScreen = ({ navigation }) => {
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
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="Username or Email" />

            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
            />
            <TouchableOpacity>
              <Text style={styles.forgotPassword}>Forget password?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
      <TouchableOpacity style={styles.acceptTermsContainer}>
        <View style={styles.checkbox} />
        <Text style={styles.acceptTermsText}>I Accept the Terms of Use</Text>
      </TouchableOpacity>
      <CustomButton title="LOGIN" />
      <View style={styles.footerContainer}>
      <TouchableOpacity onPress={() => navigation.navigate("Signup")} >
        <Text style={styles.footerText}>
          Not a member? <Text style={styles.signupText}> SIGN UP</Text>
        </Text>
        </TouchableOpacity>
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
    height: "72%",
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
    marginTop: 35,
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
    fontSize: 10,
    textAlign: "center",
  },
  footerTextTerms: {
    color: colors.tertiary,
    fontSize: 10,
    textAlign: "center",
  },
});

export default LoginScreen;
