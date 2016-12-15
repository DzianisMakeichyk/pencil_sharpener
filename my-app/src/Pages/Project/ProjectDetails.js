import React from 'react';
import { Link } from 'react-router';
import find from 'lodash/find';
import projects from './ProjectsList.json';
import routeMap from '../../../routeMap.json';
import { Grid, container } from 'react-bootstrap';



export default function ProjectDetails(props, context) {
    const currentProject = find(projects, (project) => (
        project.slug === context.router.params.slug
    ));

    var ProjectImg = {backgroundImage: 'url("../../img/portfolio/' + currentProject.img +'.png")'};

    console.log(currentProject);

    return (
        <div>

            <section
                className="jarallax"
                style={ProjectImg}
            >
                <Grid bsClass={container}>
                    <div className="aligner">
                        <div className="aligner-item page-title">
                            <h1>
                                {currentProject.name}
                            </h1>
                        </div>
                    </div>
                </Grid>
            </section>
            <section className="section">
                <Grid bsClass={container}>
                    <p>
                        {currentProject.description}
                    </p>
                    <div className="mb20">
                        <Link to={currentProject.button_link}
                           target="_blank"
                           className="btn btn-black btn-lg btn-animateLeft">
                            {currentProject.button_name}
                            <i className="fa fa-long-arrow-right"></i>
                        </Link>
                    </div>
                </Grid>
                <Grid bsClass={container}>
                    <div className="mb30">
                        <h5>Code</h5>
                    </div>
                    <pre>
                    <span>
                    </span>
                </pre>

                </Grid>
            </section>
            <section className="section">
                <div className="text-center">
                    <ul className="page-navigation">
                        <li>
                            <Link
                                to={routeMap.project_details.replace(':slug', currentProject.button_last)}
                                  className="nav-left">
                                <span>poprzedzni</span>
                                <i className="fa fa-fw fa-angle-left"></i>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={routeMap.project_details.replace(':slug', currentProject.button_next)}
                                className="nav-right">
                                <i className="fa fa-fw fa-angle-right"></i>
                                <span>następny</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
}

ProjectDetails.contextTypes = {
    router: React.PropTypes.object,
};
