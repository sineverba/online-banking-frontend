import { render, screen } from "@testing-library/react";
import Footer from "../../components/Footer";

describe("Test Footer", () => {
  it("Can render Footer", () => {
    render(<Footer />);
    const version = screen.getByText(/9.8.7/i);
    expect(version).toBeInTheDocument();
  });
});
