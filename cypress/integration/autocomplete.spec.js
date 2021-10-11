describe("Success case", function () {
  beforeEach(function () {
    cy.visit("http://localhost:3000/");
  });

  it("Search for Andorra", function () {
    cy.get('[data-testid="autocomplete-input"]').click().type("Andorra");

    cy.get('[data-testid="autocomplete-result-AD"]').should("exist");
  });

  it("Search for BR countries", function () {
    cy.get('[data-testid="autocomplete-input"]').click().type("BR");

    cy.get('[data-testid="autocomplete-result-BR"]').should("exist");

    cy.get('.Autocomplete__Results div')
      .should('have.length', 4)
  });
});
