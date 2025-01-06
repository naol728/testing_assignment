class LoginPage {
  visit() {
    cy.visit("/login");
  }

  login(username, password) {
    cy.get("[name='username']").clear();
    cy.get("[name='password']").clear();
    cy.get("[name = 'username']").type(username);
    cy.get("[name = 'password']").type(password);
    cy.get(".btn").click();
  }

  verifyErrorMessage(expectedMessage) {
    cy.get(".alert  p").should("contain", expectedMessage);
  }
}

export default LoginPage;
