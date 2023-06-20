import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  Image,
  Switch,
  ScrollView,
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


function Dashboard({ children }) {
  const navigation = useNavigation();
  const { user, logOut } = useAuth();
  const [showProfile, setShowProfile] = useState(false);
  const [showPassword, setShowPassword] = useState(false);// default dnot show the from when the function called.
  const [showProfile2, setProfile2] = useState(false);

  const toggleProfile = () => {
    setShowProfile(!showProfile); //true
    // setShowPassword(false);
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);//true
    setProfileActive(!profileActive);
  };


  const [profileActive, setProfileActive] = useState(true);

  const profileButtonStyle = profileActive ? styles.activeButton : styles.inactiveButton;
  const passwordButtonStyle = profileActive ? styles.inactiveButton : styles.activeButton;

  const endpoint = "/profile";

  const handleSubmit = async (values) => {
    const applicationData = {
      name: values.name,
      username:values.username,
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
    <SafeAreaView style={styles.container}>
      <ScrollView>
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
                    <View style={{ flexDirection: 'row', marginLeft: 80 }}>
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

                  
                
                  <View>
                 
                 
                      <Formik
                      
                      initialValues={{
                        password: user.password,
                        newpassword: user.newpassword,
                        confirmpassword: user.confirmpassword,
                      }}
                      onSubmit={handleSubmit}
                      validationSchema={Yup.object().shape({
                        password: Yup.string().required("Current passwrd is required"),
                        newpassword: Yup.string().required("New password is required"),
                        confirmpassword: Yup.string().required("Confirm password is required"),
                      })}
                    >
                        {({ handleChange, handleSubmit, values, errors, touched }) => (
                         showPassword && (     //showpassword
                      <View style={styles.formContainer}>
                        <TextInput
                          style={[styles.input, styles.usernameInput]}
                          value={values.password}
                          placeholder="Password"
                          placeholderTextColor="#23A29F"
                          color="#10bca"
                          onChangeText={handleChange("password")}
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
                          onChangeText={handleChange("Newpassword")}
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
                          onChangeText={handleChange("Confirmpassword")}
                        />
{touched.confirmpassword && (
      <Text style={styles.errorText}>{errors.confirmpassword}</Text>
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
      </View>
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
                <Text style={{ fontSize: 12, fontWeight: "bold", color: "#FFF" }}>
                  Welcome to Import Authority
                </Text>
              </View>
            )}



          </View>




        </TopUserControlBg>

        {/* Progress View Component */}
        <ProgressView />

        {/* Recent Application View */}
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate("CreateApplicationImage")}
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
          <Image
            source={require("../assets/carpay.png")}
            style={[
              styles.dashboardicon,
              { width: 60, height: 60, borderRadius: 30 },
            ]}
          />
          <Image
            source={require("../assets/carpay2.png")}
            style={[
              styles.dashboardicon,
              { width: 60, height: 60, borderRadius: 30 },
            ]}
          />
          <Image
            source={require("../assets/carpay3.png")}
            style={[
              styles.dashboardicon,
              { width: 60, height: 60, borderRadius: 30 },
            ]}
          />
          <Image
            source={require("../assets/carpay4.png")}
            style={[
              styles.dashboardicon,
              { width: 60, height: 60, borderRadius: 30 },
            ]}
          />
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

          {/* Sample application listing BOX 1*/}
          <View
            style={{
              ...styles.dashboardapplication,
              borderLeftWidth: 10,
              borderStartColor: colors.pending,
            }}
          >
            <View style={{ flexDirection: "row", marginLeft: -13 }}>
              <Image
                source={require("../assets/carpay.png")}
                style={[
                  styles.dashboardboxicon,
                  {
                    width: 80,
                    height: 80,
                    borderColor: colors.pending,
                    borderRadius: 10,
                    borderWidth: 2,
                  },
                ]}
              />
              <View style={{ paddingLeft: 10 }}>
                <Text>Toyoya Supra</Text>
                <View style={{ flexDirection: "row" }}>
                  <View>
                    <Image
                      source={require("../assets/chassis.png")}
                      style={[
                        styles.dashboardicon,
                        {
                          width: 16,
                          height: 16,
                          tintColor: "#000",
                          top: 4,
                          right: 10,
                        },
                      ]}
                    />
                    <Image
                      source={require("../assets/built.png")}
                      style={[
                        styles.dashboardicon,
                        {
                          width: 16,
                          height: 16,
                          tintColor: "#000",
                          top: 6,
                          right: 10,
                        },
                      ]}
                    />
                    <Image
                      source={require("../assets/odo.png")}
                      style={[
                        styles.dashboardicon,
                        {
                          width: 16,
                          height: 16,
                          tintColor: "#000",
                          top: 9,
                          right: 10,
                        },
                      ]}
                    />
                  </View>

                  <View>
                    <View>
                      <Text>Chassis:</Text>
                      <Text>Build Date:</Text>
                      <Text>ODO:</Text>
                    </View>
                  </View>

                  <View style={{ left: 10 }}>
                    <Text>123456M</Text>
                    <Text>2016/07</Text>
                    <Text>20350</Text>
                  </View>
                </View>
              </View>
            </View>

            {/* View,Edit,Download Buttons */}
            <View style={{}}>
              <LinearGradient
                colors={["#77B859", "#2DA596"]}
                locations={[0, 1]}
                start={{ x: 0.2, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={[
                  styles.dashboardalapplicationbuttons,
                  { marginBottom: 7 },
                ]}
              >
                <TouchableOpacity>
                  <Text
                    style={{ color: "#FFF", textAlign: "center", fontSize: 12 }}
                  >
                    View
                  </Text>
                </TouchableOpacity>
              </LinearGradient>

              <LinearGradient
                colors={["#77B859", "#2DA596"]}
                locations={[0, 1]}
                start={{ x: 0.2, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={[
                  styles.dashboardalapplicationbuttons,
                  { marginBottom: 7 },
                ]}
              >
                <TouchableOpacity>
                  <Text
                    style={{ color: "#FFF", textAlign: "center", fontSize: 12 }}
                  >
                    Edit
                  </Text>
                </TouchableOpacity>
              </LinearGradient>

              <LinearGradient
                colors={["#77B859", "#2DA596"]}
                locations={[0, 1]}
                start={{ x: 0.2, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.dashboardalapplicationbuttons}
              >
                <TouchableOpacity>
                  <Text
                    style={{ color: "#FFF", textAlign: "center", fontSize: 12 }}
                  >
                    Download
                  </Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>

          {/*Sample application listing box 2 */}
          <View
            style={{
              ...styles.dashboardapplication,
              borderLeftWidth: 10,
              borderStartColor: colors.rejected,
            }}
          >
            <View style={{ flexDirection: "row", marginLeft: -13 }}>
              <Image
                source={require("../assets/carpay.png")}
                style={[
                  styles.dashboardboxicon,
                  {
                    width: 80,
                    height: 80,
                    borderColor: colors.rejected,
                    borderRadius: 10,
                    borderWidth: 2,
                  },
                ]}
              />
              <View style={{ paddingLeft: 10 }}>
                <Text>Toyoya Supra</Text>
                <View style={{ flexDirection: "row" }}>
                  <View>
                    <Image
                      source={require("../assets/chassis.png")}
                      style={[
                        styles.dashboardicon,
                        {
                          width: 16,
                          height: 16,
                          tintColor: "#000",
                          top: 4,
                          right: 10,
                        },
                      ]}
                    />
                    <Image
                      source={require("../assets/built.png")}
                      style={[
                        styles.dashboardicon,
                        {
                          width: 16,
                          height: 16,
                          tintColor: "#000",
                          top: 6,
                          right: 10,
                        },
                      ]}
                    />
                    <Image
                      source={require("../assets/odo.png")}
                      style={[
                        styles.dashboardicon,
                        {
                          width: 16,
                          height: 16,
                          tintColor: "#000",
                          top: 9,
                          right: 10,
                        },
                      ]}
                    />
                  </View>

                  <View>
                    <View>
                      <Text>Chassis:</Text>
                      <Text>Build Date:</Text>
                      <Text>ODO:</Text>
                    </View>
                  </View>

                  <View style={{ left: 10 }}>
                    <Text>123456M</Text>
                    <Text>2016/07</Text>
                    <Text>20350</Text>
                  </View>
                </View>
              </View>
            </View>

            {/* View,Edit,Download Buttons */}
            <View style={{}}>
              <LinearGradient
                colors={["#77B859", "#2DA596"]}
                locations={[0, 1]}
                start={{ x: 0.2, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={[
                  styles.dashboardalapplicationbuttons,
                  { marginBottom: 7 },
                ]}
              >
                <TouchableOpacity>
                  <Text
                    style={{ color: "#FFF", textAlign: "center", fontSize: 12 }}
                  >
                    View
                  </Text>
                </TouchableOpacity>
              </LinearGradient>

              <LinearGradient
                colors={["#77B859", "#2DA596"]}
                locations={[0, 1]}
                start={{ x: 0.2, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={[
                  styles.dashboardalapplicationbuttons,
                  { marginBottom: 7 },
                ]}
              >
                <TouchableOpacity>
                  <Text
                    style={{ color: "#FFF", textAlign: "center", fontSize: 12 }}
                  >
                    Edit
                  </Text>
                </TouchableOpacity>
              </LinearGradient>

              <LinearGradient
                colors={["#77B859", "#2DA596"]}
                locations={[0, 1]}
                start={{ x: 0.2, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.dashboardalapplicationbuttons}
              >
                <TouchableOpacity>
                  <Text
                    style={{ color: "#FFF", textAlign: "center", fontSize: 12 }}
                  >
                    Download
                  </Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>

          {/*Sample application listingbox 3 */}
          <View
            style={{
              ...styles.dashboardapplication,
              borderLeftWidth: 10,
              borderStartColor: colors.pending,
            }}
          >
            <View style={{ flexDirection: "row", marginLeft: -13 }}>
              <Image
                source={require("../assets/carpay.png")}
                style={[
                  styles.dashboardboxicon,
                  {
                    width: 80,
                    height: 80,
                    borderColor: colors.pending,
                    borderRadius: 10,
                    borderWidth: 2,
                  },
                ]}
              />
              <View style={{ paddingLeft: 10 }}>
                <Text>Toyoya Supra</Text>
                <View style={{ flexDirection: "row" }}>
                  <View>
                    <Image
                      source={require("../assets/chassis.png")}
                      style={[
                        styles.dashboardicon,
                        {
                          width: 16,
                          height: 16,
                          tintColor: "#000",
                          top: 4,
                          right: 10,
                        },
                      ]}
                    />
                    <Image
                      source={require("../assets/built.png")}
                      style={[
                        styles.dashboardicon,
                        {
                          width: 16,
                          height: 16,
                          tintColor: "#000",
                          top: 6,
                          right: 10,
                        },
                      ]}
                    />
                    <Image
                      source={require("../assets/odo.png")}
                      style={[
                        styles.dashboardicon,
                        {
                          width: 16,
                          height: 16,
                          tintColor: "#000",
                          top: 9,
                          right: 10,
                        },
                      ]}
                    />
                  </View>

                  <View>
                    <View>
                      <Text>Chassis:</Text>
                      <Text>Build Date:</Text>
                      <Text>ODO:</Text>
                    </View>
                  </View>

                  <View style={{ left: 10 }}>
                    <Text>123456M</Text>
                    <Text>2016/07</Text>
                    <Text>20350</Text>
                  </View>
                </View>
              </View>
            </View>

            {/* View,Edit,Download Buttons */}
            <View style={{}}>
              <LinearGradient
                colors={["#77B859", "#2DA596"]}
                locations={[0, 1]}
                start={{ x: 0.2, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={[
                  styles.dashboardalapplicationbuttons,
                  { marginBottom: 7 },
                ]}
              >
                <TouchableOpacity>
                  <Text
                    style={{ color: "#FFF", textAlign: "center", fontSize: 12 }}
                  >
                    View
                  </Text>
                </TouchableOpacity>
              </LinearGradient>

              <LinearGradient
                colors={["#77B859", "#2DA596"]}
                locations={[0, 1]}
                start={{ x: 0.2, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={[
                  styles.dashboardalapplicationbuttons,
                  { marginBottom: 7 },
                ]}
              >
                <TouchableOpacity>
                  <Text
                    style={{ color: "#FFF", textAlign: "center", fontSize: 12 }}
                  >
                    Edit
                  </Text>
                </TouchableOpacity>
              </LinearGradient>

              <LinearGradient
                colors={["#77B859", "#2DA596"]}
                locations={[0, 1]}
                start={{ x: 0.2, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.dashboardalapplicationbuttons}
              >
                <TouchableOpacity>
                  <Text
                    style={{ color: "#FFF", textAlign: "center", fontSize: 12 }}
                  >
                    Download
                  </Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>

          {/*Sample application listingbox 4 */}
          <View
            style={{
              ...styles.dashboardapplication,
              borderLeftWidth: 10,
              borderStartColor: colors.pending,
            }}
          >
            <View style={{ flexDirection: "row", marginLeft: -13 }}>
              <Image
                source={require("../assets/carpay.png")}
                style={[
                  styles.dashboardboxicon,
                  {
                    width: 80,
                    height: 80,
                    borderColor: colors.pending,
                    borderRadius: 10,
                    borderWidth: 2,
                  },
                ]}
              />
              <View style={{ paddingLeft: 10 }}>
                <Text>Toyoya Supra</Text>
                <View style={{ flexDirection: "row" }}>
                  <View>
                    <Image
                      source={require("../assets/chassis.png")}
                      style={[
                        styles.dashboardicon,
                        {
                          width: 16,
                          height: 16,
                          tintColor: "#000",
                          top: 4,
                          right: 10,
                        },
                      ]}
                    />
                    <Image
                      source={require("../assets/built.png")}
                      style={[
                        styles.dashboardicon,
                        {
                          width: 16,
                          height: 16,
                          tintColor: "#000",
                          top: 6,
                          right: 10,
                        },
                      ]}
                    />
                    <Image
                      source={require("../assets/odo.png")}
                      style={[
                        styles.dashboardicon,
                        {
                          width: 16,
                          height: 16,
                          tintColor: "#000",
                          top: 9,
                          right: 10,
                        },
                      ]}
                    />
                  </View>

                  <View>
                    <View>
                      <Text>Chassis:</Text>
                      <Text>Build Date:</Text>
                      <Text>ODO:</Text>
                    </View>
                  </View>

                  <View style={{ left: 10 }}>
                    <Text>123456M</Text>
                    <Text>2016/07</Text>
                    <Text>20350</Text>
                  </View>
                </View>
              </View>
            </View>

            {/* View,Edit,Download Buttons */}
            <View style={{}}>
              <LinearGradient
                colors={["#77B859", "#2DA596"]}
                locations={[0, 1]}
                start={{ x: 0.2, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={[
                  styles.dashboardalapplicationbuttons,
                  { marginBottom: 7 },
                ]}
              >
                <TouchableOpacity>
                  <Text
                    style={{ color: "#FFF", textAlign: "center", fontSize: 12 }}
                  >
                    View
                  </Text>
                </TouchableOpacity>
              </LinearGradient>

              <LinearGradient
                colors={["#77B859", "#2DA596"]}
                locations={[0, 1]}
                start={{ x: 0.2, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={[
                  styles.dashboardalapplicationbuttons,
                  { marginBottom: 7 },
                ]}
              >
                <TouchableOpacity>
                  <Text
                    style={{ color: "#FFF", textAlign: "center", fontSize: 12 }}
                  >
                    Edit
                  </Text>
                </TouchableOpacity>
              </LinearGradient>

              <LinearGradient
                colors={["#77B859", "#2DA596"]}
                locations={[0, 1]}
                start={{ x: 0.2, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.dashboardalapplicationbuttons}
              >
                <TouchableOpacity>
                  <Text
                    style={{ color: "#FFF", textAlign: "center", fontSize: 12 }}
                  >
                    Download
                  </Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
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
  dashboardicon: {
    marginLeft: 10,
  },

  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  profileImageCenter: {
    alignSelf: 'center',
    alignItems: 'center',
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
  buttonProfile: {
    // // backgroundColor: "#079BB7",
    // borderWidth: 1,
    // // borderColor: "#079BB7",
    // borderTopLeftRadius: 5,
    // borderTopRightRadius: 0,
    // borderBottomLeftRadius: 5,
    // borderBottomRightRadius: 0,
    // paddingVertical: 5,
    // paddingHorizontal: 10,
    // color: "#fff",
  },
  buttonPassword: {
    //   backgroundColor: "transparent",
    //   borderWidth: 1,
    //   // borderColor: "#fff",
    //   borderTopLeftRadius: 0,
    //   borderTopRightRadius: 5,
    //   borderBottomLeftRadius: 0,
    //   borderBottomRightRadius: 5,
    //   paddingVertical: 5,
    //   paddingHorizontal: 10,
    //   color: "#079BB7",
    //   // backgroundColor: "#FFF",
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
    backgroundColor: '#079BB7',
    color: 'white',
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 0,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderColor: "#079BB7",

  },
  inactiveButton: {
    backgroundColor: 'white',
    color: '#079BB7',
    borderWidth: 1,
    borderColor: "#fff",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,

  },
});

export default Dashboard;
