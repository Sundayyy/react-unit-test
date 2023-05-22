import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
    // slowTestThreshold: 15000,
  },

  e2e: {
    baseUrl: "http://localhost:4003",
    setupNodeEvents(on, config) {
      // implement node event listeners here

      config.env.hostApi =
        process.env.REACT_APP_NODE_ENV === "production"
          ? "http://localhost:8001/api/v1"
          : "http://localhost:8000/api/v1";

      return config;
    },
    // slowTestThreshold: 15000,
  },
  defaultCommandTimeout: 10000,
});
