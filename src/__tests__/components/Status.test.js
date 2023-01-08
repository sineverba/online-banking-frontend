import { render } from "@testing-library/react";
import Status from "../../components/Status";

describe("Test Status", () => {
  it("Can render Status true", () => {
    const {container} = render(<Status pending/>);
    const iconCheck = container.getElementsByClassName("fa-check");
    expect(iconCheck.length).toBe(0);
    const iconClock = container.getElementsByClassName("fa-clock");
    expect(iconClock.length).toBe(1);
  });
  it("Can render Status false", () => {
    const {container} = render(<Status pending={false}/>);
    const iconCheck = container.getElementsByClassName("fa-check");
    expect(iconCheck.length).toBe(1);
    const iconClock = container.getElementsByClassName("fa-clock");
    expect(iconClock.length).toBe(0);
  });
});