import React from "react";
import ReactDOM from "react-dom";
import App from "../views/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store/index";

jest.mock("react-dom", () => ({ render: jest.fn() }));

describe('Test index.js', () => {
  it("Should render app without crashing", () => {
    const div = document.createElement("div");
    div.id = "root";
    document.body.appendChild(div);
    require('../index.js');
    expect(ReactDOM.render).toHaveBeenCalledWith(
      <React.StrictMode>
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      </React.StrictMode>,
      div
    );
  });
});
