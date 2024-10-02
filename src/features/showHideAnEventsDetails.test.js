/* eslint-disable testing-library/prefer-presence-queries */
/* eslint-disable testing-library/no-node-access */
import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, (test) => {
  //scenario 1
  test('An event element is collapsed by default', ({ given, when, then }) => {
    let AppComponent;
    given('A user is on the app', () => {
      AppComponent = render(<App />);
    });
    when('They view the list of events', async () => {
      // Event list already rendered upon loading the app
    });
    then(
      'Each event should be displayed in a collapsed state, showing only basic information like title, date, and location',
      () => {
        const EventListDOM =
          AppComponent.container.querySelector('#event-list');
        const EventItems = within(EventListDOM).queryAllByRole('listitem');

        EventItems.forEach((eventItem) => {
          expect(
            within(eventItem).queryByText('Show Details')
          ).toBeInTheDocument();
          expect(
            eventItem.querySelector('.eventDetails')
          ).not.toBeInTheDocument();
        });
      }
    );
  });

  //scenario 2
  test('User views event details', ({ given, when, then }) => {
    let AppComponent;
    given('the user is viewing a list of events', () => {
      AppComponent = render(<App />);
    });

    when('the user selects an event to see its details', async () => {
      const user = userEvent.setup();
      await waitFor(() => {
        const EventListDOM =
          AppComponent.container.querySelector('#event-list');
        expect(EventListDOM).toBeInTheDocument();
      });

      const EventListDOM = AppComponent.container.querySelector('#event-list');
      const firstEvent = within(EventListDOM).queryAllByRole('listitem')[0];

      await waitFor(() => {
        expect(
          within(firstEvent).queryByText('Show Details')
        ).toBeInTheDocument();
      });

      await user.click(within(firstEvent).queryByText('Show Details'));
    });

    then('the details of the selected event should be displayed.', async () => {
      const EventListDOM = AppComponent.container.querySelector('#event-list');
      const firstEvent = within(EventListDOM).queryAllByRole('listitem')[0];

      expect(
        within(firstEvent).queryByText('Hide Details')
      ).toBeInTheDocument();
      expect(firstEvent.querySelector('.eventDetails')).toBeInTheDocument();
    });
  });

  //scenario 3
  test('User hides event details', ({ given, when, then }) => {
    let AppComponent;
    let user;

    given('the event details are currently displayed', async () => {
      AppComponent = render(<App />);
      user = userEvent.setup();

      const EventListDOM = await waitFor(() =>
        AppComponent.container.querySelector('#event-list')
      );

      const firstEvent = within(EventListDOM).queryAllByRole('listitem')[0];

      await waitFor(() => {
        expect(
          within(firstEvent).queryByText('Show Details')
        ).toBeInTheDocument();
      });
      await user.click(within(firstEvent).queryByText('Show Details'));

      expect(firstEvent.querySelector('.eventDetails')).toBeInTheDocument();
    });

    when('the user chooses to hide the event details', async () => {
      const EventListDOM = AppComponent.container.querySelector('#event-list');
      const firstEvent = within(EventListDOM).queryAllByRole('listitem')[0];

      await user.click(within(firstEvent).queryByText('Hide Details'));
    });

    then('the details should be hidden from view', () => {
      const EventListDOM = AppComponent.container.querySelector('#event-list');
      const firstEvent = within(EventListDOM).queryAllByRole('listitem')[0];

      expect(firstEvent.querySelector('.eventDetails')).not.toBeInTheDocument();
      expect(
        within(firstEvent).queryByText('Show Details')
      ).toBeInTheDocument();
    });
  });
});
