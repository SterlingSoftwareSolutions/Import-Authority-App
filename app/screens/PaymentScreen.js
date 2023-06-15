import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ProgressBar } from "react-native-paper";
import colors from "../config/colors";
import { useNavigation } from "@react-navigation/native";
import TopUserControlBg from "../components/TopUserControlBg";

function PaymentScreen(props) {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [expiryDate, setExpiryDate] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [progressText1, setProgressText1] = React.useState("");
  const [progressText2, setProgressText2] = React.useState("");
  const [progressText3, setProgressText3] = React.useState("");

  const handleExpiryDateChange = (text) => {
    let formattedText = text;

    if (text.length === 2 && !text.includes("/")) {
      formattedText += "/";
    } else if (text.length === 3 && text.charAt(2) === "/") {
      formattedText = text.slice(0, 2);
    } else if (text.length === 5 && text.charAt(2) !== "/") {
      formattedText = text.slice(0, 2) + "/" + text.slice(2);
    }

    setExpiryDate(formattedText);
  };

  const handleCardNumberChange = (text) => {
    let formattedText = text.replace(/[^\d]/g, "");

    if (formattedText.length > 0) {
      formattedText = formattedText.match(new RegExp(".{1,4}", "g")).join(" ");
    }

    setCardNumber(formattedText);
  };

  const handlePress = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleOverlayPress = () => {
    closeModal();
  };

  const progress1 = 1;
  const progress2 = 1;
  const progress3 = 1;

  return (
    <View style={styles.container}>
      <TopUserControlBg>
        <View style={styles.progressContainer}>
          <View style={styles.progressBarWrapper}>
            <TextInput
              style={[styles.headingText, styles.progressText]}
              value={progressText1}
              onChangeText={setProgressText1}
              placeholder="Car Info"
              placeholderTextColor="#fff"
            />
            <ProgressBar
              progress={progress1}
              color="#000"
              style={styles.progressBar1}
            />
          </View>

          <View style={styles.progressBarWrapper}>
            <TextInput
              style={[styles.headingText, styles.progressText]}
              value={progressText2}
              onChangeText={setProgressText2}
              placeholder="Documents"
              placeholderTextColor="#fff"
            />
            <ProgressBar
              progress={progress2}
              color="#000"
              style={styles.progressBar2}
            />
          </View>

          <View style={styles.progressBarWrapper}>
            <TextInput
              style={[styles.headingText, styles.progressText]}
              value={progressText3}
              onChangeText={setProgressText3}
              placeholder="Payment"
              placeholderTextColor="#fff"
            />
            <ProgressBar
              progress={progress3}
              color="#000"
              style={styles.progressBar3}
            />
          </View>
        </View>
      </TopUserControlBg>
      <ScrollView contentContainerStyle={{ marginTop: 10, paddingBottom: 20 }}>
        <SafeAreaView style={styles.back_draft}>
          <View style={styles.boxContainer}>
            <View style={styles.box}>
              {/* Content inside the box */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Image source={require("../assets/card.png")}></Image>
                <Text>5/28</Text>
              </View>

              <SafeAreaView
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                  marginBottom: 25,
                }}
              >
                <Text>****</Text>
                <Text>****</Text>
                <Text>****</Text>
                <Text>8250</Text>
              </SafeAreaView>
              <Text style={{ ...styles.row3_1, marginBottom: 10 }}>
                Thafani Nawas
              </Text>
            </View>
          </View>

          <View style={{ ...styles.boxContainer2, zIndex: -1 }}>
            <View style={{ ...styles.box, paddingTop: 35 }}>
              {/* Content inside the box */}
              <View style={{ ...styles.paymentinfoRow }}>
                <Text style={styles.paymentinfo1}>Company</Text>
                <Text style={styles.paymentinfo2}>Import Authority</Text>
              </View>
              <View style={styles.paymentinfoRow}>
                <Text style={styles.paymentinfo1}>Reference</Text>
                <Text style={styles.paymentinfo2}>ADVI41_2015201</Text>
              </View>
              <View style={styles.paymentinfoRow}>
                <Text style={styles.paymentinfo1}>Service</Text>
                <Text style={styles.paymentinfo2}>Vehicle Import</Text>
              </View>
              <View style={styles.paymentinfoRow}>
                <Text style={styles.paymentinfo1}>Total Amount</Text>
                <Text style={styles.paymentinfo2}>$400</Text>
              </View>
              <View style={styles.paymentinfoRow}>
                <Text style={styles.paymentinfo1}>Advance Amount</Text>
                <Text style={styles.paymentinfo2}>$150</Text>
              </View>
              <View style={styles.paymentinfoRow}>
                <Text style={styles.paymentinfo1}>Balance</Text>
                <Text style={styles.paymentinfo2}>$250</Text>
              </View>
            </View>
          </View>

          <Text style={styles.cardnumberheading}>Card Number</Text>

          <View style={styles.cardnumber}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <TextInput
            style={styles.input}
            placeholder="Enter Card Number"
            keyboardType="numeric"
            value={cardNumber}
            onChangeText={handleCardNumberChange}
          />
          <Image source={require("../assets/card.png")} />
        </View>
      </View>

          <View style={styles.expiry_cvc}>
            <Text style={styles.cardnumberheading}>Expiry Date</Text>
            <Text style={{ ...styles.cardnumberheading, marginRight: 130 }}>
              CVC
            </Text>
          </View>

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TextInput
              style={styles.expiry_date_box}
              placeholder="MM/YY"
              keyboardType="numeric"
              maxLength={5}
              value={expiryDate}
              onChangeText={handleExpiryDateChange}
            />

            <TextInput
              style={styles.expiry_date_box}
              placeholder="CVC"
              keyboardType="numeric"
            />
          </View>
          <Text style={styles.cardnumberheading}>Card Holder Name</Text>
          <View style={styles.cardnumber}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <TextInput
                style={styles.input}
                placeholder="Enter Card Holder Name"
              />
            </View>
          </View>
          {/* pay $ button */}
          <View>
            <LinearGradient
              colors={["#77B859", "#2DA596"]}
              locations={[0, 1]}
              start={{ x: 0.2, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.button}
            >
              <TouchableOpacity onPress={handlePress}>
                <Text style={{ ...styles.buttonText }}>Pay 1500</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
          {/* Payment Success Modal */}
          <Modal
            visible={modalVisible}
            animationType="slide"
            transparent={true}
          >
            <TouchableWithoutFeedback onPress={handleOverlayPress}>
              <View style={styles.modalContainer}>
                <View style={styles.successbox}>
                  <Image
                    source={require("../assets/success.png")}
                    style={[styles.icon]}
                  />
                  <Text style={{ fontSize: 18 }}>
                    Your Payment was Successfull
                  </Text>
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
                      colors={["#77B859", "#2DA596"]}
                      locations={[0, 1]}
                      start={{ x: 0.2, y: 0 }}
                      end={{ x: 1, y: 1 }}
                      style={styles.button}
                    >
                      <TouchableOpacity
                        onPress={() => navigation.navigate("Dashboard")}
                      >
                        <Text style={styles.buttonText}>
                          Return to Dashboard
                        </Text>
                      </TouchableOpacity>
                    </LinearGradient>
                  </View>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("ViewTransactions")}
                  >
                    <Text
                      style={{ ...styles.buttonText, color: colors.darkGrey }}
                    >
                      View Transactions
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
        </SafeAreaView>
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
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    maxHeight: 130,
    borderRadius: 20,
  },
  back_draft: {
    paddingHorizontal: 20,
    borderRadius: 10,
    width: "100%",
    marginTop: 20,
  },
  boxContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  box: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#57C590",
    backgroundColor: "white",
    padding: 20,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    marginTop: -25,
  },
  cardnumber: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#57C590",
    backgroundColor: "white",
    padding: 15,
    width: "100%",
    borderRadius: 10,
    marginTop: 15,
    textAlign: "center",
  },
  cardnumberheading: {
    top: 10,
    left: 20,
  },
  expiry_date_box: {
    borderWidth: 2,
    borderColor: "#57C590",
    backgroundColor: "white",
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 15,
    width: 70,
    padding: 10,
    width: 70,
  },
  row3_1: {
    color: "black",
    fontSize: 12,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
  button: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 140,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    paddingVertical: 10,
  },
  progressBar1: {
    height: 8,
    width: 110,
    borderRadius: 5,
    marginLeft: 5,
  },
  progressBar2: {
    height: 8,
    width: 110,
    borderRadius: 5,
    marginLeft: 8,
  },
  progressBar3: {
    height: 8,
    width: 110,
    borderRadius: 5,
    marginLeft: 11,
  },
  progressContainer: {
    flexDirection: "row",
    marginTop: 40,
    justifyContent: "flex-end",
  },
  progressText: {
    position: "absolute",
    bottom: 10,
    alignSelf: "center",
    backgroundColor: "transparent",
    color: "#fff",
  },
  boxRow: {
    flexDirection: "row",
  },
  row1_2: {
    alignSelf: "flex-end",
  },
  paymentinfoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  expiry_cvc: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  paymentinfo1: {
    fontWeight: "bold",
  },
  paymentinfo2: {
    color: "#C9C9C9",
    fontWeight: "bold",
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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000aa",
    padding: 20,
  },
});

export default PaymentScreen;
