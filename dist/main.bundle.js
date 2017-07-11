webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_root_component_app_component__ = __webpack_require__("../../../../../src/app/components/root-component/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_airports_service__ = __webpack_require__("../../../../../src/app/service/airports.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_flight_service__ = __webpack_require__("../../../../../src/app/service/flight.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_map_map_component__ = __webpack_require__("../../../../../src/app/components/map/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__flights_observable__ = __webpack_require__("../../../../../src/app/flights-observable.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_panel_panel_component__ = __webpack_require__("../../../../../src/app/components/panel/panel.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__components_root_component_app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_map_map_component__["a" /* MapComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_panel_panel_component__["a" /* PanelComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* JsonpModule */],
            __WEBPACK_IMPORTED_MODULE_6__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyD01xktvdR-kU-0JZfriefkdB-TPMJCqSo',
                libraries: ["geometry"]
            })
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__service_airports_service__["a" /* AirportsService */],
            __WEBPACK_IMPORTED_MODULE_5__service_flight_service__["a" /* FlightService */],
            __WEBPACK_IMPORTED_MODULE_8__flights_observable__["a" /* FlightsObservable */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__components_root_component_app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/map/map.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#map {\n  height: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/map/map.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"map\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/components/map/map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_flight__ = __webpack_require__("../../../../../src/app/domain/flight.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__flights_observable__ = __webpack_require__("../../../../../src/app/flights-observable.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__flights_manager__ = __webpack_require__("../../../../../src/app/flights-manager.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_util__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MapComponent = (function () {
    function MapComponent(mapsAPILoader, flightsObservable) {
        this.mapsAPILoader = mapsAPILoader;
        this.flightsObservable = flightsObservable;
        this.mapLoad = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.flightsManager = new __WEBPACK_IMPORTED_MODULE_5__flights_manager__["a" /* FlightsManager */](this.flightsObservable);
    }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        var selectedFlight = new __WEBPACK_IMPORTED_MODULE_2__domain_flight__["a" /* Flight */]();
        this.mapsAPILoader.load().then(function () {
            var HOUR_TO_MS = 3600000;
            var ORIGINE_ROTATION = 45;
            var DEFAULT_COLOR = 'black';
            var SELECT_COLOR = 'yellow';
            // Atlanta
            var MAP_CENTER = new google.maps.LatLng(33.640067, -84.44403);
            var mapCenter;
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 4,
                center: MAP_CENTER
            });
            var aircraftImage = {
                path: 'm157.99 184.38 15.388-16.185c9.0113-9.0113 24.185-5.8854 24.185-5.8854l45.029 6.1614 22.806-22.316c12.015-11.801 22.867 6.2538 18.147 12.476l-11.709 13.61 48.493 8.9816 16.461-19.189c17.594-21.026 30.683-2.0835 22.745 9.0734l-10.637 13.457 72.863 9.5025c62.65-60.29 88.227-85.299 104.71-70.441 16.59 14.953-12.756 44.759-69.828 103.55l10.361 75.07 15.265-12.721c9.0113-7.5094 25.012 4.538 8.4911 20.201l-20.997 19.802 8.8588 49.137 13.12-10.085c11.586-9.2259 25.656 2.9747 9.993 19.71l-20.844 20.997c-0.85822 0.64367 6.805 43.098 6.805 43.098 4.7202 20.812-7.0196 28.416-7.0196 28.416l-14.315 12.476-54.379-153.6c-4.5057-13.517-15.925-28.196-35.006-26.454-10.084 1.0728-35.558 18.27-38.991 22.346l-58.977 56.708c-1.5019 1.0728 9.0734 73.721 9.0734 73.721 0 2.1456-18.699 26.668-18.699 26.668l-37.366-66.517-18.453 8.5828 10.79-16.798-67.284-37.98 25.228-18.453c12.015 2.7892 75.008 9.8702 76.296 9.2265 0 0 51.297-50.873 54.226-53.95 16.95-17.808 22.653-24.462 25.228-33.259 2.5768-8.804-1.8128-21.706-28.416-38.041-36.689-22.528-151.64-61.092-151.64-61.092z',
                fillColor: '#000000',
                fillOpacity: 1,
                scale: 0.06,
                strokeOpacity: 1,
                strokeWeight: 1,
                anchor: new google.maps.Point(320, 320)
            };
            var geodesicPoly = new google.maps.Polyline({
                map: map,
                strokeColor: 'red',
                strokeOpacity: 1.0,
                strokeWeight: 3,
                geodesic: true
            });
            _this.flightsObservable.flightsNumberEmitted.subscribe(function (flights) {
                flights.forEach(function (flight) {
                    var path = getPath(flight);
                    flight.timeTravel = Date.parse(flight.arrivalTime) - Date.parse(flight.departureTime) +
                        (flight.departureAirport.utcOffsetHours - flight.arrivalAirport.utcOffsetHours) *
                            HOUR_TO_MS;
                    flight.timeLeft = Date.parse(flight.arrivalTime) - Date.now() -
                        (flight.arrivalAirport.utcOffsetHours + new Date().getTimezoneOffset() / 60) *
                            HOUR_TO_MS;
                    var interpolate = google.maps.geometry.spherical
                        .interpolate(path[0], path[1], 1 - flight.timeLeft / flight.timeTravel);
                    var heading = google.maps.geometry.spherical
                        .computeHeading(interpolate, path[1]);
                    aircraftImage.rotation = heading - ORIGINE_ROTATION;
                    var marker = new google.maps.Marker({
                        map: map,
                        position: interpolate,
                        icon: aircraftImage,
                        zIndex: 0
                    });
                    marker.addListener('click', function () {
                        _this.flightsObservable.selectFlightEmit(flight);
                    });
                    flight.marker = marker;
                    _this.flightsManager.startFlights(flight);
                });
            });
            _this.flightsObservable.flightPositionEmitted.subscribe(function (flight) {
                if (flight.timeLeft <= 0) {
                    flight.marker.setMap(null);
                    flight.marker = undefined;
                    _this.flightsObservable.deleteFlightEmit(flight);
                }
                else {
                    var path = getPath(flight);
                    var interpolate = google.maps.geometry.spherical
                        .interpolate(path[0], path[1], 1 - flight.timeLeft / flight.timeTravel);
                    flight.marker.setPosition(interpolate);
                    var heading = google.maps.geometry.spherical
                        .computeHeading(interpolate, path[1]);
                    changeRotationIcon(flight, heading - ORIGINE_ROTATION);
                }
            });
            _this.flightsObservable.selectFlightEmitted.subscribe(function (selectedFlight) {
                var flight = selectedFlight.flight;
                if (selectedFlight.isPanelSelect) {
                    var path = getPath(flight);
                    var interpolate = google.maps.geometry.spherical
                        .interpolate(path[0], path[1], 1 - flight.timeLeft / flight.timeTravel);
                    map.setCenter(interpolate);
                }
                selectFlight(flight);
            });
            _this.mapLoad.emit();
            function getPath(flight) {
                var departure = new google.maps.LatLng(flight.departureAirport.latitude, flight.departureAirport.longitude);
                var arrival = new google.maps.LatLng(flight.arrivalAirport.latitude, flight.arrivalAirport.longitude);
                return [departure, arrival];
            }
            function changeFillIcon(flight, fillColor) {
                var icon = flight.marker.getIcon();
                icon.fillColor = fillColor;
                flight.marker.setIcon(icon);
            }
            function changeRotationIcon(flight, rotation) {
                var icon = flight.marker.getIcon();
                icon.rotation = rotation;
                flight.marker.setIcon(icon);
            }
            function selectFlight(flight) {
                if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_util__["isUndefined"])(selectedFlight.marker)) {
                    selectedFlight.marker.setZIndex(1);
                    changeFillIcon(selectedFlight, DEFAULT_COLOR);
                }
                geodesicPoly.setPath(getPath(flight));
                changeFillIcon(flight, SELECT_COLOR);
                selectedFlight = flight;
                selectedFlight.marker.setZIndex(100);
            }
        });
    };
    return MapComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Output */])('mapLoad'),
    __metadata("design:type", Object)
], MapComponent.prototype, "mapLoad", void 0);
MapComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'map',
        template: __webpack_require__("../../../../../src/app/components/map/map.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/map/map.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__agm_core__["b" /* MapsAPILoader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__agm_core__["b" /* MapsAPILoader */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__flights_observable__["a" /* FlightsObservable */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__flights_observable__["a" /* FlightsObservable */]) === "function" && _b || Object])
], MapComponent);

