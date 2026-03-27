import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("the user is on the login page", () => {
  cy.visit("https://www.saucedemo.com/");
});

When("the user enters valid credentials", () => {
  cy.get('[data-test="username"]').type('standard_user');
  cy.get('[data-test="password"]').type('secret_sauce');
  cy.get('[data-test="login-button"]').click();
});

Then("the user should be redirected to the dashboard", () => {
  cy.url().should('include', '/inventory.html');
});
