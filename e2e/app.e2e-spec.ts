import { InfoAppPage } from './app.po';

describe('info-app App', () => {
  let page: InfoAppPage;

  beforeEach(() => {
    page = new InfoAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
