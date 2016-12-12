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
                            <video autoplay loop className="fillWidth">
                                <source src="video/MP4/BnW.mp4" type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
                                <source src="video/WEBM/BnW.webm" type="video/webm" />Your browser does not support the video tag. I suggest you upgrade your browser.
                            </video>



                            <div className="container">
                                <div className="aligner">
                                    <div className="aligner-item page-title">
                                        <h1>O mnie</h1>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="section">
                    <div className="container">
                        <p>
                            Nazywam się Dzianis Makeichyk i jestem Front-End Developerem. Zajmuję się tworzeniem stron internetowych, blogów oraz grafiki użytkowej. Zawsze dążę do tego, żeby każdy zbudowany przez mnie projekt był całkowicie optymalny od strony użytkowej oraz graficznej. Dzięki latom doświadczenia przy tworzeniu projektów internetowych oraz graficynych przyjołem i trzymam się politykę, że właściwa, intuicyjna nawigacja, inteligentna i przejrzysta grafika, sprawne działanie wszystkich elementów strony pomoga w maksynalnym dotarciu do potrzebnych informacji. Ze wszystkie te elementy dobrze zgrane sprawią, że Twoi odbiorcy szybciej dokonają zakupu, zamówią usługę, dopiszą się do newslettera czy wypełnią formularz kontaktowy. Dzięki temu Twoja strona skutecznie zareklamuje Ciebie jako godnego zaufania, wydajnego przedsiębiorcę i zwiększy Twoje zyski.
                        </p>
                    </div>
                </section>


                <section className="section">
                    <div className="container">
                        <div className="mb30">
                            <h5>umiejętności</h5>
                        </div>
                        <div className="row">
                            <div className="col-md-12">

                                <div className="progress-bar">
                                    <h6>PhotoShop</h6>
                                    <div className="progress-outer">
                                        <div className="progress-inner">
                                            <span>65</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="progress-bar">
                                    <h6>Illustrator</h6>
                                    <div className="progress-outer">
                                        <div className="progress-inner">
                                            <span>60</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="progress-bar">
                                    <h6>Jade/HTML</h6>
                                    <div className="progress-outer">
                                        <div className="progress-inner">
                                            <span>70</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="progress-bar">
                                    <h6>SASS/SCSS</h6>
                                    <div className="progress-outer">
                                        <div className="progress-inner">
                                            <span>75</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="progress-bar">
                                    <h6>ReactJs</h6>
                                    <div className="progress-outer">
                                        <div className="progress-inner">
                                            <span>45</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="progress-bar">
                                    <h6>Zubr Foundation/Bootstrap</h6>
                                    <div className="progress-outer">
                                        <div className="progress-inner">
                                            <span>75</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="progress-bar">
                                    <h6>Jquery</h6>
                                    <div className="progress-outer">
                                        <div className="progress-inner">
                                            <span>50</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="progress-bar">
                                    <h6>WordPress</h6>
                                    <div className="progress-outer">
                                        <div className="progress-inner">
                                            <span>60</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </section>

                <section className="section">
                    <div className="container">
                        <p>
                            Moje doświadczenie i umiejętności sprawiają, że mogę zaoferować Tobie i Twojej firmie kompleksowe rozwiązania w zakresie projektowania na potrzeby Internetu. Moją specjalnością jest tworzenie serwisów internetowych, zarówno dedykowanych, jak i bardziej standardowych. Jestem w stanie wykonać stronę internetową na każdą kieszeń, dostosuję się do Twoich potrzeb. Graficznie zaprojektuję projekt tak, aby były funkcjonalne, wyjątkowe i idealnie pasowały do Twojej firmy. Moim celem jest łączenie atrakcyjnego designu ze skutecznością strony, bo to klucz do sukcesu Twojej firmy!
                        </p>
                    </div>
                </section>
            </div>
        );
    }
}

export default App;
