class ProfilePage {
    visit() {
      cy.visit('/profile');
    }
  
    updateProfile({ firstName, lastName }) {
      cy.get('#firstName').clear().type(firstName);
      cy.get('#lastName').clear().type(lastName);
    }
  
    saveChanges() {
      cy.get('#saveProfileButton').click();
    }
  
    verifyProfileUpdateMessage(message) {
      cy.get('.success').should('contain.text', message);
    }
  }
  
  export default new ProfilePage();
  