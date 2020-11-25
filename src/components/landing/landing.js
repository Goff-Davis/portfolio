import PropTypes from "prop-types";
import React from "react";

import Email from "../icons/email";
import Github from "../icons/github";
import Linkedin from "../icons/linkedin";
import Resume from "../icons/resume";
import Sigil from "../icons/sigil";

import "./landing.scss";

const Landing = ({ background, text, primary }) => {
    return (
        <header className={`landing ${background} ${text}`}>
            <div>
                <h1 className={`header ${primary}`}>I&apos;m Davis</h1>
                <p className="sub-header">A software engineer</p>

                <a
                    href="https://github.com/Goff-Davis"
                    target="_blank"
                    rel="noreferrer noopener dns-prefetch"
                >
                    <Github classes={`${text} contact-icon sub-header`} />
                    <span className="sr-only">My Github profile.</span>
                </a>
                <a
                    href="https://www.linkedin.com/in/davis-goff/"
                    target="_blank"
                    rel="noreferrer noopener dns-prefetch"
                >
                    <Linkedin classes={`${text} contact-icon sub-header`} />
                    <span className="sr-only">My LinkedIn profile.</span>
                </a>
                <a href="mailto:davisparkergoff@gmail.com">
                    <Email classes={`${text} contact-icon sub-header`} />
                    <span className="sr-only">Send me an email.</span>
                </a>
                <a
                    href="https://drive.google.com/file/d/1hMBKsfOkgAVxEYaxIM0mLFep_THfUe6a/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer noopener dns-prefetch"
                >
                    <Resume classes={`${text} contact-icon sub-header`} />
                    <span className="sr-only">My resume.</span>
                </a>
            </div>

            <Sigil classes={`${text} sigil`} />
        </header>
    );
};

Landing.propTypes = {
    background: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    primary: PropTypes.string.isRequired
};

export default Landing;