var _a, _b;
//# sourceMappingURL=map.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/panel/panel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#map {\n  height: 100%;\n}\n\n.card {\n  padding: 5px;\n}\n\n.card:hover {\n  cursor: pointer;\n  color: white;\n  background: black;\n}\n\n.card.select {\n  color: white;\n  background: black;\n  pointer-events: none;\n}\n\nline {\n  font-size: 16px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/panel/panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div>Самолетов на карте: {{flights.length}}</div>\n<div class=\"list-flights\">\n  <div class=\"card\"\n       *ngFor=\"let flight of flights; let i = index\"\n       (click)=\"selectFlight(flight)\"\n  [class.select]=\"checkSelect(i)\">\n    <div class=\"line\">\n      <span>Номер рейса:</span>\n      <span>{{flight.flightNumber}}</span>\n    </div>\n    <div class=\"line-min\">\n      <span>Название самолета:</span>\n      <span>{{flight.aircraftName}}</span>\n    </div>\n    <div class=\"line\">\n      <span>Из: {{flight.departureAirport.city}}</span>\n      <span>{{flight.departureTime}}</span>\n    </div>\n    <div class=\"line\">\n      <span class=\"arrow-down\"></span>\n    </div>\n    <div class=\"line\">\n      <span>В: {{flight.arrivalAirport.city}}</span>\n      <span>{{flight.arrivalTime}}</span>\n    </div>\n    <div class=\"line\">\n      <span>Время полета:</span>\n      <span>{{getTimeUTC(flight.timeTravel)}}</span>\n    </div>\n    <div class=\"line\">\n      <span>Время до прилета:</span>\n      <span>{{getTimeUTC(flight.timeLeft)}}</span>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/panel/panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flights_observable__ = __webpack_require__("../../../../../src/app/flights-observable.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanelComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Created by alexandra on 7/9/17.
 */
