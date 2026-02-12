import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  framework: { name: "@storybook/react-vite", options: {} },
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ['@storybook/addon-docs'],
  docs: {
    autodocs: "tag",
  },

  async viteFinal(config) {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@bf/bfinance-ui": path.resolve(__dirname, "../../packages/bfinance-ui/src/index.js"),
    };
    config.resolve.dedupe = ["react", "react-dom"];
    return config;
  },

  addons: ["@storybook/addon-docs"]
};
