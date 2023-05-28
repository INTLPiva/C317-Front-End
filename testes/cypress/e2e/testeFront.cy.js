/// <reference types="cypress"/>git

describe('Criando cenario de teste para o frontend da aplicação GetJobs - Projeto C317', () => {
  it('Caso de teste 01: Clicando no Home', () => {
    cy.visit('http://localhost:3000');
    cy.get('[href="/"]').click();
    cy.get('h1 > a').should('contain.text', 'Como podemos lhe servir?');
  });

  it('Caso de teste 02: Clicando em Sobre', () => {
    cy.visit('http://localhost:3000');
    cy.get('[href="/sobre"]').click();
    cy.get('p').should('contain.text', 'Uma plataforma online');
  });

  it('Caso de teste 03: Clicando em Contato', () => {
    cy.visit('http://localhost:3000');
    cy.get('[href="/contato"]').click();
    cy.get('.sc-gTRrQi > div > :nth-child(2)').should(
      'contain.text',
      'Telefone'
    );
  });

  it('Caso de teste 04: Clicando em Login', () => {
    cy.visit('http://localhost:3000');
    cy.get(':nth-child(3) > a').click();
    cy.get('button').should('contain.text', 'Entrar');
  });

  it('Caso de teste 05: Criando um usuário logando com ele depois deslogando', () => {
    let info = criarUsuario();

    cy.visit('http://localhost:3000/login');
    cy.get('#email').type(info[2]);
    cy.get('#password').type(info[1]);
    cy.get('button').click();
    cy.get(':nth-child(3) > a').should('contain.text', 'Logout');
  });

  it('Caso de teste 06: Clicando em Serviços sem realizar login', () => {
    cy.visit('http://localhost:3000');
    cy.get('.links > [href="/servicos"]').click();
    cy.get(':nth-child(3) > a').should('contain.text', 'Login');
    //cy.get('.botaoAdicionar').should('be.disabled');
    cy.get('.botaoAdicionar').should('be.disabled'); //apagar e deixar a linha de cima apenas
  });

  it('Caso de teste 07: Clicando em Serviços após realizar login', () => {
    let info = criarUsuario();

    cy.visit('http://localhost:3000/login');
    cy.get('#email').type(info[2]);
    cy.get('#password').type(info[1]);
    cy.get('button').click();
    cy.get(':nth-child(3) > a').should('contain.text', 'Logout');

    cy.get('.links > [href="/servicos"]').click();
    cy.get(':nth-child(3) > a').should('contain.text', 'Logout');
    cy.get('.botaoAdicionar').should('be.enabled');
  });
});

function criarUsuario() {
  let horas = new Date().getHours().toString();
  let minutos = new Date().getMinutes().toString();
  let segundos = new Date().getSeconds().toString();
  let user = horas + minutos + segundos + 'Id';
  let senha = horas + minutos + segundos + 'senha';
  let email = user + '@gmail.com';
  let userInfo = [user, senha, email];

  cy.visit('http://localhost:3000/login');

  cy.get('p > a').click();
  cy.get('#nome').type(user);
  cy.get('#email').type(email);
  cy.get('#password').type(senha);
  cy.get('#confirmacaoPassword').type(senha);
  cy.get('button').click();
  cy.get(':nth-child(3) > a').should('contain.text', 'Logout');
  cy.get(':nth-child(3) > a').click();

  return userInfo;
}
