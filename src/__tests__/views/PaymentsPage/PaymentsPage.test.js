import { fireEvent, screen } from "@testing-library/react";
import { GenericPage } from "../../../views/GenericPage/GenericPage";
import { renderWithProviders } from "../../__test-utils__/test-utils";
import { rest } from "msw";
// eslint-disable-next-line jest/no-mocks-import
import { server } from "../../__mocks__/api/server";
import { item } from "../../__mocks__/responses/payment";
import { ENTITY_PAYMENT } from "../../../utils/constants/constant";

beforeEach(() => {
  server.use(
    rest.post(
      `${process.env.REACT_APP_BACKEND_URL}/bank-account-transactions`,
      (req, res, ctx) => {
        return res(ctx.json(item));
      }
    )
  );
});
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => {
  server.resetHandlers();
});

// Clean up after the tests are finished.
afterAll(() => server.close());

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
