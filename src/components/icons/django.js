import PropTypes from "prop-types";
import React from "react";

const Django = ({ classes }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14.9 18.88"
            className={classes}
            aria-hidden="true"
        >
            <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                    {/* eslint-disable-next-line max-len */}
                    <path d="M13.8,3h-1a.94.94,0,0,1-1-1V1a.94.94,0,0,1,1-1h1a.94.94,0,0,1,1,1V2A.94.94,0,0,1,13.8,3Zm1,10.7c0,1-.2,4-2.7,5.1a1.1,1.1,0,0,1-.8,0l-1.5-.7a.49.49,0,0,1,0-.9,4.1,4.1,0,0,0,2.1-3.5V6a.94.94,0,0,1,1-1h1a.94.94,0,0,1,1,1v7.7ZM6.8,1V5.2A3.64,3.64,0,0,0,5.3,5C2.5,5,0,6.3,0,10c0,4.4,3.5,5,5.8,5,.7,0,2.1-.1,3.1-.2a1.06,1.06,0,0,0,.9-1V1a.94.94,0,0,0-1-1h-1A.94.94,0,0,0,6.8,1Zm-1,11.5c-1.3,0-2.6-.4-2.6-2.5S4.5,7.6,5.8,7.6c.3,0,.7.1,1,.1v4.7A3.75,3.75,0,0,1,5.8,12.5Z" />
                </g>
            </g>
        </svg>
    );
};

Django.defaultProps = {
    classes: ``
};

Django.propTypes = {
    classes: PropTypes.string
};

export default Django;
