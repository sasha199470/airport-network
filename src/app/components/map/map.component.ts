import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {Flight} from "../../domain/flight";
import {MapsAPILoader} from "@agm/core";
import {} from '@types/googlemaps';
import {FlightsObservable} from "../../flights-observable";

declare let google: any;

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
  readonly HOUR_TO_MS = 3600000;
  readonly ORIGINE_ROTATION = 45;

  @Output('mapLoad') mapLoad = new EventEmitter();

  flights: Flight[] = [];

  constructor(private mapsAPILoader: MapsAPILoader,
              private flightsObservable: FlightsObservable) {
  }

  ngOnInit(): void {
    this.mapsAPILoader.load().then(() => {
      let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: {lat: 54.882656, lng: 20.586646}
      });

      let aircraftImage: google.maps.Symbol = {
        path: 'm157.99 184.38 15.388-16.185c9.0113-9.0113 24.185-5.8854 24.185-5.8854l45.029 6.1614 22.806-22.316c12.015-11.801 22.867 6.2538 18.147 12.476l-11.709 13.61 48.493 8.9816 16.461-19.189c17.594-21.026 30.683-2.0835 22.745 9.0734l-10.637 13.457 72.863 9.5025c62.65-60.29 88.227-85.299 104.71-70.441 16.59 14.953-12.756 44.759-69.828 103.55l10.361 75.07 15.265-12.721c9.0113-7.5094 25.012 4.538 8.4911 20.201l-20.997 19.802 8.8588 49.137 13.12-10.085c11.586-9.2259 25.656 2.9747 9.993 19.71l-20.844 20.997c-0.85822 0.64367 6.805 43.098 6.805 43.098 4.7202 20.812-7.0196 28.416-7.0196 28.416l-14.315 12.476-54.379-153.6c-4.5057-13.517-15.925-28.196-35.006-26.454-10.084 1.0728-35.558 18.27-38.991 22.346l-58.977 56.708c-1.5019 1.0728 9.0734 73.721 9.0734 73.721 0 2.1456-18.699 26.668-18.699 26.668l-37.366-66.517-18.453 8.5828 10.79-16.798-67.284-37.98 25.228-18.453c12.015 2.7892 75.008 9.8702 76.296 9.2265 0 0 51.297-50.873 54.226-53.95 16.95-17.808 22.653-24.462 25.228-33.259 2.5768-8.804-1.8128-21.706-28.416-38.041-36.689-22.528-151.64-61.092-151.64-61.092z',
        fillColor: '#000000',
        fillOpacity: 1,
        scale: 0.06,
        strokeOpacity: 1,
        strokeWeight: 1,
        anchor: new google.maps.Point(320, 320)
      };

      let geodesicPoly = new google.maps.Polyline({
        map: map,
        strokeColor: 'red',
        strokeOpacity: 1.0,
        strokeWeight: 3,
        geodesic: true
      });

      this.flightsObservable.flightsNumberEmitted.subscribe((flights) => {
        flights.forEach((flight) => {
          let departure = new google.maps.LatLng(flight.departureAirport.latitude,
            flight.departureAirport.longitude);
          let arrival = new google.maps.LatLng(flight.arrivalAirport.latitude,
            flight.arrivalAirport.longitude);

          flight.timeTravel = Date.parse(flight.arrivalTime) - Date.parse(flight.departureTime) +
            (flight.departureAirport.utcOffsetHours - flight.arrivalAirport.utcOffsetHours) *
            this.HOUR_TO_MS;

          //TODO: поменять Date.parse('2017-07-06T19:16:20.627') на Date.now()
          flight.timeLeft = Date.parse(flight.arrivalTime) - Date.parse('2017-07-06T19:16:20.627') -
            flight.arrivalAirport.utcOffsetHours * this.HOUR_TO_MS;

          let interpolate = google.maps.geometry.spherical
            .interpolate(departure, arrival, flight.timeLeft / flight.timeTravel);

          let heading = google.maps.geometry.spherical
            .computeHeading(interpolate, arrival);

          aircraftImage.rotation = heading - this.ORIGINE_ROTATION;

          let marker = new google.maps.Marker({
            map: map,
            position: interpolate,
            icon: aircraftImage
          });

          marker.addListener('click', () => {
            geodesicPoly.setPath([departure, arrival]);
          });

          flight.marker = marker;
        });
        flights.forEach((flight) => this.flights.push(flight));
      });

      this.mapLoad.emit();
    });
  }
}