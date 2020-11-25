import React, { useEffect, useLayoutEffect, useState } from "react";
import PropTypes from "prop-types";

import Hamburger from "../hamburger/hamburger";

import AboutMe from "../icons/aboutMe";
import Lightbulb from "../icons/lightbulb";
import Projects from "../icons/projects";
import Work from "../icons/work";

import "./navigation.scss";

const MOBILE_BREAK = 768;

function innerWidth() {
    if (window !== undefined) {
        return window.innerWidth;
    }

    return null;
}

const Navigation = ({ background, text, toggleCallback }) => {
    const [mobileMode, setMobileMode] = useState(false);
    const [navIsVisible, setNavIsVisible] = useState(true);
    const [openBurger, setOpenBurger] = useState(false);

    useLayoutEffect(() => {
        setMobileMode(innerWidth() <= MOBILE_BREAK);
        setNavIsVisible(innerWidth() > MOBILE_BREAK);
    }, []);

    useEffect(() => {
        function handleResize() {
            setMobileMode(innerWidth() <= MOBILE_BREAK);
            setNavIsVisible(innerWidth() > MOBILE_BREAK);

            if (innerWidth() > MOBILE_BREAK) {
                setOpenBurger(false);
            }
        }

        window.addEventListener(`resize`, handleResize);

        return () => {
            window.removeEventListener(`resize`, handleResize);
        };
    });

    function handleKeyPress(event) {
        switch (event.key) {
            case `Space`:
                toggleCallback();
                break;
            default:
        }
    }

    function toggleBurger() {
        if (openBurger) {
            setNavIsVisible(false);
            setOpenBurger(false);
        } else {
            setNavIsVisible(true);
            setOpenBurger(true);
        }
    }

    return (
        <nav id="navigation" className={`navigation body ${text}`}>
            <div className={`nav-chunk ${background}`}>
                <Hamburger
                    color={text}
                    hidden={!mobileMode}
                    isOpen={openBurger}
                    actionCallback={toggleBurger}
                />

                <ul aria-hidden={!navIsVisible}>
                    <li>
                        <a href="#about-me" className="unstyled">
                            <AboutMe classes={`${text} nav-icon`} />
                            About Me
                        </a>
                    </li>
                    <li>
                        <a href="#work-experience" className="unstyled">
                            <Work classes={`${text} nav-icon`} />
                            Work Experience
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="unstyled">
                            <Projects classes={`${text} nav-icon`} />
                            Projects
                        </a>
                    </li>
                </ul>
            </div>

            <button
                className="toggle-btn"
                onClick={toggleCallback}
                onKeyPress={handleKeyPress}
                type="button"
            >
                <Lightbulb classes={`${text} toggle`} />
                <span className="sr-only">Toggle light and dark mode.</span>
            </button>
        </nav>
    );
};

Navigation.propTypes = {
    background: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    toggleCallback: PropTypes.func.isRequired
};

export default Navigation;
