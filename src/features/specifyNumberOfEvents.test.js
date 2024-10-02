/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/prefer-screen-queries */
import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, (test) => {
  test('User sees 32 events by default if no number is specified', ({
    given,
    when,
    then,
  }) => {
    let AppComponent;

    given('a user is on the app', () => {
      AppComponent = render(<App />);
    });

    when(
      'they have not changed any settings related to the number of events displayed',
      () => {}
    );

    then('the app should display a maximum of 32 events by default', () => {
      const numberOfEventsInput = AppComponent.getByTestId(
        'number-of-events-input'
      );

      expect(numberOfEventsInput).toHaveValue(32);

      const eventList = AppComponent.container.querySelectorAll('.event-item');
      expect(eventList.length).toBeLessThanOrEqual(32);
    });
  });

  test('User specifies the number of events displayed', ({
    given,
    when,
    then,
  }) => {
    let AppDOM;
    given('the user is on the app', () => {
      AppDOM = render(<App />).container.firstChild;
    });

    when('the user selects a number of events to display', async () => {
      const user = userEvent.setup();

      const NumberOfEventsDOM = AppDOM.querySelector('#number-of-events');
      const NumberOfEventsInput = within(NumberOfEventsDOM).queryByTestId(
        'number-of-events-input'
      );

      await user.type(NumberOfEventsInput, '{backspace}{backspace}10');
    });

    then('only the specified number of events should be shown', () => {
      const EventListDOM = AppDOM.querySelector('#event-list');
      const allRenderedEventItems =
        within(EventListDOM).queryAllByRole('listitem');
      expect(allRenderedEventItems.length).toBe(10);
    });
  });
});
