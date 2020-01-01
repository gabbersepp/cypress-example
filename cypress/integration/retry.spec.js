/*describe("ad", () => {
    it("test", () => {
        cy.visit("https://www.cypress.io/")
        cy.get("*[aria-label='pricing']")
            .invoke('text').should(someValue => { 
                cy.get("asdad", {timeout: 5000}).should("not.exist");
            })
    })
})*/

describe("test", () => {
    it("spy", () => {
        cy.server();
        cy.route("POST", /.*queries.*/).as("request")

        cy.visit("https://docs.cypress.io/")
            .get("#search-input").type("1234567890")
            .wait("@request").then(xhr => {
                expect(xhr.status).to.eq(200)
            })
    })

    it("mock", () => {
        cy.server();

        const obj = JSON.parse(`
        {
            "results": [{
                    "hits": [{
                            "hierarchy": {
                                "lvl2": null,
                                "lvl3": null,
                                "lvl0": "Podcasts",
                                "lvl1": null,
                                "lvl6": null,
                                "lvl4": null,
                                "lvl5": null
                            },
                            "url": "https://stackoverflow.com",
                            "content": "mocked",
                            "anchor": "sidebar",
                            "objectID": "238538711",
                            "_snippetResult": {
                                "content": {
                                    "value": "mocked",
                                    "matchLevel": "full"
                                }
                            },
                            "_highlightResult": {
                                "hierarchy": {
                                    "lvl0": {
                                        "value": "Podcasts",
                                        "matchLevel": "none",
                                        "matchedWords": []
                                    }
                                },
                                "content": {
                                    "value": "mocked",
                                    "matchLevel": "full",
                                    "fullyHighlighted": false,
                                    "matchedWords": ["testt"]
                                }
                            }
                        }
                    ]
                }
            ]
        }
        
        `);

        cy.route("POST", /.*queries.*/, obj)

        cy.visit("https://docs.cypress.io/")
            .get("#search-input").type("1234567890")
            .get("#algolia-autocomplete-listbox-0").should("contain", "mocked")

    })
})



/*
                // some value = 'Pricing'
                const $el = Cypress.$("*[aria-label='dashboard']");
                // $el = "Dashboard" 
                if ($el.text() == someValue) {
                    // negativ
                    cy.get("dsfsdf").should("not.exist"); 
                } else {
                    cy.get("34334343").should("not.exist");
                } 
                */