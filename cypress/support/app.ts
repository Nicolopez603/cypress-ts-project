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
  }
}

Cypress.Commands.add('visitHomePage', () => {
  cy.visit('http://zero.webappsecurity.com/')
})

Cypress.Commands.add('visitLoginPage',()=>{
  cy.visit('http://zero.webappsecurity.com/login.html')
})

Cypress.Commands.add('visitFeedbackPage',()=>{
  cy.visit('http://zero.webappsecurity.com/feedback.html')
})
