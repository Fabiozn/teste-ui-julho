/// <reference types="cypress" />
const { it } = require('faker/lib/locales');
const perfil = require('../fixtures/perfil.json')


context('Funcionalidade Login', () => {
   beforeEach(() => {
      cy.visit('http://lojaebac.ebaconline.art.br/my-account/')

   });
   afterEach(() => {
      cy.screenshot()
   });
   
   it ('Deve fazer login com sucesso ', () => {

      cy.get('#username').type('perfil.usuario')
      cy.get('#password').type('teste@teste.com')
      cy.get('#password').click()
      cy.get('a > .hidden-xs').should('contain', 'Welcome')
   });


   it('Deve fazer login com sucesso  -usando arquivo de dados', () => {

      cy.get('#username').type(perfil.usuario)
      cy.get('#password').type(perfil.senha)
      cy.get('.woocommerce-form > .button').click()
      cy.get('a > .hidden-xs').should('contain', 'Welcome')

   });
   it('Deve fazer login com sucesso usando fixture', () => {
      cy.fixture('perfil').then(dados => {
         cy.get('#username').type(dados.usuario)
         cy.get('#password').type(dados.senha)
         cy.get('.woocommerce-form > .button').click()
         cy.get('a > .hidden-xs').should('contain', 'Welcome')
      })

   });

   it('Deve inserir uma mensagem de erro ao inserir usuário  inválido', () => {
      cy.get('#username').type('aluno_ebac@teste')
      cy.get('#password').type('teste@teste.com')
      cy.get('.woocommerce-form > .button').click()
      cy.get('.woocommerce-error > li').should('contain', 'Erro: o usuário')

   })
   it('Deve inserir uma mensagem de erro ao inserir  senha inválida', () => {
      cy.get('#username').type('aluno_ebac@teste.com')
      cy.get('#password').type('teste@teste')
      cy.get('.woocommerce-form > .button').click()
      cy.get('.woocommerce-error > li').should('contain', 'Erro: a senha fornecida')

   })

})
