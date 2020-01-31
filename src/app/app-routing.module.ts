import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditSensorComponent } from './edit-sensor/edit-sensor.component';
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
  {
    path: 'edit-sensor/:id',
    component: EditSensorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
