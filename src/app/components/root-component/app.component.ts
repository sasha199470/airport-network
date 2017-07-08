import {Component, OnInit} from '@angular/core';
import {AirportsService} from "../../service/airports.service";
import {Airport} from "../../domain/airport";
import 'rxjs/add/operator/toPromise';
import {FlightService} from "../../service/flight.service";
import {Flight} from "../../domain/flight";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  dateObj: number;
  airports: Airport[] = [];
  flights: Flight[] = [];
  constructor(private airportsService: AirportsService,
              private flightService: FlightService) {
  }

  ngOnInit(): void {
    // this.airportsService.getDummyAirports()
    //   .then(airports => console.log(airports))
    //   .then(() => {
    //     this.dateObj = Date.parse(this.airports[0].localTime) - 3600000;
    //     // this.flightService.getFlights(this.airports[0].fs, new Date(this.dateObj))
    //   })

    this.getFlights().then((flights) => {
      this.showFlight();
    });
  }

  showFlight() {
    console.log(this.flights);
  }

  async getFlights() : Promise<Flight[]> {
    let airports = await this.airportsService.getDummyAirports();
    for (let i = 0; i <= 5; i++) {
      if (!airports[i].active) continue;
      (await this.flightService.getDummyFlights(i, airports[i])).forEach((flight) => {
        this.flights.push(flight);
      });
      if (this.flights.length > 20) break;
    }
    return this.flights;
  }
}
