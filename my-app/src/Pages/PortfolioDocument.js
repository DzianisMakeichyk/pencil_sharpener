import React, { Component } from 'react';
import logo from '../logo.svg';

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
                            <video autoPlay loop className="fillHeight">
                                <source src="video/MP4/Inbox-Zero.mp4" type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
                                <source src="video/WEBM/Inbox-Zero.webm" type="video/webm" />Your browser does not support the video tag. I suggest you upgrade your browser.
                            </video>



                            <div className="container">
                                <div className="aligner">
                                    <div className="aligner-item page-title">
                                        <h1>Portfolio</h1>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="container">

                        <div className="filters-wrap">

                            <div className="text-center">
                                <a href="#" data-filter="*" className="active">Wszystko</a>
                                <a href="#" data-filter=".page">Landing Page</a>
                                <a href="#" data-filter=".littel">Mała grafika</a>
                                <a href="#" data-filter=".wp">Word Press</a>
                            </div>

                        </div>

                        <div className="portfolio-masonry-wrapper" data-col="3" data-gutter="30">
                            <div className="portfolio-list">

                                <article className="portfolio-item-wrap page">
                                    <div className="portfolio-item">

                                        <div className="portfolio-img">
                                            <img src="img/black/1.png" alt="Stypendium z wyboru" />
                                        </div>
                                        <div className="portfolio-content-wrap">
                                            <div className="potfolio-content">
                                                <h6 className="portfolio-title">
                                                    <a href="portfolio/stypendium-z-wyboru.html" className="animsition-link">
                                                        Stypendium z wyboru </a>
                                                </h6>
                                                <div className="portfolio-categories">
                                                    Absolvent.pl
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </article>

                                <article className="portfolio-item-wrap littel">

                                    <div className="portfolio-item">
                                        <div className="portfolio-img">
                                            <img src="img/black/2.png" alt="Baner" />
                                        </div>
                                        <div className="portfolio-content-wrap">
                                            <div className="potfolio-content">
                                                <h6 className="portfolio-title">
                                                    <a href="portfolio/animowany-baner.html" className="animsition-link">Baner</a>
                                                </h6>
                                            </div>
                                        </div>
                                    </div>

                                </article>

                                <article className="portfolio-item-wrap page">

                                    <div className="portfolio-item">
                                        <div className="portfolio-img">
                                            <img src="img/black/3.png" alt="mini blog" />
                                        </div>
                                        <div className="portfolio-content-wrap">
                                            <div className="potfolio-content">
                                                <h6 className="portfolio-title">
                                                    <a href="portfolio/pierwsza-strona.html" className="animsition-link">Pierwsza strona</a>
                                                </h6>
                                                <div className="portfolio-categories">
                                                    Mini blog
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </article>

                                <article className="portfolio-item-wrap page">

                                    <div className="portfolio-item">
                                        <div className="portfolio-img">
                                            <img src="img/black/4.png" alt="Zaślepka" />
                                        </div>
                                        <div className="portfolio-content-wrap">
                                            <div className="potfolio-content">
                                                <h6 className="portfolio-title">
                                                    <a href="portfolio/zaslepka.html" className="animsition-link">Zaślepka</a>
                                                </h6>
                                            </div>
                                        </div>
                                    </div>

                                </article>

                                <article className="portfolio-item-wrap page">

                                    <div className="portfolio-item">
                                        <div className="portfolio-img">
                                            <img src="img/black/5.png" alt="Portal pracy" />
                                        </div>
                                        <div className="portfolio-content-wrap">
                                            <div className="potfolio-content">
                                                <h6 className="portfolio-title">
                                                    <a href="portfolio/portal-pracy.html" className="animsition-link">Portal pracy</a>
                                                </h6>
                                            </div>
                                        </div>
                                    </div>

                                </article>

                                <article className="portfolio-item-wrap page">

                                    <div className="portfolio-item">
                                        <div className="portfolio-img">
                                            <img src="img/black/6.png" alt="Agencja kreatywna" />
                                        </div>
                                        <div className="portfolio-content-wrap">
                                            <div className="potfolio-content">
                                                <h6 className="portfolio-title">
                                                    <a href="portfolio/agencja-interaktywna.html" className="animsition-link">Agencja kreatywna</a>
                                                </h6>
                                            </div>
                                        </div>
                                    </div>

                                </article>

                                <article className="portfolio-item-wrap littel">

                                    <div className="portfolio-item">
                                        <div className="portfolio-img">
                                            <img src="img/black/7.png" alt="Baner zegarkowy" />
                                        </div>
                                        <div className="portfolio-content-wrap">
                                            <div className="potfolio-content">
                                                <h6 className="portfolio-title">
                                                    <a href="portfolio/baner.html" className="animsition-link">Baner zegarkowy</a>
                                                </h6>
                                                <div className="portfolio-categories">
                                                    Z aktualną godziną
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </article>

                                <article className="portfolio-item-wrap page">

                                    <div className="portfolio-item">
                                        <div className="portfolio-img">
                                            <img src="img/black/8.png" alt="Portfolio" />
                                        </div>
                                        <div className="portfolio-content-wrap">
                                            <div className="potfolio-content">
                                                <h6 className="portfolio-title">
                                                    <a href="portfolio/dzianis.html" className="animsition-link">Portfolio</a>
                                                </h6>
                                            </div>
                                        </div>
                                    </div>

                                </article>

                                <article className="portfolio-item-wrap littel">

                                    <div className="portfolio-item">
                                        <div className="portfolio-img">
                                            <img src="img/black/9.png" alt="Facebook Tabe" />
                                        </div>
                                        <div className="portfolio-content-wrap">
                                            <div className="potfolio-content">
                                                <h6 className="portfolio-title">
                                                    <a href="portfolio/facebook-tab.html" className="animsition-link">Facebook Tab</a>
                                                </h6>
                                            </div>
                                        </div>
                                    </div>

                                </article>

                                <article className="portfolio-item-wrap page">

                                    <div className="portfolio-item">
                                        <div className="portfolio-img">
                                            <img src="img/black/10.png" alt="Warsztat samochodowy " />
                                        </div>
                                        <div className="portfolio-content-wrap">
                                            <div className="potfolio-content">
                                                <h6 className="portfolio-title">
                                                    <a href="portfolio/warsztat-samochodowy.html" className="animsition-link">Warsztat samochodowy</a>
                                                </h6>
                                                <div className="portfolio-categories">
                                                    W trakcie realizacji..
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </article>

                            </div>

                        </div>

                    </div>
                </section>       </div>
        );
    }
}

export default App;
