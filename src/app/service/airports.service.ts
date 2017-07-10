/**
 * Created by alexandra on 7/5/17.
 */

import {Injectable} from "@angular/core";
import {Headers, Http, Jsonp} from "@angular/http";
import {RequestMapping} from "../request-mapping";
import {Airport} from "../domain/airport";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AirportsService {
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http, private jsonp: Jsonp) {}

  getAirports() : Promise<Airport[]> {
    return this.jsonp
      .get(RequestMapping.airports, {headers: this.headers})
      .toPromise()
      .then(response => {
        console.log(response.json());
        return <Airport[]> response.json()
      });
  }

  getDummyAirports() : Promise<Airport[]> {
    return this.http
      .get("./assets/airports.json")
      .toPromise()
      .then(response => <Airport[]> response.json()['airports']);
  }

}

