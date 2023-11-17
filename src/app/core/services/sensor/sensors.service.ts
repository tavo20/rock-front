import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SharedService } from '../../../shared/services/shared.service';
import { Observable } from 'rxjs';
import { SensorI } from '../../../core/models/Sensor';


@Injectable({
  providedIn: 'root'
})
export class SensorsService {

  constructor(
    private sharedService: SharedService
  ) { }

  getAllSensors(): Observable<SensorI[]> {
    const url = `${environment.baseUrl}api/sensor/all`;
    return this.sharedService.get<SensorI[]>({ url: url });
  }

  getSensor(sensorId: number): Observable<SensorI> {
    const url = `${environment.baseUrl}api/sensor/${sensorId}`;
    return this.sharedService.get<SensorI>({ url: url });
  }
}
