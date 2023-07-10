/// <reference types="cypress" />

context('Funcionalidade Login',() =>{
   beforeEach(() => {
      cy.visit ('http://lojaebac.ebaconline.art.br/my-account/')
      
   });
   afterEach(() => {
      cy.screenshot ()
      
   });

    it( 'Deve Fazer login com sucesso', () =>{
      cy.get('#username'). type ('aluno_ebac@teste.com')
      cy.get('#password').type ('teste@teste.com')
      cy.get('.woocommerce-form > .button').click()
      cy.get('a > .hidden-xs').should ('contain' , 'Welcome')
 })

   it ('Deve inserir uma mensagem de erro ao inserir usuário  inválido', () =>{
      cy.get('#username'). type ('aluno_ebac@teste')
      cy.get('#password').type ('teste@teste.com')
      cy.get('.woocommerce-form > .button').click()
      cy.get('.woocommerce-error > li').should ('contain','Erro: o usuário')
    
   })
   it ('Deve inserir uma mensagem de erro ao inserir  senha inválida', () =>{
      cy.get('#username'). type ('aluno_ebac@teste.com')
      cy.get('#password').type ('teste@teste')
      cy.get('.woocommerce-form > .button').click()
      cy.get('.woocommerce-error > li').should ('contain' , 'Erro: a senha fornecida')
    
   })

})
