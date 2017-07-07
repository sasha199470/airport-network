import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/root-component/app.component';
import {HttpModule} from "@angular/http";
import {AirportsService} from "./service/airports.service";
import {FlightService} from "./service/flight.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    AirportsService,
    FlightService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
