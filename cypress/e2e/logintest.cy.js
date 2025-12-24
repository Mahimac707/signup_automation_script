describe('Login Test', () => {

it('Test 1', () => {
  cy.visit("https://authorized-partner.vercel.app/")
  cy.title().should('eq','THE - Global Education Recruitment Platform')
})

it('Test 2', () => {
   cy.visit("/login")
   cy.get('input[name="email"]').type('mahimac346@gmail.com');
   cy.get('input[name="password"]').type('Momo77@7');

   cy.contains('button', 'Log In').click();

   cy.url().should('include', '/admin/profile');
 });

});