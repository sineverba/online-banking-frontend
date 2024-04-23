import { fireEvent, screen, waitFor } from "@testing-library/react";
import Page from "@/app/transactions/page";
import { renderWithProviders } from "../__test-utils__/test-utils";
import { login } from "../__mocks__/responses/auth/login";
import { isAuthenticated } from "@/app/lib/utility";
import extraValues from "@/app/lib/constants";
import seedTransactions from "../__mocks__/scenarios/transactions";

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
  seedTransactions(server);
});

describe("Transactions Page", () => {
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

  it("Can render transactions page with transactions", async () => {
    renderWithProviders(<Page />);
    await waitFor(() => {
      const purpose = screen.getByText(/December 2022 - Salary/i);
      expect(purpose).toBeInTheDocument();
      const amount = screen.getByText("2145");
      expect(amount).toBeInTheDocument();
      const date = screen.getByText("04/01/2023");
      expect(date).toBeInTheDocument();
    });
  });

  it("Can change page", async () => {
    renderWithProviders(<Page />);
    await waitFor(() => {
      const nextPageButton = screen.getByRole("button", {
        name: /next page/i
      });
      expect(nextPageButton).toBeInTheDocument();
      fireEvent.click(nextPageButton);
    });
    await waitFor(() => {
      const purpose = screen.getByText(/February 2019 - Salary/i);
      expect(purpose).toBeInTheDocument();
    });
  });

  it("Can handle sorting", async () => {
    renderWithProviders(<Page />);
    await waitFor(() => {
      const amount = screen.getByText(/amount/i);
      expect(amount).toBeInTheDocument();
      fireEvent.click(amount);
    });
    await waitFor(() => {
      const purpose = screen.getByText(/December 2022 - Salary/i);
      expect(purpose).toBeInTheDocument();
    });
  });

  it("Can handle change per page", async () => {
    renderWithProviders(<Page />);
    await waitFor(() => {
      const perPageSelect = screen.getByLabelText(/rows per page:/i);
      expect(perPageSelect).toBeInTheDocument();
      fireEvent.change(perPageSelect, { target: { value: "20" } });
    });
    await waitFor(() => {
      const purpose = screen.getByText(/December 2022 - Salary/i);
      expect(purpose).toBeInTheDocument();
    });
  });
});
