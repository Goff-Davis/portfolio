import PropTypes from "prop-types";
import React from "react";

const Lightbulb = ({ classes }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 352 512.01"
            className={classes}
            aria-hidden="true"
        >
            <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                    {/* eslint-disable-next-line max-len */}
                    <path d="M96.06,454.35A32,32,0,0,0,101.42,472l17.09,25.69A32,32,0,0,0,145.15,512h61.71a32,32,0,0,0,26.64-14.28L250.59,472A32,32,0,0,0,256,454.35L256,416H96ZM0,176A175,175,0,0,0,43.56,291.78C60.08,310.63,85.92,350,95.77,383.23c0,.26.07.52.11.78H256.12c0-.26.07-.51.11-.78,9.85-33.22,35.69-72.6,52.21-91.45A175.9,175.9,0,0,0,175.45,0C73.44.31,0,83,0,176ZM176,96a80.09,80.09,0,0,0-80,80,16,16,0,0,1-32,0A112.12,112.12,0,0,1,176,64a16,16,0,0,1,0,32Z" />
                </g>
            </g>
        </svg>
    );
};

Lightbulb.defaultProps = {
    classes: ``
};

Lightbulb.propTypes = {
    classes: PropTypes.string
};

export default Lightbulb;
