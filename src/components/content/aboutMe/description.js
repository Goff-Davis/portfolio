import PropTypes from "prop-types";
import React from "react";

const Description = ({ text }) => {
    return (
        <p className={`body ${text}`}>
            I am a software engineer going to the University of Central Florida for Computer
            Science. I am working as a part time web developer for the University of Central
            Florida&apos;s Center for Distributed Learning. I particularly enjoy working as a
            front-end developer and ensuring that the websites I create are fully accessible.
        </p>
    );
};

Description.propTypes = {
    text: PropTypes.string.isRequired
};

export default Description;
