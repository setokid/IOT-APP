import DataTable, { COL_TYPES } from "react-native-datatable-component";

function Datatable({ data }) {
  const page = Math.round(data.length / 5);
  return (
    <DataTable
      data={data} // list of objects
      colNames={["eco2", "humd", "ph", "tds", "temp", "tvoc"]} //List of Strings
      colSettings={[
        { name: "eco2", type: COL_TYPES.INT },
        { name: "humd", type: COL_TYPES.INT },
        { name: "ph", type: COL_TYPES.INT },
        { name: "tds", type: COL_TYPES.INT },
        { name: "temp", type: COL_TYPES.INT },
        { name: "tvoc", type: COL_TYPES.INT },
      ]} //List of Objects
      noOfPages={page} //number
      backgroundColor={"white"} //Table Background Color
      doSort={true}
    />
  );
}

export default Datatable;
