/// <reference types="cypress" />

describe('funcionalidade Página de produtos', () => {

    beforeEach(() => {
        cy.visit ('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first()
            //.last()
            //.eq(3)
           .contains('Abominable Hoodie')
            .click()

    });
    it('Deve adicionar produto ao carrinho', () => {
var quantidade = 3

        cy.get('[class="product-block grid"]')
        .contains('Abominable Hoodie').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()    
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain' , quantidade )   
        cy.get('.woocommerce-message').should ('contain' , quantidade +' × “Abominable Hoodie” foram adicionados no seu carrinho.')
    });

  
});
