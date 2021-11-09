import { Component } from '@angular/core';
import { Airplane } from '../interfaces/airplane.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  // List Airplanes
  listAirplanes: Airplane[] = [];

  // Form data
  airplaneForm: Airplane = {

    company: '',
    reference: ''
  }

  constructor() {

    // Fill Sample Data
    this.listAirplanes.push({ company: 'Airbus', reference: 'A320'});
    this.listAirplanes.push({ company: 'Boeing', reference: '787'});
  }

  add() {

    console.log();
    if (this.airplaneForm.company.trim().length != 0) {

      // Obtain data new Airplane
      let newAirplane = {

        company: this.airplaneForm.company,
        reference: this.airplaneForm.reference
      }
      
      // Add new Airplane
      this.listAirplanes.push(newAirplane);

      // Clear Form
      this.airplaneForm.company = '';
      this.airplaneForm.reference = '';
    }
    return;
  }

  /*changeCompany(event: any) {

    console.log(event.target.value);
  }

  changeReference(event: any) {

  }*/
}
