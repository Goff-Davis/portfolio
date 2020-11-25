import PropTypes from "prop-types";
import React from "react";

const Css = ({ classes }) => {
    return (
        <svg
            viewBox="0 0 384 448"
            xmlns="http://www.w3.org/2000/svg"
            className={classes}
            aria-hidden="true"
        >
            <g data-name="Layer 2">
                <g data-name="Layer 1">
                    {/* eslint-disable-next-line max-len */}
                    <path d="M0,0,34.9,395.8,192,448l157.1-52.2L384,0ZM313.1,80l-4.8,47.3L193,176.6l-.3.1H304.2L291.4,323.3,193.2,352,94.4,322.8,88,248.9h48.9l3.2,38.3,52.6,13.3,54.7-15.4,3.7-61.6L84.8,223v-.1l-.2.1L81,176.7,193.1,130l6.5-2.7H76.7L70.9,80Z" />
                </g>
            </g>
        </svg>
    );
};

Css.defaultProps = {
    classes: ``
};

Css.propTypes = {
    classes: PropTypes.string
};

export default Css;
