import React, { Component } from 'react';
import { Link } from 'react-router';
import { TimelineLite } from "gsap";
import Menu from './Menu'
import MediaQuery from 'react-responsive';
import routeMap from '../routeMap.json';
import classnames from 'classnames';

class Home extends Component {

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
               .to(this.refs.otherLine, .3, { x: 14, y: -19 }, 'firstStep')
               .to(this.refs.otherLine, .2, { height: 31 }, 'secondStep')
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

    static propTypes = {
        routeMap: React.PropTypes.object,
        location: React.PropTypes.object.isRequired,
    };

    static contextTypes = {
        router: React.PropTypes.object,
    };

    render() {
        var is_click = this.state.menuVisible ? 'is_click_menu' : '';
        var classNameLogo = 'logo_name ' + is_click ;
        var classHeaderContainer = 'header_container ' + is_click + classnames({ ' black': location.pathname === routeMap.portfolio ||  + '/' + this.context.router.params.slug}) + classnames({ ' white': location.pathname === routeMap.portfolio || + '/' + this.context.router.params.slug || routeMap.about});
        var classMainContainer = classnames({ 'black': location.pathname === routeMap.portfolio || + '/' + this.context.router.params.slug });
        var classNamePiece = is_click + ' burger_menu_piece';
        var classNameOther = is_click + ' burger_menu_other';
        console.log(location.pathname);
        console.log(location.pathname === routeMap.portfolio + '/' + this.context.router.params.slug);
        return (
        <div className="App">
            <header className="header_wrap">
                <nav>
                    <div className={classHeaderContainer}>
                        <div className="pull_left">
                            <MediaQuery maxDeviceWidth={767}>
                                <Link
                                  to="/"
                                  className={classNameLogo}>Dzianis Makeichyk
                                </Link>
                            </MediaQuery>
                            <MediaQuery minDeviceWidth={768}>
                                <Link
                                  to="/"
                                  className="logo_name">Dzianis Makeichyk
                                </Link>
                            </MediaQuery>
                        </div>
                        <div className="pull_right">
                            <div
                              ref="myMenu"
                              onClick={this.handleClick}
                              className="burger_click_region"
                            >
                                <div className="menu_burger">
                                    <span
                                      ref="topLine"
                                      className={classNamePiece}
                                    ></span>
                                    <span
                                      ref="middleLine"
                                      className={classNamePiece}
                                    ></span>
                                    <span
                                      ref="bottomLine"
                                      className={classNamePiece}
                                    ></span>
                                    <span
                                      ref="otherLine"
                                      className={classNameOther}
                                    ></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {(this.state.menuVisible &&
                        <Menu
                          routeMap={routeMap}
                          location={this.props.location}
                        />
                    )}
                    </nav>
            </header>


            <main className={classMainContainer}>
                {this.props.children}
            </main>
        </div>
        );
    }
}

export default Home;
