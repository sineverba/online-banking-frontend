import { render, screen } from "@testing-library/react";
import FormComponent from "../../components/FormComponent";

describe("Test FormComponent", () => {
  /**
   * I campi delle entità servizi.
   * Ogni label sarà una tab.
   */
  const fields = [
    {
      name: "foo",
      type: "text",
    },
  ];

  it("Can render FormComponent with input text", () => {
    render(<FormComponent field={fields[0]} />);
    const foo = screen.getByText(/foo/i);
    expect(foo).toBeInTheDocument();
  });

  it("Can render FormComponent with input text and different label", () => {
    const field = {
      name: "foo",
      label: "bar",
      type: "text",
    };
    render(<FormComponent field={field} />);
    const bar = screen.getByText(/bar/i);
    expect(bar).toBeInTheDocument();
  });

  it("Can render FormComponent with input text and missing required fields", () => {
    
    const currentItem = {};
    render(<FormComponent field={fields[0]} currentItem={currentItem} />);
    const foo = screen.getByText(/foo/i);
    expect(foo).toBeInTheDocument();
  });

  it("Can render FormComponent with input text and default value", () => {
    render(
      <FormComponent
        field={fields[0]}
        currentItem={{ foo: "default value of foo" }}
      />
    );
    const inputFoo = screen.getByLabelText(/foo/i);
    expect(inputFoo).toHaveValue("default value of foo");
  });

  it("Can render FormComponent if toHide is set to true", () => {
    const field = {
      name: "foo",
      type: "text",
      toHide: true,
    };
    render(<FormComponent field={field} />);
    const foo = screen.queryByText(/foo/i);
    expect(foo).toBeNull();
  });
});
