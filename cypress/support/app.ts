declare namespace Cypress {
  interface Chainable {
    visitHomePage(): Chainable<Element>
    visitLoginPage(): Chainable<Element>
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
