import {Sidebar} from "../../components/Sidebar";
import { renderWithProviders } from "../__test-utils__/test-utils";
import { BrowserRouter } from "react-router-dom";

describe("Test Sidebar", () => {
  it("Can show logo", async () => {
    renderWithProviders(<BrowserRouter><Sidebar /></BrowserRouter>);   
  });
});
