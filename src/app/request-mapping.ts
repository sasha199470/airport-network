/**
 * Created by alexandra on 7/5/17.
 */
export abstract class RequestMapping {
  private static commonUrl = 'https://api.flightstats.com/flex';
  private static keyId = '?appId=2f3d54f5&appKey=6490a6a02e6b8f094a2a5baca024fec2';
  // private static appInfo = {'appId': '2f3d54f5', 'appKey': '6490a6a02e6b8f094a2a5baca024fec2'};
  static airports = RequestMapping.commonUrl + '/airports/rest/v1/json/countryCode/RU' + RequestMapping.keyId;
  static schedules = RequestMapping.commonUrl + '/schedules/rest/v1/json/from/{departureAirportCode}/departing/{year}/{month}/{day}/{hourOfDay}' + RequestMapping.keyId;
}
