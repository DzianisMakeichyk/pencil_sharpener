import React, { Component } from 'react';
import { Link } from 'react-router';

class FunnyBoxElement extends Component {
  constructor() {
    super();

    this.state = {
      width: 0,
      height: 0,
      left: 0,
      top: 0,
      direction: 0,
      className: '',
    };
  }

  componentDidMount() {
    this.update();
  }

  mouseEnterHandler = (ev) => {
    this.addClass(ev, 'in');
  };

  mouseOutHandler = (ev) => {
    this.addClass(ev, 'out');
  };

  addClass = (ev, state) => {
    var direction = this.getDirection(ev);
    var class_suffix = '';

    switch (direction) {
      case 0:
        class_suffix = '-top';break;
      case 1:
        class_suffix = '-right';break;
      case 2:
        class_suffix = '-bottom';break;
      case 3:
        class_suffix = '-left';break;
    }

    this.setState({
      className: state + class_suffix,
    });
  };

  getDirection = (ev) => {
    const w = this.state.width,
      h = this.state.height,
      l = this.state.left,
      t = this.state.top;

    const x = ev.pageX - l - w / 2 * (w > h ? h / w : 1),
      y = ev.pageY - t - h / 2 * (h > w ? w / h : 1);

    return Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
  };

  update = () => {
    const box = this.refs.element.getBoundingClientRect();
    this.setState({
      left: box.left,
      top: box.top,
      width: box.right - box.left,
      height: box.bottom - box.top,
    });
  };

  render() {
    return (
      <Link
        to={this.props.linkBox}
        target='_blank'
        className="funny-link-to"
      >
      <li
        ref="element"
        onMouseEnter={this.mouseEnterHandler}
        onMouseLeave={this.mouseOutHandler}
        className={'funny-list ' + this.state.className}
      >
        <div className='funny-box-container'>
          <div className='funny-box-image'>
            <svg viewBox='0 0 180 180'>
              <image height='100%' preserveAspectRatio='xMidYMid slice' width='100%' xlinkHref={this.props.imageBox}></image>
            </svg>
          </div>
          <div className='funny-box-text'>
            <h3>
              {this.props.nameBox}
            </h3>
          </div>
          </div>
      </li>
      </Link>
    );
  }
}

export default FunnyBoxElement;
