const { describe } = require("mocha")
let First_name = "Billy"
let Last_name = "PRESCOTT"
let Code_post = "59000"


describe('template spec', () => {
  
  it('accès au site', () => {
    cy.visit('/')
  })

  it('log non-passant', () => {
    cy.visit('/')
    cy.get('#user-name').click()
    cy.get('#user-name').type('locked_out_user')
    cy.get('#password').click()
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get("h3[data-test='error']").contains('Sorry, this user has been locked out.')
  })

  it.skip('log passant', () => {
    cy.visit('/')
    cy.get('#user-name').click()
    cy.get('#user-name').type('standard_user')
    cy.get('#password').click()
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
  })

  it.skip('trie au plus cher', () => {
    cy.visit('/')
    cy.get('#user-name').click()
    cy.get('#user-name').type('standard_user')
    cy.get('#password').click()
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('.product_sort_container').select('hilo')
    // cy.screenshot()
  })

  it.skip('ajouter au panier 2 articles', () => {
    cy.visit('/')
    cy.get('#user-name').click()
    cy.get('#user-name').type('standard_user')
    cy.get('#password').click()
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('.product_sort_container').select('hilo')

    cy.get('.btn_primary.btn_inventory').eq(0).click()
    cy.get('.btn_primary.btn_inventory').eq(0).click()
  })

  it.skip('ouvrir le panier', () => {
    cy.visit('/')
    cy.get('#user-name').click()
    cy.get('#user-name').type('standard_user')
    cy.get('#password').click()
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('.product_sort_container').select('hilo')
    cy.get('.btn_primary.btn_inventory').eq(0).click()
    cy.get('.btn_primary.btn_inventory').eq(0).click()

    cy.get('#shopping_cart_container').click()
  })

  it.skip('cliquer sur le checkout', () => {
    cy.visit('/')
    cy.get('#user-name').click()
    cy.get('#user-name').type('standard_user')
    cy.get('#password').click()
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('.product_sort_container').select('hilo')
    cy.get('.btn_primary.btn_inventory').eq(0).click()
    cy.get('.btn_primary.btn_inventory').eq(0).click()
    cy.get('#shopping_cart_container').click()
    cy.get('.btn_action.checkout_button').click()

    cy.get('#first-name').type(First_name)
    cy.get('#last-name').type(Last_name)
    cy.get('#postal-code').type(Code_post)
  })

  it.skip('cliquer sur le checkout', () => {
    cy.visit('/')
    cy.get('#user-name').click()
    cy.get('#user-name').type('standard_user')
    cy.get('#password').click()
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('.product_sort_container').select('hilo')
    cy.get('.btn_primary.btn_inventory').eq(0).click()
    cy.get('.btn_primary.btn_inventory').eq(0).click()
    cy.get('#shopping_cart_container').click()
    cy.get('.btn_action.checkout_button').click()
    cy.get('#first-name').type(First_name)
    cy.get('#last-name').type(Last_name)
    cy.get('#postal-code').type(Code_post)

    cy.get('.btn_primary.cart_button').click()
  })

  it('cliquer sur le checkout', () => {
    cy.visit('/')
    cy.get('#user-name').click()
    cy.get('#user-name').type('standard_user')
    cy.get('#password').click()
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('.product_sort_container').select('hilo')
    cy.get('.btn_primary.btn_inventory').eq(0).click()
    cy.get('.btn_primary.btn_inventory').eq(0).click()
    cy.get('#shopping_cart_container').click()
    cy.get('.btn_action.checkout_button').click()
    cy.get('#first-name').type(First_name)
    cy.get('#last-name').type(Last_name)
    cy.get('#postal-code').type(Code_post)
    cy.get('.btn_primary.cart_button').click()

    cy.get('.btn_action.cart_button').click()
  })

})