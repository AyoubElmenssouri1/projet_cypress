const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    testIsolation: false,
    setupNodeEvents(on, config) {
      // Configure environment variables if needed
    
    },
  },
});
