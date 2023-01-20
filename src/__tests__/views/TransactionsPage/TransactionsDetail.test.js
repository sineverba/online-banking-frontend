import { screen, waitFor } from "@testing-library/react";
import { renderWithProviders } from "../../__test-utils__/test-utils";
import { rest } from "msw";
// eslint-disable-next-line jest/no-mocks-import
import { server } from "../../__mocks__/api/server";
import { item } from "../../__mocks__/responses/payment";
import {GenericDetail} from "../../../views/GenericPage/GenericDetail";

beforeEach(() => {
  server.use(
    rest.get(`${process.env.REACT_APP_BACKEND_URL}/bank-account-transactions/1`, (req, res, ctx) => {
      return res(ctx.json(item));
    })
  );
});

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => {
  server.resetHandlers();
});

// Clean up after the tests are finished.
afterAll(() => server.close());

describe("Test Transactions Detail", () => {
  it("Test can show single detail", async () => {
    renderWithProviders(<GenericDetail id={1} />);
    await waitFor(() => {
      const purpose = screen.getByText(/energy bill/i);
      expect(purpose).toBeInTheDocument();
    });
  });
});
