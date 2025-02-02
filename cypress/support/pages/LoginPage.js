class LoginPage {
  constructor() {
    this.usernameField = "[name='username']";
    this.passwordField = "[name='password']";
    this.loginButton = ".btn";
    this.errorAlert = ".alert";
  }

  visit() {
    cy.visit("/login");
  }

  clearFields() {
    cy.get(this.usernameField).clear();
    cy.get(this.passwordField).clear();
  }

  fillCredentials(username, password) {
    this.clearFields();
    if (username) cy.get(this.usernameField).type(username);
    if (password) cy.get(this.passwordField).type(password);
  }

  login(username, password) {
    this.fillCredentials(username, password);
    cy.get(this.loginButton).click();
  }

  loginEmpty() {
    this.clearFields();
    cy.get(this.loginButton).click();
  }

  verifyErrorMessage(expectedMessage) {
    cy.get(this.errorAlert).should("contain", expectedMessage);
  }
}

export default LoginPage;
