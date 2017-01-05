import React, { Component } from 'react';
import { Link } from 'react-router';
import ProjectDetails from './ProjectDetails';
import routeMap from '../../../routeMap.json';


// Images
import fb_icon from '../../img/social/facebook.svg';
import linkedin_icon from '../../img/social/linkedin.svg';
import vk_icon from '../../img/social/vk.svg';
import pencil_wolf from '../../img/pencil_wolf_white.svg';

class App extends Component {

    render() {
        return (
          <div className="App">
              <div id="top" className="stickyfooter header-fixed">
              <div className="animsition">

                  <div className="content">

                      <header className="header-wrap no-transparent">
                          <div className="header-container">
                              <div className="container clearfix">

                                  <div className="pull-left">
                                      <Link
                                        to="/"
                                        className="logo clearfix">Dzianis Makeichyk
                                      </Link>
                                  </div>

                                  <div className="pull-right">

                                      <a href="#" className="fullscreen-menu-toggle">
                                          <span>Menu</span>
                                          <i className="menu-bars">
                                              <i></i>
                                              <i></i>
                                              <i></i>
                                          </i>
                                      </a>
                                  </div>

                              </div>
                          </div>

                      </header>

                      <div id="fullscreen-navigation">
                          <div className="inner-wrap">
                              <nav>

                                  <ul className="nav_menu">
                                      <li className="current-menu-item">
                                          <Link
                                            to={routeMap.portfolio}
                                          >
                                              Portfolio
                                          </Link>
                                      </li>

                                      <li>
                                          <Link
                                            className="animsition-link"
                                            to={routeMap.about}
                                          >
                                              O mnie
                                          </Link>
                                      </li>

                                      <li>
                                          <Link
                                            className="animsition-link"
                                            to={routeMap.blog}
                                          >
                                              Blog
                                          </Link>
                                      </li>
                                      <li>
                                          <Link
                                            className="animsition-link"
                                            to={routeMap.contact}
                                          >
                                              Kontakt
                                          </Link>
                                      </li>
                                  </ul>

                              </nav>

                              <div className="socials">

                                  <a href="https://www.facebook.com/dzianismakeichyk" target="_blank" data-toggle="tooltip" data-placement="top" title="facebook">
                                      <img className="icon-item" src={fb_icon} alt="facebook" />
                                  </a>
                                  <a href="https://pl.linkedin.com/in/dzianis-makeichyk-81664a127" target="_blank" data-toggle="tooltip" data-placement="top" title="linkedin">
                                      <img className="icon-item" src={linkedin_icon} alt="linkedin" />
                                  </a>
                                  <a href="https://www.vk.com/road66" target="_blank" data-toggle="tooltip" data-placement="top" title="vk">
                                      <img className="icon-item" src={vk_icon} alt="Dzianis Makeichyk" />
                                  </a>

                              </div>

                          </div>
                      </div>


                      <main>
                          <ProjectDetails />
                      </main>

                      <a href="#top" className="scroll-top scroll-top-hidden">
                          <i className="fa fa-angle-up"></i>
                      </a>

                  </div>

                  <footer>
                      <div className="footer">
                          <div className="container">
                              <div className="text-center">
                                  <a href="./" className="logo clearfix">
                                      <img className="logotype small" src={pencil_wolf} alt="Pencil Sharperner Wolf"/>
                                  </a>

                                  <ul className="footer-menu clearfix">
                                      <li>
                                          <Link
                                            className="animsition-link"
                                            to={routeMap.portfolio}
                                          >
                                              Portfolio
                                          </Link>
                                      </li>
                                      <li>
                                          <Link
                                            className="animsition-link"
                                            to={routeMap.about}
                                          >
                                              O mnie
                                          </Link>
                                      </li>
                                      <li>
                                          <Link
                                            className="animsition-link"
                                            to={routeMap.blog}
                                          >
                                              Blog
                                          </Link>
                                      </li>
                                      <li>
                                          <Link
                                            className="animsition-link"
                                            to={routeMap.contact}
                                          >
                                              Kontakt
                                          </Link>
                                      </li>
                                  </ul>

                                  <p className="copy">
                                      Copyright &copy; 2016 <span>Pencilsharpener.pl</span>. All rights reserved.
                                  </p>
                              </div>
                          </div>
                      </div>
                  </footer>

              </div>
              </div>
          </div>
        );
    }
}

export default App;
