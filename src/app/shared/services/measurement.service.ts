import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiConstants } from '../constants/api.constants';
import { Measurement } from '../models/measurement';
import { IService } from './IService';

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
}
