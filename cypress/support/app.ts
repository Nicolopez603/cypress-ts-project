declare namespace Cypress {
  interface Chainable {
    /**
     * Navigate to the homepage
     */
    visitHomePage(): Chainable<Element>

    /**
     * Navigate to the login page
     */
    visitLoginPage(): Chainable<Element>

    /**
     * Navigate to the feedbackpage
     */
    visitFeedbackPage(): Chainable<Element>

    /**
     * @param second- how many seconds should the execution wait
     */
    waitForSeconds(seconds: number): Chainable<Element>
  }
}

Cypress.Commands.add('visitHomePage', () => {
  cy.visit('http://zero.webappsecurity.com/')
})

Cypress.Commands.add('visitLoginPage', () => {
  cy.visit('http://zero.webappsecurity.com/login.html')
})

Cypress.Commands.add('visitFeedbackPage', () => {
  cy.visit('http://zero.webappsecurity.com/feedback.html')
})

Cypress.Commands.add('waitForSeconds', (seconds) => {
  cy.wait(seconds * 1000)
})
