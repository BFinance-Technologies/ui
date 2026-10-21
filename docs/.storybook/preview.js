import "../../packages/bfinance-ui/src/styles/tokens.css";

const withTheme = (Story, context) => {
  const theme = context.globals.theme || "light";
  document.documentElement.setAttribute("data-theme", theme);
  document.body.style.background = "var(--background-surface-default)";
  document.body.style.color = "var(--text-base-primary)";
  return Story();
};

const preview = {
  globalTypes: {
    theme: {
      description: "Color theme",
      toolbar: {
        title: "Theme",
        icon: "mirror",
        items: [
          { value: "light", title: "Light", icon: "sun" },
          { value: "dark", title: "Dark", icon: "moon" },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: "light",
  },
  decorators: [withTheme],
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;
