import { render, screen } from "@testing-library/react";
import Amount from "@/app/components/common/Amount";

describe("Test Amount", () => {
  it("Can render positive amount component", () => {
    render(<Amount value={1234.56} />);
    const value = screen.getByText(/234/i);
    expect(value).toBeInTheDocument();
    expect(value).toHaveClass("text-teal-500");
  });

  it("Can render negative amount component", () => {
    render(<Amount value={-1234.56} />);
    const value = screen.getByText(/234/i);
    expect(value).toBeInTheDocument();
    expect(value).toHaveClass("text-rose-600");
  });
});
