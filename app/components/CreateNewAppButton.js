import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function CreateNewAppButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <LinearGradient
        colors={[colors.primary, colors.secondary]}
        start={[0, 0.5]}
        end={[1, 0.5]}
        style={styles.gradient}
      >
        <MaterialCommunityIcons name="plus" color={colors.white} size={40} />
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: 80,
    width: 80,
  },
  gradient: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    height: 60,
    width: 60,
    bottom: 28,
  },
});

export default CreateNewAppButton;
