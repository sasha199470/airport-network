import {Component, OnInit} from '@angular/core';
import {AirportsService} from "../../service/airports.service";
import 'rxjs/add/operator/toPromise';
import {FlightService} from "../../service/flight.service";
import {} from '@types/googlemaps';
import {FlightsObservable} from "../../flights-observable";

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
    let flightCount = 0;
    let airports = await this.airportsService.getDummyAirports();
    for (let i = 0; i <= 5; i++) {
      if (!airports[i].active) continue;

      let flights = await this.flightService.getDummyFlights(i, airports[i]);
      flightCount += flights.length;
      this.flightsObservable.addFlightsEmit(flights);

      if (flightCount > this.MAX_AIRCRAFT_ON_MAP) break;
    }
  }
}
