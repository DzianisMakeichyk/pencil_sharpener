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
        <section className="project mobile-height box-shadow">
          {isMediaGreaterThan('Mobile', context.currentMedia) && (
            <p className="number-of-project">
              <span>1</span>/5
            </p>
          )}
          <h2 className="project-name qanelas-bold">{currentProject.name}</h2>
          <p className="project-description">"{currentProject.description_part_1}"</p>
          <div className="project-image-box">
            {map(currentProject.srcImg.img, (img)  => (
              <img
                className="project-image"
                alt={img}
                src={"../../img/project_grid/" + img + ".png"}
              />
            ))}
          </div>
          <Link
            to={currentProject.button_link}
            className="button-project launch qanelas-bold"
          >
            Launch Project
          </Link>
          <div className="project-description-wrapper">
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
          </div>
          <Link
            to={routeMap.project_details.replace(':slug', currentProject.button_next)}
            target="_blank"
            className="button-project next qanelas-bold"
          >
            Next project
          </Link>
      </section>
    );
}

ProjectDetails.contextTypes = {
    router: React.PropTypes.object,
    currentMedia: React.PropTypes.string,
};

