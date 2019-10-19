
export const ApiUrl = "http://192.168.1.120/api/";

export const ApiConstants = {
  measurement: {
    getRange: ApiUrl + "Measurement/GetRange",
  },

  sensor: {
    create: ApiUrl + "Sensor/Create",
    update: ApiUrl + "Sensor/Update",
  }
}
