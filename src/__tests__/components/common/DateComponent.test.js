import { render, screen } from "@testing-library/react";
import DateComponent from "@/app/components/common/DateComponent";
import { content } from "@/__tests__/__mocks__/responses/transactionsPage0";

describe("Test DateComponent", () => {
  it("Can render DateComponent", () => {
    render(
      <DateComponent
        date={
          content.filter((transaction) => transaction.id === 99)[0]
            .transactionDate
        }
        format="DD/MM/YYYY"
      />
    );
    const date = screen.getByText("04/01/2023");
    expect(date).toBeInTheDocument();
  });
});
