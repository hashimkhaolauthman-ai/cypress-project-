describe('Swag Labs Login', () => {

    it('logs in with standard user', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test=password]').type('secret_sauce')
        cy.get('[data-test=login-button]').click()
        cy.get('[data-test=add-to-cart-sauce-labs-backpack]').should('exist')
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1')
    cy.get('[data-test="inventory-item-sauce-labs-bike-light-img"]')
    cy.get('[data-test="inventory-item-sauce-labs-bike-light-img"]')
    cy.get('[data-test="add-to-cart-sauce-labs-onesie"]')
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]')
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]')
    
    
    
    
    })


    
})