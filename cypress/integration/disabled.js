describe.skip("disabled", () => {
    it("stub", () => {
        cy.visit("https://docs.cypress.io/");
        cy.server()
        cy.route("POST", /.*queries.*/, "fixture:cy-doc.json").as("query")
        cy.get("#search-input").type("devcamp-weiden")
        /*cy.wait("@query").then(xhr => {
            debugger;
        })*/
    })
    
    it("test2", () => {
        cy.setCookie("cb2", "2").visit("https://www.witt-weiden.de")
        cy.get(".js-osecom-input__search-query").type("Pul");
        cy.get(".easy-autocomplete-container").should("contain", "Pullover");
    })
})