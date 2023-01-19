import { render, screen } from "@testing-library/react";
import ModalWindow from "../../components/ModalWindow";

describe("Test ModalWindow", () => {
  it("Can render ModalWindow", () => {
    render(<ModalWindow show />);
    const title = screen.getByText(/detail/i);
    expect(title).toBeInTheDocument();
  });
});
