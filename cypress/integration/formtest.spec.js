const name = ()=> cy.get('#name-input')
const Pepperoni = ()=> cy.get('input[name="Pepperoni"]')
const Mushroom = ()=> cy.get('input[name="Mushroom"]')
const Submit = () => cy.get('button[id="order-button"]')
describe('form inputs and submit button are behaving as expected', ()=> {
    beforeEach(()=> {
        cy.visit('http://localhost:3000/pizza')
    
    })
    it('Checking input and submit functionality',()=> {
        name().type('Test Name')
        Pepperoni().check()
        Mushroom().check()
        Submit().click()
    })
})


