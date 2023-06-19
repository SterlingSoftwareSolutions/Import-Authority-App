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

function Dashboard({ children }) {
  const navigation = useNavigation();
  const { user } = useAuth();
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

                  {!showPassword && ( // Add this condition to hide the form when showPassword is true
                    <View style={styles.formContainer}>
                      <TextInput
                        style={[styles.input, styles.usernameInput]}
                        placeholder={user.name}
                        placeholderTextColor="#23A29F"
                        color="#10bca"
                      />
                      <TextInput
                        style={[styles.input, styles.usernameInput]}
                        placeholder={user.businessname}
                        placeholderTextColor="#23A29F"
                        color="#10bca"
                      />
                      <TextInput
                        style={[styles.input, styles.usernameInput]}
                        placeholder={user.username}
                        placeholderTextColor="#23A29F"
                        color="#10bca"
                      />
                      <TextInput
                        style={[styles.input, styles.usernameInput]}
                        placeholder={user.email}
                        placeholderTextColor="#23A29F"
                        color="#10bca"
                      />
                      <TextInput
                        style={[styles.input, styles.usernameInput]}
                        placeholder={user.phone}
                        placeholderTextColor="#23A29F"
                        color="#10bca"
                      />

                      {/* UPDATE & PROFILE button container */}
                      <TouchableOpacity
                        style={{ ...styles.buttonContainer, marginBottom: 10 }}
                        onPress={() => { }}
                      >
                        <Text style={styles.buttonText}>UPDATE</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{ ...styles.buttonContainer, marginBottom: 20 }}
                        onPress={() => logOut()}
                      >
                        <Text style={styles.buttonText}>LOGOUT</Text>
                      </TouchableOpacity>
                    </View>

                  )}

                  <View>
                    {showPassword && (     //showpassword

                      <View style={styles.formContainer}>
                        <TextInput
                          style={[styles.input, styles.usernameInput]}
                          placeholder="Password"
                          placeholderTextColor="#23A29F"
                          color="#10bca"
                        />
                        <TextInput
                          style={[styles.input, styles.usernameInput]}
                          placeholder="New Password"
                          placeholderTextColor="#23A29F"
                          color="#10bca"
                        />
                        <TextInput
                          style={[styles.input, styles.usernameInput]}
                          placeholder="Confirm Password"
                          placeholderTextColor="#23A29F"
                          color="#10bca"
                        />



                        <TouchableOpacity
                          style={{ ...styles.buttonContainer, marginBottom: 10 }}
                          onPress={() => {
                            // Handle button press action here
                          }}
                        >
                          <Text style={styles.buttonText}>UPDATE</Text>
                        </TouchableOpacity>


                        <TouchableOpacity
                          style={{ ...styles.buttonContainer, marginBottom: 20 }}
                          onPress={() => {
                            // Handle button press action here
                          }}
                        >
                          <Text style={styles.buttonText}>LOGOUT</Text>
                        </TouchableOpacity>

                      </View>
                    )}


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
