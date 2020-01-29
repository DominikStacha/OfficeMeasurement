import { ChartPoint } from './chart-point.model';
import { Sensor } from './sensor.model';

export class SensorPreview {
  sensor: Sensor;
  lastTemperature?: number;
  lastHumidity?: number;
  lastAirPollution?: number;
  temperatureData: ChartPoint[];
}
