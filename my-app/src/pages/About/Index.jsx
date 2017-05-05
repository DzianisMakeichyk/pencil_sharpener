import React, { Component } from 'react';
import SkillOne from './Skills/SkillsList.json';
import SkillOneItem from './Skills/Index'
import map from 'lodash/map';
import { TimelineLite } from "gsap";
import { FormattedMessage, intlShape } from 'react-intl';


class About extends Component {

    static contextTypes = {
        currentMedia: React.PropTypes.string,
        intl: intlShape.isRequired,
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
          <section className="about height-auto">
              <div className="about-image-box">
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
              </div>
              <div className="about-information-box">
                  <div className="about-information">
                      <h2 className="about-name qanelas-bold">
                          <span className="green">
                              Dzianis
                          </span>
                          &nbsp;Makeichyk
                      </h2>
                      <div className="about-description">
                          <div className="about-description-left">
                              <p className="green">
                                  <FormattedMessage id="city" />:
                              </p>
                              <p className="green">
                                  <FormattedMessage id="email" />:
                              </p>
                              <p className="green">
                                  <FormattedMessage id="phone_number" />:
                              </p>
                              <p className="green">NIP:</p>
                          </div>
                          <div className="about-description-right">
                              <p className="description-shot">
                                  <FormattedMessage id="poland" />,&nbsp;
                                  <FormattedMessage id="warsaw" />
                              </p>
                              <a href="mailto:dzianis@pencilsharpener.pl" className="description-shot">dzianis@pencilsharpener.pl</a>
                              <p className="description-shot"> +48 79767075</p>
                              <p className="description-shot">527-277-32-56</p>
                          </div>
                      </div>
                      <p className="about-me">
                          <FormattedMessage id="my_name_is" />&nbsp;
                          <strong>
                              Dzianis Makeichyk
                          </strong>&nbsp;
                            <FormattedMessage id="and_i_am" />&nbsp;
                          <strong>
                            <FormattedMessage id="front_end_developer" />
                          </strong>.&nbsp;
                          <FormattedMessage id="about_me_part_one" />
                         <br />
                         <br />
                          <FormattedMessage id="about_me_part_two" />
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
                          <a
                            href="./img/CV_Dzianis_Makeichyk.pdf"
                            target="_blank"
                            className="about-download green qanelas-bold"
                          >
                            <FormattedMessage id="download_cv" />
                          </a>
                      </div>
                  </div>
                  <div className="skills-box">
                    {map(SkillOne, (skillsShot) => (
                      <SkillOneItem
                        key={skillsShot.name}
                        skillsShot={skillsShot}
                      />
                    ))}
                  </div>
              </div>
          </section>
        );
    }
}

export default About;

