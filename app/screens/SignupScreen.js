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
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import colors from "../config/colors";
import CustomButton from "../components/CustomButton";
import * as Yup from "yup";
import {
  ErrorMessage,
  AppForm,
  AppFormField,
  SubmitButton,
} from "../components/forms";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  businessname:Yup.string().required().label("Business Name"),
  username:Yup.string().required().label("User Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(8).label("Password"),
  phone: Yup.string().required().matches(/^\d+$/, 'Phone number must be numeric').label("Phone"),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .label("Confirm Password"),
});

const SignupScreen = ({ navigation, onPress }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.gradient}>
        <LinearGradient
          colors={["#8FBF45", "#079BB7"]}
          style={styles.gradientBackground}
          start={{ x: 0.5, y: 0.5 }}
          end={{ x: 1, y: 1 }}
        />
        <View style={styles.displayPicWrapper}>
          <ImageBackground
            source={require("../assets/displaypic.jpg")}
            style={styles.displayPic}
          >
            <View style={styles.content}>
              <Image
                style={styles.logo}
                source={require("../assets/ImportAuthorityLogo.jpg")}
              />
              <View style={styles.overlay}>
                <AppForm
                  initialValues={{ name: "", businessname: "",username: "", email: "", password: "",  }}
                  onSubmit={(values) => console.log(values)}
                  validationSchema={validationSchema}
                >
                  <AppFormField
                    autoCorrect={false}
                    name="name"
                    placeholder="Name"
                  />
                  {/* <AppFormField
                    autoCorrect={false}
                    name="businessname"
                    placeholder="Business Name"
                  /> */}
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
                     {/* <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    name="phone"
                    placeholder="Mobile Number"
                    textContentType="emailAddress"
                  /> */}
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
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    secureTextEntry
                    textContentType="password"
                  />
                  <SubmitButton title="SIGNUP" />
                </AppForm>
              </View>
            </View>
            <View style={styles.overlay} />
          </ImageBackground>
        </View>
      </View>
      <TouchableOpacity style={styles.acceptTermsContainer}>
        <View style={styles.checkbox} />
        <Text style={styles.acceptTermsText}>I Accept the Terms of Use</Text>
      </TouchableOpacity>
      {/* <CustomButton title="SIGN UP" /> */}
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
    flex:3,
    backgroundColor: colors.white,
  },
  gradient: {
    flex: 1,
  },
  gradientBackground: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: "100%",
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  displayPicWrapper: {
    flex: 2,
    overflow: "hidden",
    borderBottomRightRadius: 70,
    borderBottomLeftRadius: 70,
  },
  displayPic: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    height: "80%",
    width: "100%",
    position: "relative",
    borderBottomRightRadius: 70,
    borderBottomLeftRadius: 70,
  },
  content: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 170,
    height: 45,
    resizeMode: "contain",
    position: "absolute",
    top: 50,
  },
  overlay: {
    top: 120,
    paddingHorizontal: 10,
    borderRadius: 15,
    width: "90%",
    alignItems: "center",
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
