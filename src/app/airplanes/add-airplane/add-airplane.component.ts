import { Component, Input } from '@angular/core';
import { Airplane } from '../interfaces/airplane.interface';

@Component({
  selector: 'app-add-airplane',
  templateUrl: './add-airplane.component.html'
})
export class AddAirplaneComponent {

  @Input('listAirplanes')
  listAirplanes: Airplane[] = [];

  // Form data
  airplaneForm: Airplane = {

    company: '',
    reference: ''
  }

  constructor() { }

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
