import { pick } from "lodash";
import { useEffect, useState } from "react";

import { Dimensions, Text, View } from "react-native";

import { LineChart } from "react-native-chart-kit";

function Charts({ title, data }) {
  //   const [data, setData] = useState();
  //   useEffect(() => {
  //     let cleanup = true;
  //     async function getData() {
  //       if (cleanup) {
  //         const finalData = defaultsensordata.map((item) => {
  //           const parse = JSON.parse(item);
  //           return pick(parse, ["datecreated", "temp"]);
  //         });
  //         console.log(finalData);
  //         setData(finalData);
  //       }
  //     }
  //     getData();

  //     return () => {
  //       cleanup = false;
  //     };
  //   }, []);

  const current = new Date();
  return (
    <View>
      <Text>{title}</Text>
      <LineChart
        data={{
          labels: [
            current.getDate() - 6,
            current.getDate() - 5,
            current.getDate() - 4,
            current.getDate() - 3,
            current.getDate() - 2,
            current.getDate() - 1,
            current.getDate(),
          ],
          datasets: [
            {
              data: data,
            },
          ],
        }}
        width={Dimensions.get("window").width - 80} // from react-native
        height={220}
        xAxisLabel={"/" + current.getMonth()}
        chartConfig={{
          backgroundColor: "#1cc910",
          backgroundGradientFrom: "#ffffff",
          backgroundGradientTo: "#ffffff",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 255) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
}

export default Charts;
