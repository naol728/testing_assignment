const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://demo.opensource-socialnetwork.org/",
    reporter: "mochawesome", // Use Mocha Awesome as the reporter
    projectId: "6e3uz5", // Found in Cypress Dashboard
    video: true,
    retries: {
      runMode: 3, // Retries tests up to 3 times in "cypress run"
      openMode: 1, // Retries tests once in "cypress open"
    },
    reporterOptions: {
      reportDir: "cypress/reports", // Report directory
      overwrite: false, // Do not overwrite previous reports
      html: true, // Generate HTML reports
      json: true, // Generate JSON reports
      timestamp: "mmddyyyy_HHMMss", // Timestamped report names
      embeddedScreenshots: true,
      setupNodeEvents(on, config) {
        require("cypress-mochawesome-reporter/plugin")(on);
      },
      defaultCommandTimeout: 20000, // Increase default timeout (20s)
      requestTimeout: 30000, // Increase request timeout (30s)
      pageLoadTimeout: 6000000000, // Increase page load timeout (60s)
      screenshotOnRunFailure: true, // Take screenshots on failure
      retries: 2, // Retry failed tests (optional)
      defaultCommandTimeout: 15000, // Increase timeout (optional)
    },
  },
});
