import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistic-one',
  templateUrl: './statistic-one.component.html',
  styleUrls: ['./statistic-one.component.scss']
})
export class StatisticOneComponent implements OnInit {
  @Input() name: string = '';
  @Input() value: any = '';
  @Input() icon: string = '';
  @Input() color: string = '';
  @Input() fontSize: string = '';

  public id: string = this.getRandomId();


  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    let nodo = document.getElementById(this.id) as HTMLElement;
    if(nodo){
      nodo.style.fontSize = this.fontSize || '31px';
    }
  }

  getRandomId() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }

}
