import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  FlatList,
} from "react-native";
import TopUserControlBg from "../components/TopUserControlBg";
import colors from "../config/colors";
import { useNavigation } from "@react-navigation/native";
import TransactionHistoryLists from "../components/TransactionHistoryList";
import client from "../api/client";

function PaymentHistory() {
  const navigation = useNavigation();
  const [transactions, setTransactions] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const api = await client();
        const response = await api.get("/transactions");
        setTransactions(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);



  return (
    <SafeAreaView style={styles.container}>
      <TopUserControlBg>
        <View>
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              color: "#FFF",
              marginTop: 12,
            }}
          >
            Payment History
          </Text>
        </View>
        {/* Filtering-sort by date should be done */}
      </TopUserControlBg>


      <View>
        <TransactionHistoryLists data={transactions} />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#DCF3E8",
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  icon: {
    marginLeft: 10,
  },
  transcationtoday: {
    marginTop: 10,
  },
  transactionCategory: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#555",
    marginTop: 5,
    marginBottom: 10,
  },
  transactionBoxContainer: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  flatListContainer: {
    paddingVertical: 10,
  },
  transactionBox: {
    borderRadius: 10,
    backgroundColor: "#F1FAF6",
    padding: 20,
    width: "100%",
    marginBottom: 10,
    borderLeftWidth: 10,
    borderStartColor: colors.completed,
  },
  transactionDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  amountText: {
    color: colors.completed,
    fontWeight: "bold",
  },
  timestampText: {
    fontSize: 12,
  },
});
export default PaymentHistory;
