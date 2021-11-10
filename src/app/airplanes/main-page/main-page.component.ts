import { Component, OnInit } from '@angular/core';
import { Airplane } from '../interfaces/airplane.interface';
import { AirplaneService } from '../services/airplanes.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent implements OnInit {

  constructor(private airplaneService: AirplaneService) {

  }

  // Implement Getter --> Avoid create local variable
  get listAirplanes(): Airplane[] {

    return this.airplaneService.listAirplanes;
  }
  
  ngOnInit(): void {
  
  }

  public addNewAirplane(newAirplane: Airplane) : void {

    // Add New Airplane
    this.listAirplanes.push(newAirplane);
  }
}
