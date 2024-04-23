import { fireEvent, screen, waitFor } from "@testing-library/react";
import { renderWithProviders } from "./__test-utils__/test-utils";
import Page from "@/app/page";
import { act } from "react-dom/test-utils";
import { isAuthenticated, login } from "@/app/lib/utility";

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null,
      push: () => null
    };
  }
}));

// Mock utility per mockare in seguito le varie funzioni d'appoggio
jest.mock("../app/lib/utility");

describe("Login Page", () => {
  it("Can render login page", () => {
    renderWithProviders(<Page />);

    const usernameInput = screen.getByLabelText(/username/i);
    expect(usernameInput).toBeInTheDocument();

    const passwordInput = screen.getByLabelText(/password/i);
    expect(passwordInput).toBeInTheDocument();
  });

  it("Can handle error on login", async () => {
    renderWithProviders(<Page />);

    const usernameInput = screen.getByLabelText(/username/i);
    expect(usernameInput).toBeInTheDocument();

    await act(async () => {
      fireEvent.change(usernameInput, {
        target: {
          value: "wrong"
        }
      });
    });

    const passwordInput = screen.getByLabelText(/password/i);
    expect(passwordInput).toBeInTheDocument();

    await act(async () => {
      fireEvent.change(passwordInput, {
        target: {
          value: "password"
        }
      });
    });

    const loginButton = screen.getByRole("button", { name: /login/i });
    fireEvent.click(loginButton);

    await waitFor(() => {
      const feedback = screen.getByText(/wrong username or password/i);
      expect(feedback).toBeInTheDocument();
    });
  });

  it("Can perform login", async () => {
    renderWithProviders(<Page />);

    const usernameInput = screen.getByLabelText(/username/i);
    expect(usernameInput).toBeInTheDocument();

    await act(async () => {
      fireEvent.change(usernameInput, {
        target: {
          value: "username"
        }
      });
    });

    const passwordInput = screen.getByLabelText(/password/i);
    expect(passwordInput).toBeInTheDocument();

    await act(async () => {
      fireEvent.change(passwordInput, {
        target: {
          value: "password"
        }
      });
    });

    const loginButton = screen.getByRole("button", { name: /login/i });
    fireEvent.click(loginButton);

    await waitFor(() => {
      /**
       * Le successive due funzioni moccate a true funzionano perchè all'inizio del file
       * è stato moccato l'intero file contenente le funzioni
       */
      login.mockResolvedValue(true);
      isAuthenticated.mockResolvedValue(true);
      expect(login).toHaveBeenCalledTimes(1);
      expect(isAuthenticated).toHaveBeenCalled();
    });

    const feedback = screen.queryByText(/wrong username or password/i);
    expect(feedback).not.toBeInTheDocument();
  });
});
