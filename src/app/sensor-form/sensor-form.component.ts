import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'sensor-form',
  templateUrl: './sensor-form.component.html',
  styleUrls: ['./sensor-form.component.scss']
})
export class SensorFormComponent {
  @Input() form: FormGroup;

  constructor() { }


}
