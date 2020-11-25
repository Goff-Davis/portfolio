import PropTypes from "prop-types";
import React from "react";

import C from "../../icons/c";
import Css from "../../icons/css";
import Html from "../../icons/html";
import Java from "../../icons/java";
import JavaScript from "../../icons/javaScript";
import Python from "../../icons/python";
import TypeScript from "../../icons/typeScript";

const Languages = ({ text }) => {
    return (
        <ul className="body">
            <li>
                <JavaScript classes={`flavor-icon ${text}`} />
                JavaScript
            </li>
            <li>
                <TypeScript classes={`flavor-icon ${text}`} />
                TypeScript
            </li>
            <li>
                <Python classes={`flavor-icon ${text}`} />
                Python
            </li>
            <li>
                <Java classes={`flavor-icon ${text}`} />
                Java
            </li>
            <li>
                <Html classes={`flavor-icon ${text}`} />
                HTML5
            </li>
            <li>
                <Css classes={`flavor-icon ${text}`} />
                CSS3
            </li>
            <li>
                <C classes={`flavor-icon ${text}`} />C
            </li>
        </ul>
    );
};

Languages.propTypes = {
    text: PropTypes.string.isRequired
};

export default Languages;
