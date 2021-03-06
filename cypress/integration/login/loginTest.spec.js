/// <reference types="cypress" />
import { positiveTestParameters, negativeTestParameters } from './testParameters/testCases';

describe('Login Form Functionality', () => {
    beforeEach(() => {
        cy.visit('/sign-in');
    });
    positiveTestParameters.forEach((params) => {
        it.skip(params.testName, () => {
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
    negativeTestParameters.forEach((params) => {
        it(params.testName, () => {
            parseSpecialCharSequences: false
            if (!params.email) {
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

                // Verify Error Message "E-Mail is required"
                cy.get(params.id)
                    .parents('.ant-row')
                    .find('.has-error')
                    .should('have.text', params.errorMessage);
            } else if (!params.password) {
                // Fill the username
                cy.get('#username')
                    .type(params.email)
                    .should('have.value', params.email);
                // Fill the application name
                cy.get('#appName')
                    .type(params.appName)
                    .should('have.value', params.appName);

                // Locate and click on login button
                cy.get('[type="button"]').click();

                // Verify Error Message "Please input your password!"
                cy.get(params.id)
                    .parents('.ant-row')
                    .find('.has-error')
                    .should('have.text', params.errorMessage);
            } else if (!params.appName) {
                // Fill the username
                cy.get('#username')
                    .type(params.email)
                    .should('have.value', params.email);
                // Fill the password
                cy.get('#password')
                    .type(params.password)
                    .should('have.value', params.password);

                // Locate and click on login button
                cy.get('[type="button"]').click();

                // Verify Error Message "Please input your application name!"
                cy.get(params.id)
                    .parents('.ant-row')
                    .find('.has-error')
                    .should('have.text', params.errorMessage);
            } else {
                // Fill the username
                cy.get('#username')
                    .type(params.email, { parseSpecialCharSequences: false })
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

                // Verify Error Message "Wrong E-Mail or Password"
                cy.get(params.id)
                    .parents('.ant-row')
                    .find('.has-error')
                    .should('have.text', params.errorMessage);
            }
        });
    });
});