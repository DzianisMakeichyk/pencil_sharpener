import React, { Component } from 'react';
import { Link } from 'react-router';
import routeMap from '../routeMap.json';
import { TimelineLite } from "gsap";
import menu from './Menu'

// Images
import fb_icon from './img/social/facebook.svg';
import linkedin_icon from './img/social/linkedin.svg';
import vk_icon from './img/social/vk.svg';
import pencil_wolf from './img/pencil_wolf_white.svg';

class App extends Component {


 /* componentWillUpdate() {
    const script = document.createElement("script");
    script.src = "/scripts/jquery-1.12.0.min.js";
    script.async = true;
    document.body.appendChild(script);

    const script_2 = document.createElement("script");
    script_2.src = "/scripts/libs.js";
    script_2.async = true;
    document.body.appendChild(script_2);

    const script_3 = document.createElement("script");
    script_3.src = "/scripts/vl_portfolio.js";
    script_3.async = true;
    document.body.appendChild(script_3);

    const script_4 = document.createElement("script");
    script_4.src = "/scripts/script.js";
    script_4.async = true;
    document.body.appendChild(script_4);
  };*/

 constructor(props) {
    super(props);
    this.state = {
        menuVisible: false,
        currentMedia: '',
    };
}

    handleClick = () => {
        const menuAnimation = new TimelineLite();
        if (!this.state.menuVisible) {
            menuAnimation.to(this.refs.topLine, .3, { scaleX: 0 }, 'firstStep')
              .to(this.refs.bottomLine, .3, { width: 0 }, 'firstStep')
               .to(this.refs.otherLine, .3, { x: 16, y: -21 }, 'firstStep')
               .to(this.refs.otherLine, .2, { height: 34 }, 'secondStep')
               .to(this.refs.middleLine, .2, { rotation: 45 }, 'thirdStep')
               .to(this.refs.otherLine, .2, { rotation: 45 }, 'thirdStep')

        } else {
            menuAnimation.to(this.refs.middleLine, .2, { rotation: 0 }, 'firstStep')
              .to(this.refs.otherLine, .2, { rotation: 0 }, 'firstStep')
              .to(this.refs.otherLine, .2, { height: 0 }, 'secondStep')
              .to(this.refs.otherLine, .3, { x: 0, y: 0 }, 'thirdStep')
              .to(this.refs.topLine, .3, { scaleX: 1 }, 'thirdStep')
              .to(this.refs.bottomLine, .3, { width: 20 }, 'thirdStep')
        }
        this.setState({
            menuVisible: !this.state.menuVisible,
        });
    };

    render() {
        return (
        <div className="App">
            <div
                id="top"
                className="stickyfooter header-fixed"
            >
            <div className="">

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

                                    <div
                                      ref="myMenu"
                                      onClick={this.handleClick}
                                      className="burger-click-region"
                                    >
                                        <div className="menu-burger">
                                            <span
                                              ref="topLine"
                                              className="burger-menu-piece"
                                            ></span>
                                            <span
                                              ref="middleLine"
                                              className="burger-menu-piece"
                                            ></span>
                                            <span
                                              ref="bottomLine"
                                              className="burger-menu-piece"
                                            ></span>
                                            <span
                                              ref="otherLine"
                                              className="burger-menu-other"
                                            ></span>
                                        </div>
                                    </div>

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

                                <a
                                    href="https://www.facebook.com/dzianismakeichyk"
                                    target="_blank"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="facebook"
                                >
                                    <img
                                        className="icon-item"
                                        src={fb_icon}
                                        alt="facebook"
                                    />
                                </a>
                                <a
                                    href="https://pl.linkedin.com/in/dzianis-makeichyk-81664a127"
                                    target="_blank"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="linkedin"
                                >
                                    <img
                                        className="icon-item"
                                        src={linkedin_icon}
                                        alt="linkedin"
                                    />
                                </a>
                                <a
                                    href="https://www.vk.com/road66"
                                    target="_blank"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="vk"
                                >
                                    <img
                                        className="icon-item"
                                        src={vk_icon}
                                        alt="Dzianis Makeichyk"
                                    />
                                </a>

                            </div>

                        </div>
                    </div>


                    <main>
                        <menu />
                    </main>

                    <a href="#top" className="scroll-top scroll-top-hidden">
                        <i className="fa fa-angle-up"></i>
                    </a>

                </div>
                <footer>
                    <div className="footer">
                        <div className="container">
                            <div className="text-center">
                                <Link to="/" className="logo clearfix">
                                    <img className="logotype small" src={pencil_wolf} alt="Pencil Sharperner Wolf"/>
                                </Link>

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
            <script src="/test.js"></script>
        </div>
        );
    }
}

export default App;
