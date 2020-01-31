
export const ApiUrl = "http://localhost:7000/api/";

export const ApiConstant = {
  measurement: {
    testTemperatureData: ApiUrl + "Measurement/TestTemperatureData",
    getSensorChartData: ApiUrl + "Measurement/GetSensorChartData",
    getPreviewData: ApiUrl + "Measurement/GetPreviewData",
  },

  sensor: {
    get: ApiUrl + "Sensor",
    add: ApiUrl + "Sensor/Add",
    update: ApiUrl + "Sensor/Update",
  },
}
