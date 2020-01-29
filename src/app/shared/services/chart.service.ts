import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConstant } from '../constants/api.constant';
import { IService } from '../interfaces/IService';
import { SensorData } from '../models/sensor-data.model';

@Injectable()
export class ChartService implements IService {
  public get apiUrl() {
    return ApiConstant.chartData;
  }

  constructor(private http: HttpClient) {

  }

  public getLastHoursForSensor(sensorId: number, lastHours: number, limitCount?: number): Observable<SensorData> {
    let params = {
      sensorId: sensorId.toString(),
      lastHours: lastHours.toString()
    }

    if (limitCount) {
      params['limitCount'] = limitCount;
    }

    return this.http.get<SensorData>(this.apiUrl.getLastHoursForSensor, { params: params });
  }
}
