import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../config/colors";

function CustomButton({ title, onPress, style }) {
  return (
    <LinearGradient
      colors={[colors.primary, colors.secondary]}
      style={[styles.buttonContainer, style]}
      start={{ x: 0.1, y: 0.5 }}
      end={{ x: 1, y: 1 }}
    >
      <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: "50%",
    height: 40,
    borderRadius: 15,
    marginTop: 15,
    alignItems: "center",
    alignSelf: "center",
  },
  buttonStyle: {
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default CustomButton;
