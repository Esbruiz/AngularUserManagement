import { A2AppPage } from './app.po';

describe('a2-app App', function() {
  let page: A2AppPage;

  beforeEach(() => {
    page = new A2AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
