import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConstants } from '../constants/api.constants';
import { Sensor } from '../models/sensor';
import { IService } from './IService';

@Injectable()
export class SensorService implements IService {
  public get apiUrl() {
    return ApiConstants.sensor;
  }

  constructor(private http: HttpClient) {

  }

  public create(sensor: Sensor): Observable<Sensor> {
    return this.http.post<Sensor>(this.apiUrl.create, sensor);
  }

  public update(sensor: Sensor): Observable<Sensor> {
    return this.http.put<Sensor>(this.apiUrl.update, sensor);
  }
}
