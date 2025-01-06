import CommentPage from '../support/pages/CommentPage';

describe('Post Comment Tests', () => {
 

  it('should visit the comment page', () => {
    CommentPage.visit();
    cy.get('#comment-box-e16').type('I am ayele!{enter}');
    cy.get('#comment-box-e16').pause()

  });



});
