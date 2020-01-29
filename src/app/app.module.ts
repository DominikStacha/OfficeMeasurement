import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ChartModule } from 'angular-highcharts';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material/material.module';
import { NewSensorComponent } from './new-sensor/new-sensor.component';
import { SensorDetailComponent } from './sensor-detail/sensor-detail.component';
import { SensorPreviewComponent } from './sensor-preview/sensor-preview.component';
import { ErrorInterceptor } from './shared/intercepstors/error-interceptor';
import { ProgressBarInterceptor } from './shared/intercepstors/progress-bar-interceptor';
import { MeasurementService } from './shared/services/measurement.service';
import { ProgressBarService } from './shared/services/progress-bar.service';
import { SensorService } from './shared/services/sensor.service';
import { SnackService } from './shared/services/snack.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChartComponent,
    SensorDetailComponent,
    NewSensorComponent,
    SensorPreviewComponent
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
    ChartModule,
    FlexLayoutModule,
  ],
  providers: [
    MeasurementService,
    SensorService,
    SnackService,
    ProgressBarService,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ProgressBarInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
