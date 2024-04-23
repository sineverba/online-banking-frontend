/**
 * File to wrap REDUX in all project.
 *
 * Don't edit.
 */

"use client";

import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { getPreloadedStore } from "../lib/utilityStore";
import setupStore from "../store";

const store = setupStore(getPreloadedStore());

// Bootstrap mirage
if (
  process.env.NEXT_PUBLIC_USE_MIRAGE_SERVER === "true" &&
  process.env.NODE_ENV !== "production"
) {
  // eslint-disable-next-line global-require
  const { makeServer } = require("../../__tests__/__mocks__/server");
  makeServer({ environment: "development" });
}

const Providers = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

Providers.propTypes = {
  children: PropTypes.node.isRequired
};

export default Providers;
