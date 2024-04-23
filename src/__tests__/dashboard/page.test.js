import { screen, waitFor } from "@testing-library/react";
import Page from "@/app/dashboard/page";
import { renderWithProviders } from "../__test-utils__/test-utils";
import { login } from "../__mocks__/responses/auth/login";
import { isAuthenticated } from "@/app/lib/utility";
import extraValues from "@/app/lib/constants";
import transactions from "../__mocks__/items/transactions";

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null,
      push: () => null
    };
  }
}));

// Mock utility per mockare in seguito le varie funzioni d'appoggio
jest.mock("../../app/lib/utility");

beforeEach(() => {
  sessionStorage.setItem(
    extraValues.get("SESSIONSTORAGE_ACCESS_TOKEN"),
    login.access_token
  );
});

describe("Dashboard Page", () => {
  it("Can redirect if is not logged in", async () => {
    sessionStorage.clear();
    renderWithProviders(<Page />);
    await waitFor(() => {
      /**
       * La successiva funziona moccate a false funzionano perchè all'inizio del file
       * è stato moccato l'intero file contenente le funzioni
       */
      isAuthenticated.mockResolvedValue(false);
      expect(isAuthenticated).toHaveBeenCalled();
    });
  });
  it("Can render dashboard page with current balance", async () => {
    renderWithProviders(<Page />);
    await waitFor(() => {
      const calculatedBalance = transactions.reduce(
        (acc, transaction) => acc + transaction.amount,
        0
      );
      const balance = screen.getByText(new RegExp(calculatedBalance));
      expect(balance).toBeInTheDocument();
    });
  });
});
