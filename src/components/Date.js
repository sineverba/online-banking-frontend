import React from "react";
import { fromIsoToHuman } from "@sineverba/date-convert";

export const Date = ({date}) => {

    return (
        <span className="dateComponent">{fromIsoToHuman(date)}</span>
    );
};

export default Date;