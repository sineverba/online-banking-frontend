// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import { server } from "./__tests__/__mocks__/api/server";
import setupStore from "./store/index";
import { LOCALSTORAGE_ACCESS_TOKEN } from "./utils/constants/constant";

const store = setupStore({});

// Establish API mocking before all tests.
beforeAll(() => {
  server.listen();
  localStorage.clear();
});

beforeEach(() => {
  localStorage.clear();
});

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => {
  server.resetHandlers();
  localStorage.clear();
});

// Clean up after the tests are finished.
afterAll(() => {
  server.close();
  localStorage.clear();
});
