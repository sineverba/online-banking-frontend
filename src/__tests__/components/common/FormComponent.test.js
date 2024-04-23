import { fireEvent, render, screen } from "@testing-library/react";
import FormComponent from "@/app/components/common/FormComponent";
import extraValues from "@/app/lib/constants";

describe("Test FormComponent", () => {
  const fields = [
    {
      id: "foo",
      name: "fooName",
      type: "text"
    },
    {
      id: "bar",
      name: "barName",
      type: "text",
      onKeyDownRegex: extraValues.get("REGEX_ONLY_CHAR_NUMBER")
    },
    {
      id: "baz",
      name: "selectBaz",
      label: "Pick a choice",
      type: "select",
      options: [
        {
          value: "alfa",
          label: "First possibility"
        },
        {
          value: "beta",
          label: "Second possibility"
        }
      ],
      initialOption: {
        value: "",
        label: "Make your choice"
      }
    },
    {
      id: "alfa",
      name: "selectAlfa",
      type: "select",
      options: [
        {
          value: "alfa",
          label: "First possibility"
        },
        {
          value: "beta",
          label: "Second possibility"
        }
      ],
      initialOption: {
        value: null,
        label: "Make your choice"
      }
    },
    {
      id: "beta",
      name: "betaCheckbox",
      label: "A checkbox beta labelled",
      type: "checkbox"
    },
    {
      id: "beta",
      name: "betaCheckbox",
      type: "checkbox"
    },
    {
      id: "idPassword",
      name: "password",
      type: "password"
    }
  ];

  it("Can render input text", () => {
    render(<FormComponent field={fields[0]} />);
    const fooNameInputText = screen.getByLabelText(/fooName/i);
    expect(fooNameInputText).toBeInTheDocument();
  });

  it("Can handle input text with onKeyDown set", () => {
    render(<FormComponent field={fields[1]} />);
    const barNameInputText = screen.getByLabelText(/barName/i);
    expect(barNameInputText).toBeInTheDocument();

    fireEvent.keyDown(barNameInputText, { key: "a" });
    fireEvent.keyDown(barNameInputText, { key: "?" });
  });

  it("Can render input select", () => {
    render(<FormComponent field={fields[2]} />);
    const bazNameSelect = screen.getByLabelText(/pick a choice/i);
    expect(bazNameSelect).toBeInTheDocument();

    const bazSelect = screen.getByRole("combobox", { name: /pick a choice/i });
    expect(bazSelect).toBeInTheDocument();

    // Options quantity
    const options = screen.getAllByRole("option");
    expect(options).toHaveLength(3);
  });

  it("Can render input select without label", () => {
    render(<FormComponent field={fields[3]} />);
    const alfaSelect = screen.getByLabelText(/selectAlfa/i);
    expect(alfaSelect).toBeInTheDocument();

    const alfaSelectByRole = screen.getByRole("combobox", {
      name: /selectAlfa/i
    });
    expect(alfaSelectByRole).toBeInTheDocument();
  });

  it("Can render checkbox", () => {
    render(<FormComponent field={fields[4]} />);
    const checkbox = screen.getByRole("checkbox", {
      name: /a checkbox beta labelled/i
    });
    expect(checkbox).toBeInTheDocument();
  });

  it("Can render checkbox without label", () => {
    render(<FormComponent field={fields[5]} />);
    const checkbox = screen.getByRole("checkbox", {
      name: /betaCheckbox/i
    });
    expect(checkbox).toBeInTheDocument();
  });

  it("Can render input password", () => {
    const field = fields.filter((field) => field.id === "idPassword");
    render(<FormComponent field={field[0]} />);
    const passwordInput = screen.getByLabelText(/password/i);
    expect(passwordInput).toBeInTheDocument();
    expect(passwordInput).toHaveAttribute("type", "password");
  });
});
