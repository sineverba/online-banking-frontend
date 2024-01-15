import { fireEvent, screen, waitFor } from "@testing-library/react";
import { GenericForm } from "../../../views/GenericPage/GenericForm";
import { renderWithProviders } from "../../__test-utils__/test-utils";
import { email } from "../../__mocks__/items/email";
import { password } from "../../__mocks__/items/password";
import { LOCALSTORAGE_ACCESS_TOKEN } from "../../../utils/constants/constant";
import { accessToken } from "../../__mocks__/items/accessToken";

describe("Test LoginPage", () => {
  it("Can perform login", async () => {
    renderWithProviders(<GenericForm />);

    const inputUsername = screen.getByLabelText(/username/i);
    fireEvent.change(inputUsername, {
      target: {
        value: email
      }
    });

    const inputPassword = screen.getByLabelText(/password/i);
    fireEvent.change(inputPassword, {
      target: {
        value: password
      }
    });

    const loginButton = screen.getByRole("button", { name: /login/i });
    fireEvent.click(loginButton);

    await waitFor(() => {
      expect(localStorage.getItem(LOCALSTORAGE_ACCESS_TOKEN)).toEqual(
        accessToken
      );
    });
  });

  it("Can handle wrong credentials", async () => {
    renderWithProviders(<GenericForm />);

    const inputUsername = screen.getByLabelText(/username/i);
    fireEvent.change(inputUsername, {
      target: {
        value: "wrong"
      }
    });

    const inputPassword = screen.getByLabelText(/password/i);
    fireEvent.change(inputPassword, {
      target: {
        value: password
      }
    });

    const loginButton = screen.getByRole("button", { name: /login/i });
    fireEvent.click(loginButton);

    await waitFor(() => {
      expect(localStorage.getItem(LOCALSTORAGE_ACCESS_TOKEN)).toBeNull();
    });
  });
});
