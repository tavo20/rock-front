import { Component, OnInit } from '@angular/core';
import { Chart, ChartConfiguration, LineController, LineElement, PointElement, LinearScale, Title, registerables} from 'chart.js'
import { AlertsService } from 'src/app/core/services/alerts/alerts.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public readonly URL_SALES: string = 'api/sales';

  public globalSales: any = {};


  constructor(
    private alertsService: AlertsService,
  ) {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.getSalesStatistics()
  }

  public getSalesStatistics(){
    // this.salesService.getSalesStatistics({ api:`${this.URL_SALES}/statistics`  }).subscribe(
    //   {
    //     next: (data) => {
    //       console.log(data);
    //       if(data.success !== true){
    //         this.alertsService.error({ message: 'Error al obtener las estadisticas' });
    //       }
    //       this.globalSales = data.sales;
    //       this.buildChartSales()

    //     },
    //     error: (err) => {
    //       this.alertsService.error(err);
    //     },
    //     complete: () => {
    //       console.log('complete')
    //     }
    //   }
    // )
  }

  public buildChartSales() {
    const canvas =document.getElementById('myChartSales') as HTMLCanvasElement;
    const ctx: any = canvas.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'],
        datasets: [{
          label: 'Semana',
          data: [
              this.globalSales.amountWeekDays.monday.toString(),
              this.globalSales.amountWeekDays.tuesday.toString(),
              this.globalSales.amountWeekDays.wednesday.toString(),
              this.globalSales.amountWeekDays.thursday.toString(),
              this.globalSales.amountWeekDays.friday.toString(),
              this.globalSales.amountWeekDays.saturday.toString(),
              this.globalSales.amountWeekDays.sunday.toString()
            ],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 3,
          hoverBorderJoinStyle: 'round',
        }],
      },
      options: {
        responsive: false,
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

    const canvas2 =document.getElementById('myChartSales2') as HTMLCanvasElement;
    const ctx2: any = canvas2.getContext('2d');
    const myChart2 = new Chart(ctx2, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Año 2022',
          data: [
              this.globalSales.amountYearMonths[1]?.toString() || 0,
              this.globalSales.amountYearMonths[2]?.toString() || 0,
              this.globalSales.amountYearMonths[3]?.toString() || 0,
              this.globalSales.amountYearMonths[4]?.toString() || 0,
              this.globalSales.amountYearMonths[5]?.toString() || 0,
              this.globalSales.amountYearMonths[6]?.toString() || 0,
              this.globalSales.amountYearMonths[7]?.toString() || 0,
              this.globalSales.amountYearMonths[8]?.toString() || 0,
              this.globalSales.amountYearMonths[9]?.toString() || 0,
              this.globalSales.amountYearMonths[10]?.toString() || 0,
              this.globalSales.amountYearMonths[11]?.toString() || 0,
              this.globalSales.amountYearMonths[12]?.toString() || 0,
          ],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      },
      options: {
        responsive: false,

      }
    });



  }

}
