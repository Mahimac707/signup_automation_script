describe('Signup flow', () => {

  it('Complete signup till details page', () => {

    // ---------- CREATE TEMP MAIL ----------
    cy.createTempMail().then(mail => {

      // ---------- SETUP YOUR ACCOIUNT PAGE ----------
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

      // ---------- DETAILS(OTP PAGE) ----------
      cy.contains('Email Verification code', { timeout: 15000 })
        .should('be.visible');

      cy.wait(5000);

      cy.getOtpFromMail(mail.token).then(otp => {

        cy.get('input[inputmode="numeric"]')
          .should('not.be.disabled')
          .clear()
          .type(otp);

        cy.contains('button', 'Verify Code')
          .should('not.be.disabled')
          .click();

      // ----------AGENCY DETAILS PAGE ----------
        cy.url({ timeout: 15000 })
        .should('include', '/register?step=details');
      
      cy.get('input[name="agency_name"]').type('Mahima Digital Agency');
      
      cy.get('input[name="role_in_agency"]').type('Software Testing');
      
      cy.get('input[name="agency_email"]')
        .type(mail.email)
        .should('have.value', mail.email);
      
      cy.get('input[name="agency_website"]').type('www.mahimaagency.com');
      
      cy.get('input[name="agency_address"]').type('Nepal');
      
      cy.get('button[role="combobox"]').click();
      cy.contains('Australia').click();
      
      cy.contains('button', 'Next').click();

     //------------PROFESSIONAL EXPERIENCE PAGE----------
      
     cy.url({ timeout: 15000 })
     .should('include', '/register?step=professional-experience');

     cy.get('button[role="checkbox"]').first()
     .should('be.visible')
     .click();
   
     cy.get('button[role="combobox"]') 
     .should('be.visible')
     .click();
   
     cy.get('[role="option"]')           
     .contains('1 year')               
     .click();
     
     cy.get('input[name="number_of_students_recruited_annually"]').type('5');
     cy.get('input[name="focus_area"]').type('Intern to VritTech');
     cy.get('input[name="success_metrics"]').type('95%');

     cy.get('button[role="checkbox"]').first()
     .should('have.attr', 'aria-checked', 'true')
     
     cy.contains('button', 'Next').click();

     cy.url({ timeout: 15000 })
     .should('include', '/register?step=verification');
     
     //-----------VERIFICATION AND PREFERENCE------------

     cy.url({ timeout: 15000 }).should('include', '/register?step=verification');

     cy.get('input[name="business_registration_number"]').type('11');
     
     cy.get('button[role="combobox"]').first().click();
     cy.contains('Australia').click();
     
     cy.get('input[name="certification_details"]')
     .should('exist')
     .and('not.have.attr', 'required');

     cy.get('button[role="checkbox"]').first()
     .should('be.visible')
     .click()
     
     cy.get('input[type="file"]', { timeout: 10000 })
       .should('exist')
       .attachFile('images/profile.jpg');

     cy.contains('button', 'Submit').click();

     cy.url({timeout: 15000})
     .should('include', '/admin/profile');       
     });
   });
 });
});
