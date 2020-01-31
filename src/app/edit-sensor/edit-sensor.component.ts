import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Sensor } from '../shared/models/sensor.model';
import { SensorService } from '../shared/services/sensor.service';
import { SnackService } from '../shared/services/snack.service';

@Component({
  selector: 'edit-sensor',
  templateUrl: './edit-sensor.component.html',
  styleUrls: ['./edit-sensor.component.scss']
})
export class EditSensorComponent implements OnInit {
  private form: FormGroup;

  sensorId: number;
  sensor: Sensor;

  constructor(
    private _formBuilder: FormBuilder,
    private _snackService: SnackService,
    private _sensorService: SensorService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {

  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      if (!params.id) {
        this._router.navigate(['']);
        return;
      }

      this.sensorId = params.id;
      this._sensorService.get(this.sensorId).subscribe(sensor => {
        this.sensor = sensor;
        this.form = this.createForm();
      });
    });
  }

  createForm(): FormGroup {
    return this._formBuilder.group({
      name: [this.sensor.name, Validators.required],
      description: [this.sensor.description],
      measurementInterval: [this.sensor.measurementInterval]
    });
  }

  save(): void {
    if (this.form.invalid) {
      this._snackService.show('Form is not valid.');
      this.form.markAllAsTouched();
      return;
    }

    this._sensorService.update({
      ...this.sensor,
      ...this.form.value
    }).subscribe((createdSensor) => {
      this._snackService.show(`Sensor ${createdSensor.name} was successfully edited.`);
    });
  }
}
