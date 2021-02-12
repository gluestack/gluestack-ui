const path = require("path");
const pak = require("../package.json");

const packagesPath = path.join(__dirname, "..", "packages");
const rootNodeModules = path.join(__dirname, "..", "node_modules");

const alias = {
  "^@react-native-aria/(.+)": `${packagesPath}/\\1/src`,
  // Major Hack : Fix later, Resolve to root react to prevent invalid hook call error
  react: `${rootNodeModules}/react`,
};

module.exports = function (api) {
  api.cache(true);

  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            // For development, we want to alias the library to the source
            ...alias,
          },
        },
      ],
    ],
  };
};
