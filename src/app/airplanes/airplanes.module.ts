import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { ListAirplanesComponent } from './list-airplanes/list-airplanes.component';
import { AddAirplaneComponent } from './add-airplane/add-airplane.component';
import { AirplaneService } from './services/airplanes.service';

@NgModule({
  declarations: [
    MainPageComponent,
    ListAirplanesComponent,
    AddAirplaneComponent
  ],
  exports: [
    
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [

    AirplaneService
  ]
})
export class AirplanesModule { }
