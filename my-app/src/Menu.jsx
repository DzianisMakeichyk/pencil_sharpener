import React from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';
import Social from './pages/Elements/Social';
import SwitchLanguages from './pages/Elements/SwitchLanguages';
import { Motion, spring } from 'react-motion';
import { FormattedMessage, intlShape } from 'react-intl';

export default class Menu extends React.Component {

  static propTypes = {
    routeMap: React.PropTypes.object,
    location: React.PropTypes.object.isRequired,
  };

  static contextTypes = {
    router: React.PropTypes.object,
    intl: intlShape.isRequired,
  };

  handleClick = () => {
    this.props.onToggle();
  };
  render() {
    const routeMap = this.props.routeMap;
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
                      'is-active-page': this.props.location.pathname === routeMap.home,
                    })}
                    onClick={this.handleClick}
                  >
                    <Link
                      to={routeMap.home}
                      className="text-menu"
                    >
                      Home
                    </Link>
                  </li>
                  <li
                    className={classnames('item-menu', {
                      'is-active-page': this.props.location.pathname === routeMap.portfolio || +'/' + this.context.router.params.slug,
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
                      'is-active-page': this.props.location.pathname === routeMap.about,
                    })}
                    onClick={this.handleClick}
                  >
                    <Link
                      to={routeMap.about}
                      className="text-menu"
                    >
                      <FormattedMessage id="about" />
                    </Link>
                  </li>
                  <li
                    className={classnames('item-menu', {
                      'is-active-page': this.props.location.pathname === routeMap.blog,
                    })}
                    onClick={this.handleClick}
                  >
                    <Link
                      to="https://medium.com/@dzianismakeichyk"
                      target="_blank"
                      className="text-menu"
                    >
                      Blog
                    </Link>
                  </li>
                  <li
                    className={classnames('item-menu', {
                      'is-active-page': this.props.location.pathname === routeMap.funnybox,
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
                      'is-active-page': this.props.location.pathname === routeMap.contact,
                    })}
                    onClick={this.handleClick}
                  >
                    <Link
                      to={routeMap.contact}
                      className="text-menu"
                    >
                      <FormattedMessage id="contact" />
                    </Link>
                  </li>
                  <Social />
                  <SwitchLanguages
                    routeMap={routeMap}
                  />
                </ul>
              )}
            </Motion>
          </div>
        )}
      </Motion>
    )
  }
}
