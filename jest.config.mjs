/* eslint-disable */
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./"
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  collectCoverageFrom: [
    "**/src/**/*.{js,jsx}",
    "!**/src/**/layout.{js,jsx}",
    "!<rootDir>/src/app/redux/provider.jsx",
    "!<rootDir>/src/__tests__/__test-utils__/*",
    "!<rootDir>/src/__tests__/__mocks__/*"
  ],
  reporters: ["default", ["jest-junit", { outputDirectory: ".test_report" }]],
  // Add more setup options before each test is run
  setupFilesAfterEnv: ["@testing-library/jest-dom", "<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  testPathIgnorePatterns: [
    "<rootDir>/src/__tests__/__mocks__",
    "<rootDir>/src/__tests__/__test-utils__"
  ]
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
