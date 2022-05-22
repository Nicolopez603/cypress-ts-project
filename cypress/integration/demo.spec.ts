describe('Demo Test', () => {
  it('Should login into a website', () => {
    cy.visitLoginPage()
    cy.login('username', 'password')
  })
})
