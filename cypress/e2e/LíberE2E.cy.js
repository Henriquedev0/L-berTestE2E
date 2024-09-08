describe('Página Inicial', () => {
  
  beforeEach('LinkFirst',() => {
    cy.visit('https://libercapital.com.br/')
  })

  it('NavBarTests', () => {
    cy.get('.nav-link.active')
    .should('have.text','Início')
    .and('be.visible')

    cy.get(':nth-child(2) > .nav-link')
    .should('have.text','Soluções')
    .and('be.visible')

    cy.get('[href="https://libercapital.com.br/blog/"]')
    .should('have.text','Blog')
    .and('be.visible')

    cy.get('[href="https://libercapital.gupy.io/"]')
    .should('have.text','Carreiras')
    .and('be.visible')

    cy.get(':nth-child(5) > .nav-link')
    .should('have.text','Acessar Portal')
    .and('be.visible')

    cy.get('.nav-btn')
    .should('have.text','Entrar em contato')
    .and('be.visible')

  })

  it('Texts on page', () => {

    cy.get('h1.text-white')
    .should('have.text','Único player end-to-end em embedded finance para grandes empresas no país.')

    cy.get('.ff-sans')
    .should('have.text','A Líber é uma one-stop-shop para grandes empresas que oferece soluções de serviços financeiros e conecta grandes empresas com seus fornecedores e varejistas.')

    cy.get(':nth-child(2) > .col-md-5 > .mt-16')
    .should('have.text','Estenda o prazo de pagamentos e ofereça um programa de antecipação no Risco Sacado. São diversas opções de financiadores e taxas e a contratação é simplificada.')

    cy.get(':nth-child(3) > .col-md-5 > .mt-16')
    .should('have.text','Múltiplos meios de pagamentos integrados, com conciliação automática. Mais opções para receber de seus clientes de forma integrada.')

    cy.get(':nth-child(4) > .col-md-5 > .mt-16')
    .should('have.text','Concessão de crédito sofisticada e integrada ao sistema de vendas. Facilita acesso a capital de giro com custo reduzido.')

    cy.get('.pt-64 > .col-md-5 > .mt-16')
    .should('have.text','Conciliação de grandes volumes de vendas por aplicativos de delivery e cartões.')

    cy.get('.col-lg-5 > p')
    .should('have.text','Entre em contato e na velocidade da Lebre vamos achar a solução perfeita para seu negócio.')

  })

  it('Buttons', () => {

    cy.get('.nav-btn')
    .should('be.visible')      
    .and('not.be.disabled')    
    .click()                   

    cy.get('.col-xl-7 > .btn')
    .should('be.visible')      
    .and('not.be.disabled')    
    .click() 

    cy.get('#sobre > .container > .row > .col-lg-6 > .btn')
    .should('be.visible')      
    .and('not.be.disabled')    
    .click() 

    cy.get(':nth-child(2) > .col-md-5 > .btn')
    .should('be.visible')      
    .and('not.be.disabled')    
    .click() 

    cy.get(':nth-child(3) > .col-md-5 > .btn')
    .should('be.visible')      
    .and('not.be.disabled')    
    .click() 

    cy.get(':nth-child(4) > .col-md-5 > .btn')
    .should('be.visible')      
    .and('not.be.disabled')    
    .click()

    cy.get('.pt-64 > .col-md-5 > .btn')
    .should('be.visible')      
    .and('not.be.disabled')    
    .click()

    cy.get(':nth-child(6) > .col-md-5 > .btn')
    .should('be.visible')      
    .and('not.be.disabled')    
    .click()

  })

  it('Endereco', () => {

    cy.get(':nth-child(1) > h6')
    .should('have.text','Endereço')

    cy.get('.col-lg-9 > .row > :nth-child(1) > p')
    .should('have.text','Rua Castilho, 392 - 11º Andar - Brooklin - São Paulo/SP CEP: 04568-010')

  })


  it('Contato', () => {

    cy.get(':nth-child(2) > h6')
    .should('have.text','Contato')

    cy.get('.col-lg-9 > .row > :nth-child(2) > :nth-child(2)')
    .should('have.text','contato@libercapital.com.br')

    cy.get('.col-lg-9 > .row > :nth-child(2) > :nth-child(3)')
    .should('have.text','+55 (11) 3534-7808')



  })

  it.skip('Formulario', () => {

  //Evitado para não spammar.

  })




})