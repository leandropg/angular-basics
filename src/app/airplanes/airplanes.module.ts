import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { ListAirplanesComponent } from './list-airplanes/list-airplanes.component';
import { AddAirplaneComponent } from './add-airplane/add-airplane.component';

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
  ]
})
export class AirplanesModule { }
