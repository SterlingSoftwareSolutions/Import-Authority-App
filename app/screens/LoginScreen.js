import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import * as Yup from "yup";
import {
  ErrorMessage,
  AppForm,
  AppFormField,
  SubmitButton,
} from "../components/forms";
import { LinearGradient } from "expo-linear-gradient";
import authApi from "../api/auth";
import colors from "../config/colors";
import { useState } from "react";
import useAuth from "../auth/useAuth";
import { useNavigation } from "@react-navigation/native";

const validationSchema = Yup.object().shape({
  username: Yup.string().required().label("Username"),
  password: Yup.string().required().min(8).label("Password"),
});

const LoginScreen = (props) => {
  const { logIn } = useAuth();
  const [loginFailed, setLoginFailed] = useState(false);
  const navigation = useNavigation();

  const handleSubmit = async ({ username, password }) => {
    const result = await authApi.login(username, password);
    if (!result.ok) return setLoginFailed(true);
    setLoginFailed(false);
    logIn(result.data, result.data.data.user);
  };


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
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
            <View
              style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}
            >
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
                  placeholder="Username / Email"
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
                <TouchableOpacity>
                  <Text style={styles.forgotPassword}>Forget password?</Text>
                </TouchableOpacity>
                <SubmitButton title="LOGIN" alignSelf="center" />
              </AppForm>
            </View>
          </View>
        </LinearGradient>
        <View style={styles.footerContainer}>
          <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
            <Text style={styles.footerText}>Not a member?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
              <Text style={styles.signupText}> SIGN UP</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.footerText}>Import Authority</Text>
          <Text style={styles.footerText}>© 2023 ALL RIGHTS RESERVED</Text>
          <Text style={styles.footerTextTerms}>
            Terms of use | Privacy Policy
          </Text>
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
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    paddingBottom: 20,
  },
  displayPicContainer: {
    paddingBottom: 40,
    paddingHorizontal: 20,
    paddingHorizontal: 0,
  },
  displayPic: {
    height: 500,
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
    marginTop: 35,
    alignSelf: "center",
  },
  inputContainer: {
    marginTop: 10,
    paddingHorizontal: 25,
  },
  input: {
    backgroundColor: "white",
    borderRadius: 15,
    height: 41,
    marginBottom: 5,
    paddingHorizontal: 10,
    fontSize: 12,
  },
  forgotPassword: {
    color: "white",
    textAlign: "right",
    fontSize: 13,
    marginRight: 20,
  },
  acceptTermsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
    marginTop: 20,
    alignSelf: "center",
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

export default LoginScreen;
