import { AirportNetworkPage } from './app.po';

describe('airport-network App', () => {
  let page: AirportNetworkPage;

  beforeEach(() => {
    page = new AirportNetworkPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
