import RegistrationPage from '../support/pages/RegistrationPage';

describe('Registration Tests', () => {
  beforeEach(() => {
    RegistrationPage.visit();
  });

  it('should register a new user successfully', () => {
    cy.fixture('testData').then((data) => {
      RegistrationPage.fillForm(data.newUser);
      RegistrationPage.submit();
      RegistrationPage.verifyRegistrationMessage('Registration successful');
    });
  });

  it('should show an error for missing fields', () => {
    RegistrationPage.fillForm({ username: '', email: '', password: '' });
    RegistrationPage.submit();
    RegistrationPage.verifyRegistrationMessage('All fields are required');
  });
});
