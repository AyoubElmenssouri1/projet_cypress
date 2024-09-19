describe('Test de connexion', () => {

    beforeEach(() => {
      cy.visit('https://www.saucedemo.com');
    });
  
    const users = [
      { username: 'standard_user' },
      { username: 'locked_out_user' },
      { username: 'problem_user' },
      { username: 'performance_glitch_user' }
    ];
  
    users.forEach((user) => {
      it(`Connexion testée avec ${user.username}`, () => {  
      
        cy.get('#user-name').type(user.username);
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
      
  
        
      });
    });
  });
  