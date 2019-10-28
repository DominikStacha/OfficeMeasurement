import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConstant } from '../constants/api.constant';
import { ChartData } from '../models/chart-data';
import { IService } from './IService';

@Injectable()
export class MeasurementService implements IService {
  public get apiUrl() {
    return ApiConstant.measurement;
  }

  constructor(private http: HttpClient) {

  }

  public testTemperatureData(): Observable<ChartData[]> {
    return this.http.get<ChartData[]>(this.apiUrl.testTemperatureData);
  }
}
