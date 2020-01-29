import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConstant } from '../constants/api.constant';
import { IService } from '../interfaces/IService';
import { Sensor } from '../models/sensor.model';

@Injectable()
export class SensorService implements IService {
  public get apiUrl() {
    return ApiConstant.sensor;
  }

  constructor(private _http: HttpClient) {

  }

  public add(sensor: Sensor): Observable<Sensor> {
    return this._http.post<Sensor>(this.apiUrl.add, sensor);
  }

  public update(sensor: Sensor): Observable<Sensor> {
    return this._http.put<Sensor>(this.apiUrl.update, sensor);
  }
}
