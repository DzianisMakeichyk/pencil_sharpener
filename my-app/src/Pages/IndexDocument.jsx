import React, { Component } from 'react';

class App extends Component {

    render() {
        return (
          <div>
            {/*<section className="hero">
                <div className="hero-left">
                    <h1 className="hero-name">
                        Pencil
                        <br />
                        Sharpener
                    </h1>
                </div>
                <div className="hero-right">
                    <h2 className="hero-position">Front-End Developer</h2>
                </div>
            </section>*/}
              <section className="welcome">
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
              </section>
              </div>
        );
    }
}

export default App;
