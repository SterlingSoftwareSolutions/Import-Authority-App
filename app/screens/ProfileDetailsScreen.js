import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    SafeAreaView,
    TextInput,
    View,
    TouchableOpacity,
    Text,
    Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import useAuth from "../auth/useAuth";
import TopUserControlBg from "../components/TopUserControlBg";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import * as Yup from "yup";
import client from "../api/client";
import { ScrollView } from "react-native-gesture-handler";
import { CDN_URL } from '@env'
import {
    Dialog,
    DialogTitle,
    DialogFooter,
    DialogButton,
} from "react-native-popup-dialog";
import * as ImagePicker from "expo-image-picker";
import mime from 'mime'

function ProfileDetailsScreen({ children }) {
    const navigation = useNavigation();
    const { user, logOut } = useAuth();
    const [showProfile, setShowProfile] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [profileActive, setProfileActive] = useState(true);
    const [applications, setApplications] = useState([]);
    const endpoint = "/profile";
    const [avatar, setAvatar] = useState(
        user.avatar ?
            { uri: CDN_URL + '/assets/avatars/' + user.avatar }
            : require("../assets/avatarplaceholder.png")
    );

    const toggleProfile = () => {
        setShowProfile(!showProfile); //true
        setProfileActive(!profileActive);
    };

    const togglePassword = () => {
        setShowPassword(!showPassword); //true
        setProfileActive(!profileActive);
    };

    const [imageSourceDialog, setImageSourceDialog] = useState(false);

    const profileButtonStyle = [
        styles.activeButton,
        {
            borderTopLeftRadius: 5,
            borderBottomLeftRadius: 5,
            backgroundColor: profileActive ? "#079BB7" : "white",
            color: profileActive ? "white" : "#079BB7",
            borderColor: profileActive ? "#079BB7" : "white",
        },
    ];

    const passwordButtonStyle = [
        styles.inactiveButton,
        {
            borderTopRightRadius: 5,
            borderBottomRightRadius: 5,
            backgroundColor: profileActive ? "white" : "#079BB7",
            color: profileActive ? "#079BB7" : "white",
            borderColor: profileActive ? "white" : "#079BB7",
        },
    ];

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
            avatar_uri = picker.assets[0].uri;

            const formData = new FormData();
            formData.append('avatar', {
                uri: avatar_uri,
                type: mime.getType(avatar_uri),
                name: avatar_uri.split("/").pop()
            });

            const api = await client(); // Call the client function to get the API client instance
            const response = await api.post("/avatar", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            if (response.ok) {
                setAvatar({ uri: avatar_uri })
            }
        }
    };

    const handleSubmit = async (values) => {
        const applicationData = {
            name: values.name,
            username: values.username,
            businessname: values.businessname,
            selectedusername: values.username,
            selectedemail: values.email,
            selectedphonenumber: values.phonenumber,
            selectedpassword: values.selectedpassword,
        };

        try {
            const api = await client(); // Call the client function to get the API client instance
            const response = await api.put(endpoint, applicationData); // Make the PUT request using the API client
            console.log("Response:", response);
            navigation.navigate("Dashboard");
        } catch (error) {
            console.log("Error:", error);
        }
    };

    return (
        <>
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
                <SafeAreaView style={styles.container}>
                    {/* User control component */}
                    <TopUserControlBg>

                    </TopUserControlBg>

                    <View>
                        <View style={styles.fullpage}>
                            <View>
                                <TouchableOpacity onPress={() => {
                                    setImageSourceDialog(true);
                                }}>
                                    <Image
                                        source={avatar}
                                        style={[
                                            styles.profileImage,
                                            showProfile && styles.profileImageCenter,
                                        ]}
                                    />
                                </TouchableOpacity>

                                {/* user details section once the user profile pic is clicked */}
                                {showProfile && (
                                    <View style={styles.profileDetails}>
                                        <View style={styles.labelsContainer}>
                                            <View style={{ flexDirection: "row" }}>
                                                <TouchableOpacity onPress={togglePassword}>
                                                    <Text style={profileButtonStyle}>PROFILE</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity onPress={togglePassword}>
                                                    <Text style={passwordButtonStyle}>PASSWORD</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>

                                        <Formik
                                            initialValues={{
                                                name: user.name,
                                                businessname: user.businessname,
                                                username: user.username,
                                                emailaddress: user.email,
                                                phonenumber: user.phone,
                                            }}
                                            onSubmit={handleSubmit}
                                            validationSchema={Yup.object().shape({
                                                name: Yup.string().required("name is required"),
                                                businessname: Yup.string().required(
                                                    "businessname is required"
                                                ),
                                                username: Yup.string().required("username is required"),
                                                emailaddress: Yup.string().required(
                                                    "emailaddress is required"
                                                ),
                                                phonenumber: Yup.string().required(
                                                    "phonenumber is required"
                                                ),
                                            })}
                                        >
                                            {({
                                                handleChange,
                                                handleSubmit,
                                                values,
                                                errors,
                                                touched,
                                            }) =>
                                                !showPassword && (
                                                    <View style={styles.formContainer}>
                                                        <TextInput
                                                            style={[styles.input, styles.usernameInput]}
                                                            value={values.name}
                                                            placeholder="Name"
                                                            placeholderTextColor="#23A29F"
                                                            color="#10bca"
                                                            onChangeText={handleChange("name")}
                                                        />
                                                        {touched.name && (
                                                            <Text style={styles.errorText}>{errors.name}</Text>
                                                        )}
                                                        <TextInput
                                                            style={[styles.input, styles.usernameInput]}
                                                            value={values.businessname}
                                                            placeholder="Business Name"
                                                            placeholderTextColor="#23A29F"
                                                            color="#10bca"
                                                            onChangeText={handleChange("businessname")}
                                                        />
                                                        {touched.businessname && (
                                                            <Text style={styles.errorText}>
                                                                {errors.businessname}
                                                            </Text>
                                                        )}
                                                        <TextInput
                                                            style={[styles.input, styles.usernameInput]}
                                                            value={values.username}
                                                            placeholder="Username"
                                                            placeholderTextColor="#23A29F"
                                                            color="#10bca"
                                                            onChangeText={handleChange("username")}
                                                        />
                                                        {touched.username && (
                                                            <Text style={styles.errorText}>
                                                                {errors.username}
                                                            </Text>
                                                        )}
                                                        <TextInput
                                                            style={[styles.input, styles.usernameInput]}
                                                            value={values.emailaddress}
                                                            placeholder="Email"
                                                            placeholderTextColor="#23A29F"
                                                            color="#10bca"
                                                            onChangeText={handleChange("emailaddress")}
                                                        />
                                                        {touched.emailaddress && (
                                                            <Text style={styles.errorText}>
                                                                {errors.emailaddress}
                                                            </Text>
                                                        )}
                                                        <TextInput
                                                            style={[styles.input, styles.usernameInput]}
                                                            value={values.phonenumber}
                                                            placeholder="Phone Number"
                                                            placeholderTextColor="#23A29F"
                                                            color="#10bca"
                                                            onChangeText={handleChange("phonenumber")}
                                                        />
                                                        {touched.phonenumber && (
                                                            <Text style={styles.errorText}>
                                                                {errors.phonenumber}
                                                            </Text>
                                                        )}
                                                        <LinearGradient
                                                            colors={["#8FBF45", "#079BB7"]}
                                                            style={[styles.buttonContainer, { marginBottom: 10 }]}
                                                            start={{ x: 0.5, y: 0.5 }}
                                                            end={{ x: 1, y: 1 }}
                                                        >
                                                            <TouchableOpacity
                                                                style={styles.buttonContainer}
                                                                onPress={handleSubmit}
                                                            >
                                                                <Text style={styles.buttonText}>UPDATE</Text>
                                                            </TouchableOpacity>
                                                        </LinearGradient>


                                                        <LinearGradient
                                                            colors={["#8FBF45", "#079BB7"]}
                                                            style={[styles.buttonContainer, { marginBottom: 10 }]}
                                                            start={{ x: 0.5, y: 0.5 }}
                                                            end={{ x: 1, y: 1 }}
                                                        >
                                                            <TouchableOpacity
                                                                style={styles.buttonContainer}
                                                                onPress={logOut}
                                                            >
                                                                <Text style={styles.buttonText}>LOGOUT</Text>
                                                            </TouchableOpacity>
                                                        </LinearGradient>

                                                    </View>
                                                )
                                            }
                                        </Formik>

                                        <Formik
                                            initialValues={{
                                                password: user.password,
                                                newpassword: user.newpassword,
                                                confirmpassword: user.confirmpassword,
                                            }}
                                            onSubmit={handleSubmit}
                                            validationSchema={Yup.object().shape({
                                                password: Yup.string()
                                                    .required("Current password is required")
                                                    .min(8, "Must be at least 8 characters"),
                                                newpassword: Yup.string()
                                                    .required("New password is required")
                                                    .min(8, "Must be at least 8 characters"),
                                                confirmpassword: Yup.string()
                                                    .required("Confirm password is required")
                                                    .oneOf(
                                                        [Yup.ref("newpassword"), null],
                                                        "Passwords must match"
                                                    )
                                                    .min(8, " Must be at least 8 characters"),
                                            })}
                                        >
                                            {({
                                                handleChange,
                                                handleSubmit,
                                                values,
                                                errors,
                                                touched,
                                            }) =>
                                                showPassword && (
                                                    <View style={styles.formContainer}>
                                                        <TextInput
                                                            style={[styles.input, styles.usernameInput]}
                                                            value={values.password}
                                                            placeholder="Password"
                                                            placeholderTextColor="#23A29F"
                                                            color="#10bca"
                                                            onChangeText={handleChange("password")}
                                                            secureTextEntry={true}
                                                        />
                                                        {touched.password && (
                                                            <Text style={styles.errorText}>
                                                                {errors.password}
                                                            </Text>
                                                        )}

                                                        <TextInput
                                                            style={[styles.input, styles.usernameInput]}
                                                            value={values.newpassword}
                                                            placeholder="New Password"
                                                            placeholderTextColor="#23A29F"
                                                            color="#10bca"
                                                            onChangeText={handleChange("newpassword")}
                                                            secureTextEntry={true}
                                                        />
                                                        {touched.newpassword && (
                                                            <Text style={styles.errorText}>
                                                                {errors.newpassword}
                                                            </Text>
                                                        )}

                                                        <TextInput
                                                            style={[styles.input, styles.usernameInput]}
                                                            value={values.confirmpassword}
                                                            placeholder="Confirm Password"
                                                            placeholderTextColor="#23A29F"
                                                            color="#10bca"
                                                            onChangeText={handleChange("confirmpassword")}
                                                        />
                                                        {touched.confirmpassword && (
                                                            <Text style={styles.errorText}>
                                                                {errors.confirmpassword}
                                                            </Text>
                                                        )}
                                                        <View style={{ marginTop: 15 }}>
                                                            <LinearGradient
                                                                colors={["#8FBF45", "#079BB7"]}
                                                                style={[styles.buttonContainer, { marginBottom: 10 }]}
                                                                start={{ x: 0.5, y: 0.5 }}
                                                                end={{ x: 1, y: 1 }}
                                                            >
                                                                <TouchableOpacity
                                                                    style={styles.buttonContainer}
                                                                    onPress={handleSubmit}
                                                                >
                                                                    <Text style={styles.buttonText}>UPDATE</Text>
                                                                </TouchableOpacity>
                                                            </LinearGradient>



                                                            <LinearGradient
                                                                colors={["#8FBF45", "#079BB7"]}
                                                                style={[styles.buttonContainer, { marginBottom: 10 }]}
                                                                start={{ x: 0.5, y: 0.5 }}
                                                                end={{ x: 1, y: 1 }}
                                                            >
                                                                <TouchableOpacity
                                                                    style={styles.buttonContainer}
                                                                    onPress={logOut}
                                                                >
                                                                    <Text style={styles.buttonText}>LOGOUT</Text>
                                                                </TouchableOpacity>
                                                            </LinearGradient>

                                                        </View>
                                                    </View>
                                                )
                                            }
                                        </Formik>
                                    </View>
                                )}
                            </View>
                        </View>
                    </View>
                </SafeAreaView>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        backgroundColor: "#DDF4E9",
        height: 780

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
    iconStyle: {
        marginLeft: 10,
        width: 60,
        height: 60,
        borderRadius: 30,

    },
    profileImageCenter: {
        alignSelf: "center",
        width: "50%",
        height: 100,
        width: 100,
        borderRadius: 50,
        marginTop: 20
    },

    profileDetails: {
        paddingTop: 20,
        borderRadius: 10,
    },
    labelsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
        alignSelf: "center",
    },
    formContainer: {
        borderRadius: 10,
        width: "150%",
        alignItems: 'center',
        alignSelf: "center",
    },
    input: {
        color: "#fff",
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginBottom: 10,
    },
    usernameInput: {
        backgroundColor: "#F1FAF6",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        width: "100%"
    },
    buttonContainer: {
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 15,
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        width: 150,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",

    },
    activeButton: {
        backgroundColor: "#079BB7",
        color: "white",
        borderWidth: 1,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderColor: "#079BB7",
    },
    inactiveButton: {
        backgroundColor: "white",
        color: "#079BB7",
        borderWidth: 1,
        borderColor: "#fff",
        paddingVertical: 5,
        paddingHorizontal: 10,
    },

    fullpage: {
        alignItems: 'center',

    }
});

export default ProfileDetailsScreen;
