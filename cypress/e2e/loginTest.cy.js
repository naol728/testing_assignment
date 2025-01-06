import LoginPage from "../support/pages/LoginPage";

describe("Login Page Tests", () => {
  const loginPage = new LoginPage();
  beforeEach(() => {
    loginPage.visit();
  });

  it("should log in with valid credentials", () => {
    cy.fixture("testData").then((data) => {
      loginPage.login(data.validUser.username, data.validUser.password);
      cy.url().should("include", "/home");
    });
  });

    it("should show an error for invalid usename and password", () => {
      cy.fixture("testData").then((data) => {
        loginPage.login(data.invalidusenamepassword.username, data.invalidusenamepassword.password);
        loginPage.verifyErrorMessage("We couldn't log you in. Please check your username or password and try again.");
        cy.url().should("include", "/login?error=1");
      });
    });

    it("should show an error for invalid password and valid username", () => {
        cy.fixture("testData").then((data) => {
          loginPage.login(data.invalidpasword.username, data.invalidpasword.password);
          loginPage.verifyErrorMessage("We couldn't log you in. Please check your username or password and try again.");
          cy.url().should("include", "/login?error=1");
        });
      });
    it("should show an error for valid password and invalid username", () => {
        cy.fixture("testData").then((data) => {
          loginPage.login(data.invalidusername.username, data.invalidusername.password);
          loginPage.verifyErrorMessage("We couldn't log you in. Please check your username or password and try again.");
          cy.url().should("include", "/login?error=1");
        });
      });
});
