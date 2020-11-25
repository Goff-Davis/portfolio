import PropTypes from "prop-types";
import React from "react";

import Aws from "../../icons/aws";
import Git from "../../icons/git";
import Node from "../../icons/node";

const OtherTechnologies = ({ text }) => {
    return (
        <ul className="body">
            <li>
                <Node classes={`flavor-icon ${text}`} />
                Node
            </li>
            <li>
                <Git classes={`flavor-icon ${text}`} />
                Git
            </li>
            <li>
                <Aws classes={`flavor-icon ${text}`} />
                AWS
            </li>
        </ul>
    );
};

OtherTechnologies.propTypes = {
    text: PropTypes.string.isRequired
};

export default OtherTechnologies;
