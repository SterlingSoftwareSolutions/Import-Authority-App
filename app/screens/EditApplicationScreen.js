import React, { useEffect, useState } from "react";
import { useRoute } from '@react-navigation/native';
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
} from "react-native";
import TopUserControlBg from "../components/TopUserControlBg";
import {
  Dialog,
  DialogTitle,
  DialogFooter,
  DialogButton,
} from "react-native-popup-dialog";
import colors from "../config/colors";
import client from "../api/client";
import { CDN_URL } from '@env'
import * as Yup from "yup";
import { Formik } from "formik";
import { Platform } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SelectList } from "react-native-dropdown-select-list";
import { RadioButton } from "react-native-paper";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useNavigation } from "@react-navigation/native";
import * as DocumentPicker from "expo-document-picker";
import * as ImagePicker from "expo-image-picker";
import mime from 'mime'

function EditApplicationScreen(props) {
  const navigation = useNavigation();
  const route = useRoute();
  const applicationId = route.params?.applicationId;
  const [application, setApplication] = useState(null);
  const [assets, setAssets] = useState({});
  const [imageSourceDialog, setImageSourceDialog] = useState(false);
  //Uploaded images
  const [images, setImages] = useState({});
  //Name of the image field
  const [key, setKey] = useState(null);
  //Open the Popup onPress
  const selectImage = (imageKey) => {
    setKey(imageKey);
    setImageSourceDialog(true);
  };
  //Opens the Camera or image Library
  const selectImageLaunch = async (camera = true) => {
    setImageSourceDialog(false);
    var picker = null;
    if (camera) {
      picker = await ImagePicker.launchCameraAsync();
    } else {
      picker = await ImagePicker.launchImageLibraryAsync();
    }
    if (!picker.canceled) {
      setImages((images) => ({
        ...images,
        [key]: picker.assets[0].uri,
      }));
    }
  };

  // doc state
  const [docs, setDocs] = useState({});

  const selectDocs = async (key) => {
    const picker = await DocumentPicker.getDocumentAsync();
    if (!picker.canceled) {
      setDocs((docs) => ({
        ...docs,
        [key]: picker.uri,
      }));
    }
  };

  useEffect(() => {
    const fetchApplication = async () => {
      try {
        const api = await client();
        const response = await api.get(`/applications/${applicationId}`);
        console.log(application)
        if (response.data.success) {
          setApplication(response.data.data.application);
          response.data.data.assets.forEach((element) => {
            setAssets((assets) => ({
              ...assets,
              [element.asset_type]: element.location,
            }));
          });
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

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
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
    const formattedDate = date_object.toISOString().slice(0, 10);
    setFieldValue("estimatedDateofArrival", formattedDate)
    hideDatePicker();
  };

  {
    /Approval Type  /;
  }
  const [enableAdditionalValidations, setEnableAdditionalValidations] = useState(false);

  const handleApprovalTypeChange = (value, setFieldValue) => {
    setFieldValue('approvalType', value);
    setEnableAdditionalValidations(value === 0);
  };

  function getKeyByValue(dictionaryArray, value) {
    const foundItem = dictionaryArray.find(item => item.value === value);
    return foundItem ? foundItem.key : null;
  }

  const submitApplication = async (values) => {
    const applicationData = {
      _method: 'put',
      chassis_no: values.chassisNumber,
      arrival_date: values.estimatedDateofArrival,
      make: values.make,
      model: values.model,
      build_month: values.buildMonth,
      build_year: values.buildYear,
      fuel_type: values.fuelType,
      transmission: values.transmission,
      body_type: values.bodyType,
      drive_type: values.driveType,
      odo_meter: values.odo_meter,
      approval_type: values.approvalType == 0 ? "SEV" : "Older Vehicles",
    };
    if (values.approvalType == 1) {
      applicationData.vass_engineering = values.vassEngineering;
      console.log(values.vassEngineering)
    }
    try {
      const api = await client();
      const formData = new FormData();
      // Add application data 
      Object.entries(applicationData).forEach(([key, value]) => {
        formData.append(key, value);
      });

      // Add documents to formData
      Object.entries(docs).forEach(([key, uri]) => {
        const filename = uri.split("/").pop();

        formData.append(key, {
          uri,
          name: filename,
          type: mime.getType(uri),
        });
      });

      // Add images to formData
      Object.entries(images).forEach(([key, uri]) => {
        const filename = uri.split("/").pop();

        formData.append(key, {
          uri,
          name: filename,
          type: mime.getType(uri),
        });
      });

      const response = await api.post("/applications/" + applicationId, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      // Make API request to upload images and documents

      if (response.ok) {
        // Successful upload
        console.log(response.data);
        console.log("Images and files uploaded successfully");
        // navigation.navigate("Dashboard");
      } else {
        // Error in API response
        console.error("Failed to upload images and files:", response.problem);
        console.log(response);
        alert("Image and document upload failed!");
      }
    } catch (error) {
      // Error in API request
      console.log(error);
      alert("Something went wrong");
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
        <View>
          <Text style={{ ...styles.viewstatuslabel }}>{application?.status ? application.status.toUpperCase() : null}</Text>
        </View>
        <View style={{ ...styles.data_and_searchicon }}>
          <Text style={{ color: '#E3E2E2', textAlign: 'center' }}> Your Application is in {application?.status.toUpperCase() ?? null} Stage </Text>
        </View>
      </TopUserControlBg>

      {/* Image selecting Popup Dialog Box */}
      <Dialog
        onDismiss={() => {
          setImageSourceDialog(false);
        }}
        width={0.9}
        visible={imageSourceDialog}
        rounded
        actionsBordered
        dialogTitle={
          <DialogTitle
            title="Add an image using ..."
            style={{
              backgroundColor: "#F7F7F8",
            }}
            hasTitleBar={false}
            align="left"
          />
        }
        footer={
          <DialogFooter>
            <DialogButton
              text="Camera"
              bordered
              onPress={() => {
                setImageSourceDialog(false);
                selectImageLaunch(true);
              }}
              key="button-1"
            />
            <DialogButton
              text="Gallery"
              bordered
              onPress={() => {
                setImageSourceDialog(false);
                selectImageLaunch(false);
              }}
              key="button-2"
            />
          </DialogFooter>
        }
      ></Dialog>
      <ScrollView>

        <View key={application?.id ?? null} style={{ width: '90%', marginHorizontal: '5%', marginTop: 20 }}>
          {/* ----------Vehicle Information Start------------ */}
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
              approvalType: application?.approval_type == 'Older Vehicles' ? '1' : '0',
            }}
            onSubmit={submitApplication}
            validationSchema={
              enableAdditionalValidations
                ? validationSchema
                : validationSchema.concat(additionalValidations)
            }
          >
            {({
              handleChange,
              setFieldValue,
              handleSubmit,
              values,
              errors,
              touched,
              setValues
            }) => (
              <View style={styles.container}>
                <View style={styles.formContainer}>
                  <Text style={{ color: colors.primary, fontWeight: 'bold' }}>Vehicle Info</Text>
                  <View>
                    {/* Radio Button Options for SEV or Older - Approval Type */}
                    <RadioButton.Group onValueChange={(value) => {
                      handleApprovalTypeChange(value, setFieldValue);
                    }} value={values.approvalType} >
                      <View style={{ flexDirection: 'row' }}>
                        <RadioButton.Item
                          label="SEVs/ RAWs"
                          value="0"
                          color={colors.primary}
                          style={{ flexDirection: 'row-reverse' }}
                        />
                        <RadioButton.Item
                          label="Older Vehicle"
                          value="1"
                          color={colors.primary}
                          style={{
                            flexDirection: 'row-reverse',
                          }}
                        />
                      </View>
                    </RadioButton.Group>

                    {/* Radio Button for Vass Engineering */}
                    {values.approvalType == '1' ? (
                      <RadioButton.Group onValueChange={handleChange('vassEngineering')} value={values.vassEngineering}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                          <RadioButton.Item label="Need an Engineer" value="ours" color={colors.primary} style={{
                            flexDirection: "row-reverse",
                          }} />
                          <RadioButton.Item label="Own Engineer" value="own" color={colors.primary} style={{
                            flexDirection: "row-reverse",
                          }} />
                        </View>
                      </RadioButton.Group>
                    ) : null}
                  </View>
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
                      placeholder="Make *"
                      defaultOption={{ key: values.make, value: values.make }}
                      setSelected={handleChange("make")}
                      data={datamake}
                      save="value"
                      boxStyles={styles.dropdownBox}
                      inputStyles={{ color: colors.darkGrey }}
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
                      inputStyles={{ color: colors.darkGrey }}
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
                      defaultOption={{ key: values.buildMonth.toString(), value: months[values.buildMonth - 1] }}
                      placeholder="Build Month *"
                      setSelected={handleChange("buildMonth")}
                      data={databuildmonth}
                      save="value"
                      boxStyles={styles.dropdownBox}
                      inputStyles={{ color: colors.darkGrey }}
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
                      defaultOption={{ key: values.buildYear.toString(), value: values.buildYear.toString() }}
                      placeholder="Build Year *"
                      setSelected={handleChange("buildYear")}
                      data={databuildyear}
                      save="value"
                      boxStyles={styles.dropdownBox}
                      inputStyles={{ color: colors.darkGrey }}
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
                      inputStyles={{ color: colors.darkGrey }}
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
                      inputStyles={{ color: colors.darkGrey }}
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
                      inputStyles={{ color: colors.darkGrey }}
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
                      inputStyles={{ color: colors.darkGrey }}
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
                  {/*Vehicle Info end */}

                  {/* -------------------------Images and Documents Start------------------------------ */}
                  {/* Exterior Images Selector */}
                  <View>
                    <Text style={{ color: colors.primary, fontWeight: 'bold', marginTop: 10 }}>Exterior Images</Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                      {/*  img_front_right */}
                      <TouchableOpacity
                        onPress={() => {
                          selectImage("img_front_right");
                        }}>
                        <View style={styles.cameraContainer}>
                          <Image
                            source={{ uri: CDN_URL + "/assets/applications/" + assets?.img_front_right ?? 'default.png' }}
                            style={styles.cameraIcon}
                          />
                          <Image
                            source={{ uri: images["img_front_right"] }}
                            style={styles.imagePreview}
                          />
                          <Text style={styles.cameraText}>FR Corner</Text>
                        </View>
                      </TouchableOpacity>
                      {/*img_rear_right  */}
                      <TouchableOpacity
                        onPress={() => {
                          selectImage("img_rear_right");
                        }}
                      >
                        <View style={styles.cameraContainer}>
                          <Image
                            source={{ uri: CDN_URL + "/assets/applications/" + assets?.img_rear_right ?? 'default.png' }}
                            style={styles.cameraIcon}
                          />
                          <Image
                            source={{ uri: images["img_rear_right"] }}
                            style={styles.imagePreview}
                          />
                          <Text style={styles.cameraText}>RR Corner</Text>
                        </View>
                      </TouchableOpacity>
                    </View>

                    <View
                      style={{ flexDirection: "row", justifyContent: "space-around" }}
                    >
                      <TouchableOpacity
                        onPress={() => {
                          selectImage("img_front_left");
                        }}
                      >
                        <View style={styles.cameraContainer}>
                          <Image
                            source={{ uri: CDN_URL + "/assets/applications/" + assets?.img_front_left ?? 'default.png' }}
                            style={styles.cameraIcon}
                          />
                          <Image
                            source={{ uri: images["img_front_left"] }}
                            style={styles.imagePreview}
                          />
                          <Text style={styles.cameraText}>FL Corner</Text>
                        </View>
                      </TouchableOpacity>

                      <TouchableOpacity
                        onPress={() => {
                          selectImage("img_rear_left");
                        }}
                      >
                        <View style={styles.cameraContainer}>
                          <Image
                            source={{ uri: CDN_URL + "/assets/applications/" + assets?.img_rear_left ?? 'default.png' }}
                            style={styles.cameraIcon}
                          />
                          <Image
                            source={{ uri: images["img_rear_left"] }}
                            style={styles.imagePreview}
                          />
                          <Text style={styles.cameraText}>RL Corner</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                    {/* Interior Images Selector */}
                    <Text style={{ color: colors.primary, fontWeight: 'bold', marginTop: 10 }}>Interior Images</Text>
                    <View
                      style={{ flexDirection: "row", justifyContent: "space-around" }}
                    >
                      <TouchableOpacity
                        onPress={() => {
                          selectImage("img_interior_1");
                        }}
                      >
                        <View style={styles.cameraContainer}>
                          <Image
                            source={{ uri: CDN_URL + "/assets/applications/" + assets?.img_interior_1 ?? 'default.png' }}
                            style={styles.cameraIcon}
                          />
                          <Image
                            source={{ uri: images["img_interior_1"] }}
                            style={styles.imagePreview}
                          />
                          <Text style={styles.cameraText}>FR Corner</Text>
                        </View>
                      </TouchableOpacity>

                      <TouchableOpacity
                        onPress={() => {
                          selectImage("img_interior_2");
                        }}
                      >
                        <View style={styles.cameraContainer}>
                          <Image
                            source={{ uri: CDN_URL + "/assets/applications/" + assets?.img_interior_2 ?? 'default.png' }}
                            style={styles.cameraIcon}
                          />
                          <Image
                            source={{ uri: images["img_interior_2"] }}
                            style={styles.imagePreview}
                          />
                          <Text style={styles.cameraText}>RR Corner</Text>
                        </View>
                      </TouchableOpacity>
                    </View>

                    <View
                      style={{ flexDirection: "row", justifyContent: "space-around" }}
                    >
                      <TouchableOpacity
                        onPress={() => {
                          selectImage("img_interior_3");
                        }}
                      >
                        <View style={styles.cameraContainer}>
                          <Image
                            source={{ uri: CDN_URL + "/assets/applications/" + assets?.img_interior_3 ?? 'default.png' }}
                            style={styles.cameraIcon}
                          />
                          <Image
                            source={{ uri: images["img_interior_3"] }}
                            style={styles.imagePreview}
                          />
                          <Text style={styles.cameraText}>FL Corner</Text>
                        </View>
                      </TouchableOpacity>

                      <TouchableOpacity
                        onPress={() => {
                          selectImage("img_interior_4");
                        }}
                      >
                        <View style={styles.cameraContainer}>
                          <Image
                            source={{ uri: CDN_URL + "/assets/applications/" + assets?.img_interior_4 ?? 'default.png' }}
                            style={styles.cameraIcon}
                          />
                          <Image
                            source={{ uri: images["img_interior_4"] }}
                            style={styles.imagePreview}
                          />
                          <Text style={styles.cameraText}>RL Corner</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                  {/* Additional Images if approval type = Older Vehicles */}
                  {application?.approval_type === 'Older Vehicles' && (
                    <>
                      <Text style={{ color: colors.primary, fontWeight: 'bold', marginTop: 10 }}>Additional Images</Text>
                      <View
                        style={{ flexDirection: "row", justifyContent: "space-around" }}>
                        <TouchableOpacity
                          onPress={() => {
                            selectImage("img_engine");
                          }}>
                          <View style={styles.cameraContainer}>
                            <Image
                              source={{ uri: CDN_URL + "/assets/applications/" + assets?.img_engine ?? 'default.png' }}
                              style={styles.cameraIcon}
                            />
                            <Image
                              source={{ uri: images["img_engine"] }}
                              style={styles.imagePreview}
                            />
                            <Text style={styles.cameraText}>Engine</Text>
                          </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                          onPress={() => {
                            selectImage("img_chassis");
                          }}
                        >
                          <View style={styles.cameraContainer}>
                            <Image
                              source={{ uri: CDN_URL + "/assets/applications/" + assets?.img_chassis ?? 'default.png' }}
                              style={styles.cameraIcon}
                            />
                            <Image
                              source={{ uri: images["img_chassis"] }}
                              style={styles.imagePreview}
                            />
                            <Text style={styles.cameraText}>Chassis</Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                    </>
                  )}

                  {/* Documents Selector */}
                  <View>
                    <Text style={{ color: colors.primary, fontWeight: 'bold', marginTop: 10 }}>Documents</Text>
                    <View
                      style={{ flexDirection: "row", justifyContent: "space-around" }}
                    >
                      <TouchableOpacity
                        style={styles.cameraContainer}
                        onPress={() => {
                          selectDocs("doc_invoice");
                        }}
                      >
                        <Image
                          source={
                            docs["doc_invoice"]
                              ? require("../assets/doc_thumbnail.png")
                              : require("../assets/doc_thumbnail.png")
                          }
                          style={[styles.cameraIcon]}
                        />
                        <Text style={styles.frText}>Invoice</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.cameraContainer}
                        onPress={() => {
                          selectDocs("doc_export_certificate");
                        }}
                      >
                        <Image
                          source={
                            docs["doc_export_certificate"]
                              ? require("../assets/doc_thumbnail.png")
                              : require("../assets/doc_thumbnail.png")
                          }
                          style={[styles.cameraIcon]}
                        />
                        <Text style={styles.frText}>Export Certificate</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.cameraContainer}
                        onPress={() => {
                          selectDocs("doc_auction_report");
                        }}
                      >
                        <Image
                          source={
                            docs["doc_auction_report"]
                              ? require("../assets/doc_thumbnail.png")
                              : require("../assets/doc_thumbnail.png")
                          }
                          style={[styles.cameraIcon]}
                        />
                        <Text style={styles.frText}>Auction Report</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  {/* Draft - Submit */}
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
                        onPress={() => { submitApplication(values) }}
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
    width: "35%",
    justifyContent: "space-between",
    alignSelf: "center",
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  cameraContainer: {
    marginHorizontal: "auto",
    backgroundColor: "white",
    marginTop: 25,
    borderRadius: 10,
    borderWidth: 1,
    width: 95,
    height: 95,
    alignItems: "center",
    borderColor: colors.lightGrey,
  },
  documentContainer: {
    marginHorizontal: "auto",
    backgroundColor: "white",
    paddingHorizontal: 4,
    paddingVertical: 2,
    marginTop: 25,
    borderRadius: 10,
    borderWidth: 1,
    width: 100,
    height: 100,
    alignItems: "center",
    borderColor: colors.lightGrey,
  },
  cameraIcon: {
    marginTop: 10,
    borderRadius: 10,
    width: 60,
    height: 60,
  },
  frText: {
    fontSize: 11,
  },
  valueText: {
    color: colors.darkGrey,
  },
  imagePreview: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10,
    zIndex: 2,
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
    textAlign: "center", 
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
  cameraText: {
    color: "#C9C9C9",
  }
});
export default EditApplicationScreen;
