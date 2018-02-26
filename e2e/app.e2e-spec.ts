import { UnitAppPage } from './app.po';

describe('unit-app App', () => {
  let page: UnitAppPage;

  beforeEach(() => {
    page = new UnitAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
