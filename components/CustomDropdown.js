import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

function CustomDropdown({ menuHandler }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          menuHandler(), navigation.navigate("User");
        }}
      >
        <View style={styles.itemView}>
          <Text style={styles.text}>User Info</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log("tesa")}>
        <View style={styles.itemView}>
          <Text style={styles.text}>Settings</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log("tesa")}>
        <View style={styles.itemView}>
          <Text style={styles.text}>Logout</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default CustomDropdown;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "#ffff",
    elevation: 8,
    shadowColor: "gray",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.75,
    shadowRadius: 2,
  },
  itemView: {
    padding: 15,
  },
  text: {
    fontSize: 16,
    width: 120,
  },
});
