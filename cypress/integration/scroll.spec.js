describe("scroll", () => {
    beforeEach(() => {
        cy.visit("scroll.html")
    })
    describe("by using is.visible", () => {
        it("is.visible fails if not in view", () => {
            cy.get("#toscroll").should("be.visible");
        })

        it("is.visible succeeds if element in view", () => {
            cy.get("#toscroll").then($e => $e[0].scrollIntoView());
            cy.get("#toscroll").should("be.visible");
        })
    })

    describe("by using clientRect", () => {
        it("fails without scrolling", () => {
            cy.get("#toscroll").should($e => {
                expect($e[0].getClientRects()[0].top).lessThan(100);
            });
        })

        it("clientRect should have correct size", () => {
            cy.get("#toscroll").then($e => $e[0].scrollIntoView());
            cy.get("#toscroll").should($e => {
                expect($e[0].getClientRects()[0].top).lessThan(100);
            });
        })
    })
})