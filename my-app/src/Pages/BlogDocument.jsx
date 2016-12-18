import React, { Component } from 'react';
import { Grid, container } from 'react-bootstrap';

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



                            <Grid bsClass={container}>>
                                <div className="aligner">
                                    <div className="aligner-item page-title">
                                        <h1>Już niedługo</h1>
                                    </div>
                                </div>
                            </Grid>

                        </div>
                    </div>
                </section>

            </div>
        );
    }
}

export default App;
