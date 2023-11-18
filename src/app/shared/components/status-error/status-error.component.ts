import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-error',
  templateUrl: './status-error.component.html',
  styleUrls: ['./status-error.component.scss']
})
export class StatusErrorComponent implements OnInit {
  @Input() message: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
