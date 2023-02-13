import { screen, waitFor } from "@testing-library/react";
import { DashboardPage } from "../../../views/DashboardPage/DashboardPage";
import { renderWithProviders } from "../../__test-utils__/test-utils";
import { balance } from "../../__mocks__/items/balance";

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
