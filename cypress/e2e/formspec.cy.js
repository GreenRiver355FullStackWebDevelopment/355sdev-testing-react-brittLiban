describe('formTesting', () => {

  beforeEach(() => {
    cy.visit("http://localhost:5173/")
  });

  it("Created the first booking!", ()=>{
    
    cy.get('[data-cy="input-name"]').type("Pizza")
    cy.get('[data-cy="input-address"]').type("The whiteHouse")
    cy.get('[data-cy="input-phone"]').type('2052904400')
    cy.get('[data-cy="input-cuisine"]').type('American')
    cy.get('[data-cy="input-rating"]').type(3)
   


    cy.get('[data-cy="form-submit"]').submit()
      cy.get(`[data-cy="Pizza"] ul`).within(() =>{
        cy.contains('li', 'The whiteHouse').should('be.visible')
        cy.contains('li', '2052904400').should('be.visible')
        cy.contains('li', 'American').should('be.visible')
        cy.contains('li', '3').should('be.visible')
    })
  })
});