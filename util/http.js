import axios from "axios";

const BACKEND_URL = "http://103.81.84.231:4000/tx";

export async function fetchAllSensorInChain() {
  const responseData = await axios.post(BACKEND_URL, {
    orgMSP: "farm2MSP",
    userId: "sam1",
    channelName: "mychannel",
    chaincodeName: "iot-fabric",
    data: {
      function: "allsensorinchain",
    },
  });
  return responseData.data;
}

export async function fetchAllSensorBelongToFarm() {
  const responseData = await axios.post(BACKEND_URL, {
    orgMSP: "farm2MSP",
    userId: "sam1",
    channelName: "mychannel",
    chaincodeName: "iot-fabric",
    data: {
      function: "allsensorbelongtofarm",
    },
  });
  return responseData.data;
}

export async function fetchSensorData(sensorid, date) {
  const responseData = await axios.post(BACKEND_URL, {
    orgMSP: "farm2MSP",
    userId: "sam1",
    channelName: "mychannel",
    chaincodeName: "iot-fabric",
    data: {
      function: "getdata",
      args: sensorid + "-" + date,
    },
  });
  return responseData.data;
}

export async function fetchSensorDataByRange(sensorid, datestart, dateend)
{
  const responseData = await axios.post(BACKEND_URL, {
    orgMSP: "farm2MSP",
    userId: "sam1",
    channelName: "mychannel",
    chaincodeName: "iot-fabric",
    data: {
      function: "getCsByTimeRange",
      start: datestart,
      end: dateend,
      args: sensorid,
    },
  });
  return responseData.data;
}
