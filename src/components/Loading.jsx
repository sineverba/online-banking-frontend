import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export function Loading() {
  return (
    <div className="loading">
      <FontAwesomeIcon icon={faSpinner} size="6x" pulse />
      <p>Loading</p>
    </div>
  );
}

export default Loading;
