import React from "react";
import { LinearGradient, StyleSheet } from "expo-linear-gradient";

function CustomBackground({ colors, children }) {
  return (
    <LinearGradient
      colors={colors}
      style={styles.container}
      start={{ x: 0.5, y: 0.5 }}
      end={{ x: 1, y: 1 }}
    >
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
});

export default CustomBackground;
