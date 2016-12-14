import React from 'react';
import find from 'lodash/find';
import projects from './ProjectsList.json';

export default function ProjectDetails(props, context) {
    const currentProject = find(projects, (project) => (
        project.slug === context.router.params.slug
    ));

    console.log(currentProject);

    return (
        <div>

            <section className="jarallax">
                <div className="container">
                    <div className="aligner">
                        <div className="aligner-item page-title">
                            <h1>
                                {currentProject.name}
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <p>
                        Agencja interaktywna łącząca kompetencje digital, performance marketing i Social Media
                    </p>
                    <div className="mb20">
                        <a href="../works/agencja/index.html"
                           target="_blank"
                           className="btn btn-black btn-lg btn-animateLeft">
                            Agencja
                            <i className="fa fa-long-arrow-right"></i>
                        </a>
                    </div>
                </div>
                <div className="container">
                    <div className="mb30">
                        <h5>Code</h5>
                    </div>
                    <pre>
                    <span></span>
                </pre>

                </div>
            </section>
            <section className="section">
                <div className="text-center">
                    <ul className="page-navigation">
                        <li>
                            <a href="portal-pracy.html" className="nav-left">
                                <span>poprzedzni</span>
                                <i className="fa fa-fw fa-angle-left"></i>

                            </a>
                        </li>
                        <li>
                            <a href="zaslepka.html" className="nav-right">
                                <i className="fa fa-fw fa-angle-right"></i>
                                <span>następny</span>
                            </a>
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
