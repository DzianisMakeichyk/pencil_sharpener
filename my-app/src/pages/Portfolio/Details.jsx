import React from 'react';
import { Link } from 'react-router';
import find from 'lodash/find';
import projects from './datas/ProjectsList.json';
import map from 'lodash/map';
import routeMap from '../../../routeMap.json';
import isMediaGreaterThan from '../../web_modules/isMediaGreaterThan';
import isMediaLessThan from '../../web_modules/isMediaLessThan';
import classnames from 'classnames';
import Helmet from 'react-helmet';

export default function ProjectDetails(props, context) {
    const currentProject = find(projects, (project) => (
        project.slug === context.router.params.slug
    ));

    return (
      <div>
        <Helmet
          title={currentProject.name + context.meta[0].details.title}
          meta={[
            { name: 'description', content: context.meta[0].details.description },
            { name: 'keywords', content: currentProject.name + context.meta[0].details.keywords },
            { name: 'twitter:title', content: context.meta[0].details.title },
            { name: 'twitter:description', content: context.meta[0].details.description },
            { property: 'og:title', content: context.meta[0].details.title },
            { property: 'og:sitename', content: context.meta[0].details.site_name },
            { property: 'og:description', content: context.meta[0].details.description },
          ]}
        />
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
                  alt={img}
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
              <Link
                to={currentProject.button_link}
                target="_blank"
                className="glitch-btn launch qanelas-bold"
              >
                <div className="label">Launch Project</div>
                <div className="mask"><span>Launch Project</span></div>
                <div className="mask"><span>Launch Project</span></div>
                <div className="mask"><span>Launch Project</span></div>
                <div className="mask"><span>Launch Project</span></div>
                <div className="mask"><span>Launch Project</span></div>
              </Link>
              <Link
                to={routeMap.project_details.replace(':slug', currentProject.button_next)}
                className="glitch-btn next qanelas-bold"
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
      </div>
    );
}

ProjectDetails.contextTypes = {
    router: React.PropTypes.object,
    currentMedia: React.PropTypes.string,
    meta: React.PropTypes.object,
};

