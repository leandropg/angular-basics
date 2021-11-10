import { Component, EventEmitter, Output } from '@angular/core';
import { Airplane } from '../interfaces/airplane.interface';
import { AirplaneService } from '../services/airplanes.service';

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
  /*@Output()
  onNewAirplane: EventEmitter<Airplane> = new EventEmitter();*/

  constructor(private airplaneService: AirplaneService) { }

  addNewAirplane() {

    if (this.airplaneForm.company.trim().length != 0) {

      // Obtain data new Airplane
      let newAirplane = {

        company: this.airplaneForm.company,
        reference: this.airplaneForm.reference
      }

      // Emit New Airplane
      //this.onNewAirplane.emit(newAirplane);
      this.airplaneService.addNewAirplane(newAirplane);
      
      // Clear Form
      this.airplaneForm.company = '';
      this.airplaneForm.reference = '';
    }
    return;
  }
}
