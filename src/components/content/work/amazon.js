import PropTypes from "prop-types";
import React from "react";

import Calendar from "../../icons/calendar";
import ExternalLink from "../../icons/externalLink";
import Java from "../../icons/java";
import Location from "../../icons/location";
import TypeScript from "../../icons/typeScript";

const AmazonJob = ({ text }) => {
    return (
        <>
            <h3 className="flavor">Amazon</h3>

            <p className="body">
                I interned with Amazon over the summer of my senior year. I worked in the Devices
                organization on the project from the initial design phase up until it was released.
            </p>

            <p className="body">
                I built a service to reset the cloud settings of Alexa devices. It was required to
                be highly scalable and extensible.
            </p>

            <div className="body job-supporting-info">
                <p>
                    <Calendar classes={`flavor-icon ${text}`} />
                    May 2020 - August 2020
                </p>
                <p>
                    <Location classes={`flavor-icon ${text}`} />
                    Remote
                </p>
            </div>

            <div className="body tech-info">
                <h4 className="flavor">Technologies</h4>

                <ul>
                    <li>
                        <Java classes={`flavor-icon ${text}`} />
                        Java
                    </li>
                    <li>
                        <TypeScript classes={`flavor-icon ${text}`} />
                        TypeScript
                    </li>
                    <li>
                        <ExternalLink classes={`flavor-icon ${text}`} />
                        <a
                            href="https://aws.amazon.com/cdk/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            AWS Cloud Development Kit
                        </a>
                    </li>
                    <li>
                        <ExternalLink classes={`flavor-icon ${text}`} />
                        <a
                            href="https://aws.amazon.com/ecs/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            AWS Elastic Container Service
                        </a>
                    </li>
                    <li>
                        <ExternalLink classes={`flavor-icon ${text}`} />
                        <a
                            href="https://aws.amazon.com/fargate/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            AWS Fargate
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
};

AmazonJob.propTypes = {
    text: PropTypes.string.isRequired
};

export default AmazonJob;
