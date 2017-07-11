import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';

import {Subject} from "rxjs/Rx";
import {Flight} from "./domain/flight";
import {Injectable} from "@angular/core";

@Injectable()
export class FlightsObservable {

  private addFlights = new Subject<Flight[]>();
  flightsNumberEmitted = this.addFlights.asObservable();
  addFlightsEmit(fligths: Flight[]) {
    this.addFlights.next(fligths);
  }

  private deleteFlight = new Subject<Flight>();
  deleteFlightEmitted = this.deleteFlight.asObservable();
  deleteFlightEmit(flight: Flight) {
    this.deleteFlight.next(flight);
  }

  private positionFlight = new Subject<Flight>();
  flightPositionEmitted = this.positionFlight.asObservable();
  changePositionEmit(flight: Flight) {
    this.positionFlight.next(flight);
  }

  private selectFlight = new Subject<Flight>();
  selectFlightEmitted = this.selectFlight.asObservable();
  selectFlightEmit(flight: Flight) {
    this.selectFlight.next(flight);
  }
}
