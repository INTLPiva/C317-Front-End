/// <reference types="cypress"/>git

describe('Criando cenario de teste para o frontend da aplicação GetJobs - Projeto C317', ()=>{

  it('Caso de teste 01: Clicando no Home', () => {

    cy.visit('http://localhost:3000')
    cy.get('[href="/"]').click()
    cy.get('h1 > a').should('contain.text', 'Como podemos lhe servir?')
  });

  it.skip('Caso de teste 02: Clicando em Serviços', () => {

    cy.visit('http://localhost:3000')
    cy.get('.links > [href="/servicos"]').click()
    cy.get('h1 > a').should('contain.text', 'Como podemos lhe servir?')
  });

  it('Caso de teste 03: Clicando em Sobre', () => {

    cy.visit('http://localhost:3000')
    cy.get('[href="/sobre"]').click()
    cy.get('p').should('contain.text', 'Uma plataforma online')
  });

  it('Caso de teste 04: Clicando em Contato', () => {

    cy.visit('http://localhost:3000')
    cy.get('[href="/contato"]').click()
    cy.get('.sc-gTRrQi > div > :nth-child(2)').should('contain.text', 'Telefone')
  });
  
  it('Caso de teste 05: Clicando em Login', () => {

    cy.visit('http://localhost:3000')
    cy.get(':nth-child(3) > a').click()
    cy.get('button').should('contain.text', 'Entrar')
  });
  
  it.skip('Caso de teste 06: Criando um usuário', () => {

    cy.visit('http://localhost:3000/login')
  });

  
  
  
})