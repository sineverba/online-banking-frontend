import { fireEvent, screen } from "@testing-library/react";
import {Topbar} from "../../components/Topbar";
import { LOCALSTORAGE_ACCESS_TOKEN } from "../../utils/constants/constant";
import { renderWithProviders } from "../__test-utils__/test-utils";
import { accessToken } from "../__mocks__/items/accessToken";
import { email as mockedEmail } from "../__mocks__/items/email";

describe("Test Topbar", () => {
  it("Can logout and remove accessToken from localStorage", () => {
    // Set a fake token
    localStorage.setItem(LOCALSTORAGE_ACCESS_TOKEN, accessToken);
    renderWithProviders(<Topbar />);

    // Open the dropdown
    const email = screen.queryByText(mockedEmail);
    fireEvent.click(email);

    const logout = screen.queryByText(/logout/i);
    expect(logout).toBeInTheDocument();
    fireEvent.click(logout);
  });
});
