/// <reference types="cypress" />

describe('example to-do app', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('shows text in h1 tag', () => {
        cy.get('#idh10').should('have.text', 'Hello xxx test from compenent Usa this.$hello.!')
        cy.get('#idh11').should('have.text', 'Hello xxx test from compenent Usa apenas $hello!')
    })

    it('should increase value0 value', () => {
        cy.get('#value0').should('have.text', '1')
        cy.get('#btn1').click()
        cy.get('#value0').should('have.text', '2')
        cy.get('#btn1').click()
        cy.get('#value0').should('have.text', '3')
    })

    it('should lower value0', () => {
        cy.get('#value0').should('have.text', '1')
        cy.get('#btn2').click()
        cy.get('#value0').should('have.text', '0')
        cy.get('#btn2').click()
        cy.get('#value0').should('have.text', '-1')
    })


    it('should make zero value0', () => {
        cy.get('#btn3').click()
        cy.get('#value0').should('have.text', '0')
    })

})
