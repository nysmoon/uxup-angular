import { UxupAngularPage } from './app.po';

describe('uxup-angular App', function() {
  let page: UxupAngularPage;

  beforeEach(() => {
    page = new UxupAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
