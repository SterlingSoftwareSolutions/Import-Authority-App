import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableOpacity,
  Image,
  Text
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import ProgressView from "../components/ProgressView";
import useAuth from "../auth/useAuth";
import TopUserControlBg from "../components/TopUserControlBg";
import { useNavigation } from "@react-navigation/native";
import client from "../api/client";
import ApplicationLists from "../components/ApplicationLists";
import { CDN_URL } from '@env'

function Dashboard({ children }) {
  const navigation = useNavigation();
  const { user, logOut } = useAuth();
  const [applications, setApplications] = useState([]);
  const [avatar, setAvatar] = useState(
    user.avatar ?
      { uri: CDN_URL + '/assets/avatars/' + user.avatar }
      : require("../assets/avatarplaceholder.png")
  );

  // Application data fetching from api 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const api = await client();
        const response = await api.get("/applications");
        setApplications(response.data.data.applications);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* User control component */}
      <TopUserControlBg>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image
              source={avatar}
              style={[
                styles.profileImage,
              ]}
            />
          </View>
          <View style={{ left: 20 }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "#FFF",
                marginTop: 12,
              }}
            >
              Hi {user.name} !
            </Text>
            <Text style={{ fontSize: 12, fontWeight: "bold", color: "#FFF" }}>
              Welcome to Import Authority
            </Text>
          </View>

        </View>
      </TopUserControlBg>

      {/* Progress View Component */}
      <ProgressView />

      {/* Recent Quick Application View */}
      <View style={{ flexDirection: "row" }}>
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
            <TouchableOpacity key={application.id} onPress={() => navigation.navigate("ViewApplications", { applicationId: application.id })}>
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
