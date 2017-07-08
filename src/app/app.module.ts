import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/root-component/app.component';
import {HttpModule} from "@angular/http";
import {AirportsService} from "./service/airports.service";
import {FlightService} from "./service/flight.service";
import {AgmCoreModule} from "@agm/core";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD01xktvdR-kU-0JZfriefkdB-TPMJCqSo',
      libraries: ["geometry"]
    })
  ],
  providers: [
    AirportsService,
    FlightService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
