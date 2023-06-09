import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ProgressBar } from "react-native-paper";
import colors from "../config/colors";
import {
  Dialog,
  DialogTitle,
  DialogFooter,
  DialogButton,
  DialogContent,
} from "react-native-popup-dialog";
import TopUserControlBg from "../components/TopUserControlBg";
import { useNavigation } from "@react-navigation/native";

const CreateApplicationImageScreen = (props) => {
  const navigation = useNavigation();
  const progress1 = 1; // Set the progress value between 0 and 1
  const progress2 = 1;
  const progress3 = 0;

  const [progressText1, setProgressText1] = React.useState("");
  const [progressText2, setProgressText2] = React.useState("");
  const [progressText3, setProgressText3] = React.useState("");

  const [images, setImages] = useState({});
  const [key, setKey] = useState(null);

  const selectImage = (imageKey) => {
    setKey(imageKey);
    setImageSourceDialog(true);
  };

  const selectImageLaunch = async (camera = true) => {
    console.log(key);
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

      console.log(images);
    }
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

  {
    /Approval Type Switch /;
  }
  const [imageSourceDialog, setImageSourceDialog] = useState(false);

  return (
    <View style={styles.container}>
      {/* Modal gallery || camera */}
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
      {/* User control Header */}
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
              color="#079BB7"
              style={styles.progressBar3}
            />
          </View>
        </View>
      </TopUserControlBg>

      {/* Image selector container */}
      <ScrollView contentContainerStyle={{ marginTop: 10, paddingBottom: 40 }}>
        <View>
          <Text style={[styles.exteriortext, { marginTop: 20 }]}>
            Exterior Images
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <TouchableOpacity
              onPress={() => {
                selectImage("img_front_right");
              }}
            >
              <View style={styles.cameraContainer}>
                <Image
                  source={require("../assets/cam.png")}
                  style={styles.cameraIcon}
                />
                <Image
                  source={{ uri: images["img_front_right"] }}
                  style={styles.imagePreview}
                />
                <Text style={styles.cameraText}>FR Corner</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                selectImage("img_rear_right");
              }}
            >
              <View style={styles.cameraContainer}>
                <Image
                  source={require("../assets/cam.png")}
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
                  source={require("../assets/cam.png")}
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
                  source={require("../assets/cam.png")}
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

          <Text style={[styles.exteriortext, { marginTop: 30 }]}>
            Interiror Images
          </Text>

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
                  source={require("../assets/cam.png")}
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
                  source={require("../assets/cam.png")}
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
                  source={require("../assets/cam.png")}
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
                  source={require("../assets/cam.png")}
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
        {/* Draft & Next Button */}
        <View style={styles.back_draft}>
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
              <TouchableOpacity onPress={() => navigation.navigate("CreateApplicationDocScreen")}>
                <Text style={styles.buttonText}>Next</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </ScrollView>
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
  back_draft: {
    paddingHorizontal: 20,
    borderRadius: 10,
    width: "100%",
    marginTop: 20,
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
  backgroundColorWrapper: {
    backgroundColor: "#E5E5E5",
  },
  exteriortext: {
    marginTop: 80,
    left: 20,
    color: "#079BB7",
  },
  cameraIcon: {
    marginTop: 10,
    borderRadius: 10,
    width: 50,
    height: 50,
  },
  cameraText: {
    marginLeft: -2,
    color: "#C9C9C9",
    fontSize: 13,
    fontWeight: "bold",
  },
  cameraContainer: {
    marginHorizontal: "auto",
    backgroundColor: "white",
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginTop: 25,
    borderRadius: 25,
    borderWidth: 1,
    width: 100,
    alignItems: "center",
    borderColor: "grey",
  },
  imagePreview: {
    position: "absolute",
    width: "150%",
    height: "120%",
    resizeMode: "cover",
    borderRadius: 20,
    zIndex: 2,
  },
});

export default CreateApplicationImageScreen;
