import React, { Component } from 'react';
import PortfolioGrid from './PortfolioGrid/PortfolioGrid';
import PortfolioGridList from './PortfolioGrid/PortfolioGridList.json';
import map from 'lodash/map';
import { Grid, container } from 'react-bootstrap';

class App extends Component {

    /*componentDidMount() {
        isPortfolio();
        isScript();
    }*/

    render() {
        return (
            <div>
                <section
                    className="jarallax"
                >
                    <div className="homepage-hero-module">
                        <div className="video-container">
                            <div className="filter"></div>
                            <video autoPlay loop className="fillHeight">
                                <source src="video/MP4/Inbox-Zero.mp4" type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
                                <source src="video/WEBM/Inbox-Zero.webm" type="video/webm" />Your browser does not support the video tag. I suggest you upgrade your browser.
                            </video>

                            <Grid bsClass={container}>
                                <div className="aligner">
                                    <div className="aligner-item page-title">
                                        <h1>Portfolio</h1>
                                    </div>
                                </div>
                            </Grid>

                        </div>
                    </div>
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

                        </div>

                    </Grid>
                </section>       </div>
        );
    }
}

export default App;
