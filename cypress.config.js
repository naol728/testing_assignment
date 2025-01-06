const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.opensource-socialnetwork.org/demo",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
