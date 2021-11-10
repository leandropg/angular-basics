import { Component, EventEmitter, Output } from '@angular/core';
import { Airplane } from '../interfaces/airplane.interface';

@Component({
  selector: 'app-add-airplane',
  templateUrl: './add-airplane.component.html'
})
export class AddAirplaneComponent {

  // Form data
  airplaneForm: Airplane = {

    company: '',
    reference: ''
  }

  // Create Emmiter
  @Output()
  onNewAirplane: EventEmitter<Airplane> = new EventEmitter();

  constructor() { }

  addNewAirplane() {

    if (this.airplaneForm.company.trim().length != 0) {

      // Obtain data new Airplane
      let newAirplane = {

        company: this.airplaneForm.company,
        reference: this.airplaneForm.reference
      }

      // Emit New Airplane
      this.onNewAirplane.emit(newAirplane);
      
      // Clear Form
      this.airplaneForm.company = '';
      this.airplaneForm.reference = '';
    }
    return;
  }
}
