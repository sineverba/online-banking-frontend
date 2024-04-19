import { render, screen } from "@testing-library/react";
import Kpi from "@/app/components/common/Kpi";

describe("Test Kpi", () => {
  it("Can render kpi with a text and a value", () => {
    render(<Kpi keyLoop={1} title="display kpi" value="1234.56" />);
    const title = screen.getByText(/display kpi/i);
    expect(title).toBeInTheDocument();
    const value = screen.getByText(/1234.56/i);
    expect(value).toBeInTheDocument();
  });
});
