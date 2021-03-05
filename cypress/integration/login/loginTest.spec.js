/// <reference types="cypress" />
import { positiveTestParameters } from './testParameters/testCases';

describe('Login Form Functionality', () => {
    before(() => {
        cy.visit('/sign-in');
    });
    positiveTestParameters.forEach((params) => {
        it(params.testName, () => {

            // Fill the username
            cy.get('#username')
                .type(params.email)
                .should('have.value', params.email);

            // Fill the password
            cy.get('#password')
                .type(params.password)
                .should('have.value', params.password);

            // Fill the application name
            cy.get('#appName')
                .type(params.appName)
                .should('have.value', params.appName);

            // Locate and click on login button
            cy.get('[type="button"]').click();

            // Verify the page title is "Admin Panel"
            cy.title().should('eq', 'Admin Panel');
            cy.wait(2000);

            // Locate Log out link to return on starting state
            cy.get('.dropdown-content > [type="button"]').click()
                .then(() => {
                    cy.get('a[href="/logout"]').click();
                });
        });
    });
});