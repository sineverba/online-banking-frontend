import { screen, waitFor } from "@testing-library/react";
import { DashboardPage } from "../../../views/DashboardPage/DashboardPage";
import { renderWithProviders } from "../../__test-utils__/test-utils";
// eslint-disable-next-line jest/no-mocks-import
import { server } from "../../__mocks__/api/server";
import { item } from "../../__mocks__/responses/balance";
import { balance } from "../../__mocks__/items/balance";

beforeEach(() => { server.listen(); });
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => { server.resetHandlers(); });
// Clean up after the tests are finished.
afterAll(() => server.close());

describe("Test Dashboard Page", () => {

  it("Test Dashboard Page", async () => {
    renderWithProviders(<DashboardPage />);
    const title = screen.getByText(/dashboard/i);
    expect(title).toBeInTheDocument();
  });

  it("Test can show balance", async () => {
    renderWithProviders(<DashboardPage />);
    await waitFor(() => {
      const balanceToFind = screen.getByText(balance);
      expect(balanceToFind).toBeInTheDocument();
    });
  });

});
