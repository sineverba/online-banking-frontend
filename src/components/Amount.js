import React from "react";

export const Amount = ({amount}) => {

    const getClassName = (value) => {
        const className = "amount";
        if (value < 0) {
            return `${className} text-danger`;
        }
        return className;
    }

    return (
        <span className={getClassName(amount)}>{amount.toFixed(2)} €</span>
    );
};

export default Amount;