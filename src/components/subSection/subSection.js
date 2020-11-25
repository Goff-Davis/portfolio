import PropTypes from "prop-types";
import React from "react";

import "./subSection.scss";

const SubSection = ({ header, children, primary }) => {
    return (
        <div className="sub-section">
            <h2 className={`sub-header ${primary}`}>{header.toUpperCase()}</h2>

            <div>{children}</div>
        </div>
    );
};

SubSection.propTypes = {
    header: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    primary: PropTypes.string.isRequired
};

export default SubSection;
