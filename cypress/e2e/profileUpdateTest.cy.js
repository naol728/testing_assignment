// import ProfilePage from '../support/pages/ProfilePage';

// describe('Profile Update Tests', () => {
//   beforeEach(() => {
//     // Assume the user is already logged in
//     ProfilePage.visit();
//   });

//   it('should update profile information successfully', () => {
//     cy.fixture('testData').then((data) => {
//       ProfilePage.updateProfile(data.profileUpdate);
//       ProfilePage.saveChanges();
//       ProfilePage.verifyProfileUpdateMessage('Profile updated successfully');
//     });
//   });

//   it('should show an error for invalid input', () => {
//     ProfilePage.updateProfile({ firstName: '', lastName: '' });
//     ProfilePage.saveChanges();
//     ProfilePage.verifyProfileUpdateMessage('First name and last name cannot be empty');
//   });
// });
