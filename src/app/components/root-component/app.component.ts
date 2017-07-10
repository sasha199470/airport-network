import {Component} from '@angular/core';
import {AirportsService} from "../../service/airports.service";
import 'rxjs/add/operator/toPromise';
import {FlightService} from "../../service/flight.service";
import {} from '@types/googlemaps';
import {FlightsObservable} from "../../flights-observable";
import {Airport} from "../../domain/airport";
import {Mutex} from "../../semaphore";
import {Flight} from "../../domain/flight";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  readonly HOUR_TO_MS = 3600000;
  readonly MAX_AIRCRAFT_ON_MAP = 20;

  lastRequestTime = 0;
  lastRequestAirport = -1;

  airports: Airport[] = [];
  flights: Flight[] = [];

  requestMutex = new Mutex();

  constructor(private airportsService: AirportsService,
              private flightService: FlightService,
              private flightsObservable: FlightsObservable) {
  }

  startFlights() {
    this.getFlights();
  }

  async getFlights(): Promise<void> {
    if (this.airports.length == 0) {
      this.airports = await this.airportsService.getDummyAirports();
    }

    for (let i = this.lastRequestAirport + 1; i <= this.airports.length - 1; i++) {
      this.lastRequestAirport = i;
      let localTime = new Date(Date.now() + new Date().getTimezoneOffset() * 60000 +
        (this.airports[i].utcOffsetHours - 1) * this.HOUR_TO_MS);

      let flights = await this.flightService.getFlights(this.airports[i], localTime);
      if (flights.length > 4 * this.MAX_AIRCRAFT_ON_MAP) {
        flights = flights.filter((flight, index) => {
          if (index % 4 == 0) return flight
        });
      }

      console.log(flights);
      this.flightsObservable.addFlightsEmit(flights);

      flights.forEach(flight => {
        this.flights.push(flight);
      });
      if (this.flights.length > this.MAX_AIRCRAFT_ON_MAP) break;
    }

    this.lastRequestTime = new Date().getHours();
  }

  async checkNumberFlights(index: number) {
    this.flights.splice(index, 1);
    let release = await this.requestMutex.acquire();
    if (this.flights.length >= this.MAX_AIRCRAFT_ON_MAP) {
      release();
    }
    else {
      if (new Date().getHours() != this.lastRequestTime) {
        this.lastRequestTime = new Date().getHours();
        this.lastRequestAirport = -1;
      }
      await this.getFlights();
      release();
    }
  }
}
