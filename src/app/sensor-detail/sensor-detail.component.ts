import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ChartScopeInterval } from '../shared/constants/chart-scope-interval.constant';
import { SensorData } from '../shared/models/sensor-data.model';
import { MeasurementService } from '../shared/services/measurement.service';

@Component({
  selector: 'app-sensor-detail',
  templateUrl: './sensor-detail.component.html',
  styleUrls: ['./sensor-detail.component.scss']
})
export class SensorDetailComponent implements OnInit {
  chartScopeIntervals: { key: number, value: string }[];
  selectedIntervalScope: number = ChartScopeInterval.W1;
  chartScopeFormControl = new FormControl(this.selectedIntervalScope);

  sensorId: number;
  sensorData: SensorData;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _measurementService: MeasurementService
  ) {
    this.chartScopeIntervals = Object.keys(ChartScopeInterval).map(key => {
      return {
        key: ChartScopeInterval[key],
        value: key
      }
    });
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      if (!params.id) {
        this._router.navigate(['']);
        return;
      }

      this.sensorId = params.id;

      this._measurementService.getSensorChartData(this.sensorId, this.selectedIntervalScope).subscribe(sensorData => {
        this.sensorData = sensorData;
      });
    });

    this.chartScopeFormControl.valueChanges.subscribe(value => {
      this.selectedIntervalScope = value;

      this._measurementService.getSensorChartData(this.sensorId, this.selectedIntervalScope).subscribe(sensorData => {
        this.sensorData = sensorData;
      });
    })
  }

  edit(): void {
    this._router.navigate(['edit-sensor', this.sensorId]);
  }
}
