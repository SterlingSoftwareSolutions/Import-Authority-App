import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import useAuth from "../auth/useAuth";
import ProgressView from "../components/ProgressView";
import TopUserControlBg from "../components/TopUserControlBg";
import { useNavigation } from "@react-navigation/native";
import client from "../api/client";
import ApplicationLists from "../components/ApplicationLists";


function Dashboard({ children }) {
  const navigation = useNavigation();
  const { user, logOut } = useAuth();
  const [showProfile, setShowProfile] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [profileActive, setProfileActive] = useState(true);
  const [applications, setApplications] = useState([]);
  const endpoint = "/profile";

  const toggleProfile = () => {
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

                ]}
              />
            </TouchableOpacity>


          </View>

        </View>
      </TopUserControlBg>

      {/* Progress View Component */}
      <ProgressView />

      {/* Recent Quick Application View */}
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("CreateApplicationScreen")}
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
            <TouchableOpacity key={application.id}>
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
          height: "54%",
          marginLeft: 9,
          marginTop: 15,
        }}
      >

        {/* Calling Application List  - FlatList  */}
        <ApplicationLists data={applications} />

      </View>

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

  iconStyle: {
    marginLeft: 10,
    width: 60, height: 60, borderRadius: 30,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },

});

export default Dashboard;
