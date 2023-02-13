import { fireEvent, screen } from "@testing-library/react";
import { GenericPage } from "../../../views/GenericPage/GenericPage";
import { renderWithProviders } from "../../__test-utils__/test-utils";
import { ENTITY_PAYMENT } from "../../../utils/constants/constant";

describe("Test Payment Page", () => {
  it("Can perform a transaction", async () => {
    renderWithProviders(<GenericPage entity={ENTITY_PAYMENT} />);

    const inputAmount = screen.getByLabelText(/amount/i);
    fireEvent.change(inputAmount, {
      target: {
        value: 1234.56,
      },
    });

    const inputPurpose = screen.getByLabelText(/purpose/i);
    fireEvent.change(inputPurpose, {
      target: {
        value: "purpose of transaction",
      },
    });

    const payButton = screen.getByRole("button", { name: /pay/i });
    fireEvent.click(payButton);
  });
});
