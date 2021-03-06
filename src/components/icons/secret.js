import PropTypes from "prop-types";
import React from "react";

const Secret = ({ classes }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 511.99"
            className={classes}
            aria-hidden="true"
        >
            <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                    {/* eslint-disable-next-line max-len */}
                    <path d="M383.9,308.29l23.9-62.6a16,16,0,0,0-15-21.7H334.3c11-18.9,17.8-40.6,17.8-64v-.3c39.2-7.8,64-19.1,64-31.7,0-13.3-27.3-25.1-70.1-33-9.2-32.8-27-65.8-40.6-82.8a32.1,32.1,0,0,0-39.5-8.8l-27.6,13.8a32,32,0,0,1-28.6,0L182.1,3.39a32.1,32.1,0,0,0-39.5,8.8c-13.5,17-31.4,50-40.6,82.8-42.7,7.9-70,19.7-70,33,0,12.6,24.8,23.9,64,31.7v.3c0,23.4,6.8,45.1,17.8,64H56.3a16,16,0,0,0-14.7,22.3l25.8,60.2C27.3,329.79,0,372.69,0,422.39v44.8A44.85,44.85,0,0,0,44.8,512H403.2a44.85,44.85,0,0,0,44.8-44.8v-44.8c0-48.4-25.8-90.4-64.1-114.1ZM176,480,134.4,288,184,320l24,40Zm96,0L240,360l24-40,49.6-32Zm41.7-298.5c-3.9,11.9-7,24.6-16.5,33.4-10.1,9.3-48,22.4-64-25-2.8-8.4-15.4-8.4-18.3,0-17,50.2-56,32.4-64,25-9.5-8.8-12.7-21.5-16.5-33.4-.8-2.5-6.3-5.7-6.3-5.8v-10.8a770.07,770.07,0,0,0,96,5.8,751.35,751.35,0,0,0,96-5.8v10.8C320,175.79,314.5,178.89,313.7,181.49Z" />
                </g>
            </g>
        </svg>
    );
};

Secret.defaultProps = {
    classes: ``
};

Secret.propTypes = {
    classes: PropTypes.string
};

export default Secret;
