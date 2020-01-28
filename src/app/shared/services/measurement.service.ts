import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConstant } from '../constants/api.constant';
import { ChartPoint } from '../models/chart-point';
import { IService } from '../interfaces/IService';

@Injectable()
export class MeasurementService implements IService {
  public get apiUrl() {
    return ApiConstant.measurement;
  }

  constructor(private http: HttpClient) {

  }

  public testTemperatureData(): Observable<ChartPoint[]> {
    return this.http.get<ChartPoint[]>(this.apiUrl.testTemperatureData);
  }
}
