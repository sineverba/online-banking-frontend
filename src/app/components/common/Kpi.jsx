/**
 * KPI compoenent to display various indicators.
 *
 */

"use client";

import React from "react";
import PropTypes from "prop-types";
import { Card, Flex, Metric, Title } from "@tremor/react";
import { Loading } from "@sineverba/loading";

const Kpi = ({ isLoading = false, keyLoop, title, value }) => (
  <Card key={keyLoop}>
    <Title>{title}</Title>
    <Flex justifyContent="start" alignItems="baseline" className="space-x-2">
      <Metric>{isLoading ? <Loading /> : value}</Metric>
    </Flex>
  </Card>
);
Kpi.propTypes = {
  keyLoop: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  isLoading: PropTypes.bool
};

export default Kpi;
