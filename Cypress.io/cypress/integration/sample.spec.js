describe('My first test', ()=>{
    it('Finds an element', ()=>{
        cy.visit('https://example.cypress.io')
        cy.contains('type').click()
    })
})