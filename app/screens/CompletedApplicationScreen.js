import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
} from "react-native";
import colors from "../config/colors";
import TopUserControlBg from "../components/TopUserControlBg";
import ApplicationLists from "../components/ApplicationLists";
import client from "../api/client";

function CompletedApplicationScreen(props) {

  const [applications, setApplications] = useState([]);

 useEffect(() => {
  const fetchData = async () => {
    try {
      const api = await client();
      const response = await api.get("/applications"); 
      const allApplications = response.data.data.applications;
      const completedApplications = allApplications.filter(application => application.status === 'completed');
      setApplications(completedApplications);
    } catch (error) {
      console.log(error);
    }
  };

  fetchData();
}, []);

  return (
    <SafeAreaView style={styles.container}>
      <TopUserControlBg>
        <Text style={styles.statusText}>Completed</Text>
      </TopUserControlBg>

      {/* Calling FlatList  */}
          <ApplicationLists data={applications} />

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
