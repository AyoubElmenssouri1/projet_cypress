describe('deconnexion', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com'); 
   
        cy.get('#user-name').type('standard_user'); 
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
        });
  
    it('deconnexion', () => {
  
        cy.get('#react-burger-menu-btn').click(); 
        cy.wait(2000); 
   
        cy.contains('Logout').click(); 
  
    
      
    });
  
  });
  