describe('Custom Command Test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Login using custom command', () => {
    cy.login()

    cy.url().should('include', '/inventory.html')
  })
})