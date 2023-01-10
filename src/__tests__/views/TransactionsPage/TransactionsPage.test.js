import { screen, waitFor } from "@testing-library/react";
import { renderWithProviders } from "../../__test-utils__/test-utils";
import { rest } from "msw";
// eslint-disable-next-line jest/no-mocks-import
import { server } from "../../__mocks__/api/server";
import { items } from "../../__mocks__/responses/bank-account-transactions";
import GenericPage from "../../../views/GenericPage/GenericPage";
import { ENTITY_TRANSACTIONS } from "../../../utils/constants/constant";

beforeEach(() => {
  server.use(
    rest.get(`${process.env.REACT_APP_BACKEND_URL}/bank-account-transactions`, (req, res, ctx) => {
      return res(ctx.json(items));
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

describe("Test TransactionsPage", () => {

  it("Test can show transactions", async () => {
    renderWithProviders(<GenericPage entity={ENTITY_TRANSACTIONS} />);
    await waitFor(() => {
      const purpose = screen.getByText(/December 2022 - Salary/i);
      expect(purpose).toBeInTheDocument();
    });
  });

  it("Test can manage zero transactions", async () => {

    const zeroItems = {
      content: []
    };

    server.use(
      rest.get(`${process.env.REACT_APP_BACKEND_URL}/bank-account-transactions`, (req, res, ctx) => {
        return res(ctx.json(zeroItems));
      })
    );

    renderWithProviders(<GenericPage entity={ENTITY_TRANSACTIONS} />);
    await waitFor(() => {
      const noData = screen.getByText(/There are no records to display/i);
      expect(noData).toBeInTheDocument();
    });
  });

});