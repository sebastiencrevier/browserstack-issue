const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    viewportWidth: 768,
    viewportHeight: 1024,
    requestTimeout: 60_000,
    taskTimeout: 60_000,
    experimentalWebKitSupport: true,
    experimentalRunAllSpecs: true,
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      on('task', {
        install() {
          return Math.random();
        }
      });
    }
  },
});
