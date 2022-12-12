module.exports = {
  testEnvironment: "jsdom",
  collectCoverageFrom: ["packages/**/*.{ts,tsx}"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  modulePathIgnorePatterns: [
    "<rootDir>/examples",
    "<rootDir>/tooling/cra-template*",
  ],
  transform: {
    "^.+\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js"
  },
  modulePathIgnorePatterns: [
      "<rootDir>/example/*",
      "<rootDir>/lib/"
  ],
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$"],
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect",
    "./scripts/setup-test.ts",
  ],
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  },
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],
}
