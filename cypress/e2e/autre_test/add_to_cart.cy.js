describe('Test d\'ajout et de suppression du produit ', () => {

    
    beforeEach(() => {
      cy.visit('https://www.saucedemo.com'); 
      cy.get('#user-name').type('standard_user'); 
      cy.get('#password').type('secret_sauce'); 
      cy.get('#login-button').click(); 
      cy.wait(2000);
    });
  
    it('l\'ajout est la suppresion', () => {
     
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
      cy.wait(2000); 
  
     
      cy.get('#shopping_cart_container').click();
      cy.wait(2000); 
  
      
      cy.get('#remove-sauce-labs-backpack').click();
      cy.wait(2000);
  
   
    });
  });
  