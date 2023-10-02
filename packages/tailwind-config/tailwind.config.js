module.exports = {
  content: [
    "../../apps/project1/**/*.{ts,tsx}",
    "../../apps/project1/*.{ts,tsx}",
    "../../packages/ui/**/*.{ts,tsx}",
    "../../packages/ui/*.{ts,tsx}",
  ],

  theme: {
    colors: {
      blue: "#2973FF",
      PC: {
        900: "#0056C7",
      },
      BC: {
        1000: "#17191C",
        700: "#747A86",
        600: "#8F96A3",
        400: "#B1B7C4",
        200: "#D2D6E0",
        100: "#E8EBF2",
      },
      BG: {
        100: "#F7F8FD",
        200: "#E8EBF6",
      },
      C: {
        compete: "#F7F8FD",
        lite: "#00BF91",
        attainment: "#2973FF",
        participation: "#B556FF",
        LV: {
          NEW: "#59CB00",
          JUNIOR: "#00DCEA",
          PRO: "#9B9B9B",
          MASTER: "#A96600",
        },
      },
      R: {
        200: "#EF5D5D",
      },
    },
    extend: {},
  },
  plugins: [],
};
