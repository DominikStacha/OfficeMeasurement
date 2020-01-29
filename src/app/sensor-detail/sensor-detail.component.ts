import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChartInterval } from '../shared/constants/chart-interval.constant';
import { SensorData } from '../shared/models/sensor-data.model';
import { MeasurementService } from '../shared/services/measurement.service';

@Component({
  selector: 'app-sensor-detail',
  templateUrl: './sensor-detail.component.html',
  styleUrls: ['./sensor-detail.component.scss']
})
export class SensorDetailComponent implements OnInit {
  sensorId: number;
  sensorData: SensorData;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _measurementService: MeasurementService
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      if (!params.id) {
        this._router.navigate(['']);
        return;
      }

      this.sensorId = params.id;

      this._measurementService.getSensorChartData(this.sensorId, ChartInterval.W1).subscribe(sensorData => {
        this.sensorData = sensorData;
      });
    })
  }

}
