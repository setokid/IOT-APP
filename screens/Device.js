import { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator ,ScrollView} from "react-native";
import DeviceCard from "../components/UI/DeviceCard";
import Title from "../components/UI/Title";
import { fetchAllSensorBelongToFarm } from "../util/http";

function Device() {
  const [sensorData, setSensorData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    let cleanup = true;
    async function getData() {
      if (cleanup) {
        let sensorinfarm = await fetchAllSensorBelongToFarm();
        setSensorData(sensorinfarm);
        setIsLoading(false);
      }
    }

    getData();

    return () => {
      cleanup = false;
    };
  }, []);

  return (
    <>
      <Title>Device List</Title>
      {isLoading ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <FlatList
          data={sensorData}
          renderItem={({ item }) => (
            <DeviceCard color={"#ffffff"} data={item} />
          )}
          //Setting the number of column
          numColumns={2}
          keyExtractor={(item, index) => index}
        />
      )}
    </>
  );
}

export default Device;
