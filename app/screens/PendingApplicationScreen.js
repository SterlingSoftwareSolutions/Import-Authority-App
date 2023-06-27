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

function PendingApplicationScreen(props) {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const api = await client();
        const response = await api.get("/applications"); 
        const allApplications = response.data.data;
        const pendingApplications = allApplications.filter(application => application.status === 'pending');
        setApplications(pendingApplications);
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchData();
  }, []);
  
  return (
    <SafeAreaView style={styles.container}>
      <TopUserControlBg>
        <Text style={styles.statusText}>Pending</Text>
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
export default PendingApplicationScreen;
