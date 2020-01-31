import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConstant } from '../constants/api.constant';
import { IService } from '../interfaces/IService';
import { ChartPoint } from '../models/chart-point.model';
import { SensorData } from '../models/sensor-data.model';
import { SensorPreview } from '../models/sensor-preview.model';

@Injectable()
export class MeasurementService implements IService {
  public get apiUrl() {
    return ApiConstant.measurement;
  }

  constructor(private _http: HttpClient) {

  }

  public testTemperatureData(): Observable<ChartPoint[]> {
    return this._http.get<ChartPoint[]>(this.apiUrl.testTemperatureData);
  }

  public getSensorChartData(sensorId: number, hourScope: number, limitCount?: number): Observable<SensorData> {
    let params = {
      sensorId: sensorId.toString(),
      hourScope: hourScope.toString()
    }

    if (limitCount) {
      params['limitCount'] = limitCount;
    }

    return this._http.get<SensorData>(this.apiUrl.getSensorChartData, { params: params });
  }

  public getPreviewData(hourScope: number = 24): Observable<SensorPreview[]> {
    return this._http.get<SensorPreview[]>(this.apiUrl.getPreviewData, {
      params: {
        hourScope: hourScope.toString()
      }
    });
  }
}
