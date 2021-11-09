import { Component, Input, OnInit } from '@angular/core';
import { Airplane } from '../interfaces/airplane.interface';

@Component({
  selector: 'app-airplanes',
  templateUrl: './list-airplanes.component.html'
})
export class ListAirplanesComponent implements OnInit {

  @Input('data')
  listAirplanes: Airplane[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
