import { Component, Input } from '@angular/core';
import { Airplane } from '../interfaces/airplane.interface';

@Component({
  selector: 'app-airplanes',
  templateUrl: './list-airplanes.component.html'
})
export class ListAirplanesComponent {

  @Input('data')
  listAirplanes: Airplane[] = [];

  constructor() { }
}