var PanelComponent = (function () {
    function PanelComponent(flightsObservable) {
        this.flightsObservable = flightsObservable;
        this.flights = [];
        this.selectIndex = -1;
    }
    PanelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.flightsObservable.flightsNumberEmitted.subscribe(function (flights) {
            _this.flights = _this.flights.concat(flights);
        });
        this.flightsObservable.deleteFlightEmitted.subscribe(function (flight) {
            var index = _this.flights.findIndex(function (f) { return f === flight; });
            _this.flights.splice(index, 1);
        });
        this.flightsObservable.selectFlightEmitted.subscribe(function (selectFlight) {
            var flight = selectFlight.flight;
            _this.selectIndex = _this.flights.findIndex(function (f) { return f.flightNumber == flight.flightNumber; });
        });
    };
    PanelComponent.prototype.selectFlight = function (flight, index) {
        this.selectIndex = index;
        this.flightsObservable.selectFlightEmit(flight, true);
    };
    PanelComponent.prototype.checkSelect = function (index) {
        return index == this.selectIndex;
    };
    PanelComponent.prototype.getTimeUTC = function (time) {
        var date = new Date(time);
        return date.getUTCHours() +
            ':' + date.getUTCMinutes() +
            ':' + date.getUTCSeconds();
    };
    return PanelComponent;
}());
PanelComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'panel',
        template: __webpack_require__("../../../../../src/app/components/panel/panel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/panel/panel.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__flights_observable__["a" /* FlightsObservable */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__flights_observable__["a" /* FlightsObservable */]) === "function" && _a || Object])
], PanelComponent);

