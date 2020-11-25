import React, { useLayoutEffect, useState } from "react";

// Formatting
import Landing from "../components/landing/landing";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Section from "../components/section/section";
import SubSection from "../components/subSection/subSection";

// About Me Content
import Description from "../components/content/aboutMe/description";
import Frameworks from "../components/content/aboutMe/frameworks";
import Languages from "../components/content/aboutMe/languages";
import OtherTechnologies from "../components/content/aboutMe/otherTechnologies";

// Job Content
import AmazonJob from "../components/content/work/amazon";
import Ucf from "../components/content/work/ucf";

// Project Content
import Chip8 from "../components/content/projects/chip8";
import IsGarageAFull from "../components/content/projects/isGarageAFull";
import Portfolio from "../components/content/projects/portfolio";
import WatchrBot from "../components/content/projects/watchrBot";

import "../page-styles/index.scss";

function systemIsDarkMode() {
    return (
        window !== undefined &&
        window.matchMedia &&
        window.matchMedia(`(prefers-color-scheme: dark)`).matches
    );
}

const IndexPage = () => {
    const [darkMode, setDarkMode] = useState(false);

    useLayoutEffect(() => {
        setDarkMode(systemIsDarkMode());
    }, []);

    const darkModeText = darkMode ? `dark` : `light`;
    const text = `${darkModeText}-mode-text`;
    const background = `${darkModeText}-mode-background`;
    const primary = `${darkModeText}-mode-primary`;

    function toggleMode() {
        setDarkMode(!darkMode);
    }

    return (
        <Layout background={background} text={text} toggleMode={toggleMode}>
            <SEO title="Home" />

            <header>
                <Landing background={background} text={text} primary={primary} />
            </header>

            <main>
                <Section title="About Me" anchor="about-me" background={background} text={text}>
                    <SubSection header="Description" primary={primary}>
                        <Description text={text} />
                    </SubSection>

                    <SubSection header="Languages" primary={primary}>
                        <Languages text={text} />
                    </SubSection>

                    <SubSection header="Frameworks" primary={primary}>
                        <Frameworks text={text} />
                    </SubSection>

                    <SubSection header="Other Technologies" primary={primary}>
                        <OtherTechnologies text={text} />
                    </SubSection>
                </Section>

                <Section
                    title="Work Experience"
                    anchor="work-experience"
                    background={background}
                    text={text}
                >
                    <SubSection header="Web Developer (Techranger)" primary={primary}>
                        <Ucf text={text} />
                    </SubSection>

                    <SubSection header="Software Development Engineer Intern" primary={primary}>
                        <AmazonJob text={text} />
                    </SubSection>
                </Section>

                <Section title="Projects" anchor="projects" background={background} text={text}>
                    <SubSection header="Chip8-emu.js" primary={primary}>
                        <Chip8 text={text} />
                    </SubSection>

                    <SubSection header="Watchr_Bot" primary={primary}>
                        <WatchrBot text={text} />
                    </SubSection>

                    <SubSection header="Is Garage A Full?" primary={primary}>
                        <IsGarageAFull text={text} />
                    </SubSection>

                    <SubSection header="This Portfolio" primary={primary}>
                        <Portfolio text={text} />
                    </SubSection>
                </Section>
            </main>
        </Layout>
    );
};

export default IndexPage;
