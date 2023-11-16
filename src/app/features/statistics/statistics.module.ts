import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { StatisticsRoutingModule } from './statistics-routing.module';
import { NebularModule } from 'src/app/nebular/nebular.module';
import { NbIconModule } from '@nebular/theme';
import { StatisticOneComponent } from './components/statistic-one/statistic-one/statistic-one.component';

@NgModule({
  declarations: [
    HomeComponent,
    StatisticOneComponent
  ],
  imports: [
    CommonModule,
    StatisticsRoutingModule,
    NebularModule,
    NbIconModule


  ]
})
export class StatisticsModule { }
