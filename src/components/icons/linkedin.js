import PropTypes from "prop-types";
import React from "react";

const Linkedin = ({ classes }) => {
    return (
        <svg
            viewBox="0 0 448 512"
            xmlns="http://www.w3.org/2000/svg"
            className={classes}
            aria-hidden="true"
        >
            {/* eslint-disable-next-line max-len */}
            <path d="M416,32H31.9C14.3,32,0,46.5,0,64.3v383.4C0,465.5,14.3,480,31.9,480H416c17.6,0,32-14.5,32-32.3V64.3  C448,46.5,433.6,32,416,32z M135.4,416H69V202.2h66.5V416H135.4z M102.2,173c-21.3,0-38.5-17.3-38.5-38.5S80.9,96,102.2,96  c21.2,0,38.5,17.3,38.5,38.5C140.7,155.8,123.5,173,102.2,173z M384.3,416h-66.4V312c0-24.8-0.5-56.7-34.5-56.7  c-34.6,0-39.9,27-39.9,54.9V416h-66.4V202.2h63.7v29.2h0.9c8.9-16.8,30.6-34.5,62.9-34.5c67.2,0,79.7,44.3,79.7,101.9V416z" />
        </svg>
    );
};

Linkedin.defaultProps = {
    classes: ``
};

Linkedin.propTypes = {
    classes: PropTypes.string
};

export default Linkedin;
