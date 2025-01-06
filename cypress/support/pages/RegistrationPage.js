class RegistrationPage {
    visit() {
      cy.visit('/');
    }
  
    fillForm({ username, email, password }) {
      cy.get('#username').type(username);
      cy.get('#email').type(email);
      cy.get('#password').type(password);
    }
  
    submit() {
      cy.get('#registerButton').click();
    }
  }
  
  export default new RegistrationPage();
  