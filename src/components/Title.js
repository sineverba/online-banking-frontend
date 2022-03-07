import React from "react";
import PropTypes from "prop-types";

export const Title = (props) => {
    return (
        <h1 className="h3 mb-4 text-gray-800">{props.label}</h1>
    );
};

Title.propTypes = {
    label: PropTypes.string,
};
Title.defaultProps = {
    label: "Title"
};

export default Title;