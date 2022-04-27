import { View, Text, StyleSheet } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";

import {
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

function CustomDrawer(props) {
  return (
    <LinearGradient
      colors={["#dbf26e", "#61fa74", "#1cfdd6"]}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
        <View style={styles.headerContainer}>
          <MaterialCommunityIcons name="leaf" size={24} color="black" />
          <Text style={styles.headerText}>Truy xuất nguồn gốc</Text>
        </View>
        <View style={{ flex: 1 }}>
          {/* <DrawerItem
            label="Dashboard"
            onPress={() => props.navigation.navigate("Dashboard")}
            icon={({ size, color }) => (
              <AntDesign name="dashboard" color={color} size={18} />
            )}
            labelStyle={{ marginLeft: -16 }}
          />
          <DrawerItem
            label="Device"
            onPress={() => props.navigation.navigate("Device")}
            icon={({ size, color }) => (
              <MaterialIcons name="devices" size={18} color={color} />
            )}
            labelStyle={{ marginLeft: -16 }}
          /> */}
          <DrawerItemList {...props} />
        </View>
        <View>
          <DrawerItem
            label="Logout"
            onPress={() => alert("Are you sure to logout?")}
            icon={({ size, color }) => (
              <AntDesign name="logout" size={14} color={color} />
            )}
            labelStyle={{ marginLeft: -20 }}
          />
        </View>
      </DrawerContentScrollView>
    </LinearGradient>
  );
}

export default CustomDrawer;

const styles = StyleSheet.create({
  headerContainer: {
    padding: 6,
    margin: 6,
    flexDirection: "row",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 4,
    color: "black",
  },
});
