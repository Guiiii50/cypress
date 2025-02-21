import Login from "./Demo/PogeObject/login";

describe('cypress POM test', function() {

    it("Login avec un username et un mot de passe invalide", function() {
        const loginpage = new Login()

        loginpage.navigate()
        loginpage.username('locked_out_user')
        loginpage.Password('secret_sauce')
        loginpage.submit_error()
        cy.url().should('be.equal', 'https://www.saucedemo.com/v1/')
    })
    
    it("Login avec un username et un mot de passe valide", function() {
        const loginpage = new Login()

        loginpage.navigate()
        loginpage.username('standard_user')
        loginpage.Password('secret_sauce')
        loginpage.submit()
        cy.url().should('be.equal', 'https://www.saucedemo.com/v1/inventory.html')
    })


})