Feature: SauceDemo Login

  Scenario: Successful login with standard user
    Given I open the login page
    When I enter username "standard_user"
    And I enter password "secret_sauce"
    And I click login
    Then I should be redirected to the products page

  Scenario: Login with locked out user
    Given I open the login page
    When I enter username "locked_out_user"
    And I enter password "secret_sauce"
    And I click login
    Then I should see an error message