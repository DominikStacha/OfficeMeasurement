import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConstant } from '../constants/api.constant';
import { Measurement } from '../models/measurement';
import { IService } from './IService';

@Injectable()
export class ChartDataService implements IService {
  public get apiUrl() {
    return ApiConstant.chartData;
  }

  constructor(private http: HttpClient) {

  }

  public getRange(sensorId: number, lastHours: number, limitCount?: number): Observable<Measurement[]> {
    let params = {
      sensorId: sensorId.toString(),
      fromDate: lastHours.toString()
    }

    if (limitCount) {
      params['limitCount'] = limitCount;
    }

    return this.http.get<Measurement[]>(this.apiUrl.getLastHoursForSensor, { params: params });
  }
}
