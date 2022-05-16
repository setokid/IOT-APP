import { useEffect, useState } from "react";
import { View, Text, Pressable } from "react-native";

import { fetchSensorData } from "../util/http";

import { useNavigation } from "@react-navigation/native";

import CustomCard from "./UI/CustomCard";
import Datatable from "./UI/DataTable";

function DataView({ sensordata, sensorid }) {
  const [resData, setResData] = useState();
  const navigation = useNavigation();
  useEffect(() => {
    let cleanup = true;
    async function getData() {
      if (cleanup && sensorid != "") {
        let ressensordata = await fetchSensorData(sensorid, "2022-4");
        const finalData = ressensordata.map((item) => {
          return JSON.parse(item);
        });
        setResData(finalData);
      }
    }

    getData();

    return () => {
      cleanup = false;
    };
  }, [sensorid == ""]);

  return (
    <CustomCard>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text>
          SensorName: {sensordata === undefined ? "" : sensordata.namesensor}
        </Text>
        <Pressable onPress={() => navigation.navigate("Device")}>
          <Text>View All Sensor</Text>
        </Pressable>
      </View>
      {resData === undefined ? <View></View> : <Datatable data={resData} />}
    </CustomCard>
  );
}

export default DataView;
