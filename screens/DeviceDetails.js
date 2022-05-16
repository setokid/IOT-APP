import { View, Text } from "react-native";
import { defaultsensordata } from "../store/dummydata";
function DeviceDetails({ route }) {
  const { data } = route.params;
  console.log(data);
  var newData = defaultsensordata.filter(function (res) {
    return res.sensorid === data;
  });
  console.log(newData);
  return (
    <View>
      <Text>Chim</Text>
    </View>
  );
}

export default DeviceDetails;
