import { screen, waitFor } from "@testing-library/react";
import { renderWithProviders } from "../../__test-utils__/test-utils";
import {GenericDetail} from "../../../views/GenericPage/GenericDetail";

describe("Test Transactions Detail", () => {
  it("Test can show single detail", async () => {
    renderWithProviders(<GenericDetail id={1} />);
    await waitFor(() => {
      const purpose = screen.getByText(/december 2022 - salary/i);
      expect(purpose).toBeInTheDocument();
    });
  });
});
