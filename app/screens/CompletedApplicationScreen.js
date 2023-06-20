import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
} from "react-native";
import colors from "../config/colors";
import TopUserControlBg from "../components/TopUserControlBg";
import ApplicationLists from "../components/ApplicationLists";

function CompletedApplicationScreen(props) {
  const data = [
    {
      id: "1",
      name: "Toyota Supra",
      chassis: "123456M",
      buildDate: "2016/07",
      odo: "20350",
      imageSource: require("../assets/carpay.png"),
      state: "completed",
    },
    {
      id: "2",
      name: "Another Car",
      chassis: "789012M",
      buildDate: "2020/03",
      odo: "15000",
      imageSource: require("../assets/carpay2.png"),
      state: "completed",
    },
    {
      id: "3",
      name: "Toyoya Supra",
      chassis: "123456M",
      buildDate: "2016/07",
      odo: "20350",
      imageSource: require("../assets/carpay3.png"),
      state: "completed",
    },
  
  ];
  return (
    <SafeAreaView style={styles.container}>
      <TopUserControlBg>
        <Text style={styles.statusText}>Completed</Text>
      </TopUserControlBg>

      {/* Calling FlatList  */}
      <ApplicationLists data={data} />

    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#DCF3E8",
  },
  statusText: {
    fontWeight: 700,
    fontSize: 25,
    color: colors.white,
  },
});
export default CompletedApplicationScreen;
