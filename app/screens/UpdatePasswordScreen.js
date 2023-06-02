import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, TextInput, View, TouchableOpacity, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../config/colors';

function UpdatePasswordScreen(props) {



    return (
        <LinearGradient
            colors={[colors.secondary, colors.primary]} // Set the starting and ending colors for the gradient
            style={styles.container}
        >


            <SafeAreaView style={styles.safeArea}>
                <View style={styles.circleContainer}>
                    <View style={styles.labelsContainer}>
                        <TouchableOpacity style={styles.button} onPress={() => { }}>
                            <Text style={styles.buttonProfile}>PROFILE</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => { }}>
                            <Text style={styles.buttonPassword}>PASSWORD</Text>
                        </TouchableOpacity>
                    </View>

                </View>


                <View style={styles.formContainer}>
                    <TextInput
                        style={[styles.input, styles.usernameInput]}
                        placeholder="Password"
                        placeholderTextColor="#23A29F"
                        color="#10bca"
                    />
                    <TextInput
                        style={[styles.input, styles.usernameInput]}
                        placeholder="New Password"
                        placeholderTextColor="#23A29F"
                        color="#10bca"
                    />
                    <TextInput
                        style={[styles.input, styles.usernameInput]}
                        placeholder="Confirm Password"
                        placeholderTextColor="#23A29F"
                        color="#10bca"
                    />



                    <TouchableOpacity
                        style={{ ...styles.buttonContainer, marginBottom: 10 }}
                        onPress={() => {
                            // Handle button press action here
                        }}
                    >
                        <Text style={styles.buttonText}>UPDATE</Text>
                    </TouchableOpacity>


                    <TouchableOpacity
                        style={{ ...styles.buttonContainer, marginBottom: 20 }}
                        onPress={() => {
                            // Handle button press action here
                        }}
                    >
                        <Text style={styles.buttonText}>LOGOUT</Text>
                    </TouchableOpacity>

                </View>

                <StatusBar style="auto" />
            </SafeAreaView>
        </LinearGradient>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        maxHeight: 700,
        justifyContent: 'flex-start',
    },
    safeArea: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: '-100',
    },
    formContainer: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        width: '80%',
        borderRadius: 10,
        width: '100%'
    },
    label: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 5,

    },
    input: {
        color: '#fff',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginBottom: 10,



    },

    usernameInput: {
        backgroundColor: '#DBEEE4',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        width: '100%',
    },

    buttonContainer: {
        color: '#E5E5E5',
        fontSize: 16,

    },


    buttonContainer: {
        alignSelf: 'center',
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 10,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 120,
    },


    labelsContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 10,

    },

    label: {
        marginLeft: 15, // Adjust the value as needed for the desired gap
    },

    buttonPassword: {
        alignSelf: 'flex-start',
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#fff',
        borderTopLeftRadius: 0,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginRight: -44,
        color: '#079BB7',
        backgroundColor: '#FFF'
    },


    buttonProfile: {
        alignSelf: 'flex-start',
        backgroundColor: '#079BB7',
        borderWidth: 1,
        borderColor: '#079BB7',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 0,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginRight: -1,
        color: '#fff'

    },

    buttonText: {
        color: '#fff',
        fontWeight: 'bold'
    }

});
export default UpdatePasswordScreen;