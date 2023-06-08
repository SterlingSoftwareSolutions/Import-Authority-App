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
  Switch,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import useAuth from "../auth/useAuth";
import ProgressView from "../components/ProgressView";
import TopUserControlBg from "../components/TopUserControlBg";
import { useNavigation } from "@react-navigation/native";

function Dashboard() {
  const navigation = useNavigation();
  const { user } = useAuth();

  return (
    <SafeAreaView style={styles.container}>
      {/* User control component */}
      <TopUserControlBg>
        <View style={{ flexDirection: "row" }}>
          <View>
            <TouchableOpacity>
            <Image
              source={require("../assets/Group1.png")}
              style={[{ width: 60, height: 60 }]}
            />
            </TouchableOpacity>
          </View>
          <View style={{ left: 20 }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "#FFF",
                marginTop: 12,
              }}
            >
              Hi {user.name} !
            </Text>
            <Text style={{ fontSize: 12, fontWeight: "bold", color: "#FFF" }}>
              Welocme to Import Authority
            </Text>
          </View>
        </View>
      </TopUserControlBg>

      {/* Progress View Component */}
      <ProgressView />

      {/* Recent Application View */}
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("CreateApplicationImage")}
          >
            <LinearGradient
              style={{
                width: 60,
                height: 60,
                marginLeft: 10,
                borderRadius: 30,
                justifyContent: "center",
                alignItems: "center",
              }}
              colors={[colors.secondary, colors.primary]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <MaterialCommunityIcons name="plus" color={"#FFF"} size={45} />
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <Image
          source={require("../assets/carpay.png")}
          style={[
            styles.dashboardicon,
            { width: 60, height: 60, borderRadius: 30 },
          ]}
        />
        <Image
          source={require("../assets/carpay2.png")}
          style={[
            styles.dashboardicon,
            { width: 60, height: 60, borderRadius: 30 },
          ]}
        />
        <Image
          source={require("../assets/carpay3.png")}
          style={[
            styles.dashboardicon,
            { width: 60, height: 60, borderRadius: 30 },
          ]}
        />
        <Image
          source={require("../assets/carpay4.png")}
          style={[
            styles.dashboardicon,
            { width: 60, height: 60, borderRadius: 30 },
          ]}
        />
      </View>

      {/* Applications Listing Container*/}
      <View
        style={{
          backgroundColor: "#DBEDD7",
          borderRadius: 10,
          width: "96%",
          height: "55%",
          marginLeft: 9,
          marginTop: 15,
        }}
      >
        <ScrollView>
          {/* Sample application listing BOX 1*/}
          <View
            style={{
              ...styles.dashboardapplication,
              borderLeftWidth: 10,
              borderStartColor: colors.pending,
            }}
          >
            <View style={{ flexDirection: "row", marginLeft: -13 }}>
              <Image
                source={require("../assets/carpay.png")}
                style={[
                  styles.dashboardboxicon,
                  {
                    width: 80,
                    height: 80,
                    borderColor: colors.pending,
                    borderRadius: 10,
                    borderWidth: 2,
                  },
                ]}
              />
              <View style={{ paddingLeft: 10 }}>
                <Text>Toyoya Supra</Text>
                <View style={{ flexDirection: "row" }}>
                  <View>
                    <Image
                      source={require("../assets/chassis.png")}
                      style={[
                        styles.dashboardicon,
                        {
                          width: 16,
                          height: 16,
                          tintColor: "#000",
                          top: 4,
                          right: 10,
                        },
                      ]}
                    />
                    <Image
                      source={require("../assets/built.png")}
                      style={[
                        styles.dashboardicon,
                        {
                          width: 16,
                          height: 16,
                          tintColor: "#000",
                          top: 6,
                          right: 10,
                        },
                      ]}
                    />
                    <Image
                      source={require("../assets/odo.png")}
                      style={[
                        styles.dashboardicon,
                        {
                          width: 16,
                          height: 16,
                          tintColor: "#000",
                          top: 9,
                          right: 10,
                        },
                      ]}
                    />
                  </View>

                  <View>
                    <View>
                      <Text>Chassis:</Text>
                      <Text>Build Date:</Text>
                      <Text>ODO:</Text>
                    </View>
                  </View>

                  <View style={{ left: 10 }}>
                    <Text>123456M</Text>
                    <Text>2016/07</Text>
                    <Text>20350</Text>
                  </View>
                </View>
              </View>
            </View>

            {/* View,Edit,Download Buttons */}
            <View style={{}}>
              <LinearGradient
                colors={["#77B859", "#2DA596"]}
                locations={[0, 1]}
                start={{ x: 0.2, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={[
                  styles.dashboardalapplicationbuttons,
                  { marginBottom: 7 },
                ]}
              >
                <TouchableOpacity>
                  <Text
                    style={{ color: "#FFF", textAlign: "center", fontSize: 12 }}
                  >
                    View
                  </Text>
                </TouchableOpacity>
              </LinearGradient>

              <LinearGradient
                colors={["#77B859", "#2DA596"]}
                locations={[0, 1]}
                start={{ x: 0.2, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={[
                  styles.dashboardalapplicationbuttons,
                  { marginBottom: 7 },
                ]}
              >
                <TouchableOpacity>
                  <Text
                    style={{ color: "#FFF", textAlign: "center", fontSize: 12 }}
                  >
                    Edit
                  </Text>
                </TouchableOpacity>
              </LinearGradient>

              <LinearGradient
                colors={["#77B859", "#2DA596"]}
                locations={[0, 1]}
                start={{ x: 0.2, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.dashboardalapplicationbuttons}
              >
                <TouchableOpacity>
                  <Text
                    style={{ color: "#FFF", textAlign: "center", fontSize: 12 }}
                  >
                    Download
                  </Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>

          {/*Sample application listing box 2 */}
          <View
            style={{
              ...styles.dashboardapplication,
              borderLeftWidth: 10,
              borderStartColor: colors.rejected,
            }}
          >
            <View style={{ flexDirection: "row", marginLeft: -13 }}>
              <Image
                source={require("../assets/carpay.png")}
                style={[
                  styles.dashboardboxicon,
                  {
                    width: 80,
                    height: 80,
                    borderColor: colors.rejected,
                    borderRadius: 10,
                    borderWidth: 2,
                  },
                ]}
              />
              <View style={{ paddingLeft: 10 }}>
                <Text>Toyoya Supra</Text>
                <View style={{ flexDirection: "row" }}>
                  <View>
                    <Image
                      source={require("../assets/chassis.png")}
                      style={[
                        styles.dashboardicon,
                        {
                          width: 16,
                          height: 16,
                          tintColor: "#000",
                          top: 4,
                          right: 10,
                        },
                      ]}
                    />
                    <Image
                      source={require("../assets/built.png")}
                      style={[
                        styles.dashboardicon,
                        {
                          width: 16,
                          height: 16,
                          tintColor: "#000",
                          top: 6,
                          right: 10,
                        },
                      ]}
                    />
                    <Image
                      source={require("../assets/odo.png")}
                      style={[
                        styles.dashboardicon,
                        {
                          width: 16,
                          height: 16,
                          tintColor: "#000",
                          top: 9,
                          right: 10,
                        },
                      ]}
                    />
                  </View>

                  <View>
                    <View>
                      <Text>Chassis:</Text>
                      <Text>Build Date:</Text>
                      <Text>ODO:</Text>
                    </View>
                  </View>

                  <View style={{ left: 10 }}>
                    <Text>123456M</Text>
                    <Text>2016/07</Text>
                    <Text>20350</Text>
                  </View>
                </View>
              </View>
            </View>

            {/* View,Edit,Download Buttons */}
            <View style={{}}>
              <LinearGradient
                colors={["#77B859", "#2DA596"]}
                locations={[0, 1]}
                start={{ x: 0.2, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={[
                  styles.dashboardalapplicationbuttons,
                  { marginBottom: 7 },
                ]}
              >
                <TouchableOpacity>
                  <Text
                    style={{ color: "#FFF", textAlign: "center", fontSize: 12 }}
                  >
                    View
                  </Text>
                </TouchableOpacity>
              </LinearGradient>

              <LinearGradient
                colors={["#77B859", "#2DA596"]}
                locations={[0, 1]}
                start={{ x: 0.2, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={[
                  styles.dashboardalapplicationbuttons,
                  { marginBottom: 7 },
                ]}
              >
                <TouchableOpacity>
                  <Text
                    style={{ color: "#FFF", textAlign: "center", fontSize: 12 }}
                  >
                    Edit
                  </Text>
                </TouchableOpacity>
              </LinearGradient>

              <LinearGradient
                colors={["#77B859", "#2DA596"]}
                locations={[0, 1]}
                start={{ x: 0.2, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.dashboardalapplicationbuttons}
              >
                <TouchableOpacity>
                  <Text
                    style={{ color: "#FFF", textAlign: "center", fontSize: 12 }}
                  >
                    Download
                  </Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>

          {/*Sample application listingbox 3 */}
          <View
            style={{
              ...styles.dashboardapplication,
              borderLeftWidth: 10,
              borderStartColor: colors.pending,
            }}
          >
            <View style={{ flexDirection: "row", marginLeft: -13 }}>
              <Image
                source={require("../assets/carpay.png")}
                style={[
                  styles.dashboardboxicon,
                  {
                    width: 80,
                    height: 80,
                    borderColor: colors.pending,
                    borderRadius: 10,
                    borderWidth: 2,
                  },
                ]}
              />
              <View style={{ paddingLeft: 10 }}>
                <Text>Toyoya Supra</Text>
                <View style={{ flexDirection: "row" }}>
                  <View>
                    <Image
                      source={require("../assets/chassis.png")}
                      style={[
                        styles.dashboardicon,
                        {
                          width: 16,
                          height: 16,
                          tintColor: "#000",
                          top: 4,
                          right: 10,
                        },
                      ]}
                    />
                    <Image
                      source={require("../assets/built.png")}
                      style={[
                        styles.dashboardicon,
                        {
                          width: 16,
                          height: 16,
                          tintColor: "#000",
                          top: 6,
                          right: 10,
                        },
                      ]}
                    />
                    <Image
                      source={require("../assets/odo.png")}
                      style={[
                        styles.dashboardicon,
                        {
                          width: 16,
                          height: 16,
                          tintColor: "#000",
                          top: 9,
                          right: 10,
                        },
                      ]}
                    />
                  </View>

                  <View>
                    <View>
                      <Text>Chassis:</Text>
                      <Text>Build Date:</Text>
                      <Text>ODO:</Text>
                    </View>
                  </View>

                  <View style={{ left: 10 }}>
                    <Text>123456M</Text>
                    <Text>2016/07</Text>
                    <Text>20350</Text>
                  </View>
                </View>
              </View>
            </View>

            {/* View,Edit,Download Buttons */}
            <View style={{}}>
              <LinearGradient
                colors={["#77B859", "#2DA596"]}
                locations={[0, 1]}
                start={{ x: 0.2, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={[
                  styles.dashboardalapplicationbuttons,
                  { marginBottom: 7 },
                ]}
              >
                <TouchableOpacity>
                  <Text
                    style={{ color: "#FFF", textAlign: "center", fontSize: 12 }}
                  >
                    View
                  </Text>
                </TouchableOpacity>
              </LinearGradient>

              <LinearGradient
                colors={["#77B859", "#2DA596"]}
                locations={[0, 1]}
                start={{ x: 0.2, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={[
                  styles.dashboardalapplicationbuttons,
                  { marginBottom: 7 },
                ]}
              >
                <TouchableOpacity>
                  <Text
                    style={{ color: "#FFF", textAlign: "center", fontSize: 12 }}
                  >
                    Edit
                  </Text>
                </TouchableOpacity>
              </LinearGradient>

              <LinearGradient
                colors={["#77B859", "#2DA596"]}
                locations={[0, 1]}
                start={{ x: 0.2, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.dashboardalapplicationbuttons}
              >
                <TouchableOpacity>
                  <Text
                    style={{ color: "#FFF", textAlign: "center", fontSize: 12 }}
                  >
                    Download
                  </Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>

          {/*Sample application listingbox 4 */}
          <View
            style={{
              ...styles.dashboardapplication,
              borderLeftWidth: 10,
              borderStartColor: colors.pending,
            }}
          >
            <View style={{ flexDirection: "row", marginLeft: -13 }}>
              <Image
                source={require("../assets/carpay.png")}
                style={[
                  styles.dashboardboxicon,
                  {
                    width: 80,
                    height: 80,
                    borderColor: colors.pending,
                    borderRadius: 10,
                    borderWidth: 2,
                  },
                ]}
              />
              <View style={{ paddingLeft: 10 }}>
                <Text>Toyoya Supra</Text>
                <View style={{ flexDirection: "row" }}>
                  <View>
                    <Image
                      source={require("../assets/chassis.png")}
                      style={[
                        styles.dashboardicon,
                        {
                          width: 16,
                          height: 16,
                          tintColor: "#000",
                          top: 4,
                          right: 10,
                        },
                      ]}
                    />
                    <Image
                      source={require("../assets/built.png")}
                      style={[
                        styles.dashboardicon,
                        {
                          width: 16,
                          height: 16,
                          tintColor: "#000",
                          top: 6,
                          right: 10,
                        },
                      ]}
                    />
                    <Image
                      source={require("../assets/odo.png")}
                      style={[
                        styles.dashboardicon,
                        {
                          width: 16,
                          height: 16,
                          tintColor: "#000",
                          top: 9,
                          right: 10,
                        },
                      ]}
                    />
                  </View>

                  <View>
                    <View>
                      <Text>Chassis:</Text>
                      <Text>Build Date:</Text>
                      <Text>ODO:</Text>
                    </View>
                  </View>

                  <View style={{ left: 10 }}>
                    <Text>123456M</Text>
                    <Text>2016/07</Text>
                    <Text>20350</Text>
                  </View>
                </View>
              </View>
            </View>

            {/* View,Edit,Download Buttons */}
            <View style={{}}>
              <LinearGradient
                colors={["#77B859", "#2DA596"]}
                locations={[0, 1]}
                start={{ x: 0.2, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={[
                  styles.dashboardalapplicationbuttons,
                  { marginBottom: 7 },
                ]}
              >
                <TouchableOpacity>
                  <Text
                    style={{ color: "#FFF", textAlign: "center", fontSize: 12 }}
                  >
                    View
                  </Text>
                </TouchableOpacity>
              </LinearGradient>

              <LinearGradient
                colors={["#77B859", "#2DA596"]}
                locations={[0, 1]}
                start={{ x: 0.2, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={[
                  styles.dashboardalapplicationbuttons,
                  { marginBottom: 7 },
                ]}
              >
                <TouchableOpacity>
                  <Text
                    style={{ color: "#FFF", textAlign: "center", fontSize: 12 }}
                  >
                    Edit
                  </Text>
                </TouchableOpacity>
              </LinearGradient>

              <LinearGradient
                colors={["#77B859", "#2DA596"]}
                locations={[0, 1]}
                start={{ x: 0.2, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.dashboardalapplicationbuttons}
              >
                <TouchableOpacity>
                  <Text
                    style={{ color: "#FFF", textAlign: "center", fontSize: 12 }}
                  >
                    Download
                  </Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#FFF",
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
  dashboardboxicon: {
    marginLeft: 10,
  },
  transactionCategory: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#555",
    marginTop: 5,
    marginBottom: 10,
  },
  dashboardalapplicationbuttons: {
    borderRadius: 4,
    width: 75,
    height: 20,
  },
  dashboardapplication: {
    flexDirection: "row",
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    width: "96%",
    paddingHorizontal: 10,
    paddingVertical: 20,
    justifyContent: "space-between",
    marginBottom: 10,
    top: 20,
    left: 8,
  },
  dashboardicon: {
    marginLeft: 10,
  },
});

export default Dashboard;
