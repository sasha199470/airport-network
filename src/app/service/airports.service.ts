/**
 * Created by alexandra on 7/5/17.
 */

import {Injectable} from "@angular/core";
import {Headers, Http} from "@angular/http";
import {RequestMapping} from "../request-mapping";
import {Airport} from "../domain/airport";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AirportsService {
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  getAirports() : Promise<Airport[]> {
    return this.http
      .get(RequestMapping.airports, {headers: this.headers})
      .toPromise()
      .then(response => <Airport[]> response.json()['airports']);
  }

  getDummyAirports() : Promise<Airport[]> {
    return this.http
      .get("./assets/airports.json")
      .toPromise()
      .then(response => <Airport[]> response.json()['airports']);
  }

}

