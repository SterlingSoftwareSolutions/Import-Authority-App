import React, { useEffect, useState } from "react";
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
import { StripeProvider, CardField, CardForm, useStripe } from '@stripe/stripe-react-native';
import client from "../api/client";

function PaymentScreen(props) {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [expiryDate, setExpiryDate] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardImage, setCardImage] = useState(require("../assets/cards/undefined.png"));
  const [progressText1, setProgressText1] = React.useState("");
  const [progressText2, setProgressText2] = React.useState("");
  const [progressText3, setProgressText3] = React.useState("");
  const [stripeKey, setStripeKey] = useState('');
  const [stripeCardDetails, setStripeCardDetails] = useState([]);
  const { init, createPaymentMethod } = useStripe();

  const fetchStrieKey = async () => {
    const api = await client();
    const response = await api.get('/stripe-key');
    setStripeKey(response.data);
    console.log(stripeKey);
  };

  useEffect(() => {
    fetchStrieKey();
  }, []);

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

  const [validationError, setValidationError] = useState('');

  const handlePress = async () => {


    if (cardname === "") {
      // Cardholder name is empty, show error message or take appropriate action
      setValidationError('Please fill Card Holder Name');
    } else {
      if (stripeCardDetails.complete) {

        // Send payment details to Stripe and get the payment token
        const paymentMethod = await createPaymentMethod({
          paymentMethodType: 'Card',
          card: {
            number: stripeCardDetails?.number,
            expMonth: stripeCardDetails?.expMonth,
            expYear: stripeCardDetails?.expYear,
            cvc: stripeCardDetails?.cvc,
          },
        });

        var formData = new FormData();
        formData.append('payment_method', paymentMethod);
        formData.append('amount', 123);

        // Send the payment token to backend
        api = await client();
        var response = await api.post('/bills/');
        console.log(response);

      } else {
        console.log('card details incomplete')
      }
      // setModalVisible(true);
    }

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

  const [Card, setCard] = React.useState("");
  const [cardname, setCardName] = React.useState("");

  const UpdateCardImage = (brand) => {
    console.log(brand);
    switch (brand) {
      case 'visa':
        setCardImage(require("../assets/cards/visa.png"));
        break;
      case 'mastercard':
        setCardImage(require("../assets/cards/mastercard.png"));
        break;
      default:
        setCardImage(require("../assets/cards/undefined.png"));
    }
  }

  const ValidationMessage = ({ message }) => {
    return message ? <Text style={{ color: 'red' }}>{message}</Text> : null;
  };




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
              placeholderTextColor="#000"
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
              placeholderTextColor="#000"
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
                <Image source={cardImage} style={{ width: 64, height: 42.5, right: 12 }}></Image>
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
                {cardname}
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



          <View style={styles.cardnumber}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                height: 50,
                top: 6
              }}
            >
              <TextInput
                placeholder="Enter Card Holder Name"
                value={cardname}
                onChangeText={setCardName}
                style={{
                  padding: 15,
                }}
              />
            </View>
            <View style={{
              borderBottomColor: '#DCDCDC',
              borderBottomWidth: 1,
              minHeight: 5
            }}>
              {validationError !== '' && (
                <Text style={{ color: 'red', marginTop: 0, fontSize: 12, paddingLeft: 15 }}>{validationError}</Text>
              )}
            </View>

          </View>
          <StripeProvider
            publishableKey={stripeKey.toString()}
          >

            <CardForm
              postalCodeEnabled={false}
              onFormComplete={(cardDetails) => {
                UpdateCardImage(cardDetails.brand?.toLowerCase())
                setStripeCardDetails(cardDetails);
              }}
              onFormChange={(cardDetails) => {
                cosnole.log(cardDetails);
              }}
              style={{ height: 260 }}
            >
              {/* Card form fields */}
            </CardForm>


          </StripeProvider>



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
    </View >
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
    borderWidth: 2,
    borderColor: "white",
    backgroundColor: "white",
    width: "100%",
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
