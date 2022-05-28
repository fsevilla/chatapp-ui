describe('Login tests', () => {
    it('should show error with wrong credentials', () => {
        cy.visit('/')
        cy.get('input[name="email"]').type('hola@hola.com');
        cy.get('input[name="password"]').type('123');
        cy.get('button').first().click();
        cy.contains('Wrong credentials');
    })

    it('should login with proper credentials', () => {
        cy.visit('/')
        cy.get('input[name="email"]').type('hola@hola.com');
        cy.get('input[name="password"]').type('12345678');
        cy.get('button').first().click();
        cy.contains('home works!');
    })
})