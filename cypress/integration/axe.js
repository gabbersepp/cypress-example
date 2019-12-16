before(() => {
    cy.visit("https://google.com");
    cy.injectAxe();
});

describe('Initial state of component', () => {
    it('Has no detectable a11y violations on load', () => {
        // Test the page at initial load
        cy.checkA11y()
    })
 })