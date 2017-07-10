/**
 * Created by alexandra on 7/6/17.
 */
import {Injectable} from "@angular/core";
import {Headers, Http, Jsonp} from "@angular/http";
import {RequestMapping} from "../request-mapping";
import {Flight} from "../domain/flight";

import 'rxjs/add/operator/toPromise';
import {Airport} from "../domain/airport";

@Injectable()
export class FlightService {
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http, private jsonp: Jsonp) {}

  getFlights(departureAirport: Airport, date: Date) : Promise<Flight[]> {
    return this.jsonp
      .get(RequestMapping.getFlights(departureAirport.fs, date), {headers: this.headers})
      .toPromise()
      .then(response => {
        let flights: Flight[];
        let responseJson = response.json();
        flights = responseJson['scheduledFlights'];
        let airports: Airport[] = responseJson['appendix']['airports'];
        flights.forEach((flight) => {
          flight.departureAirport = departureAirport;

          let arrivalAirportFs = flight['arrivalAirportFsCode'];
          flight.arrivalAirport = airports.find((airport) => {
            return airport['fs'] === arrivalAirportFs;
          });

          let flightEquipment = flight['flightEquipmentIataCode'];
          flight.aircraftName = responseJson['appendix']['equipments'].find((aircraft) => {
            return aircraft['iata'] === flightEquipment;
          })['name'];
        })

        return flights;
      });
  }

  getDummyFlights(number: number, departureAirport) :Promise<Flight[]>{
    return this.http
      .get("./assets/" + number + "-airport.json")
      .toPromise()
      .then(response => {
        let flights: Flight[];
        let responseJson = response.json();
        flights = response.json()['scheduledFlights'];
        let airports: Airport[] = responseJson['appendix']['airports'];
        flights.forEach((flight) => {
          flight.departureAirport = departureAirport;

          let arrivalAirportFs = flight['arrivalAirportFsCode'];
          flight.arrivalAirport = airports.find((airport) => {
            return airport['fs'] === arrivalAirportFs;
          });

          let flightEquipment = flight['flightEquipmentIataCode'];
          flight.aircraftName = responseJson['appendix']['equipments'].find((aircraft) => {
            return aircraft['iata'] === flightEquipment;
          })['name'];
        })

        return flights;
      });
  }

}
