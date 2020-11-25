import PropTypes from "prop-types";
import React from "react";

import "./footer.scss";

const Footer = ({ background, text }) => {
    return (
        <footer className={`footer minor ${background} ${text}`}>
            <p>&copy; 2020 Davis Goff</p>

            <p>
                Hosted on{` `}
                <a href="https://www.netlify.com/" target="_blank" rel="noreferrer noopener">
                    Netlify
                </a>
            </p>

            <p>
                Over-engineered with{` `}
                <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer noopener">
                    Gatsby
                </a>
            </p>
        </footer>
    );
};

Footer.propTypes = {
    background: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default Footer;
