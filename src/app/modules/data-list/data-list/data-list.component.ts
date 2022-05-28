import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'dw-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss']
})
export class DataListComponent implements OnInit, OnChanges {

  @Input() items: any[] = [];
  flag: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.flag = true;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['items']) {
      console.log('Cambio el arreglo');
    }
    
  }

}
