import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Text,
  Image,
  Switch,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ProgressBar } from "react-native-paper";
import { SelectList } from "react-native-dropdown-select-list";
import colors from "../config/colors";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import * as Yup from "yup";
import { Formik } from "formik";
import client from "../api/client";
import { useNavigation } from "@react-navigation/native";
import TopUserControlBg from "../components/TopUserControlBg";

const CreateApplicationMain = () => {
  const endpoint = "/applications";
  const navigation = useNavigation();

  const progress1 = 1; // Set the progress value between 0 and 1
  const progress2 = 0;
  const progress3 = 0;

  const [progressText1, setProgressText1] = React.useState("");
  const [progressText2, setProgressText2] = React.useState("");
  const [progressText3, setProgressText3] = React.useState("");

  const [switch1Value, setSwitch1Value] = React.useState(false);
  const [switch2Value, setSwitch2Value] = React.useState(false);

  const handleSwitch1Toggle = () => {
    setSwitch1Value((prevValue) => !prevValue);
  };

  const handleSwitch2Toggle = () => {
    setSwitch2Value((prevValue) => !prevValue);
  };

  const [selected, setSelected] = React.useState("");
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedBuildMonth, setSelectedBuildMonth] = useState("");
  const [selectedBuildYear, setSelectedBuildYear] = useState("");
  const [selectedFuelType, setSelectedFuelType] = useState("");
  const [selectedTransmission, setSelectedTransmission] = useState("");
  const [selectedBodyType, setSelectedBodyType] = useState("");
  const [selectedDriveType, setSelectedDriveType] = useState("");

  {
    /Make/;
  }

  const datamake = [
    { key: "1", value: "Toyota" },
    { key: "2", value: "Nissan" },
    { key: "3", value: "Mitsubishi" },
    { key: "4", value: "Subaru" },
    { key: "5", value: "Mazda" },
    { key: "6", value: "Lexus" },
    { key: "7", value: "Mersedez Benz" },
    { key: "8", value: "Suzuki" },
    { key: "9", value: "Honda" },
    { key: "10", value: "Waleed" },
  ];

  {
    /Model/;
  }
  const datamodel = [
    { key: "1", value: "Toyota" },
    { key: "2", value: "Nissan" },
    { key: "3", value: "Mitsubishi" },
    { key: "4", value: "Subaru" },
    { key: "5", value: "Mazda" },
    { key: "6", value: "Lexus" },
    { key: "7", value: "Mersedez Benz" },
    { key: "8", value: "Suzuki" },
    { key: "9", value: "Honda" },
    { key: "10", value: "Waleed" },
  ];

  {
    /Build Month/;
  }

  const databuildmonth = [
    { key: "1", value: "January" },
    { key: "2", value: "February" },
    { key: "3", value: "March" },
    { key: "4", value: "April" },
    { key: "5", value: "May" },
    { key: "6", value: "June" },
    { key: "7", value: "July" },
    { key: "8", value: "August" },
    { key: "9", value: "September" },
    { key: "10", value: "October" },
    { key: "11", value: "November" },
    { key: "12", value: "December" },
  ];

  {
    /Build Year/;
  }
  const last = 1886;
  const now = new Date().getFullYear();
  const databuildyear = [];

  for (let i = now; i >= last; i--) {
    databuildyear.push({ key: i, value: i });
  }

  {
    /Fuel Type/;
  }

  const databuildfueltype = [
    { key: "1", value: "Petrol" },
    { key: "2", value: "Diesel" },
    { key: "3", value: "Hybrid(Petrol/Electric)" },
    { key: "4", value: "Hybrid(Diesel/Electric)" },
    { key: "5", value: "Electric" },
  ];

  {
    /Transmission/;
  }

  const datatransmission = [
    { key: "1", value: "Manual" },
    { key: "2", value: "Automatic" },
    { key: "3", value: "Other" },
  ];

  {
    /Body Type/;
  }

  const databodytype = [
    { key: "1", value: "HatchBack" },
    { key: "2", value: "Sedan" },
    { key: "3", value: "MUV/SUV" },
    { key: "4", value: "Coupe" },
    { key: "5", value: "Convertible" },
    { key: "6", value: "Wagon" },
    { key: "7", value: "Van" },
    { key: "7", value: "Other" },
  ];

  {
    /Drive type/;
  }
  const datadrivetype = [
    { key: "1", value: "FWD" },
    { key: "2", value: "RWD" },
    { key: "3", value: "4WD" },
    { key: "4", value: "AWD" },
  ];

  {
    /Date Picker/;
  }
  const [datePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const confirmDatePicker = (date) => {
    const date_object = new Date(date);
    setSelectedDate(date_object.toLocaleDateString());
    setDatePickerVisibility(false);
  };

  {
    /Approval Type Switch /;
  }

  const [approvalType, setApprovalType] = useState(0);

  const switchApprovalType = () => {
    if (approvalType == 0) {
      setApprovalType(1);
    } else {
      setApprovalType(0);
    }
  };

  return (
    <Formik
      initialValues={{
        chassisNumber: "",
        make: "",
        model: "",
        buildMonth: "",
        buildYear: "",
        fuelType: "",
        transmission: "",
        bodyType: "",
        driveType: "",
        odometer: "",
      }}
      onSubmit={(values) => {
        client
          .post(endpoint, values)
          .then((response) => {
            console.log(response.data);
            // Perform any other actions or update the UI as needed
          })
          .catch((error) => {
            // Handle any errors that occurred during the API request
            console.error(error);
            // Display an error message or perform error handling as needed
          });
      }}
      validationSchema={Yup.object().shape({
        chassisNumber: Yup.string().required(
          "Chassis/Frame Number is required"
        ),
        make: Yup.string().required("Make is required"),
        model: Yup.string().required("Model is required"),
        buildMonth: Yup.string().required("Build Month is required"),
        buildYear: Yup.string().required("Build Year is required"),
        fuelType: Yup.string().required("Fuel Type is required"),
        transmission: Yup.string().required("Transmission is required"),
        bodyType: Yup.string().required("Body Type is required"),
        driveType: Yup.string().required("Drive Type is required"),
        odometer: Yup.string().required("Odometer is required"),
      })}
    >
      {({ handleChange, handleSubmit, values, errors }) => (
        <View style={styles.container}>
          <TopUserControlBg>
            {/* step progress container */}
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
                  color="#079BB7"
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
                  color="#079BB7"
                  style={styles.progressBar3}
                />
              </View>
            </View>
            {/* Switch container */}
            <TouchableWithoutFeedback onPress={switchApprovalType}>
              <View style={styles.bottomContainer}>
                <View style={styles.bottomRow}>
                  <Text style={styles.bottomText1}>SEVs / RAWs</Text>
                  <View
                    style={[
                      styles.backgroundColorWrapper1,
                      approvalType == 0 && styles.switchItemSelected,
                    ]}
                  >
                    <Image
                      source={require("../assets/car1.png")}
                      style={styles.carIcon1}
                    />
                  </View>
                </View>
                <View style={styles.bottomRow}>
                  <View
                    style={[
                      styles.backgroundColorWrapper2,
                      approvalType == 1 && styles.switchItemSelected,
                    ]}
                  >
                    <Image
                      source={require("../assets/car2.png")}
                      style={styles.carIcon2}
                    />
                  </View>

                  <Text style={styles.bottomText2}>Old Vehicle</Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </TopUserControlBg>
          <SafeAreaView style={styles.formContainer}>
            <ScrollView
              contentContainerStyle={{ marginTop: 10, paddingBottom: 180 }}
            >
              <TextInput
                style={[styles.input, styles.usernameInput, { marginTop: 10 }]}
                placeholder="Chassis/ Frame Number *"
                value={values.chassisNumber}
                placeholderTextColor="#23A29F"
                onChangeText={handleChange("chassisNumber")}
              />
              <DateTimePickerModal
                isVisible={datePickerVisible}
                mode="date"
                onConfirm={confirmDatePicker}
                onCancel={hideDatePicker}
              />
              <TouchableOpacity
                onPress={() => {
                  showDatePicker();
                }}
              >
                <TextInput
                  style={[styles.input, styles.usernameInput]}
                  placeholder="Estimated Date of Arrival *"
                  placeholderTextColor="#23A29F"
                  value={selectedDate}
                  editable={false}
                />
              </TouchableOpacity>
              <View style={[styles.dropdown]}>
                <SelectList
                  placeholder="Make *"
                  setSelected={setSelectedMake}
                  data={datamake}
                  save="value"
                  boxStyles={styles.dropdownBox}
                  inputStyles={{ color: "#23A29F" }}
                  dropdownStyles={{ ...styles.dropDownListStyle }}
                  dropdownTextStyles={{ color: "#23A29F" }}
                  search={false}
                />
              </View>
              <View style={[styles.dropdown]}>
                <SelectList
                  placeholder="Model *"
                  setSelected={setSelectedModel}
                  data={datamodel}
                  save="value"
                  boxStyles={styles.dropdownBox}
                  inputStyles={{ color: "#23A29F" }}
                  dropdownStyles={{ ...styles.dropDownListStyle }}
                  dropdownTextStyles={{ color: "#23A29F" }}
                />
              </View>
              <View style={[styles.dropdown]}>
                <SelectList
                  placeholder="Build Month *"
                  setSelected={setSelectedBuildMonth}
                  data={databuildmonth}
                  save="value"
                  boxStyles={styles.dropdownBox}
                  inputStyles={{ color: "#23A29F" }}
                  dropdownStyles={{ ...styles.dropDownListStyle }}
                  dropdownTextStyles={{ color: "#23A29F" }}
                />
              </View>
              <View style={[styles.dropdown, {}]}>
                <SelectList
                  placeholder="Build Year *"
                  setSelected={setSelectedBuildYear}
                  data={databuildyear}
                  save="value"
                  boxStyles={styles.dropdownBox}
                  inputStyles={{ color: "#23A29F" }}
                  dropdownStyles={{ ...styles.dropDownListStyle }}
                  dropdownTextStyles={{ color: "#23A29F" }}
                />
              </View>

              <View style={[styles.dropdown]}>
                <SelectList
                  placeholder="Fuel Type *"
                  setSelected={setSelectedFuelType}
                  data={databuildfueltype}
                  save="value"
                  boxStyles={styles.dropdownBox}
                  inputStyles={{ color: "#23A29F" }}
                  dropdownStyles={{ ...styles.dropDownListStyle }}
                  dropdownTextStyles={{ color: "#23A29F" }}
                />
              </View>

              <View style={[styles.dropdown]}>
                <SelectList
                  placeholder="Transmisson *"
                  setSelected={setSelectedTransmission}
                  data={datatransmission}
                  save="value"
                  boxStyles={styles.dropdownBox}
                  inputStyles={{ color: "#23A29F" }}
                  dropdownStyles={{ ...styles.dropDownListStyle }}
                  dropdownTextStyles={{ color: "#23A29F" }}
                />
              </View>

              <View style={[styles.dropdown]}>
                <SelectList
                  placeholder="Body Type *"
                  setSelected={setSelectedBodyType}
                  data={databodytype}
                  save="value"
                  boxStyles={styles.dropdownBox}
                  inputStyles={{ color: "#23A29F" }}
                  dropdownStyles={{ ...styles.dropDownListStyle }}
                  dropdownTextStyles={{ color: "#23A29F" }}
                />
              </View>

              <View style={[styles.dropdown]}>
                <SelectList
                  placeholder="Drive Type *"
                  setSelected={setSelectedDriveType}
                  data={datadrivetype}
                  save="value"
                  boxStyles={styles.dropdownBox}
                  inputStyles={{ color: "#23A29F" }}
                  dropdownStyles={{ ...styles.dropDownListStyle }}
                  dropdownTextStyles={{ color: "#23A29F" }}
                />
              </View>

              <View>
                <TextInput
                  style={[styles.input, styles.usernameInput, {}]}
                  placeholder="Odometer *"
                  placeholderTextColor="#23A29F"
                />
              </View>

              <View style={styles.buttonContainer}>
                <LinearGradient
                  colors={["#4B4B4B", "#9F9F9F"]} // Define the colors for the gradient (ash to lighter ash)
                  locations={[0, 1]} // Define the gradient color stops
                  start={{ x: 0.2, y: 0.5 }} // Define the start position (top-left)
                  end={{ x: 1, y: 1 }} // Define the end position (top-right)
                  style={styles.button}
                >
                  <TouchableOpacity>
                    <Text style={styles.buttonText}>Draft</Text>
                  </TouchableOpacity>
                </LinearGradient>

                <LinearGradient
                  colors={["#77B859", "#2DA596"]}
                  locations={[0, 1]}
                  start={{ x: 0.2, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.button}
                >
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("CreateApplicationImageScreen");
                      handleSubmit();
                    }}
                  >
                    <Text style={styles.buttonText}>Next</Text>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
            </ScrollView>
          </SafeAreaView>
          <StatusBar style="auto" />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#DCF3E8",
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
  formContainer: {
    paddingHorizontal: 20,
    borderRadius: 10,
    width: "100%",
    marginTop: 132,
    width: "100%",
    marginTop: 12,
  },
  label: {
    color: "#fff",
    color: "#fff",
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: "black",
    marginBottom: 10,
  },
  dropdown: {
    backgroundColor: "#fff0",
    borderRadius: 10,
    marginBottom: 10,
  },
  usernameInput: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: "100%",
    width: "100%",
  },
  createapplicationrowContainer: {
    justifyContent: "space-between",
    marginBottom: 10,
  },
  smallInput: {
    flex: 1,
    marginRight: 5,
    marginRight: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: "38%",
    alignItems: "center",
    justifyContent: "center",
    width: "38%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    color: "#fff",
  },
  progressBar1: {
    height: 8,
    width: 110,
    borderRadius: 5,
    marginLeft: 5,
    marginLeft: 5,
  },
  progressBar2: {
    height: 8,
    width: 110,
    borderRadius: 5,
    marginLeft: 8,
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
    justifyContent: "center",
    paddingBottom: 25,
  },
  progressText: {
    position: "absolute",
    bottom: 10,
    alignSelf: "center",
    backgroundColor: "transparent",
    color: "#fff",
  },
  iconContainer: {
    flexDirection: "row",
  },
  icon: {
    marginLeft: 10,
  },
  bottomContainer: {
    position: "absolute",
    bottom: 1,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 80,
    marginBottom:10,
  },
  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
  },
  bottomText1: {
    color: "#fff",
    marginRight: 10,
  },
  bottomText2: {
    color: "#fff",
    marginLeft: 20,
  },
  carIcon1: {},
  carIcon2: {
    marginRight: 15,
  },
  backgroundColorWrapper: {
    backgroundColor: "#E5E5E5",
  },
  backgroundColorWrapper1: {
    backgroundColor: "white",
    padding: 8,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 0,
    width: 45,
  },
  backgroundColorWrapper2: {
    backgroundColor: "white",
    padding: 8,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 10,
    width: 45,
  },
  dropDownListStyle: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    borderColor: "white",
  },
  dropdownBox: {
    backgroundColor: "white",
    borderColor: "white",
  },
  switchItemSelected: {
    backgroundColor: colors.lightGrey,
    borderColor:colors.primary,
    borderWidth:2
  },
});

export default CreateApplicationMain;
