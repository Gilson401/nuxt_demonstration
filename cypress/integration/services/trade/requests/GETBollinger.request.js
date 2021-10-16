/// <reference types="cypress" />

function getAssetsOverBollinger () {
    return cy.request({
        method: 'GET',
        url: 'bollinger',
        failOnStatusCode: 'false'
    })
}

export { getAssetsOverBollinger }