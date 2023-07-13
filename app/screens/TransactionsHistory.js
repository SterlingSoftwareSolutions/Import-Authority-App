import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  FlatList,
} from "react-native";
import TopUserControlBg from "../components/TopUserControlBg";
import colors from "../config/colors";

const transactions = [
  {
    id: 1,
    cardNumber: "4242 4242 4242 4242",
    maskedCardNumber: "**** **** **** 4242",
    amount: "$150",
    timestamp: "Just Now",
  },
  {
    id: 2,
    cardNumber: "5555 5555 5555 5555",
    maskedCardNumber: "**** **** **** 5555",
    amount: "$75",
    timestamp: "1 hour ago",
  },
  {
    id: 3,
    cardNumber: "1234 5678 9012 3456",
    maskedCardNumber: "**** **** **** 3456",
    amount: "$200",
    timestamp: "2 days ago",
  },
  {
    id: 4,
    cardNumber: "9876 5432 1098 7654",
    maskedCardNumber: "**** **** **** 7654",
    amount: "$50",
    timestamp: "1 week ago",
  },
  {
    id: 5,
    cardNumber: "5555 5555 5555 5555",
    maskedCardNumber: "**** **** **** 5555",
    amount: "$75",
    timestamp: "1 hour ago",
  },
  {
    id: 6,
    cardNumber: "1234 5678 9012 3456",
    maskedCardNumber: "**** **** **** 3456",
    amount: "$200",
    timestamp: "2 days ago",
  },
  {
    id: 7,
    cardNumber: "9876 5432 1098 7654",
    maskedCardNumber: "**** **** **** 7654",
    amount: "$50",
    timestamp: "1 week ago",
  },
];

function PaymentHistory(props) {
  const renderTransactionItem = ({ item }) => (



    <View style={styles.transactionBox}>
      <View>
        <Text>{item.cardNumber}</Text>
      </View>
      <View style={styles.transactionDetails}>
        <Text>{item.maskedCardNumber}</Text>
        <Text style={styles.amountText}>{item.amount}</Text>
      </View>
      <Text style={styles.timestampText}>{item.timestamp}</Text>
    </View>
  );

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

      <FlatList
        contentContainerStyle={styles.transactionBoxContainer}
        ListHeaderComponent={
          <Text style={styles.transactionCategory}>Today</Text>
        }
        data={transactions}
        renderItem={renderTransactionItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.flatListContainer}
      />
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
