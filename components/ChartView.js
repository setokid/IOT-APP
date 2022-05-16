import { useEffect } from "react";
import { View } from "react-native";
import { humb, temp, eco2, ph, tds, tvoc } from "../store/dummydata";

import Charts from "./UI/Charts";
import CustomCard from "./UI/CustomCard";

function ChartView() {
  return (
    <>
      <CustomCard>
        <Charts data={humb} title={"Humb chart"} />
      </CustomCard>
      <CustomCard>
        <Charts data={temp} title={"temp chart"} />
      </CustomCard>
      <CustomCard>
        <Charts data={eco2} title={"Eco2 chart"} />
      </CustomCard>
      <CustomCard>
        <Charts data={ph} title={"Ph chart"} />
      </CustomCard>
      <CustomCard>
        <Charts data={tds} title={"Tds chart"} />
      </CustomCard>
      <CustomCard>
        <Charts data={tvoc} title={"Tvoc chart"} />
      </CustomCard>
    </>
  );
}

export default ChartView;
