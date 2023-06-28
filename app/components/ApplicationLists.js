import React from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import colors from "../config/colors";
import ApplicationFunctionsGradientButton from "./ApplicationFunctionsGradientButton";
import { useNavigation } from "@react-navigation/native";
import {CDN_URL} from '@env'

const ApplicationLists = ({ data }) => {
  const navigation = useNavigation();

  // render item for FlatList
  const renderItem = ({ item }) => {
    let borderColor;

    switch (item.status) {
      case "rejected":
        borderColor = colors.rejected;
        break;
      case "completed":
        borderColor = colors.completed;
        break;
      case "draft":
        borderColor = colors.draft;
        break;
      case "pending":
      default:
        borderColor = colors.pending;
        break;
    }

    const imgFrontRightAsset = item.assets.find(
      (asset) => asset.asset_type === "img_front_right"
    );

    const fileType = imgFrontRightAsset ? imgFrontRightAsset.file_type : "";

    return (
      <View
        style={{
          ...styles.dashboardapplication,
          borderLeftWidth: 10,
          borderStartColor: borderColor,
        }}
      >

        {/*Rendering front right image */}
        <View style={{ flexDirection: "row", marginLeft: -13 }}>
          <Image
            source={{
              uri: imgFrontRightAsset ? CDN_URL + '/assets/applications/' + imgFrontRightAsset.location : "",
              type: `image/${fileType}`,
            }}
            style={[
              styles.dashboardboxicon,
              {
                width: 80,
                height: 80,
                borderColor: borderColor,
                borderRadius: 10,
                borderWidth: 2,
              },
            ]}
          />
          {/* Rendering chassis , build date , and Odometer */}
          <View style={{ paddingLeft: 10 }}>
            <Text>{item.make}</Text>
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
                <Text>{item.chassis_no}</Text>
                <Text>{`${item.build_month}/${item.build_year}`}</Text>
                <Text>{item.odo_meter}</Text>
              </View>
            </View>
          </View>
        </View>

        {/* View, Edit, Download Buttons */}
        <View>
          <ApplicationFunctionsGradientButton text="View"  onPress={() => navigation.navigate("ViewApplications")} />
          <ApplicationFunctionsGradientButton text="Edit" />
          <ApplicationFunctionsGradientButton text="Download" />
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ paddingVertical: 10 }}
    />
  );
};

const styles = StyleSheet.create({
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
  dashboardboxicon: {
    marginLeft: 10,
  },
  dashboardicon: {
    marginLeft: 10,
  },
});

export default ApplicationLists;
