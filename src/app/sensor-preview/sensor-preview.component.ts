import { Component, Input, OnInit } from '@angular/core';
import { SensorPreview } from '../shared/models/sensor-preview.model';

@Component({
  selector: 'sensor-preview',
  templateUrl: './sensor-preview.component.html',
  styleUrls: ['./sensor-preview.component.scss']
})
export class SensorPreviewComponent implements OnInit {
  preview: SensorPreview;
  @Input() set sensorPreview(preview: SensorPreview) {
    if (preview.lastTemperature == null) preview.lastTemperature = 0;
    if (preview.lastHumidity == null) preview.lastHumidity = 0;
    if (preview.lastAirPollution == null) preview.lastAirPollution = 0;
    this.preview = preview;
  };

  constructor() { }

  ngOnInit(): void {
  }

}
