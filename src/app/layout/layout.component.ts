import { Component, OnInit } from '@angular/core';
import { menu } from './../utils/menu';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {  

  itemsMenu = menu;

  constructor() { }

  ngOnInit(): void {
  }

}
