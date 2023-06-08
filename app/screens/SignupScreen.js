import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../config/colors";

const SignupScreen = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.gradient}>
          <LinearGradient
            colors={["#8FBF45", "#079BB7"]}
            style={styles.gradientBackground}
            start={{ x: 0.5, y: 0.5 }}
            end={{ x: 1, y: 1 }}
          />
          <View style={styles.displayPicWrapper}>
            <View>
              <View style={styles.content}>
                <Image source={require("../assets/displaypic.jpg")}
                  style={styles.displayPic} />
                <Image
                  style={styles.logo}
                  source={require("../assets/ImportAuthorityLogo.jpg")}
                />
                <View style={styles.overlay}>
                  <TextInput
                    style={styles.input}
                    placeholder="Name"
                    placeholderTextColor={colors.primary}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Business Name"
                    placeholderTextColor={colors.primary}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Username"
                    placeholderTextColor={colors.primary}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor={colors.primary}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Mobile Number"
                    placeholderTextColor={colors.primary}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor={colors.primary}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Confirm Password"
                    secureTextEntry={true}
                    placeholderTextColor={colors.primary}
                  />
                </View>
              </View>
              <View style={styles.overlay} />
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.acceptTermsContainer}>
          <View style={styles.checkbox} />
          <Text style={styles.acceptTermsText}>I Accept the Terms of Use</Text>
        </TouchableOpacity>
        <LinearGradient
          colors={["#8FBF45", "#079BB7"]}
          style={styles.buttonContainer}
          start={{ x: 0.1, y: 0.5 }}
          end={{ x: 1, y: 1 }}
        >
          <TouchableOpacity style={styles.signupButton}>
            <Text style={styles.buttonText}>SIGN UP</Text>
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
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  gradient: {
    width: "100%",
    height: 620,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  gradientBackground: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  displayPicWrapper: {
    flex: 1,
    overflow: "hidden",
    borderBottomRightRadius: 70,
    borderBottomLeftRadius: 70,
  },
  displayPic: {
    position: 'absolute',
    height: 450,
    width: "100%",
    borderBottomRightRadius: 70,
    borderBottomLeftRadius: 70,
    paddingHorizontal: 0
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  content: {
    alignItems: "center",
  },
  logo: {
    marginTop: 50,
    marginBottom: 150,
    width: 170,
    height: 45,
    resizeMode: "contain",
  },
  overlay: {
    paddingHorizontal: 10,
    borderRadius: 15,
    width: "80%",
  },
  input: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 15,
    height: 40,
    width: "100%",
    marginBottom: 10,
    paddingHorizontal: 15,
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
});

export default SignupScreen;
