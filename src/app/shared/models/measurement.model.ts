import { Sensor } from './sensor.model';

export class Measurement {
  id: number;
  createdDate: string | Date;
  temperature: number;
  humidity: number;
  ppm?: number;
  remoteIpAdress: string;
  sensorId: number;
  sensor: Sensor;
}
