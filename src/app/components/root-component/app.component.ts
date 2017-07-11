import {Component, OnInit} from '@angular/core';
import {AirportsService} from "../../service/airports.service";
import {FlightService} from "../../service/flight.service";
import {FlightsObservable} from "../../flights-observable";
import {Airport} from "../../domain/airport";
import {Mutex} from "../../semaphore";
import {Flight} from "../../domain/flight";
import {} from '@types/googlemaps';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  readonly HOUR_TO_MS = 3600000;
  readonly MAX_AIRCRAFT_ON_MAP = 20;

  airports: Airport[] = [];
  flightsCounter = 0;

  requestMutex = new Mutex();

  constructor(private airportsService: AirportsService,
              private flightService: FlightService,
              private flightsObservable: FlightsObservable) {
  }

  ngOnInit(): void {
    this.flightsObservable.deleteFlightEmitted.subscribe(flight => {
      this.checkNumberFlights();
    });
  }

  async initFlights() : Promise<void> {
    if (this.airports.length == 0) {
      this.airports = await this.airportsService.getDummyAirports();
    }

    for (let i = 0; i <= this.airports.length - 1; i++) {
      let requestLocalTime = new Date(Date.now() + new Date().getTimezoneOffset() * 60000 +
        (this.airports[i].utcOffsetHours - 1) * this.HOUR_TO_MS);

      let flights = await this.flightService.getFlights(this.airports[i], requestLocalTime);

      flights = flights.filter((flight, index, array) => {
        if (index == 0 || flight.arrivalAirport.fs !== array[index - 1].arrivalAirport.fs ||
        flight.arrivalTime !== array[index - 1].arrivalTime) {
          console.log(flight, array);
          if(index != 0) {
            console.log(flight.arrivalAirport.fs !== array[index - 1].arrivalAirport.fs);
            console.log(flight.arrivalTime !== array[index - 1].arrivalTime);
          }
          return flight;
        }
      });

      this.flightsCounter += flights.length;

      this.flightsObservable.addFlightsEmit(flights);

      if (this.flightsCounter > this.MAX_AIRCRAFT_ON_MAP) break;
    }
  }

  async checkNumberFlights() : Promise<void> {
    this.flightsCounter--;
    let release = await this.requestMutex.acquire();
    if (this.flightsCounter >= this.MAX_AIRCRAFT_ON_MAP) {
      release();
    }
    else {
      console.log('ALERT');
      // await this.initFlights();
      release();
    }
  }
}
