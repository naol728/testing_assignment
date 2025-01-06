import CommentPage from '../support/pages/CommentPage';

describe('Post Comment Tests', () => {
  beforeEach(() => {
    // Assume the user is already logged in
    CommentPage.visit();
  });

  it('should add a comment successfully', () => {
    cy.fixture('testData').then((data) => {
      CommentPage.addComment(data.comment);
      CommentPage.submitComment();
      CommentPage.verifyCommentDisplayed(data.comment);
    });
  });

  it('should show an error for empty comment', () => {
    CommentPage.addComment('');
    CommentPage.submitComment();
    cy.get('.error').should('contain.text', 'Comment cannot be empty');
  });
});
