import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pages/LoginPage";

Given("I open the login page", () => {
  LoginPage.visit();
});

When("I enter username {string}", (username) => {
  LoginPage.enterUsername(username);
});

When("I enter password {string}", (password) => {
  LoginPage.enterPassword(password);
});

When("I click login", () => {
  LoginPage.clickLogin();
});

Then("I should be redirected to the products page", () => {
  cy.url().should("include", "/inventory.html");
});

Then("I should see an error message", () => {
  cy.get("[data-test='error']").should("be.visible");
});