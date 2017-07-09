import {Component, OnInit} from '@angular/core';
import {AirportsService} from "../../service/airports.service";
import 'rxjs/add/operator/toPromise';
import {FlightService} from "../../service/flight.service";
import {} from '@types/googlemaps';
import {FlightsObservable} from "../../flights-observable";
import {Airport} from "../../domain/airport";
import {Mutex} from "../../semaphore";

declare let google: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  readonly HOUR_TO_MS = 3600000;
  readonly ORIGINE_ROTATION = 45;
  readonly MAX_AIRCRAFT_ON_MAP = 20;

  lastRequestTime = 0;
  lastRequestAirport = -1;

  flightCount = 0;
  airports: Airport[] = [];

  requestMutex = new Mutex();

  constructor(private airportsService: AirportsService,
              private flightService: FlightService,
              private flightsObservable: FlightsObservable) {
  }

  ngOnInit(): void {
    // this.airportsService.getDummyAirports()
    //   .then(airports => console.log(airports))
    //   .then(() => {
    //     this.dateObj = Date.parse(this.airports[0].localTime) - 3600000;
    //     // this.flightService.getFlights(this.airports[0].fs, new Date(this.dateObj))
    //   })
  }

  startFlights() {
    this.getFlights();
  }

  async getFlights(): Promise<void> {
    if (this.airports.length == 0) {
      this.airports = await this.airportsService.getDummyAirports();
    }
    for (let i = this.lastRequestAirport + 1; i <= 6; i++) {
      this.lastRequestAirport = i;
      // let localTime = new Date(this.airports[i].localTime).getHours();
      // if (localTime < 12 || localTime > 22) continue;

      console.log(i);
      let flights = await this.flightService.getDummyFlights(i, this.airports[i]);
      this.flightCount += flights.length;
      this.flightsObservable.addFlightsEmit(flights);

      if (this.flightCount > this.MAX_AIRCRAFT_ON_MAP) break;
    }

    this.lastRequestTime = new Date().getHours();
  }

  async addFlights() {
    this.flightCount--;
    let release = await this.requestMutex.acquire();
    if (this.flightCount >= this.MAX_AIRCRAFT_ON_MAP) {
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
