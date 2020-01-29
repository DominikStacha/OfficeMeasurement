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
    private formBuilder: FormBuilder,
    private snackService: SnackService,
    private sensorService: SensorService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.form = this.createForm();
  }

  createForm(): FormGroup {
    return this.formBuilder.group({
      name: ['', Validators.required],
      description: [''],
      measurementInterval: [300000]
    });
  }

  save(): void {
    if (this.form.invalid) {
      this.snackService.open('The form is not valid.');
      return;
    }

    this.sensorService.create(this.form.value).subscribe((createdSensor) => {
      this.snackService.open('The sensor was successfully created.');
      this.router.navigate(['sensor', createdSensor.id]);
    })
  }
}
