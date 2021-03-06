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
    return new Promise(response => {
      response(this.airports);
    }).then(response => <Airport[]> response['airports']);
  }

  private readonly airports = {
    "airports": [
      {
        "fs": "ATL",
        "iata": "ATL",
        "icao": "KATL",
        "faa": "ATL",
        "name": "Hartsfield-Jackson Atlanta International Airport",
        "street1": "6000 N Terminal Parkway",
        "street2": "",
        "city": "Atlanta",
        "cityCode": "ATL",
        "stateCode": "GA",
        "postalCode": "30320",
        "countryCode": "US",
        "countryName": "United States",
        "regionName": "North America",
        "timeZoneRegionName": "America/New_York",
        "weatherZone": "GAZ044",
        "utcOffsetHours": -4,
        "latitude": 33.640067,
        "longitude": -84.44403,
        "elevationFeet": 1026,
        "classification": 1,
        "active": true,
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/ATL?codeType=fs",
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/ATL?codeType=fs"
      },
      {
        "fs": "PEK",
        "iata": "PEK",
        "icao": "ZBAA",
        "name": "Beijing Capital International Airport",
        "street1": "Capital Airport Rd",
        "city": "Beijing",
        "cityCode": "BJS",
        "countryCode": "CN",
        "countryName": "China",
        "regionName": "Asia",
        "timeZoneRegionName": "Asia/Shanghai",
        "utcOffsetHours": 8,
        "latitude": 40.078538,
        "longitude": 116.587095,
        "elevationFeet": 115,
        "classification": 1,
        "active": true,
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/PEK?codeType=fs",
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/PEK?codeType=fs"
      },
      {
        "fs": "LHR",
        "iata": "LHR",
        "icao": "EGLL",
        "name": "London Heathrow Airport",
        "city": "London",
        "cityCode": "LON",
        "stateCode": "EN",
        "countryCode": "GB",
        "countryName": "United Kingdom",
        "regionName": "Europe",
        "timeZoneRegionName": "Europe/London",
        "utcOffsetHours": 1,
        "latitude": 51.469603,
        "longitude": -0.453566,
        "elevationFeet": 80,
        "classification": 1,
        "active": true,
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/LHR?codeType=fs",
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/LHR?codeType=fs"
      }
    ]
  }
}

