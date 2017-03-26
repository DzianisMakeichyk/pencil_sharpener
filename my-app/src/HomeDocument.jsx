import React, { Component } from 'react';
import { Link } from 'react-router';
import { TimelineLite } from "gsap";
import Menu from './Menu'
import routeMap from '../routeMap.json';
import MediaDetectElement from './web_modules/MediaDetectElement';
import AudioWolf from './pages/Elements/AudioIcon'
import IEDocument from './pages/IEDocument'
import platform from 'platform'
import map from 'lodash/map';
import classnames from 'classnames';

class Home extends Component {

 constructor(props) {
    super(props);

    this.state = {
        menuVisible: false,
        currentMedia: '',
        audioPlaying: true,
    };
 }
    handleClick = () => {
        const menuAnimation = new TimelineLite();
        if (!this.state.menuVisible) {
            menuAnimation.to(this.refs.firstLine, .3, { x: 27 }, 'first_step')
              .to(this.refs.firstLine, .3, { y: -5 }, 'second_step')
              .to(this.refs.firstLine, .3, { y: 16, opacity: 0 }, 'third_step')
              .to(this.refs.secondLine, .3, { x: 4, y: -1, rotation: 45 }, 'third_step')
              .to(this.refs.thirdLine, .3, { x: 4, y: -9, rotation: -45 }, 'third_step')

        } else {
            menuAnimation.to(this.refs.thirdLine, .3, { scaleX: 1, width: 3, x: 14 }, 'first_step')
              .to(this.refs.secondLine, .3, { scaleX: 0, y: -5 }, 'first_step')
              .to(this.refs.firstLine, .1, { scaleX: 0, x: 0, y: 0 }, 'first_step')
              .to(this.refs.secondLine, .1, { scaleX: 0, x: 0, y: 0, rotation: 0 }, 'first_step')
              .to(this.refs.thirdLine, .3, { y: -20 }, 'second_step')
              .to(this.refs.thirdLine, .3, { y: 0, rotation: 0 }, 'third_step')
              .to(this.refs.firstLine, .3, { scaleX: 1, opacity: 1 }, 'third_step')
              .to(this.refs.secondLine, .3, { scaleX: 1, delay: .1, }, 'third_step')
              .to(this.refs.thirdLine, .3, { x: 0, width: 30, delay: .15, }, 'third_step')
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
    componentDidMount() {
      this.audioEl =  new Audio('/audio/ambient.mp3');
      this.audioEl.play();
    }
    onPause = () => {
      if ( this.state.audioPlaying === true ){
        this.audioEl.pause();
        this.setState({
          audioPlaying: false
        })
      } else {
        this.audioEl.play();
        this.setState({
          audioPlaying: true
        })
      }
    };

    render() {
        var is_click = this.state.menuVisible ? 'is-click-menu ' : '';
        var classNameLogo = 'logo-name ' + is_click ;
        // var classHeaderContainer = 'header-container ' + is_click + classnames({ 'black': location.pathname !== routeMap.home}) + classnames({ ' white': location.pathname !== routeMap.home });
        // var classMainContainer = classnames({ 'black': location.pathname !== routeMap.home});
        var classNamePiece = 'burger-menu-piece ' + is_click;
        // var classNameOther = is_click + ' burger-menu-other';
        // console.log(location.pathname);
        // console.log(location.pathname !== routeMap.home);
      var things = ['rock', 'fun', 'more work'];
      const thing = things[Math.floor(Math.random()*things.length)];
      const isLoggedIn = (platform.name === 'IE' || platform.name === 'Microsoft Edge');
      var numbersOfColumns = new Array(6);
      const pageName = this.props.location.pathname;
      const pageBackName = pageName.replace('/','');
      console.log(this.props.location.pathname === routeMap.home);
      return (
        <div className="App">
          {isLoggedIn ? (
            <IEDocument />
          ) : (
            <div>
              <header className="header-wrap">
                <nav>
                  <div className="header-container">
                    <div className="pull-left">
                      <Link
                        to="/"
                        className={classNameLogo}>Dzianis Makeichyk
                      </Link>
                      <span onClick={this.onPause}>
                        <AudioWolf />
                      </span>
                    </div>
                    <div className="pull-right">
                      <div
                        ref="myMenu"
                        onClick={this.handleClick}
                        className="burger-click-region"
                      >
                        <div className="menu-burger">
                          <span
                            ref="firstLine"
                            className={classNamePiece}
                          >
                          </span>
                          <span
                            ref="secondLine"
                            className={classNamePiece}
                          >
                          </span>
                          <span
                            ref="thirdLine"
                            className={classNamePiece}
                          >
                          </span>
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
              <main
                className={classnames({
                  'hello-pencil': this.props.location.pathname !== routeMap.home,
                })}
                data-name={pageBackName}
              >
                {this.props.children}
                {(this.props.location.pathname &&
                  <div className="preloader">
                    <p className="preloader-text qanelas-bold">
                      Pencil Sharpener
                      <svg version="1.1" x="0" y="0" viewBox="0 0 357 357" enableBackground="new 0 0 357 357" xmlSpace="preserve">
                        <g>
                          <g id="remove">
                            <path d="M357,204H0v-51h357V204z" fill="#FFFFFF"/>
                          </g>
                        </g>
                      </svg>
                      it's
                      <span className="preloader-color-text">
                      &nbsp;{thing}
                    </span>
                    </p>
                  </div>
                )}
                <MediaDetectElement onMediaChange={this.onMediaChange} />
                <div className="grid-bg">
                  {map(numbersOfColumns, () =>
                    <div className="col"></div>
                  )}
                </div>
              </main>
            </div>
          )}
        </div>
        );
    }
}

export default Home;
