import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { SensorI } from 'src/app/core/models/Sensor';

@Component({
  selector: 'app-card-sensor',
  templateUrl: './card-sensor.component.html',
  styleUrls: ['./card-sensor.component.scss']
})
export class CardSensorComponent implements OnInit {
  @Input() sensor: SensorI = {} as SensorI;
  @Output() selected  = new EventEmitter();


  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
  }

  public onSelectSensor() {
    this.selected.emit(this.sensor);
  }

}
