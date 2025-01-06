const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://demo.opensource-socialnetwork.org",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
