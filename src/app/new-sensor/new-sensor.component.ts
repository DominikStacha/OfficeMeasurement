import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SensorService } from '../shared/services/sensor.service';
import { SnackService } from '../shared/services/snack.service';

@Component({
  selector: 'new-sensor',
  templateUrl: './new-sensor.component.html',
  styleUrls: ['./new-sensor.component.scss']
})
export class NewSensorComponent implements OnInit {
  form: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _snackService: SnackService,
    private _sensorService: SensorService,
    private _router: Router
  ) {

  }

  ngOnInit(): void {
    this.form = this.createForm();
  }

  createForm(): FormGroup {
    return this._formBuilder.group({
      name: ['', Validators.required],
      description: [''],
      measurementInterval: [300000]
    });
  }

  save(): void {
    if (this.form.invalid) {
      this._snackService.show('Form is not valid.');
      this.form.markAllAsTouched();
      return;
    }

    this._sensorService.add(this.form.value).subscribe((createdSensor) => {
      this._snackService.show(`Sensor ${createdSensor.name} was successfully created.`);
      this._router.navigate(['sensor', createdSensor.id]);
    });
  }
}
