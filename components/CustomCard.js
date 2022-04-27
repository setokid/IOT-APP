import { useState } from "react";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function CustomCard({ color1, color2, color3, color }) {
  return (
    <LinearGradient
      style={{
        width: "46%",
        margin: "2%",
        aspectRatio: 1,
        justifyContent: "center",
        alignItems: "center",
        height: 0,
      }}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={[color1, color2, color3]}
      //
    >
      <Text style={{}}>Test</Text>
    </LinearGradient>
  );
}

export default CustomCard;
