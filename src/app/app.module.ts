import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeroesModule } from './heroes/heroes.module';
import { CountersModule } from './counters/counters.module';
import { AirplanesModule } from './airplanes/airplanes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    CountersModule,
    AirplanesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
