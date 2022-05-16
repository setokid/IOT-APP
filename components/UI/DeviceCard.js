import { useState } from "react";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

import { useNavigation } from "@react-navigation/native";

const deviceWidth = Dimensions.get("window").width;

function DeviceCard({ color, data }) {
  const navigation = useNavigation();

  const [sensor, setSensor] = useState(data.Record);
  return (
    <View style={styles.box}>
      <TouchableOpacity
        style={{ borderRadius: 20, backgroundColor: color }}
        onPress={() => navigation.navigate("DeviceDetails", { data: data.Key })}
      >
        <View style={styles.boxContainer}>
          <Text style={styles.data}>Deivce name: {sensor.namesensor}</Text>
          {data != "" ? (
            <Text style={styles.text}>Type: {sensor.type}</Text>
          ) : (
            <Text style={styles.data}>Type: ....</Text>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default DeviceCard;

const styles = ScaledSheet.create({
  box: {
    width: "46%",
    margin: "2%",
    borderRadius: 20,
    aspectRatio: 1,
    height: "46%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  },
  boxContainer: {
    width: "100%",
    height: "100%",
    padding: "15%",
  },
  icon: {
    backgroundColor: "white",
    width: "35@s",
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 160,
  },
  text: {
    paddingTop: deviceWidth < 380 ? "10@s" : "15@s",
    fontSize: deviceWidth < 400 ? "14@s" : "16@ms",
    color: "black",
  },
  data: {
    paddingTop: deviceWidth < 380 ? "10@s" : "15@s",
    fontSize: deviceWidth < 380 ? 16 : 18,
    fontWeight: "bold",
  },
});
