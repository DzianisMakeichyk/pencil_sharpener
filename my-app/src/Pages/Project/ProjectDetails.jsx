import React from 'react';
import { Link } from 'react-router';
import find from 'lodash/find';
import projects from './ProjectsList.json';
import map from 'lodash/map';
import routeMap from '../../../routeMap.json';
import MediaQuery from 'react-responsive';

export default function ProjectDetails(props, context) {
    const currentProject = find(projects, (project) => (
        project.slug === context.router.params.slug
    ));

    var ProjectImg = {backgroundImage: 'url("../../img/project_description/background.png")'};

    console.log(currentProject);

    return (
            <section className="project_shots">
                <div
                  className="project_shot_img"
                    style={ProjectImg}>
                </div>
                <div className="project_shot_info">
                    <h3 className="project_name bold">{currentProject.name}</h3>
                    <p className="project_location">{currentProject.location}
                        <span className="project_year"> {currentProject.year}</span>
                    </p>
                    <p className="project_description">{currentProject.description}</p>
                    <div className="project_technologies">
                        <div className="project_techno_body">
                            <p className="techno_body_name">Body</p>
                            {map(currentProject.technologies.body, (body) => (
                                <p className="body_name_shot">
                                    {body}
                                </p>
                            ))}
                        </div>
                        <div className="project_techno_body">
                            <p className="techno_body_name">Styling</p>
                            {map(currentProject.technologies.style, (style) => (
                              <p className="body_name_shot">
                                  {style}
                              </p>
                            ))}
                        </div>
                    </div>
                    <div className="project_arrows">
                        <Link
                          to={routeMap.project_details.replace(':slug', currentProject.button_last)}
                            className="project_arrow last">
                            <svg viewBox="0 0 50 80">
                                <defs>
                                    <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%"   stopColor="#00e1d9" stopOpacity="0.5" />
                                        <stop offset="100%" stopColor="#01e6ae" stopOpacity="1.0" />
                                    </linearGradient>
                                </defs>
                                <polyline fill="none" points="45.63,75.8 0.375,38.087 45.63,0.375 " stroke="url(#linear)" strokeWidth="3"/>
                            </svg>
                        </Link>
                        <MediaQuery maxDeviceWidth={1023}>
                            <Link
                              to={currentProject.button_link}
                              target="_blank"
                              className="project_button_to"
                            >{currentProject.button_name}
                            </Link>
                        </MediaQuery>
                        <Link
                          to={routeMap.project_details.replace(':slug', currentProject.button_next)}
                            className="project_arrow next">
                            <svg viewBox="0 0 50 80">
                                <defs>
                                    <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%"   stopColor="#01e6ae" stopOpacity="0.5" />
                                        <stop offset="100%" stopColor="#00e1d9" stopOpacity="1.0" />
                                    </linearGradient>
                                </defs>
                                <polyline fill="none" points="0.375,0.375 45.63,38.087 0.375,75.8 " stroke="url(#linear)" strokeWidth="3"/>
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>
    );
}

ProjectDetails.contextTypes = {
    router: React.PropTypes.object,
};
