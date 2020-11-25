import PropTypes from "prop-types";
import React from "react";

const Html = ({ classes }) => {
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
                    <path d="M0,0,34.9,395.8,191.5,448l157.6-52.2L384,0ZM308.2,127.9H124.4l4.1,49.4H304.1L290.5,325.7l-97.9,27v.3h-1.1L92.8,325.7l-6-75.8h47.7L138,288l53.5,14.5L245.2,288l6-62.2H84.3L71.5,80.2H312.6Z" />
                </g>
            </g>
        </svg>
    );
};

Html.defaultProps = {
    classes: ``
};

Html.propTypes = {
    classes: PropTypes.string
};

export default Html;
