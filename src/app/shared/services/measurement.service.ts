import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConstants } from '../constants/api.constants';
import { Measurement } from '../models/measurement';
import { MeasurementChartData } from '../models/measurement-chart-data';
import { IService } from './IService';

@Injectable()
export class MeasurementService implements IService {
  public get apiUrl() {
    return ApiConstants.measurement;
  }

  constructor(private http: HttpClient) {

  }

  public getRange(sensorId: number, fromDate: Date, toDate: Date): Observable<Measurement[]> {
    return this.http.get<Measurement[]>(this.apiUrl.getRange, {
      params: {
        sensorId: sensorId.toString(),
        fromDate: fromDate.toString(),
        toDate: toDate.toString()
      }
    });
  }

  public testTemperatureData(): Observable<MeasurementChartData[]> {
    return this.http.get<MeasurementChartData[]>(this.apiUrl.testTemperatureData);
  }
}
