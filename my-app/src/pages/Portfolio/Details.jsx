import React from 'react';
import { Link } from 'react-router';
import find from 'lodash/find';
import projects from './ProjectsList.json';
import map from 'lodash/map';
import routeMap from '../../../routeMap.json';
import isMediaGreaterThan from '../../web_modules/isMediaGreaterThan';
import isMediaLessThan from '../../web_modules/isMediaLessThan';

export default function ProjectDetails(props, context) {
    const currentProject = find(projects, (project) => (
        project.slug === context.router.params.slug
    ));

    return (
        <section className="height-auto project-shots">
          <h3 className="project-name qanelas-bold">{currentProject.name}</h3>
            <div className="project-image-box">
              <i className="project-description">"{currentProject.description_part_1}"</i>
              {map(currentProject.srcImg.img, (img)  => (
                <img
                  className="project-shot-img box-shadow"
                  alt="Hello Pencil"
                  src={"../../img/project_grid/" + img + ".png"}
                />
              ))}
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
            <div>
              <i className="project-description">"{currentProject.description_part_2}"</i>
              <ul className="project-colors">
                  {map(currentProject.color.name, (name) => (
                    <li className="project-color-shot">
                      <div className="project-color-circle" style={{ backgroundColor: '#'+name}}></div>
                      <p className="project-color-name">
                        #{name}
                      </p>
                    </li>
                  ))}
                </ul>
            </div>
          )}
          <div className="project-button-wrapper">
          <Link
            to={currentProject.button_link}
            target="_blank"
            className="project-button see-project qanelas-bold box-shadow"
          >
            <span className="project-button-text">
              Zobacz project
            </span>
          </Link>
          <Link
            to={routeMap.project_details.replace(':slug', currentProject.button_next)}
            className="project-button next qanelas-bold box-shadow"
          >
            <span className="project-button-text">
              Następny
            </span>
          </Link>
            </div>
        </section>
    );
}

ProjectDetails.contextTypes = {
    router: React.PropTypes.object,
    currentMedia: React.PropTypes.string,
};

