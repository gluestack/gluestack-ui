const path = require("path");

const packagesPath = path.join(__dirname, "..", "packages");

const alias = {
  "^@react-native-aria/(.+)": `${packagesPath}/\\1`,
  "react-native-aria": `${packagesPath}/react-native-aria`,
};

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          // For development, we want to alias the library to the source
          alias,
        },
      ],
    ],
  };
};
