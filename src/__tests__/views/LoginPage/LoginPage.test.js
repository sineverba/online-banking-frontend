import { fireEvent, screen, waitFor } from "@testing-library/react";
import { LoginPage } from "../../../views/LoginPage/LoginPage";
import { renderWithProviders } from "../../__test-utils__/test-utils";
import { rest } from "msw";
// eslint-disable-next-line jest/no-mocks-import
import { server } from "../../__mocks__/api/server";
import { email } from "../../__mocks__/items/email";
import { password } from "../../__mocks__/items/password";
import { items } from "../../__mocks__/responses/login";

beforeEach(() => {
  server.use(
    rest.post(
      `${process.env.REACT_APP_BACKEND_URL}/auth/login`,
      (req, res, ctx) => {
        return res(ctx.json(items));
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

describe("Test LoginPage", () => {
  it("Can perform login", async () => {
    renderWithProviders(<LoginPage />);

    const inputUsername = screen.getByLabelText(/username/i);
    fireEvent.change(inputUsername, {
      target: {
        value: email,
      },
    });

    const inputPassword = screen.getByLabelText(/password/i);
    fireEvent.change(inputPassword, {
      target: {
        value: password,
      },
    });

    const loginButton = screen.getByRole("button", { name: /login/i });
    fireEvent.click(loginButton);
  });

  it("Can manage wrong credentials", async () => {
    renderWithProviders(<LoginPage />);

    const inputUsername = screen.getByLabelText(/username/i);
    fireEvent.change(inputUsername, {
      target: {
        value: email,
      },
    });

    const inputPassword = screen.getByLabelText(/password/i);
    fireEvent.change(inputPassword, {
      target: {
        value: password,
      },
    });

    const loginButton = screen.getByRole("button", { name: /login/i });
    fireEvent.click(loginButton);

    await waitFor(() => {
      expect(screen.queryByText(/dashboard/i)).not.toBeInTheDocument();
    });
  });
});
