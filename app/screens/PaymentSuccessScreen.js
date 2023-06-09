import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import colors from "../config/colors";

function PaymentSuccessScreen(props) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "#000000aa",
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      >
        <View style={styles.successbox}>
          <Image
            source={require("../assets/success.png")}
            style={[styles.icon]}
          ></Image>
          <Text style={{ fontSize: 18 }}>Your Payment was Successfull</Text>
          <Text>Reference No:ADV41_26013663</Text>
          <Text>_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _</Text>

          <View
            style={{
              marginBottom: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              width: "60%",
            }}
          >
            <Text style={styles.paymentinfo1}>Amount</Text>
            <Text style={styles.paymentinfo2}>$150</Text>
          </View>

          <View
            style={{
              marginBottom: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              width: "60%",
            }}
          >
            <Text style={styles.paymentinfo1}>Application</Text>
            <Text style={styles.paymentinfo2}>123</Text>
          </View>

          <View
            style={{
              marginBottom: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              width: "60%",
            }}
          >
            <Text style={styles.paymentinfo1}>Card</Text>
            <Text style={styles.paymentinfo2}>****4242</Text>
          </View>

          <View
            style={{
              marginBottom: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              width: "60%",
            }}
          >
            <Text style={styles.paymentinfo1}>Time</Text>
            <Text style={styles.paymentinfo2}>2023-05,18 04:26:10</Text>
          </View>

          <View style={{ width: "80%" }}>
            <LinearGradient
              colors={["#77B859", "#2DA596"]} // Define the colors for the gradient (ash to lighter ash)
              locations={[0, 1]} // Define the gradient color stops
              start={{ x: 0.2, y: 0 }} // Define the start position (top-left)
              end={{ x: 1, y: 1 }} // Define the end position (top-right)
              style={styles.button}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("Dashboard")}
              >
                <Text style={{ ...styles.buttonText }}>
                  Return to Dashboard
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("ViewTransactions")}
          >
            <Text style={{ ...styles.buttonText, color: "grey" }}>
              View Transactions
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#DCF3E8",
  },
  button: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  icon: {
    marginLeft: 10,
  },
  expiry_cvc: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  paymentinfo1: {
    fontWeight: "bold",
  },

  paymentinfo2: {
    color: colors.darkGrey,
    fontWeight: "bold",
  },
  successbox: {
    backgroundColor: "white",
    zIndex: 2,
    width: 350,
    height: 500,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 40,
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
  },
});
export default PaymentSuccessScreen;