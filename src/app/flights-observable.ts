import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';

import {Subject} from "rxjs/Rx";
import {Flight} from "./domain/flight";
import {Injectable} from "@angular/core";

@Injectable()
export class FlightsObservable {

  private numberOfFlights = new Subject<Flight[]>();

  flightsNumberEmitted = this.numberOfFlights.asObservable();

  addFlightsEmit(fligths: Flight[]) {
    this.numberOfFlights.next(fligths);
  }


  private positionFlight = new Subject<Flight>();

  flightPositionEmitted = this.positionFlight.asObservable();

  changePositionEmit(flight: Flight) {
    this.positionFlight.next(flight);
  }
}
