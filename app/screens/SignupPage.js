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
import { ProgressBar } from "react-native-paper";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import CustomButton from "../components/CustomButton";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSignup = () => {
    // Perform signup logic here
    // You can access the form values using the state variables
    // name, businessName, username, email, mobileNumber, password, confirmPassword, acceptTerms
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
                  placeholder="Name *"
                  placeholderTextColor={colors.darkgrey}
                  value={name}
                  onChangeText={setName}
                />
                <TextInput
                  style={[styles.input, styles.usernameInput]}
                  placeholder="Business Name *"
                  placeholderTextColor={colors.darkgrey}
                  value={businessName}
                  onChangeText={setBusinessName}
                />
                <TextInput
                  style={[styles.input, styles.usernameInput]}
                  placeholder="Username *"
                  placeholderTextColor={colors.darkgrey}
                  value={username}
                  onChangeText={setUsername}
                />
                <TextInput
                  style={[styles.input, styles.usernameInput]}
                  placeholder="Email *"
                  placeholderTextColor={colors.darkgrey}
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
                <TextInput
                  style={[styles.input, styles.usernameInput]}
                  placeholder="Mobile Number *"
                  placeholderTextColor={colors.darkgrey}
                  value={mobileNumber}
                  onChangeText={setMobileNumber}
                  keyboardType="phone-pad"
                />
                <TextInput
                  style={[styles.input, styles.usernameInput]}
                  placeholder="Password *"
                  placeholderTextColor={colors.darkgrey}
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry
                />
                <TextInput
                  style={[styles.input, styles.usernameInput]}
                  placeholder="Confirm Password *"
                  placeholderTextColor={colors.darkgrey}
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  secureTextEntry
                />
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
      <CustomButton title="SIGN UP" onPress={handleSignup} />
      <View style={styles.bottomContainer}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Already have an account?</Text>
            <TouchableOpacity>
              <Text style={styles.loginLink}>LOGIN</Text>
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
    flex: 2.8,
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
    height: "80%",
    width: "100%",
  },
  bottomContainer: {
    flex: 0.8,
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
    marginTop: 100,
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
    marginTop: 20,
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
});

export default SignupPage;
