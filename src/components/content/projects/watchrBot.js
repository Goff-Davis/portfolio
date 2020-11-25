import PropTypes from "prop-types";
import React from "react";

import ExternalLink from "../../icons/externalLink";
import Github from "../../icons/github";
import Python from "../../icons/python";

const WatchrBot = ({ text }) => {
    return (
        <>
            <p className="body">
                A reddit bot that searches for keywords and messages me when something new is posted
                in a specific time frame. I am currently using it to alert me when watches that I am
                interested in are posted in the last hour on r/WatchExchange.
            </p>

            <div className="body tech-info">
                <h3 className="flavor project-header">Technologies</h3>

                <ul>
                    <li>
                        <Python classes={`flavor-icon ${text}`} />
                        Python
                    </li>
                    <li>
                        <a
                            href="https://praw.readthedocs.io/en/latest/"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <ExternalLink classes={`flavor-icon ${text}`} />
                            Python Reddit API Wrapper (PRAW)
                        </a>
                    </li>
                </ul>
            </div>

            <div className="body tech-info">
                <h3 className="flavor">Links</h3>

                <ul>
                    <li>
                        <a
                            href="https://github.com/Goff-Davis/Watchr_Bot"
                            target="_blank"
                            rel="noreferrer noopener dns-prefetch"
                        >
                            <Github classes={`flavor-icon ${text}`} />
                            Watchr_Bot Github
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
};

WatchrBot.propTypes = {
    text: PropTypes.string.isRequired
};

export default WatchrBot;
