import { View, Text } from "react-native";
import CustomCard from "../components/CustomCard";

function Home() {
  return (
    <View style={{ flex: 1, padding: 10 }}>
      <View
        style={{
          flexWrap: "wrap",
          flexDirection: "row",
          width: "100%",
          flex: 1,
        }}
      >
        <CustomCard color1={"#ff0000"} color2={"#ff7878"} color3={"#990000"} />
        <CustomCard color1={"#5aff15"} color2={"#0bab64"} color3={"#00b712"} />
        <CustomCard color1={"#045de9"} color2={"#83eaf1"} color3={"#09c6f9"} />
        <CustomCard color1={"#ffbe0b"} color2={"#f94327"} color3={"#f42b03"} />
      </View>
    </View>
  );
}

export default Home;
