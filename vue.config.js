const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    public: "octopus-app-lrdas.ondigitalocean.app",
  },
});
