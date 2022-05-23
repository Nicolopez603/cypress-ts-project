describe('Demo Test', () => {
  it('Should login into a website', () => {
    cy.visitLoginPage()
    cy.fixture('loginData').then(({ username, password }) => {
      cy.login(username, password)
    })
  })
})
