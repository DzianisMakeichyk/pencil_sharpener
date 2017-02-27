import React, { Component } from 'react';
import { Link } from 'react-router';
import { TimelineLite } from "gsap";
import Menu from './Menu'
import routeMap from '../routeMap.json';
import MediaDetectElement from './web_modules/MediaDetectElement';
import AudioWolf from './Pages/Elements/audioIcon'

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
        var classNamePiece = is_click + ' burger-menu-piece';
        var classNameOther = is_click + ' burger-menu-other';
        // console.log(location.pathname);
        // console.log(location.pathname !== routeMap.home);
      var things = ['rock', 'fun', 'more work'];
      const thing = things[Math.floor(Math.random()*things.length)];
      console.log('The computer :' + thing);
      console.log(this.props.location.pathname);
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
            </main>
        </div>
        );
    }
}

export default Home;
