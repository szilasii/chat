describe('Login test spec', () => {
  beforeEach(()=>{
    cy.visit('http://localhost:5173/chat')
  })
  const userEmail = 'maci@laci.com'
      const passwd = 'macika'
      const wrongPasswd ='mucika'
      const wrongEmail = 'maci@laci.hu'
  
  
  it('Helyes url betöltés ha nincs loginolva', () => { 
    cy.url().should('eq','http://localhost:5173/')
  })

  it('hIba a bejelentkezéskor rossz felhasználónév vagy jelszó', () => {
      
     cy.get('input[type=email]')
     .type(userEmail)
     cy.get('input[type=password]')
     .type(passwd)
     
     cy.get('button').
     contains('Login').click()
     cy.url().should('eq','http://localhost:5173/chat')

  })

})