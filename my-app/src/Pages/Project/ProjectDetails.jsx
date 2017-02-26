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
          <i className="project-description">"{currentProject.description_part_2}"</i>
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
          <Link
            to={currentProject.button_link}
            target="_blank"
            className="project-button see-project qanelas-bold box-shadow"
          >
            Zobacz project
          </Link>
          <Link
            to={routeMap.project_details.replace(':slug', currentProject.button_next)}
            className="project-button next qanelas-bold box-shadow"
          >
            Następny
          </Link>







          {/*{isMediaLessThan('Small', context.currentMedia) && (*/}
                {/*<Link to={currentProject.button_link} target="_blank" >*/}
                  {/*<div className="svg-button-wrapper">*/}
                    {/*<svg height="35" width="180" xmlns="http://www.w3.org/2000/svg">*/}
                      {/*<rect className="button-shape" height="35" width="180" />*/}
                    {/*</svg>*/}
                    {/*<div className="button-text">Zobacz project</div>*/}
                  {/*</div>*/}
                {/*</Link>*/}
              {/*)}*/}
              <div className="project-shot-info">
                {/*<p className="project-location">{currentProject.location}*/}
                    {/*<span className="project-year"> {currentProject.year}</span>*/}
                {/*</p>*/}

                {/*<div className="project-technologies">*/}
                  {/*<div className="project-techno-body">*/}
                    {/*<p className="techno-body-name">Body</p>*/}
                    {/*{map(currentProject.technologies.body, (body) => (*/}
                        {/*<p className="body-name-shot">*/}
                            {/*{body}*/}
                        {/*</p>*/}
                    {/*))}*/}
                  {/*</div>*/}
                  {/*<div className="project-techno-body">*/}
                    {/*<p className="techno-body-name">Styling</p>*/}
                    {/*{map(currentProject.technologies.style, (style) => (*/}
                      {/*<p className="body-name-shot">*/}
                          {/*{style}*/}
                      {/*</p>*/}
                    {/*))}*/}
                  {/*</div>*/}
                {/*</div>*/}
                {/*{isMediaGreaterThan('Mobile', context.currentMedia) && (*/}
                  {/*<Link to={currentProject.button_link} target="_blank" >*/}
                    {/*<div className="svg-button-wrapper">*/}
                      {/*<svg height="45" width="180" xmlns="http://www.w3.org/2000/svg">*/}
                        {/*<rect className="button-shape" height="45" width="180" />*/}
                      {/*</svg>*/}
                      {/*<div className="button-text">Zobacz project</div>*/}
                    {/*</div>*/}
                  {/*</Link>*/}
                {/*)}*/}
              </div>
{/*
            <div className="project-button-arrows">
              <div className="project-button-one">
                <Link
                  to={routeMap.project_details.replace(':slug', currentProject.button_last)}
                  className="project-button prev"
                >
                <svg className="project-arrows-svg prev" version="1.1" x="0" y="0" viewBox="0 0 284.935 284.936" xmlSpace="preserve">
                  <g>
                    <path d="M62.2,149l133,133c1.9,1.9,4.1,2.9,6.6,2.9c2.5,0,4.7-1,6.6-2.9l14.3-14.3c1.9-1.9,2.9-4.1,2.9-6.6s-0.9-4.7-2.9-6.6
                      L110.5,142.5L222.7,30.3c1.9-1.9,2.9-4.1,2.9-6.6c0-2.5-0.9-4.7-2.9-6.6L208.4,2.9c-1.9-1.9-4.1-2.9-6.6-2.9c-2.5,0-4.7,1-6.6,2.9
                      l-133,133c-1.9,1.9-2.9,4.1-2.9,6.6S60.3,147.1,62.2,149z"/>
                  </g>
                </svg>
                  poprzedni
                </Link>
              </div>
              <div className="project-button-one">
                <Link
                  to={routeMap.project_details.replace(':slug', currentProject.button_next)}
                  className="project-button next"
                >następny
                <svg className="project-arrows-svg next" version="1.1" x="0" y="0" viewBox="0 0 284.935 284.936" xmlSpace="preserve">
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
*/}
        </section>
    );
}

ProjectDetails.contextTypes = {
    router: React.PropTypes.object,
    currentMedia: React.PropTypes.string,
};

