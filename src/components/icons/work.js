import PropTypes from "prop-types";
import React from "react";

const Work = ({ classes }) => {
    return (
        <svg
            viewBox="0 0 571.43 500"
            xmlns="http://www.w3.org/2000/svg"
            className={classes}
            aria-hidden="true"
        >
            <g data-name="Layer 2">
                <g data-name="Layer 1">
                    {/* eslint-disable-next-line max-len */}
                    <path d="M357.14,339.29a17.85,17.85,0,0,1-17.85,17.85H232.14a17.85,17.85,0,0,1-17.85-17.85V285.71H0V446.43C0,475,25,500,53.57,500H517.86c28.57,0,53.57-25,53.57-53.57V285.71H357.14ZM517.86,107.14H428.57V53.57C428.57,25,403.57,0,375,0H196.43c-28.57,0-53.57,25-53.57,53.57v53.57H53.57C25,107.14,0,132.14,0,160.71V250H571.43V160.71C571.43,132.14,546.43,107.14,517.86,107.14Zm-160.72,0H214.29V71.43H357.14Z" />
                </g>
            </g>
        </svg>
    );
};

Work.defaultProps = {
    classes: ``
};

Work.propTypes = {
    classes: PropTypes.string
};

export default Work;
