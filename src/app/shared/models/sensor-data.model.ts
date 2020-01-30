import { ChartPoint } from './chart-point.model';
import { Sensor } from './sensor.model';

export class SensorData {
  sensor: Sensor;
  lastHours: number;
  lastTemperature: number | null;
  lastHumidity: number | null;
  lastAirPollution: number | null;
  temperatureData: ChartPoint[];
  humidityData: ChartPoint[];
  airPollutionData: ChartPoint[];
}
