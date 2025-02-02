class RegistrationPage {
  visit() {
    cy.visit("");
  }

  fillFirstName(firstName) {
    cy.get(":nth-child(3) > :nth-child(1) > .form-control").type(firstName);
  }

  fillLastName(lastName) {
    cy.get(":nth-child(3) > :nth-child(2) > .form-control").type(lastName);
  }

  fillEmail(email) {
    cy.get(":nth-child(4) > :nth-child(1) > .form-control").type(email);
  }

  fillReenterEmail(email) {
    cy.get(":nth-child(4) > :nth-child(2) > .form-control").type(email);
  }

  fillUsername(username) {
    cy.get(":nth-child(5) > .form-control").type(username);
  }

  fillPassword(password) {
    cy.get(":nth-child(6) > .form-control").type(password);
  }

  getfillBirthdate(birthdate) {
    const [year, month, day] = birthdate.split("-");

    cy.get("input[name='birthdate']")
      .click()
      .then(() => {
        cy.get(".ui-datepicker-year").select(year);
        cy.get(".ui-datepicker-month").select(month - 1);
        cy.get(".ui-datepicker-calendar").contains(parseInt(day, 10)).click();
      });
  }

  selectGender(gender) {
    if (gender === "Male") {
      cy.get(":nth-child(1) > .ossn-radio-input").check({ force: true });
    } else {
      cy.get(":nth-child(2) > .ossn-radio-input").check({ force: true });
    }
  }

  confirmTermsAndConditions() {
    cy.get("p > input").click();
  }

  clickCreateAccount() {
    cy.get("#ossn-submit-button").click();
  }

  assertErrorMessage(expectedMessage) {
    // Increase timeout for this assertion
    cy.get("#ossn-signup-errors") // 10 seconds timeout
      .should("contain.text", expectedMessage);
  }

  assertSuccessMessage(expectedMessage) {
    // Increase timeout for this assertion
    cy.get(".ossn-message-done").should("contain.text", expectedMessage);
  }
}

export default new RegistrationPage();
