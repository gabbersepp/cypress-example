<div>
<div class="item">
        ...many other html code
    </div>
    <div class="item">
        ...many other html code
    </div>
    <div class="item">
        ...many other html code
    </div>
</div>

it("test", () => {
    cy.get(".item").should($items => {
        cy.log(`amount: ${$items.length}`)
    })
})

it("test", () => {
    cy.get(".item").each($item => {
        cy.wrap($item).should($e => {
            expect($e.text()).to.eq("test")
        })
    })
})

cy.get('[data-cy="elements"]').should((elements)=> {
    for(var i = 0; i < elements.length; i++) {
        expect(elements.eq(i).text()).to.equal('something');
    }
}