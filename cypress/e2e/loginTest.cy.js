import LoginPage from '../support/pages/LoginPage';

describe('Login Page Tests', () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it('should log in with valid credentials', () => {
    cy.fixture('testData').then((data) => {
      LoginPage.fillUsername(data.validUser.username);
      LoginPage.fillPassword(data.validUser.password);
      LoginPage.submit();
      cy.url().should('include', '/dashboard');
    });
  });

  it('should show an error for invalid credentials', () => {
    cy.fixture('testData').then((data) => {
      LoginPage.fillUsername(data.invalidUser.username);
      LoginPage.fillPassword(data.invalidUser.password);
      LoginPage.submit();
      LoginPage.verifyErrorMessage('Invalid username or password');
    });
  });
});
