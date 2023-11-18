import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-status-empty',
  templateUrl: './status-empty.component.html',
  styleUrls: ['./status-empty.component.scss']
})
export class StatusEmptyComponent implements OnInit {
  @Input() message: string = 'No hay datos para mostrar';
  constructor() { }

  ngOnInit(): void {
  }

}
