import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import TopUserControlBg from "../components/TopUserControlBg";
import colors from "../config/colors";

function ViewApplicationScreen(props) {
  return (
    <View style={styles.container}>
      <TopUserControlBg>
        <View style={styles.viewstatus}>
          <Text style={{ ...styles.viewstatuslabel }}>Submitted</Text>
        </View>

        <View>
          <Text style={{ color: "#E3E2E2", textAlign: "center" }}>
            Your Application is in Submitted Stage
          </Text>
          <Text
            style={{
              color: "#ffffff",
              textAlign: "center",
              fontWeight: "bold",
              marginTop: 10,
            }}
          >
            Approval Type: SEV
          </Text>
        </View>
      </TopUserControlBg>
      <ScrollView>
        <View style={{ width: "90%", marginHorizontal: "5%", marginTop: 20 }}>
          <Text style={{ color: "#079BB7", fontWeight: "bold" }}>
            Vehicle Info
          </Text>

          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
              justifyContent: "space-between",
            }}
          >
            <View style={{ width: "45%" }}>
              <Text>Chassis/Frame Number</Text>
              <Text style={styles.valueText}>12345GMh&*45</Text>
            </View>

            <View style={{ width: "45%" }}>
              <Text>Est. date of arrival:</Text>
              <Text style={styles.valueText}>2016/11/01</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
              justifyContent: "space-between",
            }}
          >
            <View style={{ width: "45%" }}>
              <Text>Make:</Text>
              <Text style={styles.valueText}>Toyota</Text>
            </View>

            <View style={{ width: "45%" }}>
              <Text>Model:</Text>
              <Text style={styles.valueText}>Prius</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
              justifyContent: "space-between",
            }}
          >
            <View style={{ width: "45%" }}>
              <Text>Build Date:</Text>
              <Text style={styles.valueText}>July 2016</Text>
            </View>

            <View style={{ width: "45%" }}>
              <Text>Model:</Text>
              <Text style={styles.valueText}>Petrol</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
              justifyContent: "space-between",
            }}
          >
            <View style={{ width: "45%" }}>
              <Text>Transmission:</Text>
              <Text style={styles.valueText}>Petrol</Text>
            </View>

            <View style={{ width: "45%" }}>
              <Text>Body Type:</Text>
              <Text style={styles.valueText}>Sedan</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
              justifyContent: "space-between",
            }}
          >
            <View style={{ width: "45%" }}>
              <Text>Transmission:</Text>
              <Text style={styles.valueText}>Petrol</Text>
            </View>

            <View style={{ width: "45%" }}>
              <Text>Body Type:</Text>
              <Text style={styles.valueText}>Sedan</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
              justifyContent: "space-between",
            }}
          >
            <View style={{ width: "45%" }}>
              <Text>Drive Type:</Text>
              <Text style={styles.valueText}>FWD</Text>
            </View>

            <View style={{ width: "45%" }}>
              <Text>ODO Meter:</Text>
              <Text style={styles.valueText}>20350</Text>
            </View>
          </View>

          <Text
            style={{ color: colors.primary, fontWeight: "bold", marginTop: 20 }}
          >
            Exterior Images
          </Text>

          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <View style={styles.cameraContainer}>
              <Image
                source={require("../assets/cam.png")}
                style={[styles.cameraIcon]}
              />
              <Text style={styles.frText}>FR Corner</Text>
            </View>
            <View style={styles.cameraContainer}>
              <Image
                source={require("../assets/cam.png")}
                style={[styles.cameraIcon]}
              />
              <Text style={styles.frText}>RR Corner</Text>
            </View>

            <View style={styles.cameraContainer}>
              <Image
                source={require("../assets/cam.png")}
                style={[styles.cameraIcon]}
              />
              <Text style={styles.frText}>FL Corner</Text>
            </View>
            <View style={styles.cameraContainer}>
              <Image
                source={require("../assets/cam.png")}
                style={[styles.cameraIcon]}
              />
              <Text style={styles.frText}>RL Corner</Text>
            </View>
          </View>

          <Text
            style={{ color: colors.primary, fontWeight: "bold", marginTop: 20 }}
          >
            Interior Images
          </Text>

          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <View style={styles.cameraContainer}>
              <Image
                source={require("../assets/cam.png")}
                style={[styles.cameraIcon]}
              />
              <Text style={styles.frText}>FR Corner</Text>
            </View>
            <View style={styles.cameraContainer}>
              <Image
                source={require("../assets/cam.png")}
                style={[styles.cameraIcon]}
              />
              <Text style={styles.frText}>RR Corner</Text>
            </View>

            <View style={styles.cameraContainer}>
              <Image
                source={require("../assets/cam.png")}
                style={[styles.cameraIcon]}
              />
              <Text style={styles.frText}>FL Corner</Text>
            </View>
            <View style={styles.cameraContainer}>
              <Image
                source={require("../assets/cam.png")}
                style={[styles.cameraIcon]}
              />
              <Text style={styles.frText}>RL Corner</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#DCF3E8",
  },
  background: {
    borderRadius: 20,
    padding: 10,
  },
  viewstatuslabel: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#F7D060",
    width: "25%",
    justifyContent: "space-between",
    alignSelf: "center",
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  cameraContainer: {
    marginHorizontal: "auto",
    backgroundColor: "white",
    paddingHorizontal: 4,
    paddingVertical: 2,
    marginTop: 25,
    borderRadius: 10,
    borderWidth: 1,
    width: 80,
    height: 90,
    alignItems: "center",
    borderColor: colors.lightGrey,
  },
  cameraIcon: {
    marginTop: 10,
    borderRadius: 10,
    width: 50,
    height: 50,
    tintColor: "#C9C9C9",
  },
  frText: {
    fontSize: 12,
  },
  valueText: {
    color: colors.darkGrey,
  },
});
export default ViewApplicationScreen;
