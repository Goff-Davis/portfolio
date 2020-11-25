import PropTypes from "prop-types";
import React from "react";

import Calendar from "../../icons/calendar";
import Css from "../../icons/css";
import Django from "../../icons/django";
import ExternalLink from "../../icons/externalLink";
import Github from "../../icons/github";
import Html from "../../icons/html";
import JavaScript from "../../icons/javaScript";
import Location from "../../icons/location";
import Python from "../../icons/python";
import ReactIcon from "../../icons/reactIcon";
import Vue from "../../icons/vue";

const UcfJob = ({ text }) => {
    return (
        <>
            <h3 className="flavor">University of Central Florida</h3>

            <p className="body">
                I worked as a web developer for the UCF{` `}
                <a href="https://cdl.ucf.edu/about/" target="_blank" rel="noreferrer noopener">
                    Center for Distributed Learning.
                </a>
            </p>

            <p className="body">
                I supported professors’ online course development and build and support applications
                for students, professors, and for CDL internal use.
            </p>

            <p className="body">
                I have built two learning games that are integrated with UCF’s online learning
                platform, Canvas, contributed to a Python API for the same learning platform, and
                contributed to an internal admin dashboard.
            </p>

            <div className="body job-supporting-info">
                <p>
                    <Calendar classes={`flavor-icon ${text}`} />
                    March 2019 - October 2020
                </p>
                <p>
                    <Location classes={`flavor-icon ${text}`} />
                    Orlando, FL
                </p>
            </div>

            <div className="body tech-info">
                <h4 className="flavor">Technologies</h4>

                <ul>
                    <li>
                        <JavaScript classes={`flavor-icon ${text}`} />
                        JavaScript
                    </li>
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
                        <ReactIcon classes={`flavor-icon ${text}`} />
                        React
                    </li>
                    <li>
                        <Vue classes={`flavor-icon ${text}`} />
                        Vue
                    </li>
                    <li>
                        <Django classes={`flavor-icon ${text}`} />
                        Django
                    </li>
                </ul>
            </div>

            <div className="body tech-info">
                <h4 className="flavor">Projects</h4>

                <ul>
                    <li>
                        <h5 className="body">Canvas API</h5>
                        <p>
                            A library for accessing the Canvas API with Python. It allows for Canvas
                            to be managed programmatically. I implemented the endpoints for all the
                            associated poll functions.
                        </p>

                        <ul>
                            <li>
                                <a
                                    href="https://github.com/ucfopen/canvasapi"
                                    target="_blank"
                                    rel="noreferrer noopener dns-prefetch"
                                >
                                    <Github classes={`flavor-icon ${text}`} />
                                    Canvas API Github
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li className="job-project">
                        <h5 className="body">Materia</h5>
                        <p>
                            A platform that allows small games to be created by teachers to engage
                            their students and help them learn. I helped fix bugs on the backend of
                            the website and changed styling.
                        </p>

                        <ul>
                            <li>
                                <a
                                    href="https://materia.ucf.edu/"
                                    target="_blank"
                                    rel="noreferrer noopener dns-prefetch"
                                >
                                    <ExternalLink classes={`flavor-icon ${text}`} />
                                    Materia Website
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/ucfopen/Materia"
                                    target="_blank"
                                    rel="noreferrer noopener dns-prefetch"
                                >
                                    <Github classes={`flavor-icon ${text}`} />
                                    Materia Github
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li className="job-project">
                        <h5 className="body">Materia Widgets</h5>
                        <p>
                            I created a game that mimics a spreadsheet to test students. I also
                            created a game that allows teachers to create a graph. Students have to
                            properly connect the graph&apos;s nodes and label the edges.
                        </p>
                        <p>
                            I also added documentation to several game modules and updated them to
                            Node 12.
                        </p>

                        <ul>
                            <li>
                                <a
                                    href="https://materia.ucf.edu/widgets/100-secret-spreadsheet"
                                    target="_blank"
                                    rel="noreferrer noopener dns-prefetch"
                                >
                                    <ExternalLink classes={`flavor-icon ${text}`} />
                                    Spreadsheet Widget Website
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/ucfopen/secret-spreadsheet-materia-widget"
                                    target="_blank"
                                    rel="noreferrer noopener dns-prefetch"
                                >
                                    <Github classes={`flavor-icon ${text}`} />
                                    Spreadsheet Widget Github
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li className="job-project">
                        <h5 className="body">Soulpatch</h5>
                        <p>
                            An internal admin dashboard that allows users to use Python scripts in a
                            graphical interface. It also allows for scripted actions in our learning
                            management system, Canvas.
                        </p>
                    </li>
                </ul>
            </div>
        </>
    );
};

UcfJob.propTypes = {
    text: PropTypes.string.isRequired
};

export default UcfJob;
