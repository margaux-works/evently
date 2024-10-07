/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/prefer-presence-queries */
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Event from '../components/Event';
import { getEvents } from '../api';

describe('<Event /> component', () => {
  let EventComponent;
  let allEvents;
  beforeEach(async () => {
    allEvents = await getEvents();
    EventComponent = render(<Event event={allEvents[0]} />);
  });

  // Event details
  test('renders event title', () => {
    expect(
      EventComponent.queryByText(allEvents[0].summary)
    ).toBeInTheDocument();
  });

  test('renders event location', () => {
    expect(
      EventComponent.queryByText(allEvents[0].location)
    ).toBeInTheDocument();
  });

  //Show Details Button
  test('renders event details button with title (show details)', () => {
    expect(EventComponent.queryByText('Show Details')).toBeInTheDocument();
  });

  test("Event's details are hidden by default", () => {
    expect(
      EventComponent.container.querySelector('.eventDetails')
    ).not.toBeInTheDocument();
  });

  test('shows the details section when user clicks on show details button', async () => {
    const user = userEvent.setup();
    await user.click(EventComponent.container.querySelector('.showDetailsBtn'));

    expect(
      EventComponent.container.querySelector('.eventDetails')
    ).toBeInTheDocument();
    expect(EventComponent.queryByText('Hide Details')).toBeInTheDocument();
    expect(EventComponent.queryByText('Show Details')).not.toBeInTheDocument();
  });

  test('hide the details section when user clicks on hide details button', async () => {
    const user = userEvent.setup();
    await user.click(EventComponent.queryByText('Show Details'));
    expect(
      EventComponent.container.querySelector('.eventDetails')
    ).toBeInTheDocument();
    expect(EventComponent.queryByText('Hide Details')).toBeInTheDocument();
    expect(EventComponent.queryByText('Show Details')).not.toBeInTheDocument();

    await user.click(EventComponent.queryByText('Hide Details'));
    expect(
      EventComponent.container.querySelector('.eventDetails')
    ).not.toBeInTheDocument();
    expect(EventComponent.queryByText('Hide Details')).not.toBeInTheDocument();
    expect(EventComponent.queryByText('Show Details')).toBeInTheDocument();
  });
});
