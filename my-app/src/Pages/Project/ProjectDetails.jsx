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

    //var ProjectImg = "../../img/project_grid/stypendium_z_wyboru.png";

    return (
        <section className="project-shots">
            <div className="project-name-box">
              <MediaQuery maxDeviceWidth={1023}>
                <h3 className="project-name bold ">{currentProject.name}</h3>
              </MediaQuery>
              <div className="project-image-box">
                {map(currentProject.srcImg.img, (img)  => (
                  <img
                    className="project-shot-img"
                    alt="Hello Pencil"
                    src={"../../img/project_grid/" + img + ".png"}
                  />
                ))}
                <MediaQuery maxDeviceWidth={1023}>
                  <Link
                    to={currentProject.button_link}
                    target="_blank"
                    className="project-button-to"
                  >{currentProject.button_name}
                  </Link>
                </MediaQuery>
              </div>
              <div className="project-shot-info">
                <MediaQuery minDeviceWidth={1024}>
                  <h3 className="project-name bold is-landscape-white">{currentProject.name}</h3>
                </MediaQuery>
                  <p className="project-location is-landscape-white">{currentProject.location}
                      <span className="project-year"> {currentProject.year}</span>
                  </p>
                  <p className="project-description is-landscape-white">{currentProject.description}</p>
                  <div className="project-technologies">
                    <div className="project-techno-body">
                      <p className="techno-body-name">Body</p>
                      {map(currentProject.technologies.body, (body) => (
                          <p className="body-name-shot is-landscape-white">
                              {body}
                          </p>
                      ))}
                    </div>
                    <div className="project-techno-body">
                      <p className="techno-body-name">Styling</p>
                      {map(currentProject.technologies.style, (style) => (
                        <p className="body-name-shot is-landscape-white">
                            {style}
                        </p>
                      ))}
                    </div>
                  </div>
                  <MediaQuery minDeviceWidth={1024}>
                    <Link
                      to={currentProject.button_link}
                      target="_blank"
                      className="project-button-to"
                    >{currentProject.button_name}
                    </Link>
                  </MediaQuery>
                  </div>
                </div>
                <div className="project-button-arrows">
                  <div className="project-button-one">
                    <Link
                      to={routeMap.project_details.replace(':slug', currentProject.button_last)}
                      className="project-button prev"
                    >
                    <svg className="project-arrows-svg prev" version="1.1" x="0px" y="0px" viewBox="0 0 284.935 284.936" xmlSpace="preserve">
                      <g>
                        <path d="M62.2,149l133,133c1.9,1.9,4.1,2.9,6.6,2.9c2.5,0,4.7-1,6.6-2.9l14.3-14.3c1.9-1.9,2.9-4.1,2.9-6.6s-0.9-4.7-2.9-6.6
                          L110.5,142.5L222.7,30.3c1.9-1.9,2.9-4.1,2.9-6.6c0-2.5-0.9-4.7-2.9-6.6L208.4,2.9c-1.9-1.9-4.1-2.9-6.6-2.9c-2.5,0-4.7,1-6.6,2.9
                          l-133,133c-1.9,1.9-2.9,4.1-2.9,6.6S60.3,147.1,62.2,149z"/>
                      </g>
                    </svg>
                      previous
                    </Link>
                  </div>
                  <div className="project-button-one">
                    <Link
                      to={routeMap.project_details.replace(':slug', currentProject.button_next)}
                      className="project-button next"
                    >next
                    <svg className="project-arrows-svg next" version="1.1" x="0px" y="0px" viewBox="0 0 284.935 284.936" xmlSpace="preserve">
                      <g>
                        <path d="M222.701,135.9L89.652,2.857C87.748,0.955,85.557,0,83.084,0c-2.474,0-4.664,0.955-6.567,2.857L62.244,17.133
                          c-1.906,1.903-2.855,4.089-2.855,6.567c0,2.478,0.949,4.664,2.855,6.567l112.204,112.204L62.244,254.677
                          c-1.906,1.903-2.855,4.093-2.855,6.564c0,2.477,0.949,4.667,2.855,6.57l14.274,14.271c1.903,1.905,4.093,2.854,6.567,2.854
                          c2.473,0,4.663-0.951,6.567-2.854l133.042-133.044c1.902-1.902,2.854-4.093,2.854-6.567S224.603,137.807,222.701,135.9z"/>
                      </g>
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