var _a;
//# sourceMappingURL=panel.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/root-component/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 100%;\n}\n\npanel {\n  width: 30%;\n  height: 100%;\n  overflow-y: scroll;\n  padding: 5px;\n}\n\nmap {\n  width: 70%;\n  height: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/root-component/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <panel></panel>\n  <map (mapLoad)=\"initFlights()\"></map>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/root-component/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_airports_service__ = __webpack_require__("../../../../../src/app/service/airports.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_flight_service__ = __webpack_require__("../../../../../src/app/service/flight.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__flights_observable__ = __webpack_require__("../../../../../src/app/flights-observable.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__semaphore__ = __webpack_require__("../../../../../src/app/semaphore.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var AppComponent = (function () {
    function AppComponent(airportsService, flightService, flightsObservable) {
        this.airportsService = airportsService;
        this.flightService = flightService;
        this.flightsObservable = flightsObservable;
        this.HOUR_TO_MS = 3600000;
        this.MAX_AIRCRAFT_ON_MAP = 20;
        this.airports = [];
        this.flightsCounter = 0;
        this.requestMutex = new __WEBPACK_IMPORTED_MODULE_4__semaphore__["a" /* Mutex */]();
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.flightsObservable.deleteFlightEmitted.subscribe(function (flight) {
            _this.checkNumberFlights();
        });
    };
    AppComponent.prototype.initFlights = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, i, requestLocalTime, flights;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this.airports.length == 0)) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.airportsService.getDummyAirports()];
                    case 1:
                        _a.airports = _b.sent();
                        _b.label = 2;
                    case 2:
                        console.log(this.airports);
                        i = 0;
                        _b.label = 3;
                    case 3:
                        if (!(i <= this.airports.length - 1)) return [3 /*break*/, 6];
                        requestLocalTime = new Date(Date.now() + new Date().getTimezoneOffset() * 60000 +
                            (this.airports[i].utcOffsetHours - 1) * this.HOUR_TO_MS);
                        return [4 /*yield*/, this.flightService.getFlights(this.airports[i], requestLocalTime)];
                    case 4:
                        flights = _b.sent();
                        flights = flights.filter(function (flight, index, array) {
                            if (index == 0 || flight.arrivalAirport.fs !== array[index - 1].arrivalAirport.fs ||
                                flight.arrivalTime !== array[index - 1].arrivalTime) {
                                return flight;
                            }
                        });
                        this.flightsCounter += flights.length;
                        this.flightsObservable.addFlightsEmit(flights);
                        if (this.flightsCounter > this.MAX_AIRCRAFT_ON_MAP)
                            return [3 /*break*/, 6];
                        _b.label = 5;
                    case 5:
                        i++;
                        return [3 /*break*/, 3];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    AppComponent.prototype.checkNumberFlights = function () {
        return __awaiter(this, void 0, void 0, function () {
            var release;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.flightsCounter--;
                        return [4 /*yield*/, this.requestMutex.acquire()];
                    case 1:
                        release = _a.sent();
                        if (!(this.flightsCounter >= this.MAX_AIRCRAFT_ON_MAP)) return [3 /*break*/, 2];
                        release();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.initFlights()];
                    case 3:
                        _a.sent();
                        release();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/components/root-component/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/root-component/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_airports_service__["a" /* AirportsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_airports_service__["a" /* AirportsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_flight_service__["a" /* FlightService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_flight_service__["a" /* FlightService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__flights_observable__["a" /* FlightsObservable */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__flights_observable__["a" /* FlightsObservable */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/domain/flight.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Flight; });
/**
 * Created by alexandra on 7/2/17.
 */
var Flight = (function () {
    function Flight() {
    }
    return Flight;
}());

//# sourceMappingURL=flight.js.map

/***/ }),

/***/ "../../../../../src/app/flights-manager.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_util__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlightsManager; });

