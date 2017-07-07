/**
 * Created by alexandra on 7/6/17.
 */
import {Injectable} from "@angular/core";
import {Headers, Http} from "@angular/http";
import {RequestMapping} from "../request-mapping";
import {Flight} from "../domain/flight";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class FlightService {
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  getFlights(departureAirportFS: string, date: Date) : Promise<Flight[]> {
    return this.http
      .get(RequestMapping.getFlights(departureAirportFS, date), {headers: this.headers})
      .toPromise()
      .then(response => <Flight[]> response.json())
  }

}
