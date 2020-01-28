import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ChartModule } from 'angular-highcharts';
import { environment } from '../environments/environment';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material/material.module';
import { SensorDetailComponent } from './sensor-detail/sensor-detail.component';
import { ChartDataService } from './shared/services/chart-data.service';
import { MeasurementService } from './shared/services/measurement.service';
import { SensorService } from './shared/services/sensor.service';
import { NewSensorComponent } from './new-sensor/new-sensor.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ChartComponent,
    SensorDetailComponent,
    NewSensorComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    ChartModule
  ],
  providers: [
    MeasurementService,
    SensorService,
    ChartDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
