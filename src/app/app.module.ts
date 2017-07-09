import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/root-component/app.component';
import {HttpModule} from "@angular/http";
import {AirportsService} from "./service/airports.service";
import {FlightService} from "./service/flight.service";
import {AgmCoreModule} from "@agm/core";
import {MapComponent} from "./components/map/map.component";
import {FlightsObservable} from "./flights-observable";

@NgModule({
  declarations: [
    AppComponent,
    MapComponent
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
    FlightService,
    FlightsObservable
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
