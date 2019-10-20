
export const ApiUrl = "http://localhost:7000/api/";

export const ApiConstants = {
  measurement: {
    getRange: ApiUrl + "Measurement/GetRange",
    testTemperatureData: ApiUrl + "Measurement/TestTemperatureData",
  },

  sensor: {
    create: ApiUrl + "Sensor/Create",
    update: ApiUrl + "Sensor/Update",
  }
}
