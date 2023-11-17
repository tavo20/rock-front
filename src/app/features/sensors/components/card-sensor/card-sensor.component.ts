import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { SensorI } from 'src/app/core/models/Sensor';

@Component({
  selector: 'app-card-sensor',
  templateUrl: './card-sensor.component.html',
  styleUrls: ['./card-sensor.component.scss']
})
export class CardSensorComponent implements OnInit {
  @Input() sensor: any

  public test = 'test';

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
  }

  ngOnInit(): void {
  }

}
