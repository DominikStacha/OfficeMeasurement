import { ChartPoint } from './chart-point.model';
import { Sensor } from './sensor.model';

export class SensorData {
  sensor: Sensor;
  lastHours: number;
  temperatureData: ChartPoint[];
  humidityData: ChartPoint[];
  airPollutionData: ChartPoint[];
}
