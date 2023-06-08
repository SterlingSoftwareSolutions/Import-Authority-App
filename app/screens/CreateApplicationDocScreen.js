import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, TextInput, View, TouchableOpacity, Text, Image, Switch } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ProgressBar } from 'react-native-paper';
import colors from '../config/colors';
import * as FileSystem from 'expo-file-system';
import * as DocumentPicker from 'expo-document-picker';

function CreateApplicationDocScreen(props) {
    const progress1 = 1;
    const progress2 = 1;
    const progress3 = 0;


    const x = 0.5;
    const y = 1;

    const blueColor = `rgba(128, 253, 128, ${x})`;
    const greenColor = `rgba(16, 188, 163, ${y})`;

  const [progressText1, setProgressText1] = React.useState("");
  const [progressText2, setProgressText2] = React.useState("");
  const [progressText3, setProgressText3] = React.useState("");

  const [switch1Value, setSwitch1Value] = React.useState(false);
  const [switch2Value, setSwitch2Value] = React.useState(false);

    const handleSwitch1Toggle = () => {
        setSwitch1Value((prevValue) => !prevValue);
    };

    const [docs, setDocs] = useState({})

    const selectDocs = async (key) => {

        const picker = await DocumentPicker.getDocumentAsync();
        if (!picker.canceled) {
            setDocs(docs => ({
                ...docs,
                [key]: picker.uri
            }));
        }
    };


    return (
        <View style={styles.container}>
            <LinearGradient
                colors={[blueColor, greenColor]} // Set the starting and ending colors for the gradient
                style={styles.background}
            >
                <View style={styles.header}>
                    <View style={styles.iconContainer}>
                        <TouchableOpacity onPress={() => handleNotificationPress()} style={styles.iconButton}>
                            <Image source={require('../assets/bell.png')} style={[styles.icon, { width: 24, height: 24, tintColor: '#fff' }]} />

                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleLogoutPress()} style={styles.iconButton}>
                            <Image source={require('../assets/money.png')} style={[styles.icon, { width: 24, height: 24, tintColor: '#fff' }]} />

                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleTransactionPress()} style={styles.iconButton}>
                            <Image source={require('../assets/user.png')} style={[styles.icon, { width: 24, height: 24, tintColor: '#fff' }]} />

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



        <View>
          <Text style={[styles.exteriortext, { marginTop: 60 }]}>
            Documents
          </Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <TouchableOpacity style={styles.cameraContainer}
                            onPress={() => {
                                selectDocs('doc_invoice');
                            }}>
                            <Image source={docs['doc_invoice'] ? require('../assets/doc_thumbnail.png') : require('../assets/doc_placeholder.png')} style={[styles.cameraIcon]} />
                            <Text style={styles.frText}>Invoice</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cameraContainer}
                            onPress={() => {
                                selectDocs('doc_export_certificate');
                            }}>
                            <Image source={docs['doc_export_certificate'] ? require('../assets/doc_thumbnail.png') : require('../assets/doc_placeholder.png')} style={[styles.cameraIcon]} />
                            <Text style={styles.frText}>Export Certificate</Text>
                        </TouchableOpacity>
                    </View>
                    <SafeAreaView style={{ flexDirection: 'row', marginLeft: 46 }}>
                        <TouchableOpacity style={styles.cameraContainer} onPress={() => {
                            selectDocs('doc_auction_report');
                        }}>
                            <Image source={docs['doc_auction_report'] ? require('../assets/doc_thumbnail.png') : require('../assets/doc_placeholder.png')} style={[styles.cameraIcon]} />
                            <Text style={styles.frText}>Auction Report</Text>
                        </TouchableOpacity>

                    </SafeAreaView>
                </View>

        <SafeAreaView style={styles.back_draft}>
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
              colors={["#77B859", "#2DA596"]} // Define the colors for the gradient (ash to lighter ash)
              locations={[0, 1]} // Define the gradient color stops
              start={{ x: 0.2, y: 0 }} // Define the start position (top-left)
              end={{ x: 1, y: 1 }} // Define the end position (top-right)
              style={styles.button}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("StepThreePayment")}
              >
                <Text style={styles.buttonText}>Next</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </SafeAreaView>

        <StatusBar style="auto" />
      </LinearGradient>
    </View>
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
    marginTop: 90,
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

  frText: {
    marginLeft: -2,
    color: "#C9C9C9",
    fontSize: 13,
    fontWeight: "bold",
    textAlign: "center",
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
});
export default CreateApplicationDocScreen;
