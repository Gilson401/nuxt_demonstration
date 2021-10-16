import * as GETBollinger from '../trade/requests/GETBollinger.request'


describe('GET Bollinger', () => {
     it('List All Assets Over Bollinger', () => {
        GETBollinger.getAssetsOverBollinger().should((response) =>{
            cy.log(response.status)
            cy.log(response.statusText)
            cy.log(response.body)
        })
    })

})
