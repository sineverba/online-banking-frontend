import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faClock } from "@fortawesome/free-solid-svg-icons";

export function Status(props) {
  const { pending } = props;

  return <FontAwesomeIcon icon={pending ? faClock : faCheck} />;
}

export default Status;
