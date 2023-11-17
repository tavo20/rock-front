import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { SensorI } from 'src/app/core/models/Sensor';
import { SensorsService } from 'src/app/core/services/sensor/sensors.service';

@Component({
  selector: 'app-view-sensor',
  templateUrl: './view-sensor.component.html',
  styleUrls: ['./view-sensor.component.scss']
})
export class ViewSensorComponent implements OnInit {
  public sensor: SensorI = {} as SensorI;

  constructor(
    private sensorsService: SensorsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getParams();
  }

  public getParams() {
    this.route.params.subscribe((params: any) => {
      console.log(params);
      if (!params.id) {
        return;
      }
      this.getSensor({ sensorId: params.id});
      this.getDataSensor({ sensorId: params.id});

    });
  }

  public async getSensor({ sensorId }: { sensorId: number }) {
    try {
      const respon = await lastValueFrom(this.sensorsService.getSensor(sensorId));
      console.log(respon);
      if(!respon) {
        return;
      }
      this.sensor = respon;


    } catch (error: any) {
      console.error(error.message);
    }
  }

  public async getDataSensor({ sensorId }: { sensorId: number }) {
    try {
      const respon = await lastValueFrom(this.sensorsService.getSensorData(sensorId));
      console.log(respon);
      if(!respon) {
        return;
      }
      // this.sensor = respon;
    } catch (error: any) {
      console.error(error.message);
    }
  }

}
