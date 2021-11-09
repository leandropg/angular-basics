import { Component } from '@angular/core';
import { Airplane } from '../interfaces/airplane.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  // List Airplanes
  listAirplanes: Airplane[] = [];

  constructor() {

    // Fill Sample Data
    this.listAirplanes.push({ company: 'Airbus', reference: 'A320'});
    this.listAirplanes.push({ company: 'Boeing', reference: '787'});
  }
}
