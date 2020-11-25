import PropTypes from "prop-types";
import React from "react";

const C = ({ classes }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 38 41.9"
            className={classes}
            aria-hidden="true"
        >
            <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                    {/* eslint-disable-next-line max-len */}
                    <path d="M36.9,9.7C33.6,7.9,23.5,2.2,20.1.3a2.17,2.17,0,0,0-2.2,0L1.1,9.7A1.89,1.89,0,0,0,0,11.5V30.4a1.89,1.89,0,0,0,1.1,1.8c3.3,1.8,13.4,7.5,16.8,9.4a2.17,2.17,0,0,0,2.2,0c3.3-1.8,13.4-7.5,16.8-9.4A1.88,1.88,0,0,0,38,30.4V11.5A2.12,2.12,0,0,0,36.9,9.7ZM26.12,33.06a14,14,0,1,1,5-19.17L25,17.36a6.92,6.92,0,0,0-2.42-2.42A7,7,0,1,0,25,24.54l6.2,3.35A14,14,0,0,1,26.12,33.06Z" />
                </g>
            </g>
        </svg>
    );
};

C.defaultProps = {
    classes: ``
};

C.propTypes = {
    classes: PropTypes.string
};

export default C;
