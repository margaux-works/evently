import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, waitFor, within } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import { getEvents } from '../api';

const feature = loadFeature('./src/features/filterEventsByCity.feature');

defineFeature(feature, (test) => {
  test('Show events from all cities', ({ given, when, then }) => {
    given('I have not searched for a city', () => {});
    let AppComponent;
    when('I open the app', () => {
      AppComponent = render(<App />);
    });
    then('I should see a list of upcoming events from all cities', async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector('#event-list');

      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole('listitem');
        expect(EventListItems.length).toBe(32);
      });
    });
  });

  test('Display city suggestions while typing', ({ given, when, then }) => {
    let AppComponent;
    given('I should see a list of suggestions when I search for a city', () => {
      AppComponent = render(<App />);
    });
    let CitySearchDOM;
    when('I starts typing in the city textbox', async () => {
      const user = userEvent.setup();
      const AppDOM = AppComponent.container.firstChild;
      CitySearchDOM = AppDOM.querySelector('#city-search');
      const citySearchInput = within(CitySearchDOM).queryByRole('textbox');
      await user.type(citySearchInput, 'Berlin');
    });

    then(
      'I should receive a list of cities (suggestions) that match what I’ve typed',
      async () => {
        const suggestionListItems =
          within(CitySearchDOM).queryAllByRole('listitem');
        expect(suggestionListItems).toHaveLength(2);
      }
    );
  });

  test('Allow user to select a city from the suggested list.', ({
    given,
    and,
    when,
    then,
  }) => {
    let AppComponent;
    let AppDOM;
    let CitySearchDOM;
    let citySearchInput;
    given('I was typing “Berlin” in the city textbox', async () => {
      AppComponent = render(<App />);
      const user = userEvent.setup();
      AppDOM = AppComponent.container.firstChild;
      CitySearchDOM = AppDOM.querySelector('#city-search');
      citySearchInput = within(CitySearchDOM).queryByRole('textbox');
      await user.type(citySearchInput, 'Berlin');
    });
    let suggestionListItems;
    and('the list of suggested cities is showing', () => {
      suggestionListItems = within(CitySearchDOM).queryAllByRole('listitem');
      expect(suggestionListItems).toHaveLength(2);
    });

    when(
      'I select a city (e.g., “Berlin, Germany”) from the list',
      async () => {
        const user = userEvent.setup();
        await user.click(suggestionListItems[0]);
      }
    );

    then(
      'the city should be changed to that city (i.e., “Berlin, Germany”)',
      () => {
        expect(citySearchInput.value).toBe('Berlin, Germany');
      }
    );

    and('I should receive a list of upcoming events in that city', async () => {
      const EventListDOM = AppDOM.querySelector('#event-list');
      const EventListItems = within(EventListDOM).queryAllByRole('listitem');
      const allEvents = await getEvents();

      const berlinEvents = allEvents.filter(
        (event) => event.location === citySearchInput.value
      );
      expect(EventListItems).toHaveLength(berlinEvents.length);
    });
  });
});
