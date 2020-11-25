import PropTypes from "prop-types";
import React from "react";

const Vue = ({ classes }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 383.7"
            className={classes}
            aria-hidden="true"
        >
            <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                    {/* eslint-disable-next-line max-len */}
                    <path d="M356.9,0H280L224,88.6,176,0H0L224,383.7,448,0ZM55.7,32h53.8L224,230.2,338.4,32h53.8L224,320.2,55.7,32Z" />
                </g>
            </g>
        </svg>
    );
};

Vue.defaultProps = {
    classes: ``
};

Vue.propTypes = {
    classes: PropTypes.string
};

export default Vue;
