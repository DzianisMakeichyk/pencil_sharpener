import React from 'react';
import { Link } from 'react-router';
import find from 'lodash/find';
import projects from './datas/ProjectsList.json';
import map from 'lodash/map';
import isMediaGreaterThan from '../../web_modules/isMediaGreaterThan';
import isMediaLessThan from '../../web_modules/isMediaLessThan';
import { FormattedMessage, intlShape } from 'react-intl';

export default function ProjectDetails(props, context) {
    const currentProject = find(projects, (project) => (
        project.slug === context.router.params.slug
    ));
    const languesLocation = context.intl.locale;
    const currentDescription = currentProject.description;

  let DescriptionLocation = '';
    if (languesLocation === 'en') {
      DescriptionLocation = <p className="project-description">"{currentDescription.en}</p>
      } else {
      DescriptionLocation = <p className="project-description">"{currentDescription.pl}</p>
    }

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
            <div>
              {DescriptionLocation}
            </div>
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
            <div>
              {DescriptionLocation}
            </div>
          )}
          <div className="project-button-wrapper">
            <a
              href={currentProject.button_link}
              target="_blank"
              className="glitch-btn launch"
            >
              <div className="label">
                <FormattedMessage id="see_project" />
              </div>
              <div className="mask">
                <FormattedMessage id="see_project" />
              </div>
              <div className="mask">
                <FormattedMessage id="see_project" />
              </div>
              <div className="mask">
                <FormattedMessage id="see_project" />
              </div>
              <div className="mask">
                <FormattedMessage id="see_project" />
              </div>
              <div className="mask">
                <FormattedMessage id="see_project" />
              </div>
            </a>
            <Link
              to={props.location.pathname.replace(props.params.slug, currentProject.button_next)}
              className="glitch-btn next"
            >
              <div className="label">
                <FormattedMessage id="next_project" />
              </div>
              <div className="mask">
                <FormattedMessage id="next_project" />
              </div>
              <div className="mask">
                <FormattedMessage id="next_project" />
              </div>
              <div className="mask">
                <FormattedMessage id="next_project" />
              </div>
              <div className="mask">
                <FormattedMessage id="next_project" />
              </div>
              <div className="mask">
                <FormattedMessage id="next_project" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    );
}

ProjectDetails.contextTypes = {
  router: React.PropTypes.object,
  currentMedia: React.PropTypes.string,
  intl: intlShape.isRequired,
};

