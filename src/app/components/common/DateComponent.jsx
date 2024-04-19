"use client";

import React from "react";
import PropTypes from "prop-types";
import { fromIsoToHuman } from "@sineverba/date-convert";

const DateComponent = ({ date, format }) => (
  <span>{fromIsoToHuman(date, format)}</span>
);

DateComponent.propTypes = {
  date: PropTypes.string.isRequired,
  format: PropTypes.string.isRequired
};

export default DateComponent;
