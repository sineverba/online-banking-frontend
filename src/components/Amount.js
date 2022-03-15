import React from "react";

export const Amount = ({amount}) => {

    const getClassName = (amount) => {
        const className = "amount";
        if (amount < 0) {
            return `${className} text-danger`;
        }
        return className;
    }

    return (
        <span className={getClassName(amount)}>{amount.toFixed(2)} €</span>
    );
};

export default Amount;