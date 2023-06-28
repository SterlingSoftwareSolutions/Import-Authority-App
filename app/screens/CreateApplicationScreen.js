import React, { useState } from "react";
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
import { Platform } from "react-native";

const CreateApplicationMain = () => {
  const endpoint = "/applications";
  const navigation = useNavigation();

  const progress1 = 1; // Set the progress value between 0 and 1
  const progress2 = 0;
  const progress3 = 0;

  const [progressText1, setProgressText1] = React.useState("");
  const [progressText2, setProgressText2] = React.useState("");
  const [progressText3, setProgressText3] = React.useState("");

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
    console.log("Test");
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const confirmDatePicker = (date, setFieldValue) => {
    const date_object = new Date(date);
    setFieldValue("estimatedDateofArrival", date_object.toISOString().slice(0, 19).replace('T', ' '))

    hideDatePicker();
  };

  {
    /Approval Type Switch /;
  }

  const [approvalType, setApprovalType] = useState(0);

  const switchApprovalType = () => {
    const newApprovalType = approvalType === 0 ? 1 : 0;
    setApprovalType(newApprovalType);
  };

  function getKeyByValue(dictionaryArray, value) {
    const foundItem = dictionaryArray.find(item => item.value === value);
    return foundItem ? foundItem.key : null;
  }

  const handleSubmit = async (values) => {
    const applicationData = {
      chassis_no: values.chassisNumber,
      arrival_date: values.estimatedDateofArrival,
      make: values.make,
      model: values.model,
      build_month: getKeyByValue(databuildmonth, values.buildMonth),
      build_year: values.buildYear,
      fuel_type: values.fuelType,
      transmission: values.transmission,
      body_type: values.bodyType,
      drive_type: values.driveType,
      odo_meter: values.odometer,
      approval_type: approvalType === 0 ? "SEV" : "Older Vehicles",
    };
    if (approvalType === 1) {
      applicationData.vass_engineering = values.vassEngineering;
    }
    console.log(applicationData);
    try {
      const api = await client();
      const response = await api.post(endpoint, applicationData);
      console.log("Response:", response.data);
      // Passing the vehicle information to the Image upload screen
      navigation.navigate("CreateApplicationImageScreen", { params: applicationData });
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const [value, setValue] = useState(0);
  // incrementing the value when the arrow up button is pressed
  const handleIncrement = () => {
    setValue(value + 1);
  };

  // decrementing the value when the arrow down button is pressed
  const handleDecrement = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  // State variable to hold an array of rows
  const [rows, setRows] = useState([1]);
  // adding a new row when the "+" button is pressed
  const handleAddRow = () => {
    const newRow = rows.length + 1;
    setRows([...rows, newRow]);
  };

  // removing a row when the "-" button is pressed
  const handleremoveRow = (index) => {
    const updatedRows = [...rows];
    updatedRows.splice(index, 1);
    setRows(updatedRows);
  };

  //validations
  const validationSchema = Yup.object().shape({
    chassisNumber: Yup.string().required("Chassis/Frame Number is required"),
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
  });

  const additionalValidations = Yup.object().shape({
    vassEngineering: Yup.string().required("Vass engineering is required"),
  });


  return (
    <SafeAreaView style={styles.container}>
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
      <ScrollView
                contentContainerStyle={{ marginTop: 5, paddingBottom: 15 }}
              >
      <Formik
        initialValues={{
          vassEngineering: "",
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
          approvalType: ""
        }}
        onSubmit={values => handleSubmit(values, approvalType)}
        validationSchema={
          approvalType == 0
            ? validationSchema
            : validationSchema.concat(additionalValidations)
        }
      >
        {({
          handleChange,
          values,
          errors,
          setFieldTouched,
          setFieldValue,
          touched,
          handleSubmit,
        }) => (
          <View style={styles.container}>
            <View style={styles.formContainer}>
              
                {approvalType == 1 ? (
                  <View>
                    <RadioButton.Group
                      onValueChange={handleChange("vassEngineering")}
                      value={values.vassEngineering}
                    >
                      <View style={{ flexDirection: "row" }}>
                        <RadioButton.Item
                          style={{
                            flexDirection: "row-reverse",
                            marginRight: -19,
                          }}
                          label="I need an Engineer "
                          value="ours"
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
                          value="own"
                          labelStyle={{ color: colors.primary, fontSize: 14 }}
                          uncheckedColor={colors.primary}
                          color={colors.primary}
                        />
                      </View>
                    </RadioButton.Group>
                    {touched.vassEngineering && errors.vassEngineering ? (
                      <Text style={styles.errorText}>
                        {errors.vassEngineering}
                      </Text>
                    ) : null}
                  </View>
                ) : null}

                <TextInput
                  style={[
                    styles.input,
                    styles.usernameInput,
                    { marginTop: 10 },
                  ]}
                  placeholder="Chassis/ Frame Number *"
                  value={values.chassisNumber}
                  placeholderTextColor={colors.primary}
                  color={colors.primary}
                  onChangeText={handleChange("chassisNumber")}
                />
                {touched.chassisNumber && errors.chassisNumber ? (
                  <Text style={styles.errorText}>{errors.chassisNumber}</Text>
                ) : null}

                {/* Datepicker starts */}
                {Platform.OS === "ios" ? (
                  <>
                    <DateTimePickerModal
                      isVisible={datePickerVisible}
                      mode="date"
                      onConfirm={(date) =>
                        confirmDatePicker(date, setFieldValue)
                      }
                      onCancel={hideDatePicker}
                      onChange={() => {
                        console.log("date changed");
                      }}
                      color={colors.primary}
                    />
                    <TextInput
                      style={[styles.input, styles.usernameInput]}
                      placeholder="Estimated Date of Arrival *"
                      placeholderTextColor={colors.primary}
                      value={values.estimatedDateofArrival}
                      onChangeText={handleChange("estimatedDateofArrival")}
                      color={colors.primary}
                      editable={false}
                      onPressIn={showDatePicker}
                    />
                    {touched.estimatedDateofArrival &&
                      errors.estimatedDateofArrival ? (
                      <Text style={styles.errorText}>
                        {errors.estimatedDateofArrival}
                      </Text>
                    ) : null}
                  </>
                ) : (
                  <>
                    <DateTimePickerModal
                      isVisible={datePickerVisible}
                      mode="date"
                      onConfirm={(date) =>
                        confirmDatePicker(date, setFieldValue)
                      }
                      onCancel={hideDatePicker}
                      onChange={() => {
                        console.log("date changed");
                      }}
                      color={colors.primary}
                    />
                    <TouchableOpacity onPress={() => showDatePicker()}>
                      <TextInput
                        style={[styles.input, styles.usernameInput]}
                        placeholder="Estimated Date of Arrival *"
                        placeholderTextColor={colors.primary}
                        value={values.estimatedDateofArrival}
                        onChangeText={handleChange("estimatedDateofArrival")}
                        color={colors.primary}
                        editable={false}
                      />
                      {touched.estimatedDateofArrival &&
                        errors.estimatedDateofArrival ? (
                        <Text style={styles.errorText}>
                          {errors.estimatedDateofArrival}
                        </Text>
                      ) : null}
                    </TouchableOpacity>
                  </>
                )}
                {/* Datepicker ends */}
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
                    options={datamake}
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
                    color={colors.primary}
                    keyboardType="numeric"
                    onChangeText={handleChange("odometer")}
                  />
                  {touched.odometer && errors.odometer ? (
                    <Text style={styles.errorText}>{errors.odometer}</Text>
                  ) : null}
                </View>

                {/* Seating Row starts */}

                {/* <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                <Text style={styles.seatingText}>Seating Arrangement</Text>
                <View style={styles.seating}>
                  <TouchableOpacity
                    style={styles.minusbutton}
                    onPress={handleremoveRow}
                    disabled={rows.length === 1}
                  >
                    <Text style={styles.buttonText}>-</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.plusbutton}
                    onPress={handleAddRow}
                  >
                    <Text style={styles.buttonText}>+</Text>
                  </TouchableOpacity>

                </View>
              </View> */}

                {/* <View style={{}}>
                {rows.map((row, index) => (
                  <View key={index}>
                    <Text style={{ ...styles.seatingText, marginTop: -5 }}>Row {row} </Text>
                    <View style={styles.inputLabelBox}>
                      <TextInput
                        style={styles.inputseat}
                        placeholder={value.toString()}
                        placeholderTextColor="black"
                      />
                      <View style={{ top: -44, right: 20 }}>
                        <TouchableOpacity
                          style={styles.arrowButton}
                          onPress={handleIncrement}
                        >
                          <Text style={styles.arrowup}>+</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={[styles.arrowButton, { opacity: value === 0 ? 0.5 : 1 }]} // if the value is equal to 0 set opacity to 0.5 else keep 1 
                          onPress={handleDecrement}
                          disabled={value === 0}
                        >
                          <Text style={styles.arrowdown}>-</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>

                ))}
              </View> */}

                {/* Seating Row Ends */}

                <View style={styles.buttonContainer}>
                  <LinearGradient
                    colors={["#4B4B4B", "#9F9F9F"]}
                    locations={[0, 1]}
                    start={{ x: 0.2, y: 0.5 }}
                    end={{ x: 1, y: 1 }}
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
                      style={styles.submitButton}
                      onPress={handleSubmit}
                    >
                      <Text style={styles.buttonText}>Next</Text>
                    </TouchableOpacity>
                  </LinearGradient>
                </View>
            
            </View>
          </View>
        )}
      </Formik>
      </ScrollView>
    </SafeAreaView>
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
    paddingVertical: 10,
    color: "black",
    marginBottom: 5,
  },
  dropdown: {
    backgroundColor: "#fff0",
    borderRadius: 10,
    marginBottom: 5.5,
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
    marginTop: 20,
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

  seatingText: {
    marginTop: 10,
    fontSize: 15,
    marginLeft: 20,
    color: "#23A29F",
  },
  seating: {
    flexDirection: "row",
    marginTop: 10,
  },
  plusbutton: {
    backgroundColor: "#198754",
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginHorizontal: 5,
    borderRadius: 5,
  },

  minusbutton: {
    backgroundColor: "#E87C86",
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  rowText: {
    fontSize: 15,
    marginLeft: 20,
    marginBottom: 5,
    color: "#23A29F",
  },
  inputLabelBox: {
    backgroundColor: "white",
    borderRadius: 10,
    fontSize: 16,
    width: "40%",
    height: 49,
    marginTop: 10,
  },

  inputseat: {
    borderRadius: 5,
    paddingVertical: 10,
    color: "black",
    marginBottom: 5,
    marginLeft: 60,
    fontSize: 20,
  },

  arrowup: {
    color: "#fff",
    marginLeft: 120,
    marginBottom: -15,
    fontSize: 22,
    backgroundColor: "#23A29F",
    borderRadius: 4,
    width: "20%",
    textAlign: "center", // Center align the plus symbol
    top: 4,
  },

  arrowdown: {
    marginLeft: 30,
    fontSize: 22,
    marginBottom: 20,
    backgroundColor: "#23A29F",
    borderRadius: 4,
    width: "20%",
    bottom: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default CreateApplicationMain;
