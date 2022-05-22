import { pick } from "lodash";
import moment from "moment";
import DataTable, { COL_TYPES } from "react-native-datatable-component";
import DateTimePicker from "@react-native-community/datetimepicker";

import CustomCard from "../components/UI/CustomCard";
import { useEffect, useState } from "react";
import { ActivityIndicator, Platform, ScrollView ,Text} from "react-native";
import { fetchSensorData, fetchSensorDataByRange } from "../util/http";
import Title from "../components/UI/Title";

function DeviceDetails({ route }) {
  const { data, sensorname } = route.params;

  const [dataParse, setDataParse] = useState();
  const [date, setDate] = useState(new Date());
  const [resPerDay, setResPerDay] = useState();
  const [col, setCol] = useState("Loading...");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cleanup = true;
    async function getData() {
      if (cleanup) {
        var cols = ["eco2", "humd", "ph", "tds", "temp", "tvoc"];
        var randomCol = cols[Math.floor(Math.random() * cols.length)];
        setCol(randomCol);
        var start = date.getFullYear() + '-' + ('0' + date.getMonth()).slice(-2) + '-' + date.getDate()
        var end = date.getFullYear()+ '-' + ('0'+ (date.getMonth()+1)).slice(-2)  + '-' + (date.getDate()+1)
        let sensorData = await fetchSensorDataByRange(
          data,
          start,
          end
        )
        const parseData = sensorData.map((item) => {
          delete item.Key;
          return pick(
            item.Record,
            "datecreated",
            "eco2",
            "humd",
            "ph",
            "tds",
            "temp",
            "tvoc"
          );
        });
        const finalData = parseData.map((item) => {
          return {
            ...item,
            datecreated: moment(item.datecreated).format(
              "MMMM Do YYYY, h:mm:ss a"
            ),
          };
        });
        setDataParse(finalData);

        setIsLoading(false);
      }
    }

    getData();

    return () => {
      cleanup = false;
    };
  }, []);

  useEffect(() => {
    let cleanup = true;
    async function getData() {
      if (cleanup) {
        const formatDate =
          date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
        let sensorDataPerDay = await fetchSensorData(data, formatDate);
        const parseData1 = sensorDataPerDay.map((item1) => {
          return JSON.parse(item1);
        });
        const pickData = parseData1.map((item1) => {
          return pick(
            item1,
            "datecreated",
            "eco2",
            "humd",
            "ph",
            "tds",
            "temp",
            "tvoc"
          );
        });
        const finalData1 = parseData1.map((item1) => {
          return {
            ...item1,
            datecreated: moment(item1.datecreated).format(
              "MMMM Do YYYY, h:mm:ss a"
            ),
          };
        });
        setResPerDay(finalData1);
        setIsLoading(false);
      }
    }

    getData();

    return () => {
      cleanup = false;
    };
  }, [date]);

  const onChange = (event, selectedValue) => {
    const currentDate = selectedValue || new Date();
    setDate(currentDate);
  };

  const page = Math.ceil(data.length / 5);

  return (
    <ScrollView>
      <>
        <Title>Data of {sensorname}</Title>
        <CustomCard>
          {isLoading ? (
            <ActivityIndicator size="small" color="#00ff00" />
          ) : (
            <DataTable
              data={dataParse} // list of objects
              colNames={["datecreated", col]} //List of Strings List of Objects
              noOfPages={page} //number
              backgroundColor={"white"} //Table Background Color
              doSort={true}
              colSettings={[
                { name: "datecreated", type: COL_TYPES.STRING },
                { name: col, type: COL_TYPES.INT },
              ]}
            />
          )}
        </CustomCard>
        <CustomCard>
          {Platform.OS === 'android' ? <Text>a</Text> : <DateTimePicker value={date} onChange={onChange} />}
          {isLoading ? (
            <ActivityIndicator size="small" color="#00ff00" />
          ) : (
            <DataTable
              data={resPerDay} // list of objects
              colNames={["datecreated", col]} //List of Strings List of Objects
              noOfPages={page} //number
              backgroundColor={"white"} //Table Background Color
              doSort={true}
              colSettings={[
                { name: "datecreated", type: COL_TYPES.STRING },
                { name: col, type: COL_TYPES.INT },
              ]}
            />
          )}
        </CustomCard>
      </>
    </ScrollView>
  );
}

export default DeviceDetails;
