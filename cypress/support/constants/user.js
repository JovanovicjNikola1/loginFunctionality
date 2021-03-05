const user1Email = Cypress.env("USER1_EMAIL");
const user1Password = Cypress.env("USER1_PASSWORD");
const app1Name = Cypress.env("APP1_NAME");
const user2Email = Cypress.env("USER2_EMAIL");
const user2Password = Cypress.env("USER2_PASSWORD");
const app2Name = Cypress.env("APP2_NAME");

export default {
    user1Email,
    user1Password,
    app1Name,
    user2Email,
    user2Password,
    app2Name
}