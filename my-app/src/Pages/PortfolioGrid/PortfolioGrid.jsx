import React from 'react';
import { Link } from 'react-router';
import routeMap from '../../../routeMap.json';
import cx from 'classnames';
import MediaQuery from 'react-responsive';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isHovering: false,
      isActive: false
    };
  };

  handleMouseOver () {
    this.setState({ isHovering: true });
  }

  handleMouseOut () {
    this.setState({ isHovering: false });
  }

  render() {
    var filtersClass = this.props.project.filters + (" portfolio-item-wrap");
    var hoverItem = cx([
      this.state.isHovering && 'is-hover',
    ]);

    return (
      <article
        className={filtersClass}
      >
        <MediaQuery
          minDeviceWidth={1224}
          className={cx(hoverItem)+ " portfolio-item"}
          onMouseOver={this.handleMouseOver.bind(this)}
          onMouseOut={this.handleMouseOut.bind(this)}
        >
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
              {this.props.project.short_description}
            </div>
        </MediaQuery>
    </article>
    );
  }
}
