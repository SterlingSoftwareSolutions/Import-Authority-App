import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  Image,
  Switch,
  ScrollView
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ProgressBar } from "react-native-paper";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";
import { SelectList } from "react-native-dropdown-select-list";
import colors from "../config/colors";
import { useNavigation } from "@react-navigation/native";



const CreateApplicationMain = () => {



  const navigation = useNavigation();
  const progress1 = 1; // Set the progress value between 0 and 1
  const progress2 = 0;
  const progress3 = 0;

  const x = 0.5; // Set the x-coordinate (between 0 and 1)
  const y = 1; // Set the y-coordinate (between 0 and 1)

  const blueColor = `rgba(128, 253, 128, ${x})`; // Calculate blue color with transparency based on x
  const greenColor = `rgba(16, 188, 163, ${y})`; // Calculate green color with transparency based on y

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

  const [selectedValue, setSelectedValue] = useState(null);
  const [makesOpen, setMakesOpen] = useState(false);

  const [selected, setSelected] = React.useState("");

  { /Make/ }

  const data = [
    { key: "1", value: "Honda" },
    { key: "2", value: "Civic" },
  ];




  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[colors.secondary, colors.primary]} // Set the starting and ending colors for the gradient
        style={styles.background}
      >
        <View style={styles.header}>
          <View style={styles.iconContainer}>
            <TouchableOpacity
              onPress={() => handleNotificationPress()}
              style={styles.iconButton}
            >
              <Image
                source={require("../assets/bell.png")}
                style={[
                  styles.icon,
                  { width: 24, height: 24, tintColor: "#fff" },
                ]}
              />

            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleLogoutPress()}
              style={styles.iconButton}
            >
              <Image
                source={require("../assets/money.png")}
                style={[
                  styles.icon,
                  { width: 24, height: 24, tintColor: "#fff" },
                ]}
              />

            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleTransactionPress()}
              style={styles.iconButton}
            >
              <Image
                source={require("../assets/user.png")}
                style={[
                  styles.icon,
                  { width: 24, height: 24, tintColor: "#fff" },
                ]}
              />

            </TouchableOpacity>
          </View>
        </View>

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

        <View style={styles.bottomContainer}>
          <View style={styles.bottomRow}>
            <Text style={styles.bottomText1}>SEVs / RAWs</Text>

            <View style={styles.backgroundColorWrapper1}>
              <Image
                source={require("../assets/car1.png")}
                style={styles.carIcon1}
              />
            </View>
          </View>
          <View style={styles.bottomRow}>
            <View style={styles.backgroundColorWrapper2}>
              <Image
                source={require("../assets/car2.png")}
                style={styles.carIcon2}
              />
            </View>

            <Text style={styles.bottomText2}>Old Vehicle</Text>
          </View>
        </View>
        </LinearGradient>

        <SafeAreaView style={styles.formContainer}>
          <ScrollView contentContainerStyle={{ marginTop: 10 }}>
          <TextInput
            style={[styles.input, styles.usernameInput, { marginTop: 10 }]}
            placeholder="Chassis/ Frame Number *"
            placeholderTextColor="#23A29F"
          />


          <TextInput
            style={[styles.input, styles.usernameInput]}
            placeholder="Estimated Date of Arrival *"
            placeholderTextColor="#23A29F"
          />

          <View style={[styles.dropdown]}>
            <SelectList
              placeholder="Make *"
              setSelected={(val) => setSelected(val)}
              data={data}
              save="value"
              boxStyles={{ borderColor: 'white' }}
              inputStyles={{ color: "#23A29F" }}
              dropdownStyles={{ borderColor: 'white' }}
              dropdownTextStyles={{ color: "#23A29F" }}
            />
          </View>

          <View style={[styles.dropdown]}>
            <SelectList
              placeholder="Model *"
              setSelected={(val) => setSelected(val)}
              data={data}
              save="value"
              boxStyles={{ borderColor: 'white' }}
              inputStyles={{ color: "#23A29F" }}
              dropdownStyles={{ borderColor: 'white' }}
              dropdownTextStyles={{ color: "#23A29F" }}
            />
          </View>

          <View style={styles.createapplicationrowContainer}>
            <View style={[styles.dropdown]}>
              <SelectList
                placeholder="Build Month *"
                setSelected={(val) => setSelected(val)}
                data={data}
                save="value"
                boxStyles={{ width: 150, borderColor: 'white' }}
                inputStyles={{ color: "#23A29F" }}
                dropdownStyles={{ borderColor: 'white' }}
                dropdownTextStyles={{ color: "#23A29F" }}
              />
            </View>

            <View style={[styles.dropdown, { marginRight: 5 }]}>
              <SelectList
                placeholder="Build Year *"
                setSelected={(val) => setSelected(val)}
                data={data}
                save="value"
                style={{ color: "blue" }}
                boxStyles={{ width: 150, borderColor: 'white' }}
                inputStyles={{ color: "#23A29F" }}
                dropdownStyles={{ borderColor: 'white' }}
                dropdownTextStyles={{ color: "#23A29F" }}
              />
            </View>
          </View>

          <View style={[styles.dropdown, { marginTop: -10 }]}>
            <SelectList
              placeholder="Fuel Type *"
              setSelected={(val) => setSelected(val)}
              data={data}
              save="value"
              boxStyles={{ borderColor: 'white' }}
              style={{ color: "blue" }}
              inputStyles={{ color: "#23A29F" }}
              dropdownStyles={{ borderColor: 'white' }}
              dropdownTextStyles={{ color: "#23A29F" }}
            />
          </View>

          <View style={[styles.dropdown]}>
            <SelectList
              placeholder="Transmisson *"
              setSelected={(val) => setSelected(val)}
              data={data}
              save="value"
              style={{ color: "blue" }}
              boxStyles={{ borderColor: 'white' }}
              inputStyles={{ color: "#23A29F" }}
              dropdownStyles={{ borderColor: 'white' }}
              dropdownTextStyles={{ color: "#23A29F" }}
            />
          </View>

          <View style={[styles.dropdown]}>
            <SelectList
              placeholder="Body Type *"
              setSelected={(val) => setSelected(val)}
              data={data}
              save="value"
              style={{ color: "blue" }}
              boxStyles={{ borderColor: 'white' }}
              inputStyles={{ color: "#23A29F" }}
              dropdownStyles={{ borderColor: 'white' }}
              dropdownTextStyles={{ color: "#23A29F" }}
            />
          </View>

          <View style={[styles.dropdown]}>
            <SelectList
              placeholder="Drive Type *"
              setSelected={(val) => setSelected(val)}
              data={data}
              save="value"
              boxStyles={{ borderColor: 'white' }}
              style={{ color: "blue" }}
              inputStyles={{ color: "#23A29F" }}
              dropdownStyles={{ borderColor: 'white' }}
              dropdownTextStyles={{ color: "#23A29F" }}
            />
          </View>

          <View style={[styles.dropdown]}>
            <SelectList
              placeholder="Odometer *"
              setSelected={(val) => setSelected(val)}
              data={data}
              save="value"
              boxStyles={{ borderColor: 'white' }}
              style={{ color: "blue" }}
              inputStyles={{ color: "#23A29F" }}
              dropdownStyles={{ borderColor: 'white' }}
              dropdownTextStyles={{ color: "#23A29F" }}
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
              <TouchableOpacity onPress={() => navigation.navigate('CreateApplicationDocScreen')}>
                <Text style={styles.buttonText}>Next</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
          </ScrollView>
        </SafeAreaView>


        <StatusBar style="auto" />
      

    </View>

  );
};
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

  formContainer: {
    paddingHorizontal: 20,
    borderRadius: 10,
    width: "100%",
    marginTop: 143,
  },

  label: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 5,
  },

  input: {
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 10,
  },

  dropdown: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,

  },

  usernameInput: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: "100%",
  },

  createapplicationrowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    width: 357,
  },

  smallInput: {
    flex: 1,
    marginRight: 5,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    // marginTop: 20,
  },

  button: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
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
    paddingHorizontal: 22,
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

  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingTop: 20,
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
    left: -20,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 80,
  },

  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  bottomText1: {
    color: "#fff",
    marginRight: 10,
  },

  bottomText2: {
    color: "#fff",
    marginRight: 1,
  },

  carIcon1: {},
  carIcon2: {
    marginRight: 15,
  },

  backgroundColorWrapper: {
    backgroundColor: "#E5E5E5",
  },

  backgroundColorWrapper1: {
    backgroundColor: "#E5E5E5",
    padding: 8,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 0,
    width: 45,
  },

  backgroundColorWrapper2: {
    backgroundColor: "#FFFFFF",
    padding: 8,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 10,
    width: 45,
  },

  dropDownListStyle: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
  },
});

export default CreateApplicationMain;