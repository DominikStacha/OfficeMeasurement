import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewSensorComponent } from './new-sensor/new-sensor.component';
import { SensorDetailComponent } from './sensor-detail/sensor-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'sensor/:id',
    component: SensorDetailComponent
  },
  {
    path: 'new-sensor',
    component: NewSensorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
