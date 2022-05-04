import { View, StyleSheet } from "react-native";

import CustomCard from "./UI/CustomCard";

function SystemInformation({ device }) {
  return (
    <View style={styles.container}>
      <CustomCard
        color1={"#ff0000"}
        color2={"#ff4040"}
        color3={"#ff8080"}
        color4={"#ffbfbf"}
        iconColor={"#ff0000"}
        iconName={"account-multiple"}
        text={"Người dùng"}
        data={device}
      />
      <CustomCard
        color1={"#00ff00"}
        color2={"#40ff40"}
        color3={"#80ff80"}
        color4={"#bfffbf"}
        iconColor={"#00ff00"}
        iconName={"leaf"}
        text={"Đợt gieo trồng"}
        data={0}
      />
      <CustomCard
        color1={"#1ea7db"}
        color2={"#61c1e5"}
        color3={"#a0d8ee"}
        color4={"#cfecf7"}
        iconColor={"#1ea7db"}
        iconName={"devices"}
        text={"Thiết bị"}
        data={0}
      />
      <CustomCard
        color1={"#ec6302"}
        color2={"#f4801f"}
        color3={"#ef9538"}
        color4={"#f0a050"}
        iconColor={"#ec6302"}
        iconName={"check-all"}
        text={"Thu hoạch"}
        data={0}
      />
    </View>
  );
}

export default SystemInformation;

const styles = StyleSheet.create({
  container: { flexWrap: "wrap", flexDirection: "row", width: "100%", flex: 1 },
});
