import { ChartData } from './chart-data';

export class SensorData {
  sensorId: number;
  lastHours: number;
  temperatureData: ChartData[];
  humidityData: ChartData[];
  airPollutionData: ChartData[];
}
