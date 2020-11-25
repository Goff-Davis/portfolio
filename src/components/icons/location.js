import PropTypes from "prop-types";
import React from "react";

const Location = ({ classes }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            className={classes}
            aria-hidden="true"
        >
            <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                    {/* eslint-disable-next-line max-len */}
                    <path d="M172.27,501.67C27,291,0,269.41,0,192,0,86,86,0,192,0S384,86,384,192c0,77.41-27,99-172.27,309.67a24,24,0,0,1-39.46,0ZM192,272a80,80,0,1,0-80-80A80,80,0,0,0,192,272Z" />
                </g>
            </g>
        </svg>
    );
};

Location.defaultProps = {
    classes: ``
};

Location.propTypes = {
    classes: PropTypes.string
};

export default Location;
