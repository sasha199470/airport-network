/**
 * Created by alexandra on 7/5/17.
 */
export abstract class RequestMapping {

  private static readonly commonUrl = '/flex';

  private static readonly appId = '2f3d54f5';
  private static readonly appKey = '6490a6a02e6b8f094a2a5baca024fec2';
  private static readonly appParams = '?appId=' + RequestMapping.appId +
                                      '&appKey=' + RequestMapping.appKey;

  private static readonly countryCode = 'RU';
  public static readonly airports = RequestMapping.commonUrl +
                                    '/airports/rest/v1/json/countryCode/' +
                                    RequestMapping.countryCode +
                                    RequestMapping.appParams;

  private static readonly schedules = RequestMapping.commonUrl + '/schedules/rest/v1/json/from/';
  public static getFlight(departureAirportFS: string,
                   date: Date) : string {
    let path = [departureAirportFS,
                'departing',
                date.getUTCFullYear(),
                date.getMonth() + 1,
                date.getDate(),
                date.getHours()].join('/');
    let searchParam = '&codeType=FS';
    return this.schedules + path + RequestMapping.appParams + searchParam;
  }
}
