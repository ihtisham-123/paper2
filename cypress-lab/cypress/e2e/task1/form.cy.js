describe('Form Test', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
  })

  it('Add product to cart', () => {
    cy.get('.inventory_item button').first().click()

    cy.get('.shopping_cart_badge').should('have.text', '1')
  })
})