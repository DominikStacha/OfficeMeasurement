
export const ApiUrl = "http://localhost:7000/api/";

export const ApiConstant = {
  measurement: {
    testTemperatureData: ApiUrl + "Measurement/TestTemperatureData",
  },

  sensor: {
    create: ApiUrl + "Sensor/Create",
    update: ApiUrl + "Sensor/Update",
  },

  chartData: {
    getLastHoursForSensor: ApiUrl + "Chart/GetData",
  }
}
