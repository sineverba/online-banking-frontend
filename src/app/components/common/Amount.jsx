/**
 * Amount compoenent to display a money value.
 *
 */

"use client";

import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

const Amount = ({ value }) => (
  <span
    className={clsx("text-3xl", {
      "text-teal-500": value >= 0,
      "text-rose-600": value < 0
    })}
  >
    {value.toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 })} €
  </span>
);

Amount.propTypes = {
  value: PropTypes.number.isRequired
};

export default Amount;
