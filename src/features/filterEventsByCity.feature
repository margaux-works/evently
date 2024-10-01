Feature: Filter events by city
    Scenario: Show events from all cities
        Given I have not searched for a city 
        When I open the app 
        Then I should see a list of upcoming events from all cities

    Scenario: Display city suggestions while typing 
        Given I should see a list of suggestions when I search for a city
        When I starts typing in the city textbox 
        Then I should receive a list of cities (suggestions) that match what I’ve typed

    Scenario: Allow user to select a city from the suggested list.
        Given I was typing “Berlin” in the city textbox
        And the list of suggested cities is showing
        When I select a city (e.g., “Berlin, Germany”) from the list
        Then the city should be changed to that city (i.e., “Berlin, Germany”)
        And I should receive a list of upcoming events in that city

