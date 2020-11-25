import PropTypes from "prop-types";
import React from "react";

import "./section.scss";

const Section = ({ children, title, anchor, background, text }) => {
    return (
        <section id={anchor} className={`section ${background} ${text}`}>
            <h1 className="header">{title}</h1>

            {children}
        </section>
    );
};

Section.defaultProps = {
    anchor: ``
};

Section.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    anchor: PropTypes.string,
    background: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default Section;
