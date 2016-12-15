import React, { Component } from 'react';
import { Grid, container } from 'react-bootstrap';
import PortfolioGrid from './PortfolioGrid/PortfolioGrid';
import PortfolioGridList from './PortfolioGrid/PortfolioGridList.json';
import map from 'lodash/map';
import { Link } from 'react-router';
import routeMap from '../../routeMap.json';


class App extends Component {
    render() {
        return (
            <div>
                <section
                    className="jarallax"
                >
                    <div className="homepage-hero-module">
                        <div className="video-container">
                            <div className="filter"></div>
                            <video autoPlay loop className="fillWidth">
                                <source src="video/MP4/BnW.mp4" type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
                                <source src="video/WEBM/BnW.webm" type="video/webm" />Your browser does not support the video tag. I suggest you upgrade your browser.
                            </video>

                            <Grid bsClass={container}>
                                <div className="aligner">
                                    <div className="aligner-item page-title">
                                        <h1>Pencil Sharpener</h1>
                                        <img className="logotype" src="img/pencil_wolf_white.svg" alt="Pencil Sharperner Wolf"/>
                                        <p>Front-End Developer</p>
                                    </div>
                                </div>
                            </Grid>

                        </div>
                    </div>
                </section>

                <main>

                    <section className="section">
                        <Grid bsClass={container}>
                            <div className="mb30">
                                <h5>Witam</h5>
                            </div>
                            <p><strong className="dropcap">P</strong>ensil Sharpener - to projekt stworzony z myślą o kompleksowej realizacji projektów internetowych: od analizy i projektowania funkcjonalności, poprzez projektowanie graficzne, kodowanie oraz kompleksowe programowanie, a kończąc wdrażaniem projektu. Jestem ciekawy otaczającego świata i chcę zmieniać go tylko na lepsze. Dlatego celem Pencil Sharpener jest tworzenie funkcjonalnych i innowacyknych projektów internetowych.
                            </p>
                        </Grid>
                    </section>
                    <section className="section">
                        <Grid bsClass={container}>

                            <div className="filters-wrap">

                                <div className="text-center">
                                    <a href="#" data-filter="*" className="active">Wszystko</a>
                                    <a href="#" data-filter=".page">Landing Page</a>
                                    <a href="#" data-filter=".little">Mała grafika</a>
                                    <a href="#" data-filter=".wp">Word Press</a>
                                </div>

                            </div>

                            <div className="portfolio-masonry-wrapper" data-col="3" data-gutter="30">
                                <div className="portfolio-list">
                                    {map(PortfolioGridList, (project) => (
                                      <PortfolioGrid
                                        key={project.name}
                                        project={project}
                                      />
                                    ))}
                                </div>

                                <div className="classic-load-button text-center">
                                    <p className="end">Ooops..</p>
                                    <Link
                                      to={routeMap.portfolio}
                                      id="classic-load-button-link"
                                      data-load="1">
                                        Więcej
                                    </Link>
                                </div>

                            </div>

                        </Grid>
                    </section>
                </main>
            </div>
        );
    }
}

export default App;
