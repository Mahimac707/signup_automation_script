describe('Signup- step 2', () => {

  let mail; 

  beforeEach(() => {
    cy.createTempMail().then(m => {
      mail = m;

      cy.visit('/register?step=setup');

      cy.contains('Set up your Account').should('be.visible');

      cy.get('input[name="firstName"]').type('Mahima');
      cy.get('input[name="lastName"]').type('Chaudhary');

      cy.get('input[name="email"]').type(mail.email);

      const randomPhone = `9800${Math.floor(100000 + Math.random() * 900000)}`;
      cy.get('input[name="phoneNumber"]').type(randomPhone);

      cy.get('input[name="password"]').type('Passw0rd!');
      cy.get('input[name="confirmPassword"]').type('Passw0rd!');

      cy.contains('button', 'Next').click();
    });
  });

  it(' test 3 (OTP verification)', () => {

    cy.contains('Email Verification code', { timeout: 1500 })
      .should('be.visible');

    cy.wait(5000); 

    cy.getOtpFromMail(mail.token).then(otp => {

      cy.get('input[inputmode="numeric"]')
        .should('exist')
        .should('not.be.disabled')
        .clear()
        .type(otp);
    
      cy.contains('button', 'Verify Code')
        .should('be.visible')
        .and('not.be.disabled')
        .click();
    
      cy.url({ timeout: 5000 })
        .should('include', '/register?step=details');
    });
  });    
});

