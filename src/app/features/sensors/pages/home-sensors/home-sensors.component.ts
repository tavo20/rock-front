import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, lastValueFrom, switchMap, tap } from 'rxjs';
import { SensorI } from 'src/app/core/models/Sensor';
import { SensorsService } from 'src/app/core/services/sensor/sensors.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-sensors',
  templateUrl: './home-sensors.component.html',
  styleUrls: ['./home-sensors.component.scss']
})
export class HomeSensorsComponent implements OnInit {
  public sensors: SensorI[] = [];
  public sensorsStatic: SensorI[] = [];
  public loading: boolean = true;
  public search = new FormControl('');

  constructor(
    private sensorsService: SensorsService,
    public router: Router,

  ) { }

  ngOnInit(): void {
    this.getAllSensors();
    this.changeSearch();
  }

  public async getAllSensors() {
    try {
      const response = await lastValueFrom(this.sensorsService.getAllSensors());
      if (!response) {
        return [];
      }
      this.sensors = response;
      this.sensorsStatic = response;
      return response;

    } catch (error: any) {
      console.log(error.message);
      return [];

    } finally {
      this.loading = false;

    }
  }

  /**
   * Searching sensor by name
   */
  public changeSearch() {
    this.search.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((value) => {
        return this.filterSensor(value)
      }
    )).subscribe();
  }

  public async filterSensor(value: string) {
    this.sensors = this.sensorsStatic.filter(sensor => sensor.sensor_name.toLowerCase().includes(value.toLowerCase()));
  }

  public onSelectedSensor(sensor: SensorI) {
    this.router.navigate(['sensors/view-sensor', sensor._id]);
  }

}
