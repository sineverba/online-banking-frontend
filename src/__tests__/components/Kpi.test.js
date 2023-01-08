import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { render, screen } from "@testing-library/react";
import Kpi from "../../components/Kpi";

describe("Test Kpi", () => {
  it("Can render Kpi", () => {
    render(
      <Kpi
        title="title"
        number="123.45"
        icon={<FontAwesomeIcon icon={faUsers} />}
      />
    );
    const title = screen.getByText(/title/i);
    expect(title).toBeInTheDocument();
    const number = screen.getByText("123.45");
    expect(number).toBeInTheDocument();
  });
});
