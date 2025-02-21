class Login{
    navigate(){
        cy.visit('https://www.saucedemo.com/v1/')
    }
    username(username) {
        cy.get('#user-name')
        .clear()
        .type(username);
        return this
     }
    Password(password) {
        cy.get('#password')
        .clear()
        .type(password);
        return this
    }
    submit() {
        cy.get('#login-button').click()
    }
    submit_error() {
        cy.get('#login-button').click()
        cy.get("h3[data-test='error']").contains('Sorry, this user has been locked out.')
        cy.log("Le message d'erreur apparait")
    }
}




export default Login