import { Text, View, StyleSheet, Dimensions } from "react-native";

const deviceWidth = Dimensions.get("window").width;

function Title({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

export default Title;

const styles = StyleSheet.create({
  container: {
    margin: "2%",
  },
  text: {
    fontSize: deviceWidth < 380 ? 28 : 32,
    fontWeight: "bold",
  },
});
