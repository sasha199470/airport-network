import {Component, Input, OnInit} from "@angular/core";
import {FlightsObservable} from "../../flights-observable";
import {Flight} from "../../domain/flight";
/**
 * Created by alexandra on 7/9/17.
 */

@Component({
  selector: 'panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})

export class PanelComponent implements OnInit {

  @Input('flights') flights: Flight[] = [];

  selectIndex = -1;

  constructor(private flightsObservable: FlightsObservable) {
  }

  ngOnInit(): void {
    this.flightsObservable.selectFlightEmitted.subscribe(flight => {
      this.selectIndex = this.flights.findIndex(f => f.flightNumber == flight.flightNumber);
    });
  }

  selectFlight(flight: Flight, index: number) {
    this.selectIndex = index;
    this.flightsObservable.selectFlightEmit(flight);
  }

  checkSelect(index: number) {
    return index == this.selectIndex;
  }

  getTimeUTC(time: string) {
    let date = new Date(time);
    return date.getUTCHours() +
      ':' + date.getUTCMinutes() +
      ':' + date.getUTCSeconds();
  }
}
