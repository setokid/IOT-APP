import { pick } from "lodash";
import moment from "moment";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { fetchSensorData } from "../util/http";
import Charts from "./UI/Charts";
import CustomCard from "./UI/CustomCard";

function ChartView({ sensorid }) {
  const [isLoading, setIsLoading] = useState(false);
  const [datecreated, setDatecreated] = useState([]);
  const [humd, sethumd] = useState([]);
  const [eco2, setEco] = useState([]);
  const [ph, setPh] = useState([]);
  const [tds, setTds] = useState([]);
  const [temp, setTemp] = useState([]);
  const [tvoc, setTvoc] = useState([]);
  useEffect(() => {
    let cleanup = true;
    async function getData() {
      if (cleanup && sensorid != "") {
        let ressensordata = await fetchSensorData(sensorid, "2022-4");
        const parseData = ressensordata.map((item) => {
          return JSON.parse(item);
        });
        const pickData = parseData.map((item) => {
          return pick(
            item,
            "datecreated",
            "eco2",
            "humd",
            "ph",
            "tds",
            "temp",
            "tvoc"
          );
        });
        const formatDate = pickData.map((item) => {
          return {
            ...item,
            datecreated: moment(item.datecreated).format("MMMM Do YYYY"),
          };
        });
        const datecreated = [];
        const humd = [];
        const eco2 = [];
        const ph = [];
        const tds = [];
        const temp = [];
        const tvoc = [];
        formatDate.map((item) => {
          datecreated.push(item.datecreated);
          humd.push(item.humd);
          eco2.push(item.eco2);
          ph.push(item.ph);
          tds.push(item.tds);
          temp.push(item.temp);
          tvoc.push(item.tvoc);
        });
        setDatecreated(datecreated);
        sethumd(humd);
        setEco(eco2);
        setPh(ph);
        setTds(tds);
        setTemp(temp);
        setTvoc(tvoc);
        setIsLoading(true);
      }
    }

    getData();

    return () => {
      cleanup = false;
    };
  }, [sensorid == ""]);
  return (
    <>
      {isLoading ? (
        <CustomCard>
          <Charts data={humd} title={"Humb chart"} />
        </CustomCard>
      ) : (
        <View></View>
      )}

      {isLoading ? (
        <CustomCard>
          <Charts data={eco2} title={"Eco2 chart"} />
        </CustomCard>
      ) : (
        <View></View>
      )}

      {isLoading ? (
        <CustomCard>
          <Charts data={ph} title={"Ph chart"} />
        </CustomCard>
      ) : (
        <View></View>
      )}

      {isLoading ? (
        <CustomCard>
          <Charts data={tds} title={"Tds chart"} />
        </CustomCard>
      ) : (
        <View></View>
      )}

      {isLoading ? (
        <CustomCard>
          <Charts data={temp} title={"Temp chart"} />
        </CustomCard>
      ) : (
        <View></View>
      )}

      {isLoading ? (
        <CustomCard>
          <Charts data={tvoc} title={"Tvoc chart"} />
        </CustomCard>
      ) : (
        <View></View>
      )}
    </>
  );
}

export default ChartView;
