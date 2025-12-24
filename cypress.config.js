const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
   baseUrl:"https://authorized-partner.vercel.app/"
  },
});
