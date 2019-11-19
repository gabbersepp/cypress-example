describe("test", () => {
    beforeEach(() => {
        cy.wrap(null).as("asd")
        cy.window().then((w) => {
            cy.visit("http://localhost:3000/jbtest/1", { timeout: 10000 });
        });
    })
    it("test", () => {
        cy.window().then((w) => {
            w.location.replace(`https://localhost:3000/jbtest/2`);
            cy.visit("https://localhost:3000/jbtest/2", { timeout: 10000 }).then(() => expect(false).to.eq(true));
            expect(false).to.eq(true);
        });
    })
})