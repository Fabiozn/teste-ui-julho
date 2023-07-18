///<reference types="cypress" />

describe('Funcionalidade endereço - faturamento e entrega', () => {
    beforeEach(() => {
      cy.visit('http://lojaebac.ebaconline.art.br/my-account/')
      cy.fixture('perfil').then(dados => {
        cy.login(dados.usuario, dados.senha)
     
      })
    });
  
    it('Deve fazer cadastro de faturamento com sucesso', () => {
      // Implemente o código do teste aqui
    });
  });
  