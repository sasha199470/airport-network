import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';

import {Subject} from "rxjs/Rx";
import {Flight} from "./domain/flight";
import {Injectable} from "@angular/core";

@Injectable()
export class FlightsObservable {

  private changeNumberFlights = new Subject<Flight[]>();

  flightsNumberEmitted = this.changeNumberFlights.asObservable();

  addFlightsEmit(fligths: Flight[]) {
    this.changeNumberFlights.next(fligths);
  }

}
