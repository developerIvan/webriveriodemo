Feature: Navigating trought automate now websise 

  Scenario Outline: As a user, I can go to diferrent sections of the automate now webside

    Given I am on the automate now page
    When I click on an specific <section> button
    Then I should see the current section's title is <expectedSection>

    Examples:
      | section  | expectedSection        |
      | Training | Training               |
      | Sandbox  | Sandbox                |
