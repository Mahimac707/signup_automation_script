describe('Signup- step 1', () => {

  it('Test 2', () => {

    cy.visit('/register');

    cy.contains('Welcome to Authorized Partner').should('be.visible');
    cy.contains('Register Your Agency').should('be.visible');

    cy.get('button[role="checkbox"]')
      .should('have.attr', 'aria-checked', 'false')
      .click()
      .should('have.attr', 'aria-checked', 'true');

    cy.contains('button', 'Continue')
      .should('not.be.disabled')
      .click();

    cy.url({ timeout: 10000 })
      .should('include', '/register?step=setup');

  });

});
