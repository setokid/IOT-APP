import { View, StyleSheet, ScrollView } from "react-native";

import SystemInformation from "../components/SystemInformation";
import Title from "../components/UI/Title";

function Home() {
  return (
    <ScrollView style={styles.rootContainer}>
      <Title>Chào Dũng!</Title>
      <SystemInformation />
    </ScrollView>
  );
}

export default Home;

const styles = StyleSheet.create({
  rootContainer: { flex: 1, padding: 10 },
});
