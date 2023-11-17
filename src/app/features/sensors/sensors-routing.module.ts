import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeSensorsComponent } from './pages/home-sensors/home-sensors.component';
import { ViewSensorComponent } from './pages/view-sensor/view-sensor.component';

const routes: Routes = [
  {
    path: '',
    // redirectTo: 'home-sensors',
    children: [
      {
        path: '',
        component: HomeSensorsComponent,
        redirectTo: 'home-sensors',
      },
      {
        path: 'home-sensors',
        component: HomeSensorsComponent,
      },
      {
        path: 'view-sensor/:id',
        component: ViewSensorComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SensorsRoutingModule { }
