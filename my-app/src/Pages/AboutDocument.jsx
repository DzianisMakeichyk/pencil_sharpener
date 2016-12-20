import React, { Component } from 'react';
import map from 'lodash/map';
import SkillsList from './Skills/SkillsList.json'
import SkillsItem from './Skills/SkillsItem'
import { Col, Grid, container, row } from 'react-bootstrap';

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
                                        <h1>O mnie</h1>
                                    </div>
                                </div>
                            </Grid>

                        </div>
                    </div>
                </section>

                <section className="section">
                    <Grid bsClass={container}>
                        <p>
                            Nazywam się Dzianis Makeichyk i jestem Front-End Developerem. Zajmuję się tworzeniem stron internetowych, blogów oraz grafiki użytkowej. Zawsze dążę do tego, żeby każdy zbudowany przez mnie projekt był całkowicie optymalny od strony użytkowej oraz graficznej. Dzięki latom doświadczenia przy tworzeniu projektów internetowych oraz graficynych przyjołem i trzymam się politykę, że właściwa, intuicyjna nawigacja, inteligentna i przejrzysta grafika, sprawne działanie wszystkich elementów strony pomoga w maksynalnym dotarciu do potrzebnych informacji. Ze wszystkie te elementy dobrze zgrane sprawią, że Twoi odbiorcy szybciej dokonają zakupu, zamówią usługę, dopiszą się do newslettera czy wypełnią formularz kontaktowy. Dzięki temu Twoja strona skutecznie zareklamuje Ciebie jako godnego zaufania, wydajnego przedsiębiorcę i zwiększy Twoje zyski.
                        </p>
                    </Grid>
                </section>


                <section className="section">
                    <Grid bsClass={container}>
                        <div className="mb30">
                            <h5>umiejętności</h5>
                        </div>
                        <Grid bsClass={row}>
                            <Col md={12}>
                                {map(SkillsList, (skills) => (
                                  <SkillsItem
                                    key={skills.name}
                                    skills={skills}
                                  />
                                ))}
                            </Col>

                        </Grid>

                    </Grid>
                </section>

                <section className="section">
                    <Grid bsClass={container}>
                        <p>
                            Moje doświadczenie i umiejętności sprawiają, że mogę zaoferować Tobie i Twojej firmie kompleksowe rozwiązania w zakresie projektowania na potrzeby Internetu. Moją specjalnością jest tworzenie serwisów internetowych, zarówno dedykowanych, jak i bardziej standardowych. Jestem w stanie wykonać stronę internetową na każdą kieszeń, dostosuję się do Twoich potrzeb. Graficznie zaprojektuję projekt tak, aby były funkcjonalne, wyjątkowe i idealnie pasowały do Twojej firmy. Moim celem jest łączenie atrakcyjnego designu ze skutecznością strony, bo to klucz do sukcesu Twojej firmy!
                        </p>
                    </Grid>
                </section>
            </div>
        );
    }
}

export default App;
