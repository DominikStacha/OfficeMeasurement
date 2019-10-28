import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConstant } from '../constants/api.constant';
import { IService } from '../models/IService';
import { SensorData } from '../models/sensor-data';

@Injectable()
export class ChartDataService implements IService {
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
