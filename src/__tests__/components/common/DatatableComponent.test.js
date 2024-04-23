import { render, screen } from "@testing-library/react";
import DatatableComponent from "@/app/components/common/DatatableComponent";

describe("Test DatatableComponent", () => {
  it("Can render Datatable with no data", () => {
    render(<DatatableComponent columns={[]} data={[]} />);
    const noDataFoundText = screen.getByText(
      /there are no records to display/i
    );
    expect(noDataFoundText).toBeInTheDocument();
  });
});
