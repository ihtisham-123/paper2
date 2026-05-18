describe('Alias Practice', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Using Alias', () => {
    cy.get('[data-test="username"]').as('usernameField')

    cy.get('@usernameField').type('standard_user')
    cy.get('@usernameField').should('have.value', 'standard_user')
  })
})