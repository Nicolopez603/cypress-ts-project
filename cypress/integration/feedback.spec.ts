describe('Feedback Test', () => {
  it('Should submit feedback form', () => {
    cy.visitFeedbackPage()
    cy.submitFeedback(
      'peter',
      'test@email.com',
      'My Subject',
      'This is my Message!'
    )
  })
})