var FlightsManager = (function () {
    function FlightsManager(flightsObservable) {
        this.flightsObservable = flightsObservable;
        this.TIME_INTERVAL = 1000;
    }
    FlightsManager.prototype.startFlights = function (flight) {
        var _this = this;
        setTimeout(function () {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_util__["isUndefined"])(flight.marker))
                return;
            flight.timeLeft -= _this.TIME_INTERVAL;
            _this.flightsObservable.changePositionEmit(flight);
            _this.startFlights(flight);
        }, 1000);
    };
    return FlightsManager;
}());

//# sourceMappingURL=flights-manager.js.map

/***/ }),

/***/ "../../../../../src/app/flights-observable.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlightsObservable; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FlightsObservable = (function () {
    function FlightsObservable() {
        this.addFlights = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Subject"]();
        this.flightsNumberEmitted = this.addFlights.asObservable();
        this.deleteFlight = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Subject"]();
        this.deleteFlightEmitted = this.deleteFlight.asObservable();
        this.positionFlight = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Subject"]();
        this.flightPositionEmitted = this.positionFlight.asObservable();
        this.selectFlight = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Subject"]();
        this.selectFlightEmitted = this.selectFlight.asObservable();
    }
    FlightsObservable.prototype.addFlightsEmit = function (fligths) {
        this.addFlights.next(fligths);
    };
    FlightsObservable.prototype.deleteFlightEmit = function (flight) {
        this.deleteFlight.next(flight);
    };
    FlightsObservable.prototype.changePositionEmit = function (flight) {
        this.positionFlight.next(flight);
    };
    FlightsObservable.prototype.selectFlightEmit = function (flight, isPanelSelect) {
        if (isPanelSelect === void 0) { isPanelSelect = false; }
        this.selectFlight.next({ flight: flight, isPanelSelect: isPanelSelect });
    };
    return FlightsObservable;
}());
FlightsObservable = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["c" /* Injectable */])()
], FlightsObservable);

//# sourceMappingURL=flights-observable.js.map

/***/ }),

/***/ "../../../../../src/app/request-mapping.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestMapping; });
/**
 * Created by alexandra on 7/5/17.
 */
var RequestMapping = (function () {
    function RequestMapping() {
    }
    RequestMapping.getFlights = function (departureAirportFS, date) {
        var path = [departureAirportFS,
            'departing',
            date.getUTCFullYear(),
            date.getMonth() + 1,
            date.getDate(),
            date.getHours()].join('/');
        var searchParam = '&codeType=FS';
        return this.schedules + path + RequestMapping.appParams + searchParam + RequestMapping.callbackParam;
    };
    return RequestMapping;
}());

RequestMapping.commonUrl = 'https://api.flightstats.com/flex';
RequestMapping.appId = 'db6d35a8';
RequestMapping.appKey = 'c39691881edb945ffd48362793d5631e';
RequestMapping.appParams = '?appId=' + RequestMapping.appId +
    '&appKey=' + RequestMapping.appKey;
RequestMapping.callbackParam = '&callback=JSONP_CALLBACK';
RequestMapping.airports = RequestMapping.commonUrl +
    '/airports/rest/v1/jsonp/active/' +
    RequestMapping.appParams + RequestMapping.callbackParam;
RequestMapping.schedules = RequestMapping.commonUrl + '/schedules/rest/v1/jsonp/from/';
//# sourceMappingURL=request-mapping.js.map

/***/ }),

/***/ "../../../../../src/app/semaphore.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* unused harmony export Semaphore */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mutex; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Semaphore = (function () {
    function Semaphore(count) {
        this.tasks = [];
        this.count = count;
    }
    Semaphore.prototype.sched = function () {
        if (this.count > 0 && this.tasks.length > 0) {
            this.count--;
            this.tasks.shift()();
        }
    };
    Semaphore.prototype.acquire = function () {
        var _this = this;
        return new Promise(function (res, rej) {
            var task = function () {
                var released = false;
                res(function () {
                    if (!released) {
                        released = true;
                        _this.count++;
                        _this.sched();
                    }
                });
            };
            _this.tasks.push(task);
            process.nextTick(_this.sched.bind(_this));
        });
    };
    Semaphore.prototype.use = function (f) {
        return this.acquire()
            .then(function (release) {
            return f()
                .then(function (res) {
                release();
                return res;
            })
                .catch(function (err) {
                release();
                throw err;
            });
        });
    };
    return Semaphore;
}());

