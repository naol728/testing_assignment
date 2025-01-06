class CommentPage {
    visit() {
      
        cy.visit('/login');
        cy.get('input[type="submit"]').click();
     
    }
  

  }
  
  export default new CommentPage();
  