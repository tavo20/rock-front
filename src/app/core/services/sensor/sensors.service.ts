import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SharedService } from '../../../shared/services/shared.service';
import { Observable } from 'rxjs';
import { SensorI } from '../../../core/models/Sensor';
import { RecordSensorI } from '../../models/RecordSensor';


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

  getSensor(sensorId: string): Observable<SensorI> {
    const url = `${environment.baseUrl}api/sensor/get/${sensorId}`;
    return this.sharedService.get<SensorI>({ url: url });
  }

  getSensorData(sensorId: string): Observable<RecordSensorI[]> {
    const url = `${environment.baseUrl}api/record/sensor/data/${sensorId}`;
    return this.sharedService.get<RecordSensorI[]>({ url: url });
  }

  createSensorRecord(sensor: RecordSensorI): Observable<RecordSensorI> {
    const url = `${environment.baseUrl}api/record/sensor/create`;
    return this.sharedService.post<RecordSensorI>({ url: url, model: sensor });
  }
}
