# Cypress Testing Lab

This project is a beginner-friendly Cypress end-to-end testing lab built on [SauceDemo](https://www.saucedemo.com).

## What I built

I created Cypress tests that cover:

- logging in with valid and invalid credentials
- menu navigation and browser back navigation
- adding products to the cart
- common assertions such as visibility, text, attributes, and negative checks
- alias usage
- a custom Cypress command for login

## Files included

- `cypress/e2e/task1/login.cy.js`
- `cypress/e2e/task1/navigation.cy.js`
- `cypress/e2e/task1/form.cy.js`
- `cypress/e2e/task2/assertions.cy.js`
- `cypress/e2e/task2/alias.cy.js`
- `cypress/e2e/task2/customCommand.cy.js`
- `cypress/support/commands.js`
- `cypress/support/e2e.js`

## Setup

Install the dependencies:

```bash
npm install
```

## Run the tests

Open Cypress in interactive mode:

```bash
npm run cy:open
```

Run all tests in headless mode:

```bash
npm run cy:run
```

Run only the navigation spec:

```bash
npx cypress run --spec "cypress/e2e/task1/navigation.cy.js"
```

## Screenshots

The login spec includes an example screenshot command:

```javascript
cy.screenshot('login-success')
```

If you run the tests, Cypress saves screenshots in `cypress/screenshots`.

## Issue I faced and how I solved it

While testing the navigation spec, I faced two issues:

1. **The `beforeEach` hook failed after login** because the test was waiting for `.inventory_list`, which was not the most reliable selector for confirming the page had loaded.
2. **The back-navigation test failed** because the page had not fully returned to the inventory screen before the title assertion ran.
3. **An uncaught browser exception appeared**: `Cannot read properties of null (reading 'postMessage')`.

### How I fixed it

- I changed the setup to log in directly with stable `data-test` selectors.
- I verified login using `cy.url().should('include', '/inventory.html')` and `cy.get('.title').should('have.text', 'Products')`.
- After `cy.go('back')`, I waited for the inventory page URL again before checking the title.
- I added a global Cypress handler in `cypress/support/e2e.js` to ignore the known `postMessage` exception.

## What I learned

This project helped me understand:

- how to write stable Cypress selectors
- why waiting for the correct URL or element matters in UI tests
- how to use aliases and custom commands to avoid repeated code
- how to handle common browser/test errors in Cypress

## Summary

I built a Cypress test suite for SauceDemo, fixed flaky navigation issues, added a browser exception handler, and organized the project for easier testing and submission.