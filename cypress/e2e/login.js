//CLASSE


class Login {
    navigate() {
        cy.visit('https://www.saucedemo.com/v1/')  
    }

    // username cest le paramettre  de la fonction email , le paramettre n'est defini , le le sera dans test Demo
    email(username) {
        cy.get('#user-name').clear().type(username);
        return this
    }

    password(password) {
        cy.get('#password').clear().type(password);
        return this
    }

    submit () {
        cy.get('#login-button').click();
    }

}



class ConnexF {
    navigate() {
        cy.visit('https://www.saucedemo.com/v1/')  
    }

    fake(emailFake) {

        cy.get('#user-name').type(emailFake);
        return this
       
    }
    
    submit () {
        cy.get('#login-button').click();
    }

}


class addPrice1{

    addPrice () {

    cy.get('.product_sort_container').select('Price (high to low)') 

    cy.get('.btn_primary.btn_inventory').eq(0).click()
    cy.wait(1000)
    cy.get('.btn_primary.btn_inventory').eq(0).click()
    cy.wait(1000)

    cy.get('#shopping_cart_container').click()  
    cy.wait(1000)
    cy.get('.btn_action.checkout_button').click()
    cy.wait(1000)

    }

}


class formulaire{
    form( firstName ,lastname, postalCcode) {

        cy.get('#first-name').type(firstName)
        cy.get('#last-name').type(lastname)
        cy.get('#postal-code').type(postalCcode);
        cy.get('.btn_primary.cart_button').click()
    
    
      cy.get('.btn_action.cart_button').click();
        
    }
}

export {Login ,addPrice1, ConnexF, formulaire}