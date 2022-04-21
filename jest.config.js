/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect",
    "<rootDir>/src/setupTests.ts",
  ],
  collectCoverage: false,
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!mocks/**/*.ts",
    "!src/index.tsx",
    "!src/reportWebVitals.ts",
    "!src/setupTests.ts",
  ],
  verbose: true,
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy",
  },
  setupFiles: ["<rootDir>/.jest/setEnvVars.ts"],
};
