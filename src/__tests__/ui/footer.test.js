import { screen, waitFor } from "@testing-library/react";
import Footer from "@/app/components/common/footer";
import { renderWithProviders } from "../__test-utils__/test-utils";

describe("UI Footer Component", () => {
  it("Can render footer component", async () => {
    renderWithProviders(<Footer />);

    let versionApp = screen.queryByText(/v. 9.8.7/i);
    expect(versionApp).not.toBeInTheDocument();

    await waitFor(() => {
      versionApp = screen.queryByText(/v. 9.8.7/i);
      expect(versionApp).toBeInTheDocument();
    });
  });
});