var Mutex = (function (_super) {
    __extends(Mutex, _super);
    function Mutex() {
        return _super.call(this, 1) || this;
    }
    return Mutex;
}(Semaphore));

//# sourceMappingURL=semaphore.js.map
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../../../../process/browser.js")))

/***/ }),

/***/ "../../../../../src/app/service/airports.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__request_mapping__ = __webpack_require__("../../../../../src/app/request-mapping.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AirportsService; });
/**
 * Created by alexandra on 7/5/17.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AirportsService = (function () {
    function AirportsService(http, jsonp) {
        this.http = http;
        this.jsonp = jsonp;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        this.airports = {
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
        };
    }
    AirportsService.prototype.getAirports = function () {
        return this.jsonp
            .get(__WEBPACK_IMPORTED_MODULE_2__request_mapping__["a" /* RequestMapping */].airports, { headers: this.headers })
            .toPromise()
            .then(function (response) {
            console.log(response.json());
            return response.json();
        });
    };
    AirportsService.prototype.getDummyAirports = function () {
        var _this = this;
        return new Promise(function (response) {
            response(_this.airports);
        }).then(function (response) { return response['airports']; });
    };
    return AirportsService;
}());
AirportsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Jsonp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Jsonp */]) === "function" && _b || Object])
], AirportsService);

var _a, _b;
//# sourceMappingURL=airports.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/flight.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__request_mapping__ = __webpack_require__("../../../../../src/app/request-mapping.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlightService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by alexandra on 7/6/17.
 */




var FlightService = (function () {
    function FlightService(http, jsonp) {
        this.http = http;
        this.jsonp = jsonp;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    FlightService.prototype.getFlights = function (departureAirport, date) {
        return this.jsonp
            .get(__WEBPACK_IMPORTED_MODULE_2__request_mapping__["a" /* RequestMapping */].getFlights(departureAirport.fs, date), { headers: this.headers })
            .toPromise()
            .then(function (response) {
            var flights;
            var responseJson = response.json();
            flights = responseJson['scheduledFlights'];
            var airports = responseJson['appendix']['airports'];
            flights.forEach(function (flight) {
                flight.departureAirport = departureAirport;
                var arrivalAirportFs = flight['arrivalAirportFsCode'];
                flight.arrivalAirport = airports.find(function (airport) {
                    return airport['fs'] === arrivalAirportFs;
                });
                var flightEquipment = flight['flightEquipmentIataCode'];
                flight.aircraftName = responseJson['appendix']['equipments'].find(function (aircraft) {
                    return aircraft['iata'] === flightEquipment;
                })['name'];
            });
            return flights;
        });
    };
    FlightService.prototype.getDummyFlights = function (number, departureAirport) {
        return this.http
            .get("./assets/" + number + "-airport.json")
            .toPromise()
            .then(function (response) {
            var flights;
            var responseJson = response.json();
            flights = response.json()['scheduledFlights'];
            var airports = responseJson['appendix']['airports'];
            flights.forEach(function (flight) {
                flight.departureAirport = departureAirport;
                var arrivalAirportFs = flight['arrivalAirportFsCode'];
                flight.arrivalAirport = airports.find(function (airport) {
                    return airport['fs'] === arrivalAirportFs;
                });
                var flightEquipment = flight['flightEquipmentIataCode'];
                flight.aircraftName = responseJson['appendix']['equipments'].find(function (aircraft) {
                    return aircraft['iata'] === flightEquipment;
                })['name'];
            });
            return flights;
        });
    };
    return FlightService;
}());
FlightService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Jsonp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Jsonp */]) === "function" && _b || Object])
], FlightService);

var _a, _b;
//# sourceMappingURL=flight.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map