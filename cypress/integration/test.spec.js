describe("initial", () => {
    it("visit", () => {
        cy.visit("/index.html");
        cy
            .get("p")
            .contains(/.*scroll.*/)
            .should("be.visible")
    })
})