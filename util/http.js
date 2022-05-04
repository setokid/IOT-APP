import axios from "axios";

const BACKEND_URL = "http://103.183.113.108:4000/tx";

export async function fetchData() {
  const responseData = await axios.post(BACKEND_URL, {
    orgMSP: "Org1MSP",
    userId: "sam",
    channelName: "mychannel",
    chaincodeName: "iot",
    data: {
      function: "allsensorinchain",
    },
  });
  return responseData.data;
}
