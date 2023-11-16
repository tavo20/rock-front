import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeSensorsComponent } from './pages/home-sensors/home-sensors.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home-sensors',
        component: HomeSensorsComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SensorsRoutingModule { }
