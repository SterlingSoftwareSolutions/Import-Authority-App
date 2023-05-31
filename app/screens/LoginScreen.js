import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as Yup from "yup";
import Screen from "../components/Screen";
import {
  ErrorMessage,
  AppForm,
  AppFormField,
  SubmitButton,
} from "../components/forms";

import authApi from "../api/auth";
import colors from "../config/colors";
import { useState } from "react";

const validationSchema = Yup.object().shape({
  username: Yup.string().required().label("Username"),
  password: Yup.string().required().min(8).label("Password"),
});

const LoginScreen = () => {
  const [loginFailed, setLoginFailed] = useState(false);
  const handleSubmit = async ({ username, password }) => {
    const result = await authApi.login({ username, password });
    if (!result.ok) return setLoginFailed(true);
    setLoginFailed(false);
    console.log(result.data);
  };

  return (
    <Screen style={styles.container}>
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
          <View style={styles.formContainer}>
            <AppForm
              initialValues={{ username: "", password: "" }}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
            >
              <ErrorMessage
                error="Invalid email and/or password."
                visible={loginFailed}
              />
              <AppFormField
                name="username"
                placeholder="Email"
                autoCapitalize="none"
                autoCorrect={false}
              />
              <AppFormField
                name="password"
                placeholder="Password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
                textContentType="password"
              />
            <SubmitButton title="LOGIN" />
            </AppForm>
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

      <View style={styles.footerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
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
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  displayPic: {
    flex: 1,
    height: "75%",
    width: "100%",
    borderBottomRightRadius: 70,
    borderBottomLeftRadius: 70,
  },
  logo: {
    width: 170,
    height: 45,
    resizeMode: "contain",
    position: "absolute",
    top: 50,
    alignSelf: "center",
  },
  formContainer: {
    marginTop: 5,
    paddingHorizontal: 25,
    width: "80%",
    height: "25%",
    borderRadius: 15,
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
