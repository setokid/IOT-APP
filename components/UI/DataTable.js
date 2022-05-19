import DataTable, { COL_TYPES } from "react-native-datatable-component";

function Datatable({ data }) {
  const page = Math.ceil(data.length / 5);
  return (
    <DataTable
      data={data} // list of objects
      colNames={["eco2", "humd", "ph", "tds", "temp", "tvoc"]} //List of Strings List of Objects
      noOfPages={page} //number
      backgroundColor={"white"} //Table Background Color
      doSort={true}
    />
  );
}

export default Datatable;
