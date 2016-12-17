import React from 'react';
import { Link } from 'react-router';
import { autobind } from 'core-decorators';
import routeMap from '../../../routeMap.json';

import { TweenMax } from 'gsap';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
  };

  @autobind
  onHover() {
    TweenMax.to(this.refs.hoverItem, 0.23, { scaleY: 1.2 });
  }

  render() {
    var filtersClass = this.props.project.filters + (" portfolio-item-wrap");
    return (
      <a ref="hoverItem" onMouseOver={this.onHover}>
        <article className={filtersClass} >
          <div className="portfolio-item">
            <Link
              to={routeMap.project_details.replace(':slug', this.props.project.name)}
              className="animsition-link"
            >
              <div className="portfolio-img">
                <img src={"img/black/" + this.props.project.name + ".png"} alt={this.props.project.name}/>
              </div>
            </Link>
            <h6 className="portfolio-title">
              {this.props.project.title}
            </h6>
            <div className="portfolio-categories">
              {this.props.project.categories}
            </div>
          </div>
      </article>
      </a>
    );
  }
}

