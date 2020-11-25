import React from "react";

import SEO from "../components/seo";

import Secret from "../components/icons/secret";

import "../page-styles/404.scss";

const NotFoundPage = () => (
    <>
        <SEO title="404: Not found" />

        <div className="not-found light-mode-background light-mode-text">
            <header>
                <Secret classes="light-mode-text big-icon" />
                <h1 className="header">404 NOT FOUND</h1>
            </header>

            <main>
                <p className="body">
                    You&apos;ve come to a page that doesn&apos;t exist.{` `}
                    <a href="/">Go back to the main page.</a>
                </p>
            </main>
        </div>
    </>
);

export default NotFoundPage;
