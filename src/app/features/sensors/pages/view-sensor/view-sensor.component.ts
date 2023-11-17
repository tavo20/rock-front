import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { SensorsService } from 'src/app/core/services/sensor/sensors.service';

@Component({
  selector: 'app-view-sensor',
  templateUrl: './view-sensor.component.html',
  styleUrls: ['./view-sensor.component.scss']
})
export class ViewSensorComponent implements OnInit {

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
      // this.getSensor(params.id);
    });
  }

  public getSensor({ sensorId }: { sensorId: number }) {
    try {
      const respon = lastValueFrom(this.sensorsService.getSensor(sensorId));
      console.log(respon);


    } catch (error: any) {
      console.error(error.message);
    }
  }

}
