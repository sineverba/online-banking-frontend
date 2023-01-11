import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { render, screen } from "@testing-library/react";
import Kpi from "../../components/Kpi";
import { balance } from "../__mocks__/items/balance";

describe("Test Kpi", () => {
  it("Can render Kpi", () => {
    render(
      <Kpi
        title="title"
        value={balance}
        icon={<FontAwesomeIcon icon={faUsers} />}
      />
    );
    const title = screen.getByText(/title/i);
    expect(title).toBeInTheDocument();
    const value = screen.getByText(balance);
    expect(value).toBeInTheDocument();
  });
});
