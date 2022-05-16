import { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import DeviceCard from "../components/UI/DeviceCard";
import Title from "../components/UI/Title";
import { sensordata } from "../store/dummydata";
import { fetchAllSensorBelongToFarm } from "../util/http";

function Device() {
  const [sensorData, setSensorData] = useState();
  useEffect(() => {
    let cleanup = true;
    async function getData() {
      if (cleanup) {
        let sensorinfarm = await fetchAllSensorBelongToFarm();
        setSensorData(sensorinfarm);
      }
    }

    getData();

    return () => {
      cleanup = false;
    };
  }, []);
  return (
    <View style={{ height: "100%" }}>
      <Title>Device List</Title>
      <FlatList
        data={sensorData}
        renderItem={({ item }) => <DeviceCard color={"#ffffff"} data={item} />}
        //Setting the number of column
        numColumns={2}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}

export default Device;
