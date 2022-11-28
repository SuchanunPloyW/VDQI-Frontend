const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  devServer: {
    public: "https://octopus-app-lrdas.ondigitalocean.app:8080",
  },
});
