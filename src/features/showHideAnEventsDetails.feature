Feature: Show/Hide Event Details
    Scenario: An event element is collapsed by default
        Given A user is on the app
        When They view the list of events
        Then Each event should be displayed in a collapsed state, showing only basic information like title, date, and location
     
    Scenario: User views event details
        Given the user is viewing a list of events
        When the user selects an event to see its details
        Then the details of the selected event should be displayed.

    Scenario: User hides event details
        Given the event details are currently displayed
        When the user chooses to hide the event details
        Then the details should be hidden from view