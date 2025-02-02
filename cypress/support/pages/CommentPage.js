class CommentPage {
  constructor() {
    this.click = 'input[type="submit"]';
    this.commentbox = "#comment-box-e16";
    this.commentlist =
      "#comments-item-9 > .row > .col-md-11 > .comment-contents > p > .comment-text";
  }
  visit() {
    cy.visit("/login");
    cy.get(this.click).click();
  }
  comment(comment) {
    cy.get(this.commentbox).type(comment);
    cy.get(this.commentbox).pause();
  }
  verifyCommentInList(expectedComment) {
    cy.get(this.commentlist).each(($el) => {
      const commentText = $el.text().trim();
      if (commentText === expectedComment) {
        cy.log(`Comment "${expectedComment}" found in the list.`);
        expect(commentText).to.equal(expectedComment);
      }
    });
  }
}

export default new CommentPage();
