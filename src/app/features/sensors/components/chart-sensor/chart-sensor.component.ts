import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { Chart, ChartConfiguration, LineController, LineElement, PointElement, LinearScale, Title, registerables} from 'chart.js'


@Component({
  selector: 'app-chart-sensor',
  templateUrl: './chart-sensor.component.html',
  styleUrls: ['./chart-sensor.component.scss']
})
export class ChartSensorComponent implements OnInit {
  @Input() public data: any = [];
  @Input() public labels: any = [];
  @Input() public label: string = '';
  @Input() public borderColor: string = 'rgba(255, 99, 132, 1)';
  @Input() public backgroundColor: string = 'rgba(255, 99, 132, 0.2)';
  @Input() public borderWidth: number = 3;
  @Input() public type: string = 'line';
  @Input() public idDOM: string = '';

  public myChart: any = null;

  constructor() {
    Chart.register(...registerables);
   }

  ngOnInit(): void {
  }
  ngOnChanges(changes: any): void {

    if(this.myChart) {
      this.myChart.data.labels = changes.labels.currentValue;;
      this.myChart.data.datasets.forEach((dataset: any) => {
          dataset.data.shift();
          dataset.data.push(changes.data.currentValue[changes.data.currentValue.length - 1]);
      });
      this.myChart.update();
    }

  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.buildChart();

    }, 1000)
  }

  public buildChart() {
    const canvas = document.getElementById(this.idDOM) as HTMLCanvasElement;
    const ctx: any = canvas.getContext('2d');
     this.myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.labels,
        datasets: [{
          label: this.label,
          data: this.data,
          backgroundColor: this.backgroundColor,
          borderColor: this.borderColor,
          borderWidth: this.borderWidth,
          hoverBorderJoinStyle: 'round',
        }],
      },
      options: {
        responsive: true,
        // cutoutPercentage: 70,
        // borderWidth: 400,
				animation: {
					duration: 0 // general animation time
				},
        hover: {
					mode: 'nearest' // duration of animations when hovering an item
				},
      },
    });

  }

}
