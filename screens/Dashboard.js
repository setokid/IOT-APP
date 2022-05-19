import { useEffect, useState } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import ChartView from "../components/ChartView";
import DataView from "../components/DataView";

import SystemInformation from "../components/SystemInformation";
import Title from "../components/UI/Title";

import {
  fetchAllSensorBelongToFarm,
  fetchAllSensorInChain,
} from "../util/http";

function Home() {
  const [user, setUser] = useState("");
  const [device, setDevice] = useState("");
  const [defaultSensor, setDefaultSensor] = useState("");
  const [defaultSensorId, setDefaultSensorId] = useState("");
  useEffect(() => {
    let cleanup = true;
    async function getData() {
      if (cleanup) {
        let sensorinchain = await fetchAllSensorInChain();
        setUser(sensorinchain.length);
        let sensorinfarm = await fetchAllSensorBelongToFarm();
        setDevice(sensorinfarm.length);
        setDefaultSensor(sensorinfarm[0].Record);
        setDefaultSensorId(sensorinfarm[0].Key);
      }
    }

    getData();

    return () => {
      cleanup = false;
    };
  }, []);

  return (
    <ScrollView style={styles.rootContainer}>
      <Title>Hello Dũng!</Title>
      <SystemInformation device={device} user={user} />
      <Title>Data from device</Title>
      <DataView sensordata={defaultSensor} sensorid={defaultSensorId} />
      <ChartView sensorid={defaultSensorId} />
    </ScrollView>
  );
}

export default Home;

const styles = StyleSheet.create({
  rootContainer: { height: 2000, padding: 10 },
});
