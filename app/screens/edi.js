import React, { useEffect, useState } from "react";
import { useRoute } from '@react-navigation/native';
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
import TopUserControlBg from "../components/TopUserControlBg";
import colors from "../config/colors";
import client from "../api/client";
import { CDN_URL } from '@env'
import * as Yup from "yup";
import { Formik } from "formik";
import { Platform } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ProgressBar } from "react-native-paper";
import { SelectList } from "react-native-dropdown-select-list";
import { RadioButton } from "react-native-paper";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useNavigation } from "@react-navigation/native";

function EditApplicationScreen(props) {
  const endpoint = "/applications";
  const navigation = useNavigation();
  const route = useRoute();
  const applicationId = route.params?.applicationId;
  const [application, setApplication] = useState(null);
  const [assets, setAssets] = useState({});

  useEffect(() => {
    const fetchApplication = async () => {
      try {
        const api = await client();
        const response = await api.get(`/applications/${applicationId}`);
        if (response.data.success) {
          setApplication(response.data.data.application);
          response.data.data.assets.forEach((element) => {
            setAssets((assets) => ({
              ...assets,
              [element.asset_type]: element.location,
            }));
          });
          // console.log(assets);
          // hide progress spinner - should be done 
        } else {
          alert('Failed to fetch application');
        }
      } catch (error) {
        console.error('Error fetching application:', error);
      }
    };

    if (applicationId) {
      fetchApplication();
    }
  }, [applicationId]);


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
  const [vassEngineering, setVassEngineering] = useState('');
  const [approvalTypeN, setApprovalTypeN] = useState('');

  const handleApprovalTypeChange = (value) => {
    setApprovalTypeN(value);
    if (value === 'SEV') {
      setVassEngineering('');
    }
  };

  const handleVassEngineeringChange = (value) => {
    setVassEngineering(value);
  };

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
      odo_meter: values.odo_meter,
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
      navigation.navigate("Dashboard");
    } catch (error) {
      console.log("Error:", error);
    }
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
    odo_meter: Yup.string().required("odo_meter is required"),
  });

  const additionalValidations = Yup.object().shape({
    vassEngineering: Yup.string().required("Vass engineering is required"),
  });


  return (
    <View style={styles.container}>
      <TopUserControlBg>
        <Text style={styles.statusText}>Edit Application</Text>
        <View style={styles.viewstatus}>
          <Text style={{ ...styles.viewstatuslabel }}>{application?.status ? application.status.toUpperCase() : null}</Text>
        </View>
        <View style={{ ...styles.data_and_searchicon }}>
          <Text style={{ color: '#E3E2E2', textAlign: 'center' }}> Your Application is in {application?.status.toUpperCase() ?? null} Stage </Text>
        </View>
      </TopUserControlBg>
      <ScrollView>
        <View>
          <RadioButton.Group onValueChange={handleApprovalTypeChange} value={approvalTypeN} flexDirection="row">
            <RadioButton.Item label="SEVs/ RAWs" value="SEV" color={colors.primary} />
            <RadioButton.Item label="Older Vehicle" value="Older Vehicles" color={colors.primary} />
          </RadioButton.Group>

          {approvalTypeN === 'Older Vehicles' && (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <RadioButton.Group onValueChange={handleVassEngineeringChange} value={vassEngineering}>
                <RadioButton.Item label="I need an Engineer" value="ours" color={colors.primary} />
                <RadioButton.Item label="I have my Own Engineer" value="own" color={colors.primary} />
              </RadioButton.Group>
            </View>
          )}
        </View>


        <View key={application?.id ?? null} style={{ width: '90%', marginHorizontal: '5%', marginTop: 20 }}>
          {/* Vehicle Information */}
          <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-between' }}>
            <View style={{ width: '45%' }}>
              <Text>Chassis/Frame Number</Text>
              <Text style={styles.valueText}>{application?.chassis_no ?? null}</Text>
            </View>

            <View style={{ width: '45%' }}>
              <Text>Est. date of arrival:</Text>
              <Text style={styles.valueText}>{application?.arrival_date ?? null}</Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-between' }}>
            <View style={{ width: '45%' }}>
              <Text>Make:</Text>
              <Text style={styles.valueText}>{application?.make ?? null}</Text>
            </View>

            <View style={{ width: '45%' }}>
              <Text>Model:</Text>
              <Text style={styles.valueText}>{application?.model ?? null}</Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-between' }}>
            <View style={{ width: '45%' }}>
              <Text>Build Date:</Text>
              <Text style={styles.valueText}>{application?.build_year ?? null}</Text>
            </View>

            <View style={{ width: '45%' }}>
              <Text>Transmission:</Text>
              <Text style={styles.valueText}>{application?.transmission ?? null}</Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-between' }}>
            <View style={{ width: '45%' }}>
              <Text>Body Type:</Text>
              <Text style={styles.valueText}>{application?.body_type ?? null}</Text>
            </View>

            <View style={{ width: '45%' }}>
              <Text>Drive Type:</Text>
              <Text style={styles.valueText}>{application?.drive_type ?? null}</Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-between' }}>
            <View style={{ width: '45%' }}>
              <Text>ODO Meter:</Text>
              <Text style={styles.valueText}>{application?.odo_meter ?? null}</Text>
            </View>
          </View>

          <Formik
            initialValues={{
              vassEngineering: application?.vass_engineering ?? "",
              chassisNumber: application?.chassis_no ?? "",
              estimatedDateofArrival: application?.arrival_date ?? "",
              make: application?.make ?? "",
              model: application?.model ?? "",
              buildMonth: application?.build_month ?? "",
              buildYear: application?.build_year ?? "",
              fuelType: application?.fuel_type ?? "",
              transmission: application?.transmission ?? "",
              bodyType: application?.body_type ?? "",
              driveType: application?.drive_type ?? "",
              odo_meter: application?.odo_meter ?? "",
              approvalType: application?.approval_type ?? "",
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
              handleSubmit,
              setFieldValue,
              values,
              errors,
              touched,
              setValues
            }) => (
              <View style={styles.container}>
                <View style={styles.formContainer}>
                  <Text style={{ color: colors.primary, fontWeight: 'bold' }}>Vehicle Info</Text>
                  {approvalType == 1 ? (
                    // Radio button and switch for approval type 
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
                  <Text>Chassis/Frame Number</Text>
                  <TextInput
                    style={[
                      styles.input,
                      styles.usernameInput,
                      { marginTop: 10 },
                    ]}
                    placeholder="Chassis/ Frame Number"
                    placeholderTextColor={colors.primary}
                    value={values.chassisNumber}
                    color={colors.darkGrey}
                    onChangeText={handleChange("chassisNumber")}
                  />
                  {touched.chassisNumber && errors.chassisNumber ? (
                    <Text style={styles.errorText}>{errors.chassisNumber}</Text>
                  ) : null}

                  <Text>Estimated Date of Arrival:</Text>

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
                        color={colors.darkGrey}
                        value={values.estimatedDateofArrival}

                      />
                      <TextInput
                        style={[styles.input, styles.usernameInput]}
                        placeholder="Estimated Date of Arrival *"
                        placeholderTextColor={colors.primary}
                        value={values.estimatedDateofArrival}
                        onChangeText={handleChange("estimatedDateofArrival")}
                        color={colors.darkGrey}
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
                        color={colors.darkGrey}
                        value={values.estimatedDateofArrival}

                      />
                      <TouchableOpacity onPress={() => showDatePicker()}>
                        <TextInput
                          style={[styles.input, styles.usernameInput]}
                          placeholder="Estimated Date of Arrival *"
                          placeholderTextColor={colors.primary}
                          value={values.estimatedDateofArrival}
                          onChangeText={handleChange("estimatedDateofArrival")}
                          color={colors.darkGrey}
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
                  <Text>Make</Text>
                  <View style={[styles.dropdown]}>
                    <SelectList
                      defaultOption={{ key: values.make, value: values.make }}
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
                  <Text>Model</Text>
                  <View style={[styles.dropdown]}>
                    <SelectList
                      defaultOption={{ key: values.model, value: values.model }}
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
                  <Text>Build Month</Text>
                  <View style={[styles.dropdown]}>
                    <SelectList
                    defaultOption={{ key: values.buildMonth, value: values.buildMonth }}
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
                  <Text>Build Year </Text>
                  <View style={[styles.dropdown, {}]}>
                    <SelectList
                    defaultOption={{ key: values.buildYear, value: values.buildYear }}
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
                  <Text>Fuel Type</Text>
                  <View style={[styles.dropdown]}>
                    <SelectList
                    defaultOption={{ key: values.fuelType, value: values.fuelType }}
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
                  <Text>Transmisson</Text>
                  <View style={[styles.dropdown]}>
                    <SelectList
                    defaultOption={{ key: values.transmission, value: values.transmission }}
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
                  <Text>Body Type</Text>
                  <View style={[styles.dropdown]}>
                    <SelectList
                    defaultOption={{ key: values.bodyType, value: values.bodyType }}
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
                  <Text>Drive Type</Text>
                  <View style={[styles.dropdown]}>
                    <SelectList
                    defaultOption={{ key: values.driveType, value: values.driveType }}
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
                  <Text>Odometer</Text>
                  <View>
                    <TextInput
                      style={[styles.input, styles.usernameInput, {}]}
                      value={values.odo_meter}
                      placeholder="Odometer *"
                      placeholderTextColor={colors.primary}
                      color={colors.darkGrey}
                      keyboardType="numeric"
                      onChangeText={handleChange("odo_meter")}
                    />
                    {touched.odo_meter && errors.odo_meter ? (
                      <Text style={styles.errorText}>{errors.odo_meter}</Text>
                    ) : null}
                  </View>

                  {/* Displays Exterior Images  */}
                  <Text
                    style={{ color: colors.primary, fontWeight: "bold", marginTop: 20 }}>
                    Exterior Images
                  </Text>
                  <View
                    style={{ flexDirection: "row", justifyContent: "space-around" }}
                  >
                    <View style={styles.cameraContainer}>
                      <Image
                        source={{ uri: CDN_URL + "/assets/applications/" + assets?.img_front_right ?? 'default.png' }}
                        style={styles.imagePreview}
                      />
                      <Text style={styles.frText}>FR Corner</Text>
                    </View>
                    <View style={styles.cameraContainer}>
                      <Image
                        source={{ uri: CDN_URL + "/assets/applications/" + assets?.img_rear_right ?? 'default.png' }}
                        style={styles.imagePreview}
                      />
                      <Text style={styles.frText}>RR Corner</Text>
                    </View>

                    <View style={styles.cameraContainer}>
                      <Image
                        source={{ uri: CDN_URL + "/assets/applications/" + assets?.img_front_left ?? 'default.png' }}
                        style={styles.imagePreview}
                      />
                      <Text style={styles.frText}>FL Corner</Text>
                    </View>
                    <View style={styles.cameraContainer}>
                      <Image
                        source={{ uri: CDN_URL + "/assets/applications/" + assets?.img_rear_left ?? 'default.png' }}
                        style={styles.imagePreview}
                      />
                      <Text style={styles.frText}>RL Corner</Text>
                    </View>
                  </View>

                  {/* Displays Interior Images */}
                  <Text
                    style={{ color: colors.primary, fontWeight: "bold", marginTop: 20 }}
                  >
                    Interior Images
                  </Text>

                  <View
                    style={{ flexDirection: "row", justifyContent: "space-around" }}
                  >
                    <View style={styles.cameraContainer}>
                      <Image
                        source={{ uri: CDN_URL + "/assets/applications/" + assets?.img_interior_1 ?? 'default.png' }}
                        style={[styles.imagePreview]}
                      />
                      <Text style={styles.frText}>FR Corner</Text>
                    </View>
                    <View style={styles.cameraContainer}>
                      <Image
                        source={{ uri: CDN_URL + "/assets/applications/" + assets?.img_interior_2 ?? 'default.png' }}
                        style={[styles.imagePreview]}
                      />
                      <Text style={styles.frText}>RR Corner</Text>
                    </View>

                    <View style={styles.cameraContainer}>
                      <Image
                        source={{ uri: CDN_URL + "/assets/applications/" + assets?.img_interior_3 ?? 'default.png' }}
                        style={[styles.imagePreview]}
                      />
                      <Text style={styles.frText}>FL Corner</Text>
                    </View>
                    <View style={styles.cameraContainer}>
                      <Image
                        source={{ uri: CDN_URL + "/assets/applications/" + assets?.img_interior_4 ?? 'default.png' }}
                        style={[styles.imagePreview]}
                      />
                      <Text style={styles.frText}>RL Corner</Text>
                    </View>
                  </View>

                  {/* Displays Documents */}
                  <Text
                    style={{ color: colors.primary, fontWeight: "bold", marginTop: 20 }}
                  >
                    Documents
                  </Text>

                  <View
                    style={{ flexDirection: "row", justifyContent: "space-around" }}
                  >
                    <View style={styles.cameraContainer}>
                      <Image
                        source={{ uri: CDN_URL + "/assets/applications/" + assets?.doc_invoice ?? 'default.png' }}
                        style={[styles.imagePreview]}
                      />
                      <Text style={styles.frText}>Invoice</Text>
                    </View>
                    <View style={styles.cameraContainer}>
                      <Image
                        source={{ uri: CDN_URL + "/assets/applications/" + assets?.doc_export_certificate ?? 'default.png' }}
                        style={[styles.imagePreview]}
                      />
                      <Text style={styles.frText}>Export Certificate</Text>
                    </View>

                    <View style={styles.cameraContainer}>
                      <Image
                        source={{ uri: CDN_URL + "/assets/applications/" + assets?.doc_auction_report ?? 'default.png' }}
                        style={[styles.imagePreview]}
                      />
                      <Text style={styles.frText}>Auction Report</Text>
                    </View>
                  </View>
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
                        <Text style={styles.buttonText}>Submit</Text>
                      </TouchableOpacity>
                    </LinearGradient>
                  </View>
                </View>
              </View>
            )}
          </Formik>
        </View>
      </ScrollView >
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
    borderRadius: 20,
    padding: 10,
  },
  viewstatuslabel: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: colors.darkGrey,
    width: "25%",
    justifyContent: "space-between",
    alignSelf: "center",
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  cameraContainer: {
    marginHorizontal: "auto",
    backgroundColor: "white",
    paddingHorizontal: 4,
    paddingVertical: 2,
    marginTop: 25,
    borderRadius: 10,
    borderWidth: 1,
    width: 80,
    height: 98,
    alignItems: "center",
    borderColor: colors.lightGrey,
  },
  cameraIcon: {
    marginTop: 10,
    borderRadius: 10,
    width: 50,
    height: 50,
    tintColor: "#C9C9C9",
  },
  frText: {
    fontSize: 11,
  },
  valueText: {
    color: colors.darkGrey,
  },
  imagePreview: {
    width: 65,
    height: 65,
    borderRadius: 10,
    marginTop: 10,
  },
  statusText: {
    fontWeight: 700,
    fontSize: 25,
    color: colors.white,
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
  viewstatuslabel: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: colors.darkGrey,
    width: "25%",
    justifyContent: "space-between",
    alignSelf: "center",
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
});
export default EditApplicationScreen;
