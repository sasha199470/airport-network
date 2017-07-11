/**
 * Created by alexandra on 7/5/17.
 */
export abstract class RequestMapping {

  private static readonly commonUrl = 'https://api.flightstats.com/flex';

  private static readonly appId = 'db6d35a8';
  private static readonly appKey = 'c39691881edb945ffd48362793d5631e';
  private static readonly appParams = '?appId=' + RequestMapping.appId +
                                      '&appKey=' + RequestMapping.appKey;

  private static readonly callbackParam = '&callback=JSONP_CALLBACK';

  public static readonly airports = RequestMapping.commonUrl +
                                    '/airports/rest/v1/jsonp/active/' +
                                    RequestMapping.appParams + RequestMapping.callbackParam;

  private static readonly schedules = RequestMapping.commonUrl + '/schedules/rest/v1/jsonp/from/';
  public static getFlights(departureAirportFS: string,
                           date: Date) : string {
    let path = [departureAirportFS,
                'departing',
                date.getUTCFullYear(),
                date.getMonth() + 1,
                date.getDate(),
                date.getHours()].join('/');
    let searchParam = '&codeType=FS';
    return this.schedules + path + RequestMapping.appParams + searchParam + RequestMapping.callbackParam;
  }
}
