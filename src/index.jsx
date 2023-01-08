import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import setupStore from "./store/index";
import App from "./App";
import "./assets/scss/app.scss";

const store = setupStore({});

const container = document.getElementById("root") || document.createElement("div");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);
