import React from "react";
import { View, Text, Image, FlatList, StyleSheet, Touchable } from "react-native";
import colors from "../config/colors";
import { useNavigation } from "@react-navigation/native";
import { CDN_URL } from '@env'
import client from "../api/client";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SelectList } from "react-native-dropdown-select-list";


const TransactionLists = ({ data }) => {





  const navigation = useNavigation();
  // render item for FlatList
  const RenderItem = ({ item }) => {
    const balance = item.amount_total - item.amount_paid;
    let borderColor = colors.white;


    return (



      <View
        style={{
          ...styles.dashboardapplication,
          borderLeftWidth: 10,
          borderStartColor: borderColor
        }}
      >

        {/*Rendering front right image */}
        <View style={{ flexDirection: "row", }}>
          <Image
            source={{
              uri: item.image ? CDN_URL + '/assets/applications/' + item.image : ""
            }}
            style={[
              styles.dashboardboxicon,
              {
                width: 90,
                height: 90,
                borderColor: balance ? 'red' : 'green',
                borderRadius: 10,
                borderWidth: 2,
                top: 2

              },
            ]}
          />
          {/* Rendering Total , paid , and Balance */}
          <View style={{ paddingLeft: 10 }}>

            <Text style={{ left: 15 }}>{item.chassis_no}</Text>
            <View style={{ flexDirection: "row" }}>
              <View>
                <View style={{ top: 8, left: 15 }}>
                  <Text style={{ maxWidth: 70, }}>Total:</Text>
                  <Text style={{ bottom: 1 }}>Paid:</Text>
                  <Text style={{ color: balance ? 'red' : 'green' }}>Balance:</Text>
                </View>
              </View>
              <View style={{ top: 8, left: 35 }}>
                <Text>${item.amount_total}</Text>
                <Text>${item.amount_paid}</Text>
                <Text style={{ color: balance ? 'red' : 'green' }}>${balance}</Text>
              </View>


              {balance !== 0 && (
                <View style={{ top: 15, right: 5 }}>
                  <TouchableOpacity style={{ backgroundColor: '#FF6D60', paddingHorizontal: 10, borderRadius: 5, paddingVertical: 5, marginLeft: 90, }}>
                    <Text style={{ fontSize: 12, color: 'white', fontWeight: '800', }}>Pay now</Text>
                  </TouchableOpacity>
                </View>

              )}


            </View>
          </View>
        </View>
      </View >
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
    paddingVertical: 20,
    justifyContent: "space-between",
    marginBottom: 10,
    left: 8,
    top: 40
  },
  dashboardboxicon: {
    marginLeft: 10,
  },
  dashboardicon: {
    marginLeft: 10,
  },
});

export default TransactionLists;
