import { screen } from "@testing-library/react";
import { DashboardPage } from "../../../views/DashboardPage/DashboardPage";
import { renderWithProviders } from "../../__test-utils__/test-utils";

describe("Test Dashboard Page", () => {

  it("Test Dashboard Page", async () => {
    renderWithProviders(<DashboardPage />);
    const title = screen.getByText(/dashboard/i);
    expect(title).toBeInTheDocument();
  });

});
