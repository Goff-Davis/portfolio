import PropTypes from "prop-types";
import React from "react";

import Footer from "./footer/footer";
import Navigation from "./navigation/navigation";

const Layout = ({ children, text, background, toggleMode }) => {
    return (
        <>
            <Navigation text={text} background={background} toggleCallback={toggleMode} />
        
            <noscript>JavaScript is required to toggle between light and dark mode.</noscript>

            {children}

            <Footer text={text} background={background} />
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    text: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
    toggleMode: PropTypes.func.isRequired
};

export default Layout;
