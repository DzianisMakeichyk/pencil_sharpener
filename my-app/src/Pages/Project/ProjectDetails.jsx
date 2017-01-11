import React from 'react';
import { Link } from 'react-router';
import find from 'lodash/find';
import projects from './ProjectsList.json';
import map from 'lodash/map';
import routeMap from '../../../routeMap.json';

export default function ProjectDetails(props, context) {
    const currentProject = find(projects, (project) => (
        project.slug === context.router.params.slug
    ));

    var ProjectImg = "../../img/project_grid/stypendium_z_wyboru.png";

    return (
        <section className="project_shots">
            <h3 className="project_name bold">{currentProject.name}</h3>
            <div className="project_image_box">
                <img
                  className="project_shot_img"
                  src={ProjectImg}
                  alt="Hello Pencil"
                />
                <Link
                  to={currentProject.button_link}
                  target="_blank"
                  className="project_button_to"
                >{currentProject.button_name}
                </Link>
            </div>
            <div className="project_shot_info">
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
                </div>
                <div className="project_button_arrows">
                    <Link
                      to={routeMap.project_details.replace(':slug', currentProject.button_last)}
                      className="project_button prev"
                    >previous
                    </Link>
                    <Link
                      to={routeMap.project_details.replace(':slug', currentProject.button_next)}
                      className="project_button next"
                    >next
                    </Link>
                </div>
        </section>
    );
}

ProjectDetails.contextTypes = {
    router: React.PropTypes.object,
};
