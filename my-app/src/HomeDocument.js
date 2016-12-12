import React, { Component } from 'react';
import { Link } from 'react-router';
import routeMap from '../routeMap.json';


class App extends Component {
    render() {
        return (
        <div className="App">
            <body id="top" className="stickyfooter header-fixed">
            <div className="animsition">

                <div className="content">

                    <header className="header-wrap no-transparent">
                        <div className="header-container">
                            <div className="container clearfix">

                                <div className="pull-left">
                                    <a href="./" className="logo clearfix">Dzianis Makeichyk
                                    </a>
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
                                    <img className="icon-item" src="img/social/facebook.svg" alt="facebook" />
                                </a>
                                <a href="https://pl.linkedin.com/in/dzianis-makeichyk-81664a127" target="_blank" data-toggle="tooltip" data-placement="top" title="linkedin">
                                    <img className="icon-item" src="img/social/linkedin.svg" alt="linkedin" />
                                </a>
                                <a href="https://www.vk.com/road66" target="_blank" data-toggle="tooltip" data-placement="top" title="vk">
                                    <img className="icon-item" src="img/social/vk.svg" alt="Dzianis Makeichyk" />
                                </a>

                            </div>

                        </div>
                    </div>


                    <main>
                        {this.props.children}
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
                                    <img className="logotype small" src="img/pencil_wolf_white.svg" />
                                </a>

                                <ul className="footer-menu clearfix">
                                    <li>
                                        <a href="portfolio.html" className="animsition-link">Portfolio</a>
                                    </li>
                                    <li>
                                        <a href="o-mnie.html" className="animsition-link">O mnie</a>
                                    </li>
                                    <li>
                                        <a href="blog.html" className="animsition-link">Blog</a>
                                    </li>
                                    <li>
                                        <a href="kontakt.html" className="animsition-link">Kontakt</a>
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
            </body>
        </div>
        );
    }
}

export default App;
