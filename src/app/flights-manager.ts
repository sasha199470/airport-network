import {FlightsObservable} from "./flights-observable";
import {Flight} from "./domain/flight";
import {isUndefined} from "util";

export class FlightsManager {

  private readonly TIME_INTERVAL = 1000;

  constructor(private flightsObservable: FlightsObservable) {}

  public startFlights(flight: Flight) {
    setTimeout(() => {
      if (isUndefined(flight.marker)) return;
      flight.timeLeft -= this.TIME_INTERVAL;
      this.flightsObservable.changePositionEmit(flight);
      this.startFlights(flight);
    }, 1000)
  }
}
