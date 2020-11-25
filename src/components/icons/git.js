import PropTypes from "prop-types";
import React from "react";

const Git = ({ classes }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 447.99"
            className={classes}
            aria-hidden="true"
        >
            <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                    {/* eslint-disable-next-line max-len */}
                    <path d="M439.55,204.05,244,8.45a28.86,28.86,0,0,0-40.81,0L162.53,49.08l51.52,51.52c27.06-9.14,52.68,16.77,43.39,43.68l49.66,49.66c34.23-11.8,61.18,31,35.47,56.69-26.49,26.49-70.21-2.87-56-37.34L240.22,167V288.85c25.3,12.54,22.26,41.85,9.08,55a34.31,34.31,0,1,1-37.3-56v-123c-20.8-8.51-24.6-30.74-18.64-45L142.57,69,8.45,203.14a28.86,28.86,0,0,0,0,40.81l195.61,195.6a28.86,28.86,0,0,0,40.8,0L439.55,244.86a28.86,28.86,0,0,0,0-40.81Z" />
                </g>
            </g>
        </svg>
    );
};

Git.defaultProps = {
    classes: ``
};

Git.propTypes = {
    classes: PropTypes.string
};

export default Git;
