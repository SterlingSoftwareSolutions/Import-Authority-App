import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

import AppText from "../components/AppText";
import ApplicationListItem from "../components/ApplicationListItem";
import colors from "../config/colors";
import CustomButton from "../components/CustomButton";

function ApplicationViewScreen(props) {
  return (
    <SafeAreaView>
      <View style={styles.mainCardView}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              height: 70,
              width: 70,
              borderColor: colors.pending,
              borderWidth: 2,
              borderRadius: 5,
              borderStyle: "solid",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../assets/yellowcar.jpg")}
              resizeMode="cover"
              style={{
                flex: 1,
                height: "100%",
                width: "100%",
                borderRadius:2
              }}
            />
          </View>
          <View style={{ marginLeft: 12 }}>
            <Text
              style={{
                fontSize: 14,
                color: colors.black,
                fontWeight: "bold",
                textTransform: "capitalize",
              }}
            >
              {"Toyota Supra"}
            </Text>
            <View
              style={{
                marginTop: 4,
                borderWidth: 0,
                width: "85%",
              }}
            >
              <Text
                style={{
                  color: colors.darkGrey,
                  fontSize: 12,
                }}
              >
                {"chassis:12345GMh&*45"}
              </Text>
              <Text
                style={{
                  color: colors.darkGrey,
                  fontSize: 12,
                }}
              >
                {"Built Date:2016/07"}
              </Text>
              <Text
                style={{
                  color: colors.darkGrey,
                  fontSize: 12,
                }}
              >
                {"ODO:20350"}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            height: 25,
            borderWidth: 0,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity style={styles.buttonstyle}>
            <Text style={{ fontSize: 12 }}>View</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonstyle}>
            <Text style={{ fontSize: 12 }}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonstyle}>
            <Text style={{ fontSize: 12 }}>Download</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  mainCardView: {
    height: 90,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
    borderRadius: 15,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 16,
    paddingRight: 14,
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 16,
    marginRight: 16,
    top: 30,
  },
  subCardView: {
    height: 50,
    width: 50,
    borderColor: colors.completed,
    borderRadius: 5,
    borderWidth: 2,
    borderStyle: "solid",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonstyle: {
    borderColor: colors.darkGrey,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 5,
    marginBottom: 5,
    width: 70,
    alignItems: "center",
  },
});

export default ApplicationViewScreen;
