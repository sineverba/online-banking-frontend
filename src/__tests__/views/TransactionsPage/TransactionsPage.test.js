import { fireEvent, screen, waitFor } from "@testing-library/react";
import { renderWithProviders } from "../../__test-utils__/test-utils";
import { rest } from "msw";
import { server } from "../../__mocks__/api/server";
import GenericPage from "../../../views/GenericPage/GenericPage";
import { ENTITY_TRANSACTIONS } from "../../../utils/constants/constant";

describe("Test TransactionsPage", () => {

  it("Test can show transactions", async () => {
    renderWithProviders(<GenericPage entity={ENTITY_TRANSACTIONS} />);
    await waitFor(() => {
      const purpose = screen.getByText(/December 2022 - Salary/i);
      expect(purpose).toBeInTheDocument();
    });
  });

  it("Test can manage change page", async () => {

    renderWithProviders(<GenericPage entity={ENTITY_TRANSACTIONS} />);
    await waitFor(() => {
      const nextPageButton = screen.getByRole("button", {name: "Next Page"});
      expect(nextPageButton).toBeInTheDocument();
      fireEvent.click(nextPageButton);
    });
  });

  it("Test can manage change per page", async () => {

    renderWithProviders(<GenericPage entity={ENTITY_TRANSACTIONS} />);
    await waitFor(() => {
      const perPageSelect = screen.getByLabelText('Rows per page:');
      expect(perPageSelect).toBeInTheDocument();
      fireEvent.change(perPageSelect, {
        target: { value: "20" },
      });
    });
  });

  it("Test can manage sort", async () => {
    renderWithProviders(<GenericPage entity={ENTITY_TRANSACTIONS} />);
    await waitFor(() => {
      const column = screen.getByText(/amount/i);
      expect(column).toBeInTheDocument();
      fireEvent.click(column);
    });
  });

  it("Test can manage callback", async () => {
    renderWithProviders(<GenericPage entity={ENTITY_TRANSACTIONS} forceUndefinedForSort />);
    await waitFor(() => {
      const column = screen.getByText(/amount/i);
      expect(column).toBeInTheDocument();
      fireEvent.click(column);
    });
  });

  it("Test can open and close modal on modal header", async () => {
    renderWithProviders(<GenericPage entity={ENTITY_TRANSACTIONS} />);
    await waitFor(() => {
      const purpose = screen.queryAllByText(/December 2022 - Salary/i);
      fireEvent.click(purpose.at(0));
      // Search the close button
      const closeButton = screen.getAllByRole("button", { name: /close/i });
      fireEvent.click(closeButton.at(0));
    });
  });

  it("Test can open and close modal on modal footer", async () => {
    renderWithProviders(<GenericPage entity={ENTITY_TRANSACTIONS} />);
    await waitFor(() => {
      const purpose = screen.queryAllByText(/December 2022 - Salary/i);
      fireEvent.click(purpose.at(0));
      // Search the close button
      const closeButton = screen.getAllByRole("button", { name: /close/i });
      fireEvent.click(closeButton.at(1));
    });
  });

});
