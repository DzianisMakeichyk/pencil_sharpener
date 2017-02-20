import React, { Component } from 'react';
import { Link } from 'react-router';
import { TimelineLite } from "gsap";
import Menu from './Menu'
import routeMap from '../routeMap.json';
import MediaDetectElement from './web_modules/MediaDetectElement';
import ReactAudioPlayer from 'react-audio-player';
import { RouteTransition } from 'react-router-transition';

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
        playAudio: true,
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
    static childContextTypes = {
    currentMedia: React.PropTypes.string.isRequired,
    };
    getChildContext() {
        return {
            currentMedia: this.state.currentMedia,
        };
    }
    onMediaChange = (currentMedia) => {
        this.setState({ currentMedia });
    };
    onPause = (playAudio) => {
      this.setState({ playAudio });
    };
    render() {
        var is_click = this.state.menuVisible ? 'is-click-menu ' : '';
        var classNameLogo = 'logo-name ' + is_click ;
        // var classHeaderContainer = 'header-container ' + is_click + classnames({ 'black': location.pathname !== routeMap.home}) + classnames({ ' white': location.pathname !== routeMap.home });
        // var classMainContainer = classnames({ 'black': location.pathname !== routeMap.home});
        var classNamePiece = is_click + ' burger-menu-piece';
        var classNameOther = is_click + ' burger-menu-other';
        // console.log(location.pathname);
        // console.log(location.pathname !== routeMap.home);

      return (
        <div className="App">
            <header className="header-wrap">
                <nav>
                    <div className="header-container">
                        <div className="pull-left">
                            <Link
                              to="/"
                              className={classNameLogo}>Dzianis Makeichyk
                            </Link>
                            {/*<ReactAudioPlayer*/}
                              {/*src="/audio/ambient.mp3"*/}
                              {/*autoPlay*/}
                              {/*loop*/}
                            {/*/>*/}
                          <button onClick={this.onPause.bind(this)}>hello</button>
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
                          onToggle={this.handleClick.bind(this)}
                        />
                    )}
                </nav>
            </header>
            <main>
              <RouteTransition
                pathname={this.props.location.pathname}
                atEnter={{ translateX: 100 }}
                atLeave={{ translateX: -100 }}
                atActive={{ translateX: 0 }}
                mapStyles={styles => ({ transform: `translateX(${styles.translateX}%)` })}
                className="hello-world"
              >
                {this.props.children}
              </RouteTransition>
                <MediaDetectElement onMediaChange={this.onMediaChange} />
            </main>
        </div>
        );
    }
}

export default Home;
