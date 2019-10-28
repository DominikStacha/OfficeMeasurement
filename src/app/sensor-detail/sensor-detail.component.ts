import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ChartInterval } from '../shared/constants/chart-interval.constant';
import { ChartPoint } from '../shared/models/chart-point';
import { Sensor } from '../shared/models/sensor';
import { SensorData } from '../shared/models/sensor-data';
import { ChartDataService } from '../shared/services/chart-data.service';

@Component({
  selector: 'app-sensor-detail',
  templateUrl: './sensor-detail.component.html',
  styleUrls: ['./sensor-detail.component.scss']
})
export class SensorDetailComponent implements OnInit {
  private sensorId: number;
  private sensorData: SensorData;

  sensor: Sensor;

  temperatureDataSubject: BehaviorSubject<ChartPoint[]> = new BehaviorSubject<ChartPoint[]>(null);
  humidityDataSubject: BehaviorSubject<ChartPoint[]> = new BehaviorSubject<ChartPoint[]>(null);
  airPollutionDataSubject: BehaviorSubject<ChartPoint[]> = new BehaviorSubject<ChartPoint[]>(null);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private chartDataService: ChartDataService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (!params.id) {
        this.router.navigate(['']);
        return;
      }

      this.sensorId = params.id;

      this.chartDataService.getLastHoursForSensor(this.sensorId, ChartInterval.D1).subscribe(sensorData => {
        this.sensorData = sensorData;
        this.sensor = sensorData.sensor;
        this.temperatureDataSubject.next(sensorData.temperatureData);
        this.humidityDataSubject.next(sensorData.humidityData);
        this.airPollutionDataSubject.next(sensorData.airPollutionData);
      });
    })
  }

}
