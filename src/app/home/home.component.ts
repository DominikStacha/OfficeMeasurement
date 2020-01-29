import { Component, OnInit } from '@angular/core';
import { SensorPreview } from '../shared/models/sensor-preview.model';
import { MeasurementService } from '../shared/services/measurement.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  sensorPreviews: SensorPreview[] = [];

  constructor(
    private _measurementService: MeasurementService
  ) {

  }

  ngOnInit(): void {
    this._measurementService.getPreviewData().subscribe(sensorPreviews => this.sensorPreviews = sensorPreviews);
  }
}
