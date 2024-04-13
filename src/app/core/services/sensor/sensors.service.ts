import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SharedService } from '../../../shared/services/shared.service';
import { Observable } from 'rxjs';
import { SensorI } from '../../../core/models/Sensor';
import { RecordSensorI } from '../../models/RecordSensor';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SensorsService {
  private socket: any = io('http://localhost:3000', {transports: ['websocket', 'polling', 'flashsocket']});

  constructor(
    private sharedService: SharedService
  ) {
    console.log('SensorsService')

    console.log('environment.baseUrl', environment.baseUrl);
    // this.socket = io(environment.baseUrl);
    this.test()
   }

  ngOnInit(): void {

  }

  getAllSensors(): Observable<SensorI[]> {
    const url = `${environment.baseUrl}api/sensor/all`;
    return this.sharedService.get<SensorI[]>({ url: url });
  }

  getSensor(sensorId: string): Observable<SensorI> {
    const url = `${environment.baseUrl}api/sensor/get/${sensorId}`;
    return this.sharedService.get<SensorI>({ url: url });
  }

  getSensorData(sensorId: string, filterNumberData: number = 20): Observable<RecordSensorI[]> {
    const url = `${environment.baseUrl}api/record/sensor/data/${sensorId}`;
    return this.sharedService.get<RecordSensorI[]>({ url: url, queryParams: { limit: filterNumberData } });
  }

  createSensorRecord(sensor: RecordSensorI): Observable<RecordSensorI> {
    const url = `${environment.baseUrl}api/record/sensor/create`;
    return this.sharedService.post<RecordSensorI>({ url: url, model: sensor });
  }

  getMessages() {
    let observable = new Observable<any>(observer => {
      this.socket.on('server:test01', (data: any) => {
        observer.next(data);
      });

      this.socket.on('server:test02', (data: any) => {});

      return () => { this.socket.disconnect(); };
    });
    return observable;
  }

  test() {
    console.log('test');
    this.socket.on('server:test01', (data: any) => {
      console.log(data);
    });



    // this.socket.emit('client:test01', { my: 'data' });

  }
}
