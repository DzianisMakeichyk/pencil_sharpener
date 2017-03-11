import React, { Component } from 'react';
import isMediaGreaterThan from '../../web_modules/isMediaGreaterThan';
import isMediaLessThan from '../../web_modules/isMediaLessThan';
import SkillOne from './Skills/SkillsList.json';
import SkillOneItem from './Skills/Index'
import map from 'lodash/map';
import { TimelineLite } from "gsap";


class About extends Component {

    static contextTypes = {
        currentMedia: React.PropTypes.string,
    };

    componentDidMount = () => {
        const skeletonAnimation = new TimelineLite();
        skeletonAnimation.to(this.refs.skeletonBox, .1, { x:-100+'%', y:0, backgroundColor: '#ffffff' }, 'firstStep')
        .to(this.refs.skeletonBox, 1.2, { x:101+'%', y:0 }, 'secondStep')
        .to(this.refs.skeletonImg, .1, { x:-100+'%', y:0 }, 'firstStep')
        .to(this.refs.skeletonImg, 1.2, { x:0+'%', y:0 }, 'secondStep', '+=.6')
    };
    render() {

        return (
          <div>
            <section className="about height-auto vh-medium">
                <div className="about-box-image">
                    <div className="relative">
                        <div className="back-image" ref="skeletonBox"></div>
                        <img
                          src="../img/dzianis_makeichyk.png"
                          className="about-image ease-box little"
                          alt="Dzianis Makeichyk"
                          role="presentation"
                          ref="skeletonImg"
                        />
                    </div>
                    {isMediaGreaterThan('Mobile', this.context.currentMedia) && (
                        <div className="skills-box box-shadow">
                            {map(SkillOne, (skillsShot) => (
                              <SkillOneItem
                                key={skillsShot.name}
                                skillsShot={skillsShot}
                              />
                            ))}
                        </div>
                    )}
                </div>
                <div className="about-information box-shadow">
                    <h2 className="about-name qanelas-bold">
                        <span className="green">
                            Dzianis
                        </span> Makeichyk</h2>
                    <div className="about-description">
                        <div className="about-description-left">
                            <p className="green">Miasto:</p>
                            <p className="green">Mail:</p>
                            <p className="green">Telefon:</p>
                            <p className="green">NIP:</p>
                        </div>
                        <div className="about-description-right">
                            <p className="description-shot">Polska, Warszawa</p>
                            <a href="mailto:dzianis@pencilsharpener.pl" className="description-shot">dzianis@pencilsharpener.pl</a>
                            <p className="description-shot"> +48 79767075</p>
                            <p className="description-shot">527-277-32-56</p>
                        </div>
                    </div>
                    <p className="about-me">
                        Nazywam się Dzianis Makeichyk i jestem Front-End Developerem. Zajmuję się tworzeniem stron internetowych, blogów, od responsywnego mailingu, banera, do layout wykonany na podstawie ReactJS. Zawsze dążę do tego, żeby każdy zbudowany przez mnie projekt był całkowicie optymalny od strony użytkowej oraz graficznej. Dzięki latom doświadczenia przy tworzeniu projektów internetowych oraz graficynych przyjołem i trzymam się politykę, że właściwa, intuicyjna nawigacja, inteligentna i przejrzysta grafika, sprawne działanie wszystkich elementów strony pomoga w maksynalnym dotarciu do potrzebnych informacji. Ze wszystkie te elementy dobrze zgrane sprawią, że Twoi odbiorcy szybciej dokonają zakupu, zamówią usługę, dopiszą się do newslettera czy wypełnią formularz kontaktowy. Dzięki temu Twoja strona skutecznie zareklamuje Ciebie jako godnego zaufania, wydajnego przedsiębiorcę i zwiększy Twoje zyski.
                       <br />
                       <br />
                        Moje doświadczenie i umiejętności sprawiają, że mogę zaoferować Tobie i Twojej firmie kompleksowe rozwiązania w zakresie projektowania na potrzeby Internetu. Moją specjalnością jest tworzenie serwisów internetowych, zarówno dedykowanych, jak i bardziej standardowych. Jestem w stanie wykonać stronę internetową na każdą kieszeń, dostosuję się do Twoich potrzeb. Graficznie zaprojektuję projekt tak, aby były funkcjonalne, wyjątkowe i idealnie pasowały do Twojej firmy. Moim celem jest łączenie atrakcyjnego designu ze skutecznością strony, bo to klucz do sukcesu Twojej firmy!
                    </p>
                    <div className="about-cv">
                        <svg className="about-cv-svg" viewBox="0 0 60 60" xmlSpace="preserve" >
                            <g>
                                <path d="M38.914,0H6.5v60h47V14.586L38.914,0z M17.5,14h10c0.552,0,1,0.447,1,1s-0.448,1-1,1h-10c-0.552,0-1-0.447-1-1
                                  S16.948,14,17.5,14z M42.5,48h-25c-0.552,0-1-0.447-1-1s0.448-1,1-1h25c0.552,0,1,0.447,1,1S43.052,48,42.5,48z M42.5,40h-25
                                  c-0.552,0-1-0.447-1-1s0.448-1,1-1h25c0.552,0,1,0.447,1,1S43.052,40,42.5,40z M42.5,32h-25c-0.552,0-1-0.447-1-1s0.448-1,1-1h25
                                  c0.552,0,1,0.447,1,1S43.052,32,42.5,32z M42.5,24h-25c-0.552,0-1-0.447-1-1s0.448-1,1-1h25c0.552,0,1,0.447,1,1S43.052,24,42.5,24z
                                   M37.5,16V2l14,14H37.5z"/>
                            </g>
                        </svg>
                        <a href="#" className="about-download green qanelas-bold">pobierz CV</a>
                    </div>
                </div>
                {isMediaLessThan('Small', this.context.currentMedia) && (
                    <div className="skills-box">
                      {map(SkillOne, (skillsShot) => (
                        <SkillOneItem
                          key={skillsShot.name}
                          skillsShot={skillsShot}
                        />
                      ))}
                    </div>
                )}
            </section>
          </div>
        );
    }
}

export default About;

