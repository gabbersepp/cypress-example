describe("asda", () => {
    it('GET cypress and log', () => {
        cy.server()
          .route('**/repos/cypress-io/cypress*')
          .as('getSiteInfo');
      
        cy.visit('https://www.cypress.io/dashboard');
      
        cy  
          .get('img[alt="Cypress.io"]')
          .click()
          .wait('@getSiteInfo', { timeout: 20000 })
          .then((xhr) => {
            cy.log(JSON.stringify(xhr.response.body))
          })
      })
})