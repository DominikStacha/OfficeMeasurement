import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'new-sensor',
  templateUrl: './new-sensor.component.html',
  styleUrls: ['./new-sensor.component.scss']
})
export class NewSensorComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
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


}
