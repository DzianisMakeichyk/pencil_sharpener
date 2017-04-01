import React from 'react';
import { Link } from 'react-router';
import routeMap from '../routeMap.json';
import classnames from 'classnames';
import Social from './pages/Elements/Social';
import { Motion, spring } from 'react-motion';

export default class Menu extends React.Component {

  static propTypes = {
    routeMap: React.PropTypes.object,
    location: React.PropTypes.object.isRequired,
  };

  static contextTypes = {
    router: React.PropTypes.object,
  };

  handleClick = () => {
    this.props.onToggle();
  };
  render() {
    return (
      <Motion
        defaultStyle={{
          opacity: 0,
        }} style={{
        opacity: spring(1),
      }}>
        {style => (
          <div
            className="show-menu"
            style={{
              opacity: style.opacity,
            }}
          >
            <Motion
              defaultStyle={{
                opacity: 0,
                y: -20,
              }} style={{
              opacity: spring(1),
              y: spring(0),
            }}>
              {styleLi => (
                <ul
                  className="list-menu"
                  style={{
                    opacity: styleLi.opacity,
                    transform: `translateY(${styleLi.y}px)`,
                  }}>
                  <li
                    className={classnames('item-menu', {
                      'is-active-page': this.props.location.pathname === this.props.routeMap.home,
                    })}
                    onClick={this.handleClick}
                  >
                    <Link
                      to="/"
                      className="text-menu"
                    >
                      Home
                    </Link>
                  </li>
                  <li
                    className={classnames('item-menu', {
                      'is-active-page': this.props.location.pathname === this.props.routeMap.portfolio || +'/' + this.context.router.params.slug,
                    })}
                    onClick={this.handleClick}
                  >
                    <Link
                      to={routeMap.portfolio}
                      className="text-menu"
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li
                    className={classnames('item-menu', {
                      'is-active-page': this.props.location.pathname === this.props.routeMap.about,
                    })}
                    onClick={this.handleClick}
                  >
                    <Link
                      to={routeMap.about}
                      className="text-menu"
                    >
                      O mnie
                    </Link>
                  </li>
                  <li
                    className={classnames('item-menu', {
                      'is-active-page': this.props.location.pathname === this.props.routeMap.blog,
                    })}
                    onClick={this.handleClick}
                  >
                    <Link
                      to={routeMap.blog}
                      className="text-menu"
                    >
                      Blog
                    </Link>
                  </li>
                  <li
                    className={classnames('item-menu', {
                      'is-active-page': this.props.location.pathname === this.props.routeMap.funnybox,
                    })}
                    onClick={this.handleClick}
                  >
                    <Link
                      to={routeMap.funny_box}
                      className="text-menu"
                    >
                      Funny Box
                    </Link>
                  </li>
                  <li
                    className={classnames('item-menu', {
                      'is-active-page': this.props.location.pathname === this.props.routeMap.contact,
                    })}
                    onClick={this.handleClick}
                  >
                    <Link
                      to={routeMap.contact}
                      className="text-menu"
                    >
                      Kontakt
                    </Link>
                  </li>
                  <Social />
                </ul>
              )}
            </Motion>
          </div>
        )}
      </Motion>
    )
  }
}

