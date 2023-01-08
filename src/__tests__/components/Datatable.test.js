import { render, screen } from "@testing-library/react";
import Datatable from "../../components/Datatable";

describe("Test Datatable component", () => {
  test("Can set pagination as false", () => {
    const columns = [
      {
        name: "key",
        selector: (row) => row.key,
      },
    ];

    const items = [
      {
        key: "foo",
      },
    ];

    render(<Datatable columns={columns} data={items} />);
    const foo = screen.getByText(/foo/i);
    expect(foo).toBeInTheDocument();

  });
});
