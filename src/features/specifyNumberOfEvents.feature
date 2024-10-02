Feature: Specify Number of Events
    Scenario: User sees 32 events by default if no number is specified
    Given a user is on the app
    When they have not changed any settings related to the number of events displayed
    Then the app should display a maximum of 32 events by default
        
    Scenario: User specifies the number of events displayed
        Given the user is on the app
        When the user selects a number of events to display
        Then only the specified number of events should be shown