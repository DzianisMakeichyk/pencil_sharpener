import React, { Component } from 'react';

class Index extends Component {
    render() {
        return (
          <div>
                <section className="hero">
                    <div className="hero_title">
                        <span className="hero_name_title bold">
                            CREATIVE&nbsp;
                        </span>
                        <span className="hero_name_title">
                            Front End Developer.
                        </span>
                    </div>
                    <div className="hero_name">
                        <img src="./img/pencil_wolf_white.svg" className="svg_wolf" role="presentation" />
                        <h1 className="hero_pencil">
                            Pencil<br/>sharpener
                        </h1>
                        <h2 className="hero_production">
                            by Dzianis Makeichyk
                        </h2>
                    </div>
                </section>
              <section className="welcome">
                  {/*
                  <div className="hero-shot-position">
                      <div className="shot-position">
                          <div className="hero-one-box">
                              <div className="one-box-text">
                                  <p className="box-name">
                                    Hello
                                  </p>
                              </div>
                              <div className="one-box-image">
                                  <img src="../../img/hero/1x1.png" role="presentation" className="box-image-shot" alt="hello" />
                              </div>
                          </div>
                      </div>
                      <div className="shot-position">
                          <div className="hero-one-box">
                              <div className="one-box-text">
                                  <p className="box-name">
                                    Hello
                                  </p>
                              </div>
                              <div className="one-box-image">
                                  <img src="../../img/hero/1x1.png" role="presentation" className="box-image-shot" alt="hello" />
                              </div>
                          </div>
                      </div>
                      <div className="shot-position">
                          <div className="hero-one-box">
                              <div className="one-box-text">
                                  <p className="box-name">
                                    Hello
                                  </p>
                              </div>
                              <div className="one-box-image">
                                  <img src="../../img/hero/1x1.png" role="presentation" className="box-image-shot" alt="hello" />
                              </div>
                          </div>
                      </div>
                      <svg width='0' height='0' viewBox="0 0 64 64" >
                          <defs>
                              <clipPath id="heroClip" clipPathUnits="objectBoundingBox">
                                  <path d='M0.4 0 L0 0.9 L0.6 0.9 L1 0 Z' />
                              </clipPath>
                          </defs>
                      </svg>
                  </div>
              */}
              </section>
              </div>
        );
    }
}

export default Index;
