import { fireEvent, screen, waitFor } from "@testing-library/react";
import App from "../App";
import { renderWithProviders } from "./__test-utils__/test-utils";
import { BrowserRouter } from "react-router-dom";
import { email as mockedEmail } from "./__mocks__/items/email";
import { password as mockedPassword } from "./__mocks__/items/password";
import { rest } from "msw";
import { server } from "./__mocks__/api/server";

describe("Test App.js", () => {
  it("Perform login and show menu", async () => {
    renderWithProviders(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const version = screen.getByText(/9.8.7/i);
    expect(version).toBeInTheDocument();

    const inputUsername = screen.getByLabelText(/username/i);
    fireEvent.change(inputUsername, {
      target: {
        value: mockedEmail
      }
    });

    const inputPassword = screen.getByLabelText(/password/i);
    fireEvent.change(inputPassword, {
      target: {
        value: mockedPassword
      }
    });

    const loginButton = screen.getByRole("button", { name: /login/i });
    fireEvent.click(loginButton);
    await waitFor(() => {
      const element = screen.getByText(/dashboard/i);
      expect(element).toBeInTheDocument();
    });
  });

  it("Perform logout", async () => {
    renderWithProviders(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const inputUsername = screen.getByLabelText(/username/i);
    fireEvent.change(inputUsername, {
      target: {
        value: mockedEmail
      }
    });

    const inputPassword = screen.getByLabelText(/password/i);
    fireEvent.change(inputPassword, {
      target: {
        value: mockedPassword
      }
    });

    const loginButton = screen.getByRole("button", { name: /login/i });
    fireEvent.click(loginButton);
    await waitFor(() => {
      const element = screen.getByText(/dashboard/i);
      expect(element).toBeInTheDocument();

      // Open the dropdown
      const email = screen.queryByText(mockedEmail);
      fireEvent.click(email);

      const logout = screen.queryByText(/logout/i);
      fireEvent.click(logout);
    });
  });

  it("Can manage missing data from mutation", async () => {
    server.use(
      rest.post(
        `${process.env.REACT_APP_BACKEND_URL}/v1/auth/login`,
        (req, res, ctx) => {
          return res(ctx.json([]));
        }
      )
    );

    renderWithProviders(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const inputUsername = screen.getByLabelText(/username/i);
    fireEvent.change(inputUsername, {
      target: {
        value: mockedEmail
      }
    });

    const inputPassword = screen.getByLabelText(/password/i);
    fireEvent.change(inputPassword, {
      target: {
        value: mockedPassword
      }
    });

    const loginButton = screen.getByRole("button", { name: /login/i });
    fireEvent.click(loginButton);

    await waitFor(() => {
      const loginButton = screen.getByRole("button", { name: /login/i });
      expect(loginButton).toBeInTheDocument();
    });
  });
});
