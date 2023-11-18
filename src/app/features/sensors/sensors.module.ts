import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeSensorsComponent } from './pages/home-sensors/home-sensors.component';
import {SensorsRoutingModule } from './sensors-routing.module';
import { NebularModule } from 'src/app/nebular/nebular.module';
import { CardSensorComponent } from './components/card-sensor/card-sensor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewSensorComponent } from './pages/view-sensor/view-sensor.component';
import { ChartSensorComponent } from './components/chart-sensor/chart-sensor.component';
import { SharedModule } from 'src/app/shared/shares.module';



@NgModule({
  declarations: [
    HomeSensorsComponent,
    CardSensorComponent,
    ViewSensorComponent,
    ChartSensorComponent
  ],
  imports: [
    CommonModule,
    SensorsRoutingModule,
    NebularModule,
    ReactiveFormsModule,
    SharedModule

  ]
})
export class SensorsModule { }
