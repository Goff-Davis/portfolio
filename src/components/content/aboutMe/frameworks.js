import PropTypes from "prop-types";
import React from "react";

import Django from "../../icons/django";
import Gatsby from "../../icons/gatsby";
import ReactIcon from "../../icons/reactIcon";
import Vue from "../../icons/vue";

const Frameworks = ({ text }) => {
    return (
        <ul className="body">
            <li>
                <ReactIcon classes={`flavor-icon ${text}`} />
                React
            </li>
            <li>
                <Vue classes={`flavor-icon ${text}`} />
                Vue
            </li>
            <li>
                <Django classes={`flavor-icon ${text}`} />
                Django
            </li>
            <li>
                <Gatsby classes={`flavor-icon ${text}`} />
                Gatsby
            </li>
        </ul>
    );
};

Frameworks.propTypes = {
    text: PropTypes.string.isRequired
};

export default Frameworks;
