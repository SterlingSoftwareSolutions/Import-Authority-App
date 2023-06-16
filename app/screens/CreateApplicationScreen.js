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
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ProgressBar } from "react-native-paper";
import { SelectList } from "react-native-dropdown-select-list";
import { RadioButton } from "react-native-paper";
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

  // const [selected, setSelected] = React.useState("");
  // const [selectedChassisNumber, setSelectedChassisNumber] = React.useState("");
  // const [selectedEstimatedDateofArrival, setSelectedEstimatedDateofArrival] = React.useState("");
  // const [selectedMake, setSelectedMake] = useState("");
  // const [selectedModel, setSelectedModel] = useState("");
  // const [selectedBuildMonth, setSelectedBuildMonth] = useState("");
  // const [selectedBuildYear, setSelectedBuildYear] = useState("");
  // const [selectedFuelType, setSelectedFuelType] = useState("");
  // const [selectedTransmission, setSelectedTransmission] = useState("");
  // const [selectedBodyType, setSelectedBodyType] = useState("");
  // const [selectedDriveType, setSelectedDriveType] = useState("");
  // const [selectedODOMeter, setSelectedODOMeter] = useState("");

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
    databuildyear.push({ key: i, value: i.toString() });
  }

  {
    /Fuel Type/;
  }

  const datafueltype = [
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

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const confirmDatePicker = (date, setFieldValue) => {
    const date_object = new Date(date);
    setFieldValue('estimatedDateofArrival', date_object.toISOString());
    hideDatePicker();
  };

  {
    /Approval Type Switch /;
  }

  const [approvalType, setApprovalType] = useState(0);

  const switchApprovalType = () => {
    if (approvalType == 0) {
      setApprovalType(1);
      setShowDropdown(true);
    } else {
      setApprovalType(0);
      setShowDropdown(false);
    }
  };

  const handleSubmit = async (values) => {
    const applicationData = {
      chassisNumber: values.chassisNumber,
      estimatedDateofArrival: values.estimatedDateofArrival,
      make: values.make,
      model: values.model,
      buildMonth: values.buildMonth,
      buildYear: values.buildYear,
      fuelType: values.fuelType,
      transmission: values.transmission,
      bodyType: values.bodyType,
      driveType: values.driveType,
      odometer: values.odometer
    };
    // console.log(applicationData);
    try {
      const response = await client.post(endpoint, applicationData);
      console.log("Response:", response.data);
      navigation.navigate("CreateApplicationImageScreen");
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const [showDropdown, setShowDropdown] = useState(false);
  const [radioButtonvalue, setRadioButtonvalue] = React.useState("");

  const handleRadioButtonChange = (newValue) => {
    setRadioButtonvalue(newValue);
  };
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const handleNextButton = () => {
    navigation.navigate("PaymentScreen");
  };
  return (

    <Formik
      initialValues={{
        chassisNumber: "",
        estimatedDateofArrival: "",
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
      onSubmit={handleSubmit}
      validationSchema={Yup.object().shape({
        chassisNumber: Yup.string().required(
          "Chassis/Frame Number is required"
        ),
        estimatedDateofArrival: Yup.string().required(
          "Estimated Date of Arrival is required"
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
      {({ handleChange, values, errors, setFieldTouched, setFieldValue, touched, handleSubmit, }) => (
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
                  placeholderTextColor="#000"
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
                    onPress={toggleDropdown}
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
              {showDropdown && (
                <View>
                  <RadioButton.Group
                    onValueChange={handleRadioButtonChange}
                    value={radioButtonvalue}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <RadioButton.Item
                        style={{
                          flexDirection: "row-reverse",
                          marginRight: -19,
                        }}
                        label="I need an Engineer"
                        value="needEngineer"
                        labelStyle={{ color: colors.primary, fontSize: 14 }}
                        uncheckedColor={colors.primary}
                        color={colors.primary}
                      />
                      <RadioButton.Item
                        style={{
                          flexDirection: "row-reverse",
                          marginRight: -25,
                        }}
                        label="I have my Own Engineer"
                        value="ownEngineer"
                        labelStyle={{ color: colors.primary, fontSize: 14 }}
                        uncheckedColor={colors.primary}
                        color={colors.primary}
                      />
                    </View>
                  </RadioButton.Group>
                </View>
              )}
              <TextInput
                style={[styles.input, styles.usernameInput, { marginTop: 10 }]}
                placeholder="Chassis/ Frame Number *"
                value={values.chassisNumber}
                placeholderTextColor={colors.primary}
                onChangeText={handleChange("chassisNumber")}
              // selected={values.chassisNumber}
              // onSelectedChange={setSelectedChassisNumber}
              />
              {touched.chassisNumber && errors.chassisNumber ? (
                <Text style={styles.errorText}>{errors.chassisNumber}</Text>
              ) : null}

              <DateTimePickerModal
                isVisible={datePickerVisible}
                mode="date"
                onConfirm={(date) => confirmDatePicker(date, setFieldValue)}
                onCancel={hideDatePicker}
                onChange={() => {
                  console.log('date changed');
                }}
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
                  value={values.estimatedDateofArrival}
                  onChangeText={handleChange("estimatedDateofArrival")}
                  // selected={selectedEstimatedDateofArrival}
                  // onSelectedChange={setSelectedEstimatedDateofArrival}
                  editable={false}
                />
                {touched.estimatedDateofArrival && errors.estimatedDateofArrival ? (
                  <Text style={styles.errorText}>{errors.estimatedDateofArrival}</Text>
                ) : null}
              </TouchableOpacity>
              <View style={[styles.dropdown]}>
                <SelectList
                  placeholder="Make *"
                  value={values.make}
                  setSelected={handleChange("make")}
                  data={datamake}
                  save="value"
                  boxStyles={styles.dropdownBox}
                  inputStyles={{ color: colors.primary }}
                  dropdownStyles={{ ...styles.dropDownListStyle }}
                  dropdownTextStyles={{ color: colors.primary }}
                  search={false}
                  // onSelectedChange={setSelectedMake}
                  options={datamake}
                // selected={selectedMake}
                />
                {touched.make && errors.make ? (
                  <Text style={styles.errorText}>{errors.make}</Text>
                ) : null}
              </View>
              <View style={[styles.dropdown]}>
                <SelectList
                  placeholder="Model *"
                  setSelected={handleChange("model")}
                  data={datamodel}
                  save="value"
                  boxStyles={styles.dropdownBox}
                  inputStyles={{ color: colors.primary }}
                  dropdownStyles={{ ...styles.dropDownListStyle }}
                  dropdownTextStyles={{ color: colors.primary }}
                  options={datamodel}
                // selected={selectedModel}
                // onSelectedChange={setSelectedModel}
                />
                {touched.model && errors.model ? (
                  <Text style={styles.errorText}>{errors.model}</Text>
                ) : null}
              </View>
              <View style={[styles.dropdown]}>
                <SelectList
                  placeholder="Build Month *"
                  setSelected={handleChange("buildMonth")}
                  data={databuildmonth}
                  save="value"
                  boxStyles={styles.dropdownBox}
                  inputStyles={{ color: colors.primary }}
                  dropdownStyles={{ ...styles.dropDownListStyle }}
                  dropdownTextStyles={{ color: colors.primary }}
                  options={databuildmonth}
                // selected={selectedBuildMonth}
                // onSelectedChange={setSelectedBuildMonth}
                />
                {touched.buildMonth && errors.buildMonth ? (
                  <Text style={styles.errorText}>{errors.buildMonth}</Text>
                ) : null}
              </View>
              <View style={[styles.dropdown, {}]}>
                <SelectList
                  placeholder="Build Year *"
                  setSelected={handleChange("buildYear")}
                  data={databuildyear}
                  save="value"
                  boxStyles={styles.dropdownBox}
                  inputStyles={{ color: colors.primary }}
                  dropdownStyles={{ ...styles.dropDownListStyle }}
                  dropdownTextStyles={{ color: colors.primary }}
                  options={databuildyear}
                // selected={selectedBuildYear}
                // onSelectedChange={setSelectedBuildYear}
                />
                {touched.buildYear && errors.buildYear ? (
                  <Text style={styles.errorText}>{errors.buildYear}</Text>
                ) : null}
              </View>

              <View style={[styles.dropdown]}>
                <SelectList
                  placeholder="Fuel Type *"
                  setSelected={handleChange("fuelType")}
                  data={datafueltype}
                  save="value"
                  boxStyles={styles.dropdownBox}
                  inputStyles={{ color: colors.primary }}
                  dropdownStyles={{ ...styles.dropDownListStyle }}
                  dropdownTextStyles={{ color: colors.primary }}
                  options={datafueltype}
                // selected={selectedFuelType}
                // onSelectedChange={setSelectedFuelType}
                />
                {touched.fuelType && errors.fuelType ? (
                  <Text style={styles.errorText}>{errors.fuelType}</Text>
                ) : null}
              </View>

              <View style={[styles.dropdown]}>
                <SelectList
                  placeholder="Transmisson *"
                  setSelected={handleChange("transmission")}
                  data={datatransmission}
                  save="value"
                  boxStyles={styles.dropdownBox}
                  inputStyles={{ color: colors.primary }}
                  dropdownStyles={{ ...styles.dropDownListStyle }}
                  dropdownTextStyles={{ color: colors.primary }}
                  options={datatransmission}
                // selected={selectedTransmission}
                // onSelectedChange={setSelectedTransmission}
                />
                {touched.transmission && errors.transmission ? (
                  <Text style={styles.errorText}>{errors.transmission}</Text>
                ) : null}
              </View>

              <View style={[styles.dropdown]}>
                <SelectList
                  placeholder="Body Type *"
                  setSelected={handleChange("bodyType")}
                  data={databodytype}
                  save="value"
                  boxStyles={styles.dropdownBox}
                  inputStyles={{ color: colors.primary }}
                  dropdownStyles={{ ...styles.dropDownListStyle }}
                  dropdownTextStyles={{ color: colors.primary }}
                  options={databodytype}
                // selected={selectedBodyType}
                // onSelectedChange={setSelectedBodyType}
                />
                {touched.bodyType && errors.bodyType ? (
                  <Text style={styles.errorText}>{errors.bodyType}</Text>
                ) : null}
              </View>

              <View style={[styles.dropdown]}>
                <SelectList
                  placeholder="Drive Type *"
                  setSelected={handleChange("driveType")}
                  data={datadrivetype}
                  save="value"
                  boxStyles={styles.dropdownBox}
                  inputStyles={{ color: colors.primary }}
                  dropdownStyles={{ ...styles.dropDownListStyle }}
                  dropdownTextStyles={{ color: colors.primary }}
                  options={datadrivetype}
                // selected={selectedDriveType}
                // onSelectedChange={setSelectedDriveType}
                />
                {touched.driveType && errors.driveType ? (
                  <Text style={styles.errorText}>{errors.driveType}</Text>
                ) : null}
              </View>



              <View>
                <TextInput
                  style={[styles.input, styles.usernameInput, {}]}
                  placeholder="Odometer *"
                  value={values.odometer}
                  placeholderTextColor={colors.primary}
                  onChangeText={handleChange("odometer")}
                // selected={selectedODOMeter}
                // onSelectedChange={setSelectedODOMeter}
                />
                {touched.odometer && errors.odometer ? (
                  <Text style={styles.errorText}>{errors.odometer}</Text>
                ) : null}
              </View>

              <View style={styles.buttonContainer}>
                <LinearGradient
                  colors={["#4B4B4B", "#9F9F9F"]}
                  locations={[0, 1]}
                  start={{ x: 0.2, y: 0.5 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.button}
                >
                  <TouchableOpacity
                    onPress={() => {
                      console.log(values)
                    }}
                  >
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
                    style={styles.submitButton}
                    onPress={handleSubmit}
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
    marginBottom: 10,
  },
  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
  },
  bottomText1: {
    color: "#fff",

  },
  bottomText2: {
    color: "#fff",

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
    borderColor: colors.primary,
    borderWidth: 2,
  },
  errorText: {
    color: "red",
    fontSize: 12,
  },
});

export default CreateApplicationMain;
