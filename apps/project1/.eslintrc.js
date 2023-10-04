module.exports = {
  extends: ["custom/react-internal"],
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
      },
      alias: {
        map: [["@pages", "./src/pages"]],
        extensions: [".ts", ".tsx"],
      },
    },
  },
};
