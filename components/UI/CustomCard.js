import { View, StyleSheet } from "react-native";

function CustomCard({ children }) {
  return <View style={styles.container}>{children}</View>;
}

export default CustomCard;

const styles = StyleSheet.create({
  container: {
    width: "96%",
    margin: "2%",
    padding: "5%",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
    backgroundColor: "white",
  },
});
