import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

export function AlertField(props) {
  const { hasError, required, label } = props;
  const getClassName = () => {
    if (hasError) {
      return "text-danger";
    }
    return "";
  };

  const getIcon = () => {
    if (hasError) {
      return <FontAwesomeIcon icon={faTriangleExclamation} />;
    }
    return null;
  };

  const getLabel = () => {
    if (required) {
      return `${label} *`;
    }
    return label;
  };

  return (
    <span className={getClassName()}>
      {getIcon()}
      {getLabel()}
    </span>
  );
}

export default AlertField;
