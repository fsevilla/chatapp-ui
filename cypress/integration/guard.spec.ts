
describe('Guard tests', () => {
    it('should not let me see profile', () => {
        cy.visit('/');
        cy.visit('/profile');
        cy.contains('Log in');
    })
});