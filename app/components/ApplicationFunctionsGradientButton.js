import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const ApplicationFunctionsGradientButton = ({ text, onPress }) => {
  return (
    <LinearGradient
    colors={["#77B859", "#2DA596"]}
    locations={[0, 1]}
    start={{ x: 0.2, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={{
      borderRadius: 4,
      width: 75,
      height: 20,
      marginBottom: 7,
    }}
  >
    <TouchableOpacity onPress={onPress}>
      <Text style={{ color: "#FFF", textAlign: "center", fontSize: 12 }}>
        {text}
      </Text>
    </TouchableOpacity>
  </LinearGradient>
  );
};

export default ApplicationFunctionsGradientButton;
