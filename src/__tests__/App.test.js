import { fireEvent, renderHook, screen, waitFor } from "@testing-library/react";
import App from "../App";
import { renderWithProviders } from "./__test-utils__/test-utils";
import { BrowserRouter } from "react-router-dom";
import { email as mockedEmail } from "./__mocks__/items/email";
import { password as mockedPassword } from "./__mocks__/items/password";
import { item } from "./__mocks__/responses/login";
import { rest } from "msw";
// eslint-disable-next-line jest/no-mocks-import
import { server } from "./__mocks__/api/server";

beforeEach(() => {
  server.use(
    rest.post(
      `${process.env.REACT_APP_BACKEND_URL}/auth/login`,
      (req, res, ctx) => {
        return res(ctx.json(item));
      }
    )
  );
});
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => {
  server.resetHandlers();
});

// Clean up after the tests are finished.
afterAll(() => server.close());

describe("Test App.js", () => {

  it("Perform login and show menu", async () => {

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
});