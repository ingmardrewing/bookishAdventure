import { BookishAdventurePage } from './app.po';

describe('bookish-adventure App', () => {
  let page: BookishAdventurePage;

  beforeEach(() => {
    page = new BookishAdventurePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
