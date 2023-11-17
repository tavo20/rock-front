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

  public labels: string[] = [];
  public data: number[] = [];
  public label: string = '';
  public data2: number[] = [];
  public label2: string = '';

  public promedioTemp: number = 0;
  public desviacionLabel: number = 0;

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

  constructor(
    private sensorsService: SensorsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getParams();
  }

   public getParams() {
    this.route.params.subscribe(async (params: any) => {
      if (!params.id) {
        return;
      }
      await this.getSensor({ sensorId: params.id});
      await this.getDataSensor({ sensorId: params.id});

      this.buildChart();


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
      this.sensorData = respon;

    } catch (error: any) {
      console.error(error.message);
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
          const date = new Date(item.timestamp);
          return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
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

  public buildChartWeather(labelOne: string,labelTwo: string, titleOne: string, titleTwo: string) {
    this.labels = this.sensorData.map((item: RecordSensorI) =>{
      const date = new Date(item.timestamp);
      return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    });

    this.label = titleOne;
    this.data = this.sensorData.map((item: any) => item[labelOne] as number);

    this.promedioTemp = this.data.reduce((a, b) => a + b, 0) / this.sensorData.length;

    // calcular la desviacion estandar
    const promedio = this.promedioTemp;
    const sum = this.data.reduce((a, b) => a + Math.pow(b - promedio, 2), 0);
    this.desviacionLabel = Math.sqrt(sum / this.data.length);

    this.label2 = titleTwo;
    this.data2 = this.sensorData.map((item: any) => item[labelTwo] as number);

    // calcular la Tendencia de la variable seleccionada












    // let count = 0;
    // setInterval(() => {
    //   if(count > 10) {
    //     return;
    //   }
    //   this.labels.shift();
    //   this.labels = [ ...this.labels, `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`];

    //   this.data.shift();
    //   this.data = [ ...this.data, Math.floor(Math.random() * 50) + 1];
    //   count++;
    // }, 2000)
  }

}
