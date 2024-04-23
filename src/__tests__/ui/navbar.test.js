import { fireEvent, screen } from "@testing-library/react";
import Navbar from "@/app/components/common/navbar";
import { renderWithProviders } from "../__test-utils__/test-utils";
import { act } from "@testing-library/react";

jest.mock("next/navigation", () => {
  return {
    __esModule: true,
    usePathname: () => ({
      pathname: ""
    }),
    useRouter: () => ({
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn()
    }),
    useSearchParams: () => ({
      get: () => {}
    })
  };
});

// Mock utility per mockare in seguito le varie funzioni d'appoggio
jest.mock("../../app/lib/utility");

describe("UI Navbar Component", () => {
  it("Can render navbar component and perform logout", async () => {
    const { container } = renderWithProviders(<Navbar />);

    const userMenu = container.getElementsByClassName("sr-only");
    /**
     * We got two hidden menu:
     * 1 - user menu
     * 2 - dropdown on mobile
     */
    expect(userMenu.length).toBe(2);

    await act(async () => {
      fireEvent.click(userMenu[0]);
    });
    const logoutButton = screen.getByRole("menuitem", { name: /logout/i });
    expect(logoutButton).toBeInTheDocument();
    fireEvent.click(logoutButton);
  });
});
