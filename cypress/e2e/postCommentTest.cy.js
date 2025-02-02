import CommentPage from "../support/pages/CommentPage";

describe("Post Comment Tests", () => {
  it("should visit the comment page", () => {
    CommentPage.visit();
    cy.fixture("testData", (data) => {
      CommentPage.comment(data.comment);
      CommentPage.verifyCommentInList(data.comment);
    });
  });
});
