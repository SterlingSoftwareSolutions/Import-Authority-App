import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../config/colors";
import useAuth from "../auth/useAuth";
import { Formik } from "formik";
import * as Yup from "yup";
import client from "../api/client";
import { getToken } from "../auth/storage";

function UpdateProfileScreen({ navigation }) {
  const endpoint = "/profile";
  const { user, logOut } = useAuth();

  const handleSubmit = async (values) => {
    const applicationData = {
      name: values.name,
      username:values.username,
      businessname: values.businessname,
      selectedusername: values.username,
      selectedemail: values.email,
      selectedphonenumber: values.phonenumber,
    };

    try {
      const api = await client(); // Call the client function to get the API client instance
      const response = await api.put(endpoint, applicationData); // Make the PUT request using the API client
      console.log("Response:", response);
      navigation.navigate("Dashboard");
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <LinearGradient
      colors={[colors.secondary, colors.primary]}
      style={styles.container}
    >
      <ScrollView>
        <SafeAreaView style={[styles.safeArea]}>
          <View style={{ ...styles.circleContainer, marginBottom: 150 }}>
            <View style={styles.labelsContainer}>
              <TouchableOpacity style={styles.button} onPress={() => {}}>
                <Text style={styles.buttonProfile}>PROFILE</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => {}}>
                <Text style={styles.buttonPassword}>PASSWORD</Text>
              </TouchableOpacity>
            </View>
            <Image
              source={require("../assets/avatar.jpg")}
              style={[styles.circleImage, { marginBottom: -200 }]}
            />
          </View>
          <Formik
            initialValues={{
              name: user.name,
              businessname: user.businessname,
              username: user.username,
              emailaddress: user.email,
              phonenumber: user.phone,
            }}
            onSubmit={handleSubmit}
            validationSchema={Yup.object().shape({
              name: Yup.string().required("name is required"),
              businessname: Yup.string().required("businessname is required"),
              username: Yup.string().required("username is required"),
              emailaddress: Yup.string().required("emailaddress is required"),
              phonenumber: Yup.string().required("phonenumber is required"),
            })}
          >
            {({ handleChange, handleSubmit, values, errors, touched }) => (
              <View style={styles.formContainer}>
                <TextInput
                  style={[styles.input, styles.usernameInput]}
                  value={values.name}
                  placeholder="Name"
                  placeholderTextColor="#23A29F"
                  color="#10bca"
                  onChangeText={handleChange("name")}
                />
                {touched.name && (
                  <Text style={styles.errorText}>{errors.name}</Text>
                )}
                <TextInput
                  style={[styles.input, styles.usernameInput]}
                  value={values.businessname}
                  placeholder="Business Name"
                  placeholderTextColor="#23A29F"
                  color="#10bca"
                  onChangeText={handleChange("businessname")}
                />
                {touched.businessname && (
                  <Text style={styles.errorText}>{errors.businessname}</Text>
                )}
                <TextInput
                  style={[styles.input, styles.usernameInput]}
                  value={values.username}
                  placeholder="Username"
                  placeholderTextColor="#23A29F"
                  color="#10bca"
                  onChangeText={handleChange("username")}
                />
                {touched.username && (
                  <Text style={styles.errorText}>{errors.username}</Text>
                )}
                <TextInput
                  style={[styles.input, styles.usernameInput]}
                  value={values.emailaddress}
                  placeholder="Email"
                  placeholderTextColor="#23A29F"
                  color="#10bca"
                  onChangeText={handleChange("emailaddress")}
                />
                {touched.emailaddress && (
                  <Text style={styles.errorText}>{errors.emailaddress}</Text>
                )}
                <TextInput
                  style={[styles.input, styles.usernameInput]}
                  value={values.phonenumber}
                  placeholder="Phone Number"
                  placeholderTextColor="#23A29F"
                  color="#10bca"
                  onChangeText={handleChange("phonenumber")}
                />
                {touched.phonenumber && (
                  <Text style={styles.errorText}>{errors.phonenumber}</Text>
                )}

                <TouchableOpacity
                  style={{ ...styles.buttonContainer, marginBottom: 10 }}
                  onPress={handleSubmit}
                >
                  <Text style={styles.buttonText}>UPDATE</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ ...styles.buttonContainer, marginBottom: 20 }}
                  onPress={logOut}
                >
                  <Text style={styles.buttonText}>LOGOUT</Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
          <StatusBar style="auto" />
        </SafeAreaView>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    maxHeight: 700,
  },
  safeArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    paddingHorizontal: 20,
    borderRadius: 10,
    width: "100%",
  },
  label: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    color: "#fff",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 10,
  },
  usernameInput: {
    backgroundColor: "#DBEEE4",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: "100%",
  },
  buttonText: {
    color: "#E5E5E5",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonContainer: {
    alignSelf: "center",
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 120,
  },
  circleContainer: {
    marginBottom: 200,
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  circleImage: {
    width: 120,
    height: 120,
    borderRadius: 40,
  },
  labelsContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 10,
  },
  label: {
    marginLeft: 15,
  },
  buttonPassword: {
    alignSelf: "flex-start",
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#fff",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: -44,
    color: "#079BB7",
    backgroundColor: "#FFF",
  },
  buttonProfile: {
    alignSelf: "flex-start",
    backgroundColor: "#079BB7",
    borderWidth: 1,
    borderColor: "#079BB7",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 0,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: -1,
    color: "#fff",
  },
  errorText: {
    color: "red",
  },
});

export default UpdateProfileScreen;
