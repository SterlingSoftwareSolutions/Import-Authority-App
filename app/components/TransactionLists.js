import React from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import colors from "../config/colors";
import { useNavigation } from "@react-navigation/native";
import { CDN_URL } from '@env'
import client from "../api/client";


const TransactionLists = ({ data }) => {
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
          <Image
            source={{
              uri: imgFrontRightAsset ? CDN_URL + '/assets/applications/' + imgFrontRightAsset.location : "",
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
                top: 2
              },
            ]}
          />
          {/* Rendering Total , paid , and Balance */}
          <View style={{ paddingLeft: 10 }}>
            <View style={{ flexDirection: "row" }}>
              <View>
                <View style={{ left: -3 }}>
                  <Text style={{ maxWidth: 70, minHeight: 35 }}>Total:</Text>
                  <Text style={{ bottom: 4 }}>Paid</Text>
                  <Text>Balance</Text>
                </View>
              </View>
              <View style={{ left: -2 }}>
                <Text style={{ maxWidth: 70, fontSize: 13, minHeight: 35, top: 2 }}>{item.make}</Text>
                <Text style={{ bottom: 3, fontSize: 13, }}>{`${item.build_month}/${item.paid}`}</Text>
                {/* <Text style={{ bottom: 6, fontSize: 13, top: 2 }}>{item.odo_meter}</Text> */}
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

export default TransactionLists;
