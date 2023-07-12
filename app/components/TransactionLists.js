import React from "react";
import { View, Text, Image, FlatList, StyleSheet, Touchable } from "react-native";
import colors from "../config/colors";
import { useNavigation } from "@react-navigation/native";
import { CDN_URL } from '@env'
import client from "../api/client";
import { TouchableOpacity } from "react-native-gesture-handler";


const TransactionLists = ({ data }) => {
  const navigation = useNavigation();
  // render item for FlatList
  const RenderItem = ({ item }) => {
    let borderColor = colors.pending;
    return (
      <View
        style={{
          ...styles.dashboardapplication,
          borderLeftWidth: 10,
          borderStartColor: borderColor
        }}
      >

        {/*Rendering front right image */}
        <View style={{ flexDirection: "row", marginLeft: -13, }}>
          <Image
            source={{
              uri: item.image ? CDN_URL + '/assets/applications/' + item.image : ""
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
                <View style={{}}>
                  <Text style={{ maxWidth: 70, minHeight: 35 }}>Total:</Text>
                  <Text style={{ bottom: 4 }}>Paid</Text>
                  <Text>Balance</Text>
                </View>
              </View>
              <View style={{}}>
                <Text style={{ maxWidth: 70, fontSize: 13, minHeight: 35, top: 2 }}>{item.amount_total}</Text>
                <Text style={{ bottom: 3, fontSize: 13, }}>{item.amount_paid}</Text>
                <Text style={{ bottom: 6, fontSize: 13, top: 2 }}>{item.amount_total - item.amount_paid}</Text>
              </View>


              <View>
                <TouchableOpacity style={{ backgroundColor: 'red', width: '140%', borderRadius: 5 }}>
                  <Text style={{ alignSelf: 'center', fontSize: 12 }}>Pay now</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={data.bills}
      renderItem={({ item }) => <RenderItem item={item}></RenderItem>}
      keyExtractor={item => item.id}
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
