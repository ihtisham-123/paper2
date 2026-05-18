describe('Login Tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Login with valid credentials', () => {
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    cy.url().should('include', '/inventory.html')
    cy.get('.title').should('have.text', 'Products')
    cy.screenshot('login-success')
  })

  it('Login with invalid password', () => {
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('wrongpassword')
    cy.get('[data-test="login-button"]').click()

    cy.get('[data-test="error"]').should('be.visible')
  })

  it('Login with empty fields', () => {
    cy.get('[data-test="login-button"]').click()

    cy.get('[data-test="error"]').should('be.visible')
  })
})