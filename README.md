# Meet Event App

The **Event App** is a serverless, progressive web application (PWA) built with React. It allows users to search for upcoming events in any city using the Google Calendar API, view event details, and visualize event data using charts. The app is designed to work offline, can be installed as a shortcut on mobile devices, and offers an excellent user experience across all devices. The development process follows a test-driven development (TDD) approach to ensure high-quality code.

## Features

- **Filter Events by City**
  - Search for a city to view upcoming events.
  - Suggestions provided while typing, allowing users to select a city from the list.
- **Show/Hide Event Details**
  - Events are collapsed by default, with the ability to expand and view additional details.
- **Specify Number of Events**
  - Users can control how many events are displayed at once, with a default of 32 events.
- **Use the App Offline**
  - The app caches data for offline use, allowing users to view events even without an internet connection.
- **Add an App Shortcut to the Home Screen**
  - Users can install the app on their home screen, enabling easy access.
- **Display Charts Visualizing Event Details**
  - View charts that visualize event data, including: - A scatterplot showing the number of upcoming events in each city. - A pie chart representing the popularity of event genre

## Tech Stack

- **React**: Library for building the user interface.
- **React Router**: Manages in-app navigation.
- **Google Calendar API**: Fetches event data using OAuth2 authentication.
- **AWS Lambda**: Serverless functions used for authentication.
- **Chart.js**: Library used for visualizing event data.
- **Jest/Enzyme**: Tools for unit and integration testing.
- **Workbox**: Service worker integration for offline functionality.
- **JavaScript (ES2015+)**: Modern JavaScript for handling logic.
- **CSS/SCSS**: Stylesheets for responsive design.

## Screenshots

Will be added later

## Development Process

This app was developed using a **test-driven development (TDD)** methodology. Key development milestones included:

- Writing user stories and test scenarios for each feature before implementation.
- Implementing features and writing unit tests to cover the codebase with a test coverage of over 90%.
- Performing integration and end-to-end testing to ensure the entire system works as expected.
- Deploying the app on GitHub Pages for easy access and installation.

## User-Stories

**User Story 1**: As a user,
I should be able to filter events by city
So that I can see a list of events taking place in that city.

**User Story 2**: As a user,
I want to show and hide event details,
So that I can quickly view or hide additional information about specific events.

**User Story 3**: As a user,
I want to specify how many events are displayed,
So that I can control the number of events I see at once.

**User Story 4**: As a user,
I want to use the app when offline,
So that I can access event information without an internet connection.

**User Story 5**: As a user,
I want to add a shortcut to the app on my Home Screen,
So that I can easily open the app directly from my device’s Home Screen.

**User Story 6**: As a user,
I want to see charts visualizing event details,
So that I can quickly understand event-related data through visuals.

## Scenarios (Given-When-Then)

**Feature 1: Filter events by city**
Scenario: Show events from all cities when no city is selected
Given I have not searched for a city
When I open the events page
Then I should see a list of upcoming events from all cities

Scenario: Display city suggestions while typing
Given I am typing the name of a city in the search bar
When there are matching cities in the database
Then I should see a list of city suggestions

Scenario: Filter events after selecting a city
Given I am typing the name of a city in the search bar
And I select a city from the suggestions
When I confirm my selection
Then I should see a list of events from the selected city

**Feature 2: Show/Hide Event Details**

- Scenario: User views and hides event details

Given the user is viewing a list of events,
When the user selects an event to see its details,
Then the details of the selected event should be displayed.

Given the event details are currently displayed,
When the user chooses to hide the event details,
Then the details should be hidden from view.

**Feature 3: Specify Number of Events**

- Scenario: User specifies the number of events displayed

Given the user is on the events list page,
When the user selects a number of events to display,
Then only the specified number of events should be shown.

**Feature 4: Use the App When Offline**
-Scenario: User accesses the app while offline

Given the user has previously accessed the app online,
And the app has cached event data,
When the user opens the app without an internet connection,
Then the user should be able to view event data offline.

**Feature 5: Add an App Shortcut to the Home Screen**

- Scenario: User adds the app to the Home Screen

Given the user is on the app’s main page,
When the user selects the option to add the app to their Home Screen,
Then a shortcut to the app should be added to the user's Home Screen.

**Feature 6: Display Charts Visualizing Event Details**

- Scenario: User views charts visualizing event details

Given the user is viewing a specific event,
When the user navigates to the event details section,
Then charts visualizing the event’s data should be displayed.

## Development Status

🚧 **This project is currently in development.**

## Deployment

The app is deployed on GitHub Pages. You can access it [here](https://margaux-works.github.io/meet/)

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request.

## License

This project is licensed under the MIT License.
