import puppeteer from 'puppeteer';

describe('show/hide an event details', () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer
      .launch

      //     {headless: false,
      //   slowMo: 250,
      //   timeout: 0,}
      ();
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
  });

  afterAll(() => {
    browser.close();
  });

  test('An event element is collapsed by defaault', async () => {
    const eventDetails = await page.$('.event .eventDetails');
    expect(eventDetails).toBeNull();
  });

  test('User can expand an event to see its details', async () => {
    await page.click('.event .showDetailsBtn');
    const eventDetails = await page.$('.event .eventDetails');
    expect(eventDetails).toBeDefined();
  });

  test('user can collapse an event to hide detail', async () => {
    await page.click('.event .showDetailsBtn');
    const eventDetails = await page.$('.event .eventDetails');
    expect(eventDetails).toBeNull();
  });
});

describe('Filter events by City', () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer
      .launch

      //     {headless: false,
      //   slowMo: 250,
      //   timeout: 0,}
      ();
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('#city-search');
  });

  afterAll(() => {
    browser.close();
  });

  test('User can filter events by entering a city name', async () => {
    await page.click('#city-search .city');
    await page.type('#city-search .city', 'Berlin');

    await page.waitForSelector('.suggestions li');
    const suggestionItem = await page.$x(
      "//li[contains(text(), 'Berlin, Germany')]"
    );
    await suggestionItem[0].click();

    await page.waitForSelector('.event');

    const eventDetails = await page.$$eval('.event .location', (locations) =>
      locations.map((location) => location.textContent)
    );

    eventDetails.forEach((location) => {
      expect(location).toContain('Berlin, Germany');
    });
  });
});
