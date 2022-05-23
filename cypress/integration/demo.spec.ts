describe('Demo Test', () => {
  it('Should login into a website', () => {
    cy.visitLoginPage()
    cy.waitForSeconds(5)
    cy.fixture('loginData').then(({ username, password }) => {
      cy.login(username, password)
    })
  })
})
