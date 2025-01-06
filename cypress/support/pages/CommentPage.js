class CommentPage {
    visit() {
      cy.visit('/post/1'); // Assume post ID is 1 for this example
    }
  
    addComment(comment) {
      cy.get('#commentBox').type(comment);
    }
  
    submitComment() {
      cy.get('#submitCommentButton').click();
    }
  
    verifyCommentDisplayed(comment) {
      cy.get('.comment').last().should('contain.text', comment);
    }
  }
  
  export default new CommentPage();
  