import React from 'react';
import { Link } from 'react-router';
import find from 'lodash/find';
import projects from './datas/ProjectsList.json';
import map from 'lodash/map';
import routeMap from '../../../routeMap.json';
import isMediaGreaterThan from '../../web_modules/isMediaGreaterThan';
import isMediaLessThan from '../../web_modules/isMediaLessThan';
import classnames from 'classnames';

export default function ProjectDetails(props, context) {
    const currentProject = find(projects, (project) => (
        project.slug === context.router.params.slug
    ));

    return (
        <section className="height-auto project-shots black-box box-shadow">
          <h3 className="project-name qanelas-bold">{currentProject.name}</h3>
            <div className="project-image-box">
              <i className="project-description">"{currentProject.description_part_1}"</i>
              <div className="project-img-list">
                {map(currentProject.srcImg.img, (img)  => (
                  <img
                    className="project-shot-img"
                    alt="Hello Pencil"
                    src={"../../img/project_grid/" + img + ".png"}
                  />
                ))}
              </div>
            </div>
          <div className="project-description-wrapper">
            <div className="project-type">
              <div className="type-box">
                <p className="type-box-name qanelas-bold">Rodzaj</p>
                <p className="project-location">{currentProject.type}</p>
              </div>
              <div className="type-box">
                <p className="type-box-name qanelas-bold">Gdzie</p>
                <p className="project-location">{currentProject.location}</p>
              </div>
              <div className="type-box">
                <p className="type-box-name qanelas-bold">Rok</p>
                <p className="project-location">{currentProject.year}</p>
              </div>
            </div>
            {isMediaLessThan('Medium', context.currentMedia) && (
              <i className="project-description">"{currentProject.description_part_2}"</i>
            )}
            <ul className="project-technologies">
            {map(currentProject.technologies.name, (name) => (
              <li className="project-technologies-shot qanelas-bold">
                <svg className="project-technologies-svg" version="1.1" viewBox="0 0 16 16">
                  <path d="M8 4c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"/>
                  <path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"/>
                </svg>
                {name}
              </li>
            ))}
          </ul>
          </div>
          {isMediaGreaterThan('Small', context.currentMedia) && (
            <i className="project-description">"{currentProject.description_part_2}"</i>
          )}
            <div
              className={classnames({'project-box-btn':context.currentMedia >= 'Mobile' })}
            >
              <div
                className={classnames({'project-btn-shot':context.currentMedia >= 'Mobile' })}
              >
                <Link
                  to={currentProject.button_link}
                  target="_blank"
                  className="glitch-btn qanelas-bold project-large-button position-left"
                >
                  <div className="label">See project</div>
                  <div className="mask"><span>See project</span></div>
                  <div className="mask"><span>See project</span></div>
                  <div className="mask"><span>See project</span></div>
                  <div className="mask"><span>See project</span></div>
                  <div className="mask"><span>See project</span></div>

                </Link>
              </div>
              <div
                className={classnames({'project-btn-shot':context.currentMedia >= 'Mobile' })}
              >
                <Link
                  to={routeMap.project_details.replace(':slug', currentProject.button_next)}
                  className="glitch-btn qanelas-bold project-large-button position-right"
                >
                  <div className="label">Next project</div>
                  <div className="mask"><span>Next project</span></div>
                  <div className="mask"><span>Next project</span></div>
                  <div className="mask"><span>Next project</span></div>
                  <div className="mask"><span>Next project</span></div>
                  <div className="mask"><span>Next project</span></div>
                </Link>
              </div>
            </div>
        </section>
    );
}

ProjectDetails.contextTypes = {
    router: React.PropTypes.object,
    currentMedia: React.PropTypes.string,
};

