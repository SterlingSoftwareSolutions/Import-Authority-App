import React, { useState } from "react";
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
import * as Yup from "yup";

import {
  ErrorMessage,
  AppForm,
  AppFormField,
  SubmitButton,
} from "../components/forms";
import useApi from "../hooks/useApi";
import usersApi from "../api/users";
import authApi from "../api/auth";

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    businessname: Yup.string().required().label("Business Name"),
    username: Yup.string().required().label("User Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(8).label("Password"),
    phone: Yup.string()
      .required()
      .matches(/^\d+$/, "Phone number must be numeric")
      .label("Phone"),
      password_confirmation: Yup.string()
      .required()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .label("Confirm Password"),
  });

const SignupScreen = (props) => {
    const registerApi = useApi(usersApi.register);
  const loginApi = useApi(authApi.login);
  const auth = useAuth();
  const { user } = useAuth();
  const [error, setError] = useState();

  const handleSubmit = async (userInfo) => {
    const result = await registerApi.request(userInfo);
  //  console.log(result);
    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        setError("An unexpected error occurred.");
        console.log(result);
      }
      return; 
    }

    const { data: authToken } = await loginApi.request(
      userInfo.username,
      userInfo.password
    );
    auth.logIn(authToken , user);
  };
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
                <AppForm
                  initialValues={{
                    name: "",
                    businessname: "",
                    username: "",
                    phone: "",
                    email: "",
                    password: "",
                    password_confirmation: "",
                  }}
                  onSubmit={handleSubmit}
                  validationSchema={validationSchema}
                >
                  <ErrorMessage error={error} visible={error} />
                  <AppFormField
                    autoCorrect={false}
                    name="name"
                    placeholder="Name"
                  />
                  <AppFormField
                    autoCorrect={false}
                    name="businessname"
                    placeholder="Business Name"
                  />
                  <AppFormField
                    autoCorrect={false}
                    name="username"
                    placeholder="User Name"
                  />
                  <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                    name="email"
                    placeholder="Email"
                    textContentType="emailAddress"
                  />
                  <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    name="phone"
                    placeholder="Mobile Number"
                    textContentType="emailAddress"
                  />
                  <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    name="password"
                    placeholder="Password"
                    secureTextEntry
                    textContentType="password"
                  />
                  <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    name="password_confirmation"
                    placeholder="Confirm Password"
                    secureTextEntry
                    textContentType="password"
                  />
                  <SubmitButton title="SIGNUP" />
                </AppForm>
                </View>
              </View>
              <View style={styles.overlay} />
            </View>
          </View>
        </View>
        {/* <TouchableOpacity style={styles.acceptTermsContainer}>
          <View style={styles.checkbox} />
          <Text style={styles.acceptTermsText}>I Accept the Terms of Use</Text>
        </TouchableOpacity> */}
        {/* <LinearGradient
          colors={["#8FBF45", "#079BB7"]}
          style={styles.buttonContainer}
          start={{ x: 0.1, y: 0.5 }}
          end={{ x: 1, y: 1 }}
        >
          <TouchableOpacity style={styles.signupButton}>
            <Text style={styles.buttonText}>SIGN UP</Text>
          </TouchableOpacity>
        </LinearGradient> */}
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

export default SignupScreen;

