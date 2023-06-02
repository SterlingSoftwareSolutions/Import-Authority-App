import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, TextInput, View, TouchableOpacity, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../config/colors';



function UpdateInformationScreen(props) {
  return (
    <LinearGradient
      colors={[colors.secondary, colors.primary]} // Set the starting and ending colors for the gradient
      style={styles.container}
    >
      <SafeAreaView>

        <View style={styles.circleContainer}>
          <View style={styles.labelsContainer}>
            <TouchableOpacity style={styles.button} onPress={() => { }}>
              <Text style={styles.buttonProfile}>PROFILE</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => { }}>
              <Text style={styles.buttonPassword}>PASSWORD</Text>
            </TouchableOpacity>
          </View>
          <Image
            source={require('../assets/Group1.png')}
            style={[styles.circleImage, {}]}
          />
        </View>


        <View style={styles.formContainer}>
          <TextInput
            style={[styles.input, styles.usernameInput]}
            placeholder="Hasindu Nimantha"
            placeholderTextColor="#23A29F"
            color="#10bca"
          />
          <TextInput
            style={[styles.input, styles.usernameInput]}
            placeholder="Import Authority"
            placeholderTextColor="#23A29F"
            color="#10bca"
          />
          <TextInput
            style={[styles.input, styles.usernameInput]}
            placeholder="hasindu_nim97"
            placeholderTextColor="#23A29F"
            color="#10bca"
          />
          <TextInput
            style={[styles.input, styles.usernameInput]}
            placeholder="hasindu@gmail.com"
            placeholderTextColor="#23A29F"
            color="#10bca"
          />
          <TextInput
            style={[styles.input, styles.usernameInput]}
            placeholder="0716049740"
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
    paddingTop: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,

  },
  safeArea: {
    alignItems: 'center',
  },
  formContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
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

  buttonText: {
    color: '#E5E5E5',
    fontSize: 16,
    fontWeight: 'bold'
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

  circleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  circleImage: {
    width: 120,
    height: 120,
    borderRadius: 40,

  },

  labelsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
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
    color: '#fff'

  },

});
export default UpdateInformationScreen;