import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { RecordSensorI } from 'src/app/core/models/RecordSensor';
import { SensorI } from 'src/app/core/models/Sensor';
import { SensorsService } from 'src/app/core/services/sensor/sensors.service';

interface ChartDataI {
  labels: string[];
    label: string;
    data: number[];
    promedio?: number;
    desviacion?: number;
}

@Component({
  selector: 'app-view-sensor',
  templateUrl: './view-sensor.component.html',
  styleUrls: ['./view-sensor.component.scss']
})
export class ViewSensorComponent implements OnInit {
  public sensor: SensorI = {} as SensorI;
  public sensorData: RecordSensorI[] = [];

  public label: string = '';
  public selectedItem: string = '20';

  public dataChartOne: ChartDataI = {
    labels: [],
    label: '',
    data: [],
    promedio: 0,
    desviacion: 0,
  };
  public dataChartTwo: ChartDataI = {
    labels: [],
    label: '',
    data: [],
    promedio: 0,
    desviacion: 0,
  };

  public setIntervalGenerateData: any;

  constructor(
    private sensorsService: SensorsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getParams();
  }

  ngOnDestroy(): void {
    clearInterval(this.setIntervalGenerateData);
  }

   public getParams() {
    this.route.params.subscribe(async (params: any) => {
      if (!params.id) {
        return;
      }
      this.getData({ sensorId: params.id});
    });
  }

  public async getData({ sensorId }: { sensorId: string }) {
    try {
      const promises = [
        this.getSensor({ sensorId }),
        this.getDataSensor({ sensorId }),
      ]
      const [ sensor, data ]: any = await Promise.all(promises);

      this.buildChart();

      this.setIntervalGenerateData = setInterval(() => {
        this.generateData(sensor.type);
      }, 20000);


    } catch (error: any) {
      console.error(error.message);
    }
  }

  public async getSensor({ sensorId }: { sensorId: string }) {
    try {
      const respon = await lastValueFrom(this.sensorsService.getSensor(sensorId));
      if(!respon) {
        return;
      }
      this.sensor = respon;
      return respon;

    } catch (error: any) {
      console.error(error.message);
      return false;
    }
  }

  public async getDataSensor({ sensorId, numberFilter = 20 }: { sensorId: string, numberFilter?:number }) {
    try {
      const respon = await lastValueFrom(this.sensorsService.getSensorData(sensorId, numberFilter));
      if(!respon) {
        return;
      }
      this.sensorData = respon;
      return respon;

    } catch (error: any) {
      console.error(error.message);
      return false;
    }
  }

  public buildChart() {
    let { type } = this.sensor;

    if(type === 'Clima') {
      this.dataChartOne = this.caculateDate('temperature', 'Temperatura');
      this.dataChartTwo = this.caculateDate('humidity', 'Humedad');

      return;
    }

    if(type === 'Meteorológico') {
      this.dataChartOne = this.caculateDate('wind_speed', 'Velocidad del viento');
      this.dataChartTwo = this.caculateDate('pressure', 'Presión');
      return;
    }

    if(type === 'Ambiental') {
      this.dataChartOne = this.caculateDate('noise_level', 'Nivel de ruido');
      return;
    }

  }

  public caculateDate(label: string, title: string): ChartDataI {
    const data = this.sensorData.map((item: any) => item[label] as number)
    const promedio =  data.reduce((a, b) => a + b, 0) / this.sensorData.length;
      return {
        labels: this.sensorData.map((item: RecordSensorI) =>{
          const date = new Date(item.timestamp as string);
          return `${date.getDay()}/${date.getMonth()} ${date.getHours()}:${date.getMinutes()}`;
        }),
        label: title,
        data,
        promedio,
        desviacion: this.calcDesviacion(data, promedio),
      }
  }

  public calcDesviacion(data: number[], promedio: number): number {
    const sum = data.reduce((a, b) => a + Math.pow(b - promedio, 2), 0);
    return Math.sqrt(sum / data.length);
  }

  public async generateData(type: string) {
    let recordSensor: RecordSensorI = {
      sensor: this.sensor._id,
    };
    if(type === 'Clima') {
      recordSensor.temperature = this.getRandomNumber(24, 35);
      recordSensor.humidity = this.getRandomNumber(55, 66);
    } else
    if(type === 'Meteorológico') {
      recordSensor.wind_speed = this.getRandomNumber(5, 20);
      recordSensor.pressure = this.getRandomNumber(1000, 1200);
    } else
    if(type === 'Ambiental') {
      const noise_level = this.getRandomNumber(40, 46);
      recordSensor.noise_level = noise_level;
      recordSensor.air_quality = noise_level > 43 ? 'Buena' : 'Mala';
    }

    try {
     const response = await lastValueFrom(this.sensorsService.createSensorRecord(recordSensor));
      if(!response) {
        return;
      }

      await this.getDataSensor({ sensorId: this.sensor._id, numberFilter: Number(this.selectedItem) });
      this.buildChart();

    } catch (error: any) {
      console.error(error.message);
    }

  }

  public getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
  }

  public async onSelectedDatafilter(event: number) {
    const numberFilter = Number(event);

    await this.getDataSensor({ sensorId: this.sensor._id, numberFilter });
    this.buildChart();

  }

}
