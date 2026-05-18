describe('Navigation Tests', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    cy.url().should('include', '/inventory.html')
    cy.get('.title').should('have.text', 'Products')
  })

  it('Open menu and verify page', () => {
    cy.get('#react-burger-menu-btn').click()
    cy.get('#about_sidebar_link').click()

    cy.url().should('include', 'saucelabs')
  })

  it('Visit two pages sequentially', () => {
    cy.get('#item_4_title_link').should('be.visible').click()

    cy.get('.inventory_details_name').should('be.visible')
    cy.go('back')

    cy.url().should('include', '/inventory.html')
    cy.get('.title', { timeout: 10000 })
      .should('be.visible')
      .and('have.text', 'Products')
  })
})