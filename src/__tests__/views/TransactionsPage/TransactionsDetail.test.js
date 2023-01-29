import { screen, waitFor } from "@testing-library/react";
import { renderWithProviders } from "../../__test-utils__/test-utils";
// eslint-disable-next-line jest/no-mocks-import
import { server } from "../../__mocks__/api/server";
import {GenericDetail} from "../../../views/GenericPage/GenericDetail";

beforeEach(() => { server.listen(); });
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => { server.resetHandlers(); });
// Clean up after the tests are finished.
afterAll(() => server.close());

describe("Test Transactions Detail", () => {
  it("Test can show single detail", async () => {
    renderWithProviders(<GenericDetail id={1} />);
    await waitFor(() => {
      const purpose = screen.getByText(/december 2022 - salary/i);
      expect(purpose).toBeInTheDocument();
    });
  });
});
