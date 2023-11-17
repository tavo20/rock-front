import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeSensorsComponent } from './pages/home-sensors/home-sensors.component';
import {SensorsRoutingModule } from './sensors-routing.module';
import { NebularModule } from 'src/app/nebular/nebular.module';


@NgModule({
  declarations: [
    HomeSensorsComponent
  ],
  imports: [
    CommonModule,
    SensorsRoutingModule,
    NebularModule
  ]
})
export class SensorsModule { }
