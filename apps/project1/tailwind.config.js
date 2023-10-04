import config from "tailwind-config/tailwind.config";

module.exports = {
  ...config,
  content: [
    ...config.content,
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    {
      pattern: /bg-(C)-(compete|lite|attainment|participation)/,
    },
  ],
};
