//controlleur 

import  {Login, addPrice1, ConnexF,formulaire} from "./login";


// IMPORTE CETTE CLASSE la de ce dossier 


describe('Cypress POM Test Suite', function () {


    beforeEach(() => {
        cy.visit('/');
        cy.fixture('example').as('userData');
        });

        it.skip('Login avec un email et mot de passe valide', function()  {
            
            // tu crées un constante pour recuperer tous les elements dans objet Login de la page login.js
            const loginpage = new Login();
            // Login cest un objet / j'instancie de la classe
        
            loginpage.navigate();
          
            // standard_user =  valeur du paramettre qu'on a mis dans la fonction email
            loginpage.email('standard_user');
            loginpage.password('secret_sauce');
            loginpage.submit();
            cy.url().should('be.equal','https://www.saucedemo.com/v1/inventory.html');
            cy.wait(1000)
        });


        it('Login avec un email non valide et mot de passe valide', function()  {
        
            const loginFpage = new Login();
            // j'instancie de la classe
    
            loginFpage.navigate();
            loginFpage.email('locked_out_user');
            loginFpage.password('secret_sauce');
            loginFpage.submit();
            // cy.url().should('be.equal','https://www.saucedemo.com/v1/');

            const connexp = new ConnexF();

            cy.get('#login-button').click()
            cy.get('h3[data-test="error"]').contains('Sorry, this user has been locked out.').should('be.visible')
            cy.wait(1000)
        });



        it.skip('ajouter Panier', function () {

            const loginpage = new Login();
            loginpage.email('standard_user');
            loginpage.password('secret_sauce');
            loginpage.submit();

            const addpanier = new addPrice1();
            addpanier.addPrice();
            cy.wait(1000)
        });


        it('remplir form', function() {
            const loginpage = new Login();
            loginpage.email('standard_user');
            loginpage.password('secret_sauce');
            loginpage.submit();
            const addpanier = new addPrice1();
            addpanier.addPrice();
        
            const form = new formulaire();
            form.form(this.userData.user.firstName, this.userData.user.lastname, this.userData.user.postalCcode);
            cy.wait(1000)             
        });
    
        });