import PropTypes from "prop-types";
import React from "react";

import Css from "../../icons/css";
import ExternalLink from "../../icons/externalLink";
import Github from "../../icons/github";
import Html from "../../icons/html";
import Python from "../../icons/python";

const IsGarageAFull = ({ text }) => {
    return (
        <>
            <p className="body">
                A website that checks if Garage A at UCF is full. I made this to learn about how
                Firebase and Heroku works. I also found it very useful because I only park at Garage
                A. It uses Python on the back end running on Heroku that scrapes the UCF parking
                website every hour and records the data to Google Firebase. The front end pulls the
                data with Firebase&apos;s REST API.
            </p>

            <div className="body tech-info">
                <h3 className="flavor project-header">Technologies</h3>

                <ul>
                    <li>
                        <Python classes={`flavor-icon ${text}`} />
                        Python
                    </li>
                    <li>
                        <Html classes={`flavor-icon ${text}`} />
                        HTML5
                    </li>
                    <li>
                        <Css classes={`flavor-icon ${text}`} />
                        CSS3
                    </li>
                    <li>
                        <a href="https://www.heroku.com/" target="_blank" rel="noopener noreferrer">
                            <ExternalLink classes={`flavor-icon ${text}`} />
                            Heroku
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://firebase.google.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <ExternalLink classes={`flavor-icon ${text}`} />
                            Firebase
                        </a>
                    </li>
                </ul>
            </div>

            <div className="body tech-info">
                <h3 className="flavor">Links</h3>

                <ul>
                    <li>
                        <a
                            href="https://github.com/Goff-Davis/garage-a-checker-frontend"
                            target="_blank"
                            rel="noreferrer noopener dns-prefetch"
                        >
                            <Github classes={`flavor-icon ${text}`} />
                            Is Garage A Full? Frontend Github
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/Goff-Davis/garage-a-checker-backend"
                            target="_blank"
                            rel="noreferrer noopener dns-prefetch"
                        >
                            <Github classes={`flavor-icon ${text}`} />
                            Is Garage A Full? Backend Github
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
};

IsGarageAFull.propTypes = {
    text: PropTypes.string.isRequired
};

export default IsGarageAFull;
