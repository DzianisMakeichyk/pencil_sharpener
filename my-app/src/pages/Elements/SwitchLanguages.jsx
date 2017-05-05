import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';
import { intlShape } from 'react-intl';

class SwitchLanguages extends Component {

  static contextTypes = {
    intl: intlShape.isRequired,
  };

  render() {
    const CurrentLocation = this.context.intl.locale;

    return (
      <div>
        <Motion
          defaultStyle={{
            opacity: 0,
            y: -20,
          }} style={{
          opacity: spring(1),
          y: spring(0),
        }}>
          {style => (
            <div
              className="switch_languages"
              style={{
                opacity: style.opacity,
                transform: `translateY(${style.y}px)`,
              }}>
              <a
                href={CurrentLocation === 'en' ? '/' : '/en'}
                className="switch_point"
              >
                <span>
                  {CurrentLocation === 'en' ? 'Polski' : 'English'}
                </span>
              </a>
            </div>
          )}
        </Motion>
      </div>
    );
  }
}

export default SwitchLanguages;
