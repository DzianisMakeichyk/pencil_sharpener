import React, { Component } from 'react';
import isMediaGreaterThan from '../web_modules/isMediaGreaterThan';
import isMediaLessThan from '../web_modules/isMediaLessThan';
import SkillOne from './Skills/SkillsList.json';
import SkillOneItem from './Skills/SkillsItem'
import map from 'lodash/map';
import { TimelineLite } from "gsap";


class About extends Component {

    static contextTypes = {
        currentMedia: React.PropTypes.string,
    };

    componentDidMount = () => {
        const skeletonAnimation = new TimelineLite();
        skeletonAnimation.to(this.refs.skeletonBox, .1, { x:-100+'%', y:0, backgroundColor: '#ffffff' }, 'firstStep')
        .to(this.refs.skeletonBox, 1.2, { x:100+'%', y:0 }, 'secondStep')
        .to(this.refs.skeletonImg, .1, { x:-100+'%', y:0 }, 'firstStep')
        .to(this.refs.skeletonImg, 1.2, { x:0+'%', y:0 }, 'secondStep', '+=.6')
    };
    render() {
         return (
          <div>
            <section className="about height-auto vh-medium">
                <div className="about-box-image">
                    <div className="back-image" ref="skeletonBox"></div>
                    <img
                      src="../img/background.png"
                      className="about-image ease-box little"
                      alt="Dzianis Makeichyk"
                      role="presentation"
                      ref="skeletonImg"
                    />
                    {isMediaGreaterThan('Mobile', this.context.currentMedia) && (
                        <div className="skills-box ease-box">
                            {map(SkillOne, (skillsShot) => (
                              <SkillOneItem
                                key={skillsShot.name}
                                skillsShot={skillsShot}
                              />
                            ))}
                        </div>
                    )}
                </div>
                <div className="about-information ease-box">
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
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
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
                    <div className="skills-box ease-box">
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
