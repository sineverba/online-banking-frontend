import { render, screen } from "@testing-library/react";
import Loading from "../../components/Loading";

describe("Test Loading", () => {
  it("Can render Loading", () => {
    render(<Loading />);
    const loading = screen.getByText(/loading/i);
    expect(loading).toBeInTheDocument();
  });
});
