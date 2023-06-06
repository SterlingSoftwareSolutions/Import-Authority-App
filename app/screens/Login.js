import React, { useState } from "react";
import {
  StatusBar,
  KeyboardAvoidingView,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  Switch,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../config/colors";
import CustomButton from "../components/CustomButton";

const Login = () => {
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSignup = () => {
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <LinearGradient
          colors={[colors.secondary, colors.primary]}
          style={styles.gradient}
          start={{ x: 0.5, y: 0.5 }}
          end={{ x: 1, y: 1 }}
        >
          <Image
            source={require("../assets/displaypic.jpg")}
            style={styles.image}
          />
          <Image
            style={styles.logo}
            source={require("../assets/ImportAuthorityLogo.jpg")}
          />
          <KeyboardAvoidingView style={styles.flexContainer} behavior="padding">
            <ScrollView contentContainerStyle={styles.scrollContainer}>
              <View style={styles.formContainer}>
                <TextInput
                  style={[styles.input, styles.usernameInput]}
                  placeholder="Username / Email *"
                  placeholderTextColor={colors.darkgrey}
                />
                <TextInput
                  style={[styles.input, styles.usernameInput]}
                  placeholder="Password *"
                  placeholderTextColor={colors.darkgrey}
                  secureTextEntry
                />
                <TouchableOpacity>
                  <Text style={styles.forgotPassword}>Forget password?</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </LinearGradient>
      </View>
      <View style={styles.checkboxContainer}>
        <Switch
          style={styles.checkbox}
          value={acceptTerms}
          onValueChange={setAcceptTerms}
          trackColor={{
            false: colors.grey,
            true: colors.primary,
          }}
        />
        <Text style={styles.checkboxLabel}>I accept the terms of use</Text>
      </View>
      <CustomButton title="LOGIN" onPress={handleSignup} />
      <View style={styles.bottomContainer}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Not a Member?</Text>
            <TouchableOpacity>
              <Text style={styles.loginLink}>Signup</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.termsContainer}>
            <Text style={styles.importAuthorityText}>Import Authority</Text>
            <Text style={styles.allRightsText}>
              &copy; {new Date().getFullYear()} ALL RIGHTS RESERVED
            </Text>
            <TouchableOpacity>
              <Text style={styles.termsText}>
                <Text style={styles.termsLink}>Terms of Use</Text> |{" "}
                <Text style={styles.termsLink}>Privacy Policy</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
  topContainer: {
    flex: 3,
  },
  gradient: {
    flex: 1,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    overflow: "hidden",
  },
  image: {
    flex: 1,
    position: "absolute",
    left: 0,
    right: 0,
    overflow: "hidden",
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    height: "73%",
    width: "100%",
  },
  bottomContainer: {
    flex: 0.6,
    backgroundColor: "#FFF",
  },
  flexContainer: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "flex-start",
    paddingHorizontal: 20,
  },
  formContainer: {
    top: 390,
    borderRadius: 10,
    paddingVertical: 20,
  },
  input: {
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 10,
    color: colors.black,
  },
  usernameInput: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
  },
  checkboxLabel: {
    color: colors.black,
    fontSize: 16,
  },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    color: colors.black,
  },
  loginText: {
    fontSize: 16,
    color: colors.black,
  },
  loginLink: {
    color: colors.primary,
    marginLeft: 5,
    fontSize: 16,
  },
  termsContainer: {
    alignItems: "center",
    marginTop: 10,
    color: colors.black,
  },
  termsText: {
    color: colors.primary,
    fontSize: 14,
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
  forgotPassword: {
    color: colors.white,
    textAlign: "right",
    fontSize: 14,
    marginBottom: 5,
  },
});

export default Login;
