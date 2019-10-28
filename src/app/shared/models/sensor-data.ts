import { ChartPoint } from './chart-point';
import { Sensor } from './sensor';

export class SensorData {
  sensor: Sensor;
  lastHours: number;
  temperatureData: ChartPoint[];
  humidityData: ChartPoint[];
  airPollutionData: ChartPoint[];
}
