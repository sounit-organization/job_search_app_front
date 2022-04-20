/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  collectCoverage: false,
  collectCoverageFrom: ["**/*.{ts,tsx}"],
  verbose: true,
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy",
  },
};
