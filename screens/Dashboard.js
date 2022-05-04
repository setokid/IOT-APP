import { useEffect, useState } from "react";
import { StyleSheet, ScrollView } from "react-native";

import SystemInformation from "../components/SystemInformation";
import Title from "../components/UI/Title";
import { fetchData } from "../util/http";

function Home() {
  const [device, setDevice] = useState();

  useEffect(() => {
    let cleanup = true;
    async function getData() {
      if (cleanup) {
        let resdata = await fetchData();
        setDevice(resdata.length);
      }
    }

    getData();

    return () => {
      cleanup = false;
    };
  }, []);

  return (
    <ScrollView style={styles.rootContainer}>
      <Title>Chào Dũng!</Title>
      <SystemInformation device={device} />
    </ScrollView>
  );
}

export default Home;

const styles = StyleSheet.create({
  rootContainer: { flex: 1, padding: 10 },
});
