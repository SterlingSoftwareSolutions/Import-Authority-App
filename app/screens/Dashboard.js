import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import useAuth from "../auth/useAuth";
import ProgressView from "../components/ProgressView";
import TopUserControlBg from "../components/TopUserControlBg";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import * as Yup from "yup";
import client from "../api/client";

import ApplicationLists from "../components/ApplicationLists";
import { ScrollView } from "react-native-gesture-handler";

function Dashboard({ children }) {
  const navigation = useNavigation();
  const { user, logOut } = useAuth();
  const [showProfile, setShowProfile] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [profileActive, setProfileActive] = useState(true);
  const [applications, setApplications] = useState([]);
  const endpoint = "/profile";

  const toggleProfile = () => {
    console.log(process.env.API_URL)
    setShowProfile(!showProfile); //true
    setProfileActive(!profileActive);
  };

  const togglePassword = () => {
    setShowPassword(!showPassword); //true
    setProfileActive(!profileActive);

  };

  const profileButtonStyle = [
    styles.activeButton,
    {
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5,
      backgroundColor: profileActive ? 'white' : '#079BB7',
      color: profileActive ? '#079BB7' : 'white',
      borderColor: profileActive ? "white" : "#079BB7"
    },
  ];

  const passwordButtonStyle = [
    styles.inactiveButton,
    {
      borderTopRightRadius: 5,
      borderBottomRightRadius: 5,
      backgroundColor: profileActive ? '#079BB7' : 'white',
      color: profileActive ? 'white' : '#079BB7',
      borderColor: profileActive ? "#079BB7" : "white"
    },
  ];

  // Application data fetching from api 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const api = await client();
        const response = await api.get("/applications");
        console.log(response.data);
        setApplications(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (values) => {
    const applicationData = {
      name: values.name,
      username: values.username,
      businessname: values.businessname,
      selectedusername: values.username,
      selectedemail: values.email,
      selectedphonenumber: values.phonenumber,
      selectedpassword: values.selectedpassword,
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
    <ScrollView>
      <SafeAreaView style={styles.container}>
        {/* User control component */}
        <TopUserControlBg>
          <View style={{ flexDirection: "row" }}>
            <View>
              <TouchableOpacity onPress={toggleProfile}>
                <Image
                  source={require("../assets/Group1.png")}
                  style={[
                    styles.profileImage,
                    showProfile && styles.profileImageCenter,
                  ]}
                />
              </TouchableOpacity>

              {/* user details section once the user profile pic is clicked */}
              {showProfile && (
                <View style={styles.profileDetails}>
                  <View style={styles.labelsContainer}>
                    <View style={{ flexDirection: "row", marginLeft: 80 }}>
                      <TouchableOpacity onPress={togglePassword}>
                        <Text style={profileButtonStyle}>PROFILE</Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={togglePassword}>
                        <Text style={passwordButtonStyle}>PASSWORD</Text>
                      </TouchableOpacity>
                    </View>
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
                      !showPassword && (
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
                      )
                    )}

                  </Formik>




                  <Formik
                    initialValues={{
                      password: user.password,
                      newpassword: user.newpassword,
                      confirmpassword: user.confirmpassword,
                    }}
                    onSubmit={handleSubmit}
                    validationSchema={Yup.object().shape({
                      password: Yup.string().required("Current password is required")
                        .min(8, "Must be at least 8 characters"),
                      newpassword: Yup.string().required("New password is required")
                        .min(8, "Must be at least 8 characters"),
                      confirmpassword: Yup.string()
                        .required("Confirm password is required")
                        .oneOf([Yup.ref('newpassword'), null], 'Passwords must match')
                        .min(8, " Must be at least 8 characters"),
                    })}
                  >
                    {({ handleChange, handleSubmit, values, errors, touched }) => (
                      showPassword && (
                        <View style={styles.formContainer}>
                          <TextInput
                            style={[styles.input, styles.usernameInput]}
                            value={values.password}
                            placeholder="Password"
                            placeholderTextColor="#23A29F"
                            color="#10bca"
                            onChangeText={handleChange("password")}
                            secureTextEntry={true}
                          />
                          {touched.password && (
                            <Text style={styles.errorText}>{errors.password}</Text>
                          )}

                          <TextInput
                            style={[styles.input, styles.usernameInput]}
                            value={values.newpassword}
                            placeholder="New Password"
                            placeholderTextColor="#23A29F"
                            color="#10bca"
                            onChangeText={handleChange("newpassword")}
                            secureTextEntry={true}
                          />
                          {touched.newpassword && (
                            <Text style={styles.errorText}>{errors.newpassword}</Text>
                          )}

                          <TextInput
                            style={[styles.input, styles.usernameInput]}
                            value={values.confirmpassword}
                            placeholder="Confirm Password"
                            placeholderTextColor="#23A29F"
                            color="#10bca"
                            onChangeText={handleChange("confirmpassword")}

                          />
                          {touched.confirmpassword && (
                            <Text style={styles.errorText}>{errors.confirmpassword}</Text>
                          )}
                          <View style={{ marginTop: 15 }}>
                            <TouchableOpacity
                              style={{
                                ...styles.buttonContainer,
                                marginBottom: 10,
                              }}
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
                        </View>
                      )
                    )}
                  </Formik>

                </View>
              )}
            </View>
            {!showProfile && (   //true
              <View style={{ left: 20 }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    color: "#FFF",
                  }}
                >
                  Hi {user.name} !
                </Text>
                <Text
                  style={{ fontSize: 12, fontWeight: "bold", color: "#FFF" }}
                >
                  Welcome to Import Authority
                </Text>
              </View>
            )}
          </View>
        </TopUserControlBg>

        {/* Progress View Component */}
        <ProgressView />

        {/* Recent Quick Application View */}
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate("CreateApplicationScreen")
            }
            >
              <LinearGradient
                style={{
                  width: 60,
                  height: 60,
                  marginLeft: 10,
                  borderRadius: 30,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                colors={[colors.secondary, colors.primary]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                <MaterialCommunityIcons name="plus" color={"#FFF"} size={45} />
              </LinearGradient>
            </TouchableOpacity>
          </View>
          {/* // Render the last four application images  */}
          {applications.slice(-4).reverse().map(application => {
            const imgFrontRightAsset = application.assets.find(asset => asset.asset_type === "img_front_right");
            const fileType = imgFrontRightAsset ? imgFrontRightAsset.file_type : "";
            return (
              <TouchableOpacity key={application.id} onPress={() => navigation.navigate("ViewApplications")}>
                <Image
                  source={{
                    uri: imgFrontRightAsset ? `http://dkxw67x8n7ht.cloudfront.net/assets/applications/${imgFrontRightAsset.location}` : "",
                    type: `image/${fileType}`,
                  }}
                  style={styles.iconStyle}
                />
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Applications Listing Container*/}
        <View
          style={{
            backgroundColor: "#DBEDD7",
            borderRadius: 10,
            width: "96%",
            height: "55%",
            marginLeft: 9,
            marginTop: 15,
          }}
        >

          {/* Calling Application List  - FlatList  */}
          <ApplicationLists data={applications} />

        </View>

      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#FFF",
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  iconContainer: {
    flexDirection: "row",
  },
  dashboardboxicon: {
    marginLeft: 10,
  },
  transactionCategory: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#555",
    marginTop: 5,
    marginBottom: 10,
  },
  dashboardalapplicationbuttons: {
    borderRadius: 4,
    width: 75,
    height: 20,
  },
  dashboardapplication: {
    flexDirection: "row",
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    width: "96%",
    paddingHorizontal: 10,
    paddingVertical: 20,
    justifyContent: "space-between",
    marginBottom: 10,
    top: 20,
    left: 8,
  },
  iconStyle: {
    marginLeft: 10,
    width: 60, height: 60, borderRadius: 30,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  profileImageCenter: {
    alignSelf: "center",
    alignItems: "center",
    marginLeft: 60,
    width: 90,
    height: 90,
    borderRadius: 45,
  },

  profileDetails: {
    paddingHorizontal: 20,
    paddingTop: 20,
    borderRadius: 10,
  },
  labelsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  formContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    width: "130%",
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
  buttonContainer: {
    alignSelf: "center",
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 15,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 150,
  },
  buttonText: {
    color: "#E5E5E5",
    fontSize: 16,
    fontWeight: "bold",
  },
  activeButton: {
    backgroundColor: "#079BB7",
    color: "white",
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderColor: "#079BB7",
  },
  inactiveButton: {
    backgroundColor: "white",
    color: "#079BB7",
    borderWidth: 1,
    borderColor: "#fff",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});

export default Dashboard;
