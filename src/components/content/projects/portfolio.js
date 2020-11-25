import PropTypes from "prop-types";
import React from "react";

import Gatsby from "../../icons/gatsby";
import Github from "../../icons/github";

const Portfolio = ({ text }) => {
    return (
        <>
            <p className="body">
                I built this portfolio to show my work and skills. I used Gatsby to practice using
                the framework. It also is a PWA, but you probably don&apos;t need to do that.
            </p>

            <div className="body tech-info">
                <h3 className="flavor project-header">Technologies</h3>

                <ul>
                    <li>
                        <Gatsby classes={`flavor-icon ${text}`} />
                        Gatsby
                    </li>
                </ul>
            </div>

            <div className="body tech-info">
                <h3 className="flavor">Links</h3>

                <ul>
                    <li>
                        <a
                            href="https://github.com/Goff-Davis/portfolio-redesign"
                            target="_blank"
                            rel="noreferrer noopener dns-prefetch"
                        >
                            <Github classes={`flavor-icon ${text}`} />
                            Portfolio Github
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
};

Portfolio.propTypes = {
    text: PropTypes.string.isRequired
};

export default Portfolio;
