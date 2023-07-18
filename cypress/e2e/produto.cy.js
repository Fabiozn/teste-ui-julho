/// <reference types="cypress" />

describe('funcionalidade Página de produtos', () => {

    beforeEach(() => {
        cy.visit ('http://lojaebac.ebaconline.art.br/produtos/page/2/')
    });

    it('Deve selecionar produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first()
            //.last()
            //.eq(3)
           .contains('Atlas Fitness Tank')
            .click()

    });
    it('Deve adicionar produto ao carrinho', () => {
var quantidade = 3

        cy.get('[class="product-block grid"]')
        .contains('Autumn Pullie').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()    
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain' , quantidade )   
        cy.get('.woocommerce-message').should ('contain' , quantidade +' × “Autumn Pullie” foram adicionados no seu carrinho.')
    });

    it('Deve adicionar produtos ao carrinho - Usando Comando Customizado', () => {
        var quantidade = 5
        cy.addProduto('Autumn Pullie', 'm', 'black', 2);
        // Rest of the test code...
      });
});

