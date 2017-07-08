import {Airport} from './airport';
/**
 * Created by alexandra on 7/2/17.
 */
export class Flight {
  flightNumber: string;
  aircraftName: string;
  departureTime: string;
  arrivalTime: string;
  departureAirport: Airport;
  arrivalAirport: Airport;
  timeLeft: number;
  timeTravel: number;
  marker: google.maps.Marker;
}
