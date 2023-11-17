import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { SensorI } from 'src/app/core/models/Sensor';
import { SensorsService } from 'src/app/core/services/sensor/sensors.service';

@Component({
  selector: 'app-home-sensors',
  templateUrl: './home-sensors.component.html',
  styleUrls: ['./home-sensors.component.scss']
})
export class HomeSensorsComponent implements OnInit {
  public sensors: SensorI[] = [];
  constructor(
    private sensorsService: SensorsService
  ) { }

  ngOnInit(): void {
    this.getAllSensors()
  }


  public async getAllSensors() {
    try {
      const response = await lastValueFrom(this.sensorsService.getAllSensors());
      if (!response) {
        return [];
      }
      this.sensors = response;
      return response;

    } catch (error: any) {
      console.log(error.message);
      return [];
    }
  }

}
