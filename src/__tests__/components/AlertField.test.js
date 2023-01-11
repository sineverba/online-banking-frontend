import { render, screen } from "@testing-library/react";
import AlertField from "../../components/AlertField";

describe("Test AlertField", () => {
  it("Can render AlertField", () => {
    render(<AlertField label="testfoo" hasError />);
    const title = screen.getByText(/testfoo/i);
    expect(title).toBeInTheDocument();
  });

  it("Can render AlertField without props error", () => {
    render(<AlertField label="testfoo" hasError={false} />);
    const title = screen.getByText(/testfoo/i);
    expect(title).toBeInTheDocument();
  });

  it("Can render AlertField with asterisk", () => {
    render(<AlertField label="testfoo" hasError required />);
    const asterisk = screen.getByText(/\*/i);
    expect(asterisk).toBeInTheDocument();
  });
});
