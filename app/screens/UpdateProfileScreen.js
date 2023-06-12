import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../config/colors";
import useAuth from "../auth/useAuth";

function UpdateProfileScreen({ navigation }) {
  const { user, logOut } = useAuth();

  // const handleLogout = () => {
  //   setUser(null);
  //   authstorage.removeToken();
  // };

  return (
    <LinearGradient
      colors={[colors.secondary, colors.primary]}
      style={styles.container}
    >
      <ScrollView>
        <SafeAreaView style={[styles.safeArea]}>
          <View style={{ ...styles.circleContainer, marginBottom: 150 }}>
            <View style={styles.labelsContainer}>
              <TouchableOpacity style={styles.button} onPress={() => { }}>
                <Text style={styles.buttonProfile}>PROFILE</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => { }}>
                <Text style={styles.buttonPassword}>PASSWORD</Text>
              </TouchableOpacity>
            </View>
            <Image
              source={require("../assets/user.jpg")}
              style={[styles.circleImage, { marginBottom: -200 }]}
            />
          </View>

          <View style={styles.formContainer}>
            <TextInput
              style={[styles.input, styles.usernameInput]}
              placeholder={user.name}
              placeholderTextColor="#23A29F"
              color="#10bca"
            />
            <TextInput
              style={[styles.input, styles.usernameInput]}
              placeholder={user.businessname}
              placeholderTextColor="#23A29F"
              color="#10bca"
            />
            <TextInput
              style={[styles.input, styles.usernameInput]}
              placeholder={user.username}
              placeholderTextColor="#23A29F"
              color="#10bca"
            />
            <TextInput
              style={[styles.input, styles.usernameInput]}
              placeholder={user.email}
              placeholderTextColor="#23A29F"
              color="#10bca"
            />
            <TextInput
              style={[styles.input, styles.usernameInput]}
              placeholder={user.phone}
              placeholderTextColor="#23A29F"
              color="#10bca"
            />

            <TouchableOpacity
              style={{ ...styles.buttonContainer, marginBottom: 10 }}
              onPress={() => { }}
            >
              <Text style={styles.buttonText}>UPDATE</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ ...styles.buttonContainer, marginBottom: 20 }}
              onPress={() => logOut()}
            >
              <Text style={styles.buttonText}>LOGOUT</Text>
            </TouchableOpacity>
          </View>
          <StatusBar style="auto" />
        </SafeAreaView>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    maxHeight: 700,
  },
  safeArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    paddingHorizontal: 20,
    borderRadius: 10,
    width: "100%",
  },
  label: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    color: "#fff",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 10,
  },

  usernameInput: {
    backgroundColor: "#DBEEE4",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: "100%",
  },

  buttonText: {
    color: "#E5E5E5",
    fontSize: 16,
    fontWeight: "bold",
  },

  buttonContainer: {
    alignSelf: "center",
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 120,
  },

  circleContainer: {

    marginBottom: 200,
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  circleImage: {
    width: 120,
    height: 120,
    borderRadius: 40,
  },

  labelsContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 10,
  },

  label: {
    marginLeft: 15,
  },

  buttonPassword: {
    alignSelf: "flex-start",
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#fff",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: -44,
    color: "#079BB7",
    backgroundColor: "#FFF",
  },

  buttonProfile: {
    alignSelf: "flex-start",
    backgroundColor: "#079BB7",
    borderWidth: 1,
    borderColor: "#079BB7",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 0,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: -1,
    color: "#fff",
  },
});

export default UpdateProfileScreen;
