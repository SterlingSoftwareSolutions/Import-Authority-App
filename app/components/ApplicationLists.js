import React from "react";
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import ApplicationFunctionsGradientButton from "./ApplicationFunctionsGradientButton";
import { useNavigation } from "@react-navigation/native";
import { CDN_URL } from '@env'

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
        <View style={{ flexDirection: "row", marginLeft: -13, }}>
        <TouchableOpacity onPress={() => navigation.navigate("ViewApplications", { applicationId: item.id })}>
          <Image
            source={{
              uri: CDN_URL + '/assets/applications/' + (imgFrontRightAsset ? imgFrontRightAsset?.location : 'default.png'),
              type: `image/${fileType}`,
            }}
            style={[
              styles.dashboardboxicon,
              {
                width: 90,
                height: 90,
                borderColor: borderColor,
                borderRadius: 10,
                borderWidth: 2,
                alignSelf: 'center',
                marginTop:15
              },
            ]}
          />
          </TouchableOpacity>
          {/* Rendering chassis , build date , and Odometer */}
          <View style={{ paddingLeft: 10 }}>
            <Text style={{ bottom: 5, color: '#000', fontWeight: '700' }}>{item.make}</Text>
            <View style={{ flexDirection: "row" }}>
              <View>
                <View style={{ flexDirection: 'row' }}>
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
                  <Text style={{ minHeight: 35 }}>Chassis</Text>
                  <Text style={{ left: 20, width: 130, fontSize: 13 }}>: {item.chassis_no}</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Image
                    source={require("../assets/built.png")}
                    style={[
                      styles.dashboardicon,
                      {
                        width: 16,
                        height: 16,
                        tintColor: "#000",
                        right: 10,
                        bottom: 12,
                      },
                    ]}
                  />
                  <Text style={{ bottom: 15 }}>Build Date</Text>
                  <Text style={{ fontSize: 13, bottom: 15, left: 8, }}>: {`${item.build_month}/${item.build_year}`}</Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                  <Image
                    source={require("../assets/odo.png")}
                    style={[
                      styles.dashboardicon,
                      {
                        width: 16,
                        height: 16,
                        tintColor: "#000",
                        right: 10,
                        bottom: 10
                      },
                    ]}
                  />
                  <Text style={{ bottom: 12 }}>ODO</Text>
                  <Text style={{ fontSize: 13, bottom: 12, left: 45, }}>: {item.odo_meter}</Text>
                </View>
                {/* View, Edit, Download Buttons */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  {/* <ApplicationFunctionsGradientButton text="View" onPress={() => navigation.navigate("ViewApplications", { applicationId: item.id })} /> */}
                  <ApplicationFunctionsGradientButton text="Edit" onPress={() => navigation.navigate("EditApplications", { applicationId: item.id })} />
                  <ApplicationFunctionsGradientButton text="Download" />
                </View>
                <View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ paddingBottom: 20 }}
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
    paddingVertical: 10,
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
