import PropTypes from "prop-types";
import React from "react";

import "./hamburger.scss";

function convertToCorrectColor(colorClass) {
    switch (colorClass) {
        case `light-mode-text`:
            return `light-mode`;
        case `dark-mode-text`:
            return `dark-mode`;
        default:
            return ``;
    }
}

const Hamburger = ({ color, hidden, isOpen, actionCallback }) => {
    const realColor = convertToCorrectColor(color);

    function toggleIsOpen() {
        actionCallback();
    }

    return (
        <button
            className={`hamburger body ${isOpen ? `open` : ``}`}
            type="button"
            onClick={toggleIsOpen}
            aria-label="Menu"
            aria-controls="navigation"
            aria-hidden={hidden}
        >
            <span className={realColor} />
            <span className={realColor} />
            <span className={realColor} />
            <span className={realColor} />
        </button>
    );
};

Hamburger.defaultProps = {
    isOpen: false
};

Hamburger.propTypes = {
    color: PropTypes.string.isRequired,
    hidden: PropTypes.bool.isRequired,
    isOpen: PropTypes.bool,
    actionCallback: PropTypes.func.isRequired
};

export default Hamburger;
