import PropTypes from "prop-types";
import React from "react";

import Css from "../../icons/css";
import ExternalLink from "../../icons/externalLink";
import Github from "../../icons/github";
import Html from "../../icons/html";
import JavaScript from "../../icons/javaScript";

const Chip8 = ({ text }) => {
    return (
        <>
            <p className="body">
                A Chip-8 emulator I wrote in vanilla JavaScript that can run in the browser. I did
                this to give a talk at my University of Central Florida job on emulation and to
                apply the knowledge that I learned in my computer architecture class. It comes with
                some preloaded ROMs or you can upload your own.
            </p>

            <div className="body tech-info">
                <h3 className="flavor project-header">Technologies</h3>

                <ul>
                    <li>
                        <JavaScript classes={`flavor-icon ${text}`} />
                        JavaScript
                    </li>
                    <li>
                        <Html classes={`flavor-icon ${text}`} />
                        HTML5
                    </li>
                    <li>
                        <Css classes={`flavor-icon ${text}`} />
                        CSS3
                    </li>
                </ul>
            </div>

            <div className="body tech-info">
                <h3 className="flavor">Links</h3>

                <ul>
                    <li>
                        <a
                            href="https://chip8emu.com/"
                            target="_blank"
                            rel="noreferrer noopener dns-prefetch"
                        >
                            <ExternalLink classes={`flavor-icon ${text}`} />
                            Chip8-emu.js Website
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/Goff-Davis/chip8-emu.js"
                            target="_blank"
                            rel="noreferrer noopener dns-prefetch"
                        >
                            <Github classes={`flavor-icon ${text}`} />
                            Chip8-emu.js Github
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
};

Chip8.propTypes = {
    text: PropTypes.string.isRequired
};

export default Chip8;
