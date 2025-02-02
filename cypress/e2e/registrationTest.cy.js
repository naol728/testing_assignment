import RegistrationPage from "../support/pages/RegistrationPage";
import testData from "../fixtures/testData.json";

describe("Reggestration Test", () => {
  beforeEach(() => {
    RegistrationPage.visit(); // Visit the page before each test
  });

  it("should register a user successfully with valid details", () => {
    const data = testData.validRegistration;

    RegistrationPage.fillFirstName(data.firstName);
    RegistrationPage.fillLastName(data.lastName);
    RegistrationPage.fillEmail(data.email);
    RegistrationPage.fillReenterEmail(data.reenterEmail);
    RegistrationPage.fillUsername(data.username);
    RegistrationPage.fillPassword(data.password);
    RegistrationPage.getfillBirthdate(data.birthdate);
    RegistrationPage.selectGender(data.gender);
    RegistrationPage.confirmTermsAndConditions();
    RegistrationPage.clickCreateAccount();

    RegistrationPage.assertSuccessMessage(data.successMessage);
  });

  it("it should show username taken", () => {
    const data = testData.usernameTaken;

    RegistrationPage.fillFirstName(data.firstName);
    RegistrationPage.fillLastName(data.lastName);
    RegistrationPage.fillEmail(data.email);
    RegistrationPage.fillReenterEmail(data.reenterEmail);
    RegistrationPage.fillUsername(data.username);
    RegistrationPage.fillPassword(data.password);
    RegistrationPage.getfillBirthdate(data.birthdate);
    RegistrationPage.selectGender(data.gender);
    RegistrationPage.confirmTermsAndConditions();
    RegistrationPage.clickCreateAccount();

    RegistrationPage.assertErrorMessage(data.errorMessage);
  });

  it("should display password too short error", () => {
    const data = testData.shortPassword;

    RegistrationPage.fillFirstName(data.firstName);
    RegistrationPage.fillLastName(data.lastName);
    RegistrationPage.fillEmail(data.email);
    RegistrationPage.fillReenterEmail(data.reenterEmail);
    RegistrationPage.fillUsername(data.username);
    RegistrationPage.fillPassword(data.password);
    RegistrationPage.getfillBirthdate(data.birthdate);
    RegistrationPage.selectGender(data.gender);
    RegistrationPage.confirmTermsAndConditions();
    RegistrationPage.clickCreateAccount();

    RegistrationPage.assertErrorMessage(data.errorMessage);
  });

  it("should display terms not agreed error", () => {
    const data = testData.termsNotAgreed;

    RegistrationPage.fillFirstName(data.firstName);
    RegistrationPage.fillLastName(data.lastName);
    RegistrationPage.fillEmail(data.email);
    RegistrationPage.fillReenterEmail(data.reenterEmail);
    RegistrationPage.fillUsername(data.username);
    RegistrationPage.fillPassword(data.password);
    RegistrationPage.getfillBirthdate(data.birthdate);
    RegistrationPage.selectGender(data.gender);
    // Not agreeing to terms
    RegistrationPage.clickCreateAccount();

    RegistrationPage.assertErrorMessage(data.errorMessage);
  });
});
