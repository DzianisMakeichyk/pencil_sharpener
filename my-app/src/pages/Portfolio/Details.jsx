import React from 'react';
import { Link } from 'react-router';
import find from 'lodash/find';
import projects from './datas/ProjectsList.json';
import map from 'lodash/map';
import routeMap from '../../../routeMap.json';
import isMediaGreaterThan from '../../web_modules/isMediaGreaterThan';
import isMediaLessThan from '../../web_modules/isMediaLessThan';

export default function ProjectDetails(props, context) {
    const currentProject = find(projects, (project) => (
        project.slug === context.router.params.slug
    ));

    return (
      <section className="project height-auto">
        <div className="project-first-box">
          <div className="project-name-position">
            {isMediaGreaterThan('Mobile', context.currentMedia) && (
              <p className="number-of-project">
                <span>{currentProject.number}</span>/6
              </p>
            )}
            <h2 className="project-name qanelas-bold">{currentProject.name}</h2>
          </div>
          {isMediaLessThan('Small', context.currentMedia) && (
            <p className="project-description">"{currentProject.description_part_1}"</p>
          )}
          <div className="project-image-box">
            {map(currentProject.srcImg.img, (img)  => (
              <img
                className="project-image"
                alt={currentProject.name}
                src={"../../img/project_grid/" + img + ".png"}
              />
            ))}
          </div>
        </div>
        <ul className="project-technologies">
          {map(currentProject.technologies.name, (name) => (
            <li className="project-technologies-shot">
              <img
                className="project-technologies-img"
                alt={name}
                src={"../../img/technologies/" + name + ".svg"}
              />
            </li>
          ))}
        </ul>
        <div className="project-description-wrapper">
          {isMediaGreaterThan('Mobile', context.currentMedia) && (
            <p className="project-description">"{currentProject.description_part_1}"</p>
          )}
          <div className="project-button-wrapper">
            <a
              href={currentProject.button_link}
              target="_blank"
              className="glitch-btn launch"
            >
              <div className="label">Zobacz projekt</div>
              <div className="mask"><span>Zobacz projekt</span></div>
              <div className="mask"><span>Zobacz projekt</span></div>
              <div className="mask"><span>Zobacz projekt</span></div>
              <div className="mask"><span>Zobacz projekt</span></div>
              <div className="mask"><span>Zobacz projekt</span></div>
            </a>
            <Link
              to={routeMap.project_details.replace(':slug', currentProject.button_next)}
              className="glitch-btn next"
            >
              <div className="label">Następny projekt</div>
              <div className="mask"><span>Następny projekt</span></div>
              <div className="mask"><span>Następny projekt</span></div>
              <div className="mask"><span>Następny projekt</span></div>
              <div className="mask"><span>Następny projekt</span></div>
              <div className="mask"><span>Następny projekt</span></div>
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

