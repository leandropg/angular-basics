import { Injectable } from "@angular/core";
import { Airplane } from '../interfaces/airplane.interface';

@Injectable()
export class AirplaneService {

    // List Airplanes
    private _listAirplanes: Airplane[] = [];

    // Get List Airplanes
    get listAirplanes(): Airplane[] {

        return this._listAirplanes;
    }

    constructor() {

        // Fill Sample Data
        this._listAirplanes.push({ company: 'Airbus', reference: 'A320'});
        this._listAirplanes.push({ company: 'Boeing', reference: '787'});
    }

    public addNewAirplane(newAirplane: Airplane) : void {

        // Add New Airplane
        this._listAirplanes.push(newAirplane);
      }
}