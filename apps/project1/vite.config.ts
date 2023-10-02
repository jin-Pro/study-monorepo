import path from "path";

import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

const _path = (_: string) => path.resolve(__dirname, _);

export default {
  publicDir: "public",
  resolve: {
    alias: {
      "@pages": _path("./src/pages"),
    },
  },
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        ref: true,
      },
    }),
  ],
};
