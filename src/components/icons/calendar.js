import PropTypes from "prop-types";
import React from "react";

const Calendar = ({ classes }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className={classes}
            aria-hidden="true"
        >
            <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                    {/* eslint-disable-next-line max-len */}
                    <path d="M12,192H436a12,12,0,0,1,12,12V464a48,48,0,0,1-48,48H48A48,48,0,0,1,0,464V204A12,12,0,0,1,12,192Zm436-44V112a48,48,0,0,0-48-48H352V12A12,12,0,0,0,340,0H300a12,12,0,0,0-12,12V64H160V12A12,12,0,0,0,148,0H108A12,12,0,0,0,96,12V64H48A48,48,0,0,0,0,112v36a12,12,0,0,0,12,12H436A12,12,0,0,0,448,148Z" />
                </g>
            </g>
        </svg>
    );
};

Calendar.defaultProps = {
    classes: ``
};

Calendar.propTypes = {
    classes: PropTypes.string
};

export default Calendar;
