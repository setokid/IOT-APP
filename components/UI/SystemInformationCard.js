import { View, Text, StyleSheet, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ScaledSheet } from "react-native-size-matters";

const deviceWidth = Dimensions.get("window").width;

function CustomCard({
  color1,
  color2,
  color3,
  color4,
  iconColor,
  iconName,
  text,
  data,
}) {
  return (
    <View style={styles.box}>
      <LinearGradient
        style={{ borderRadius: 20 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={[color1, color2, color3, color4]}
      >
        <View style={styles.boxContainer}>
          <View style={styles.icon}>
            <MaterialCommunityIcons
              name={iconName}
              size={25}
              color={iconColor}
            />
          </View>
          <Text style={styles.text}>{text}</Text>
          {data == "" ? (
            <Text style={styles.data}>0</Text>
          ) : (
            <Text style={styles.data}>{data}</Text>
          )}
        </View>
      </LinearGradient>
    </View>
  );
}

export default CustomCard;

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
    fontSize: deviceWidth < 400 ? "16@s" : "18@ms",
    color: "black",
  },
  data: {
    paddingTop: deviceWidth < 380 ? "0.5@s" : "15@s",
    fontSize: deviceWidth < 380 ? 26 : 30,
    fontWeight: "bold",
  },
});
