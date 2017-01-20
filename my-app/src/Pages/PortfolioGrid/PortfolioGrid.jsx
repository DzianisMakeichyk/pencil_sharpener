import React from 'react';
import { Link } from 'react-router';
import routeMap from '../../../routeMap.json';
import MediaQuery from 'react-responsive';
// import cx from 'classnames';

export default class PortfolioGrid extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isHovering: false,
    };
  };

  handleMouseOver() {
    this.setState({
      isHovering: true,
    });
    this.props.onHoverChange(this.props.project.name, this.props.project.background, true);
  }

  handleMouseOut() {
    this.setState({
      isHovering: false,
    });
    this.props.onHoverChange(this.props.project.name, this.props.project.background, false);
  }

  render() {
    // var filtersClass = this.props.project.filters + ("portfolio-item-wrap");
    // var hoverItem = cx([
    //   this.state.isHovering && 'is_hover',
    // ]);
    // className={"portfolio_item " + cx(hoverItem)}
    var DescriptionOnHover = !this.state.isHovering && <img className="portfolio-svg" src={"img/pencil_wolf_white.svg"} alt={this.props.project.name}/>;
    var DescriptionOutHover = this.state.isHovering && <div className="portfolio-title-box"><h6 className="portfolio-box-name">{this.props.project.title}</h6><p className="project-mini-categories">{this.props.project.short_description}</p></div>;
    console.log(this.state.onHoverChange);

    let visible = true;
    if (this.props.currentProjectName !== null && this.props.currentProjectName !== this.props.project.name) {
      visible = false;
    }

    return (
        <li
          className="portfolio-item"
          onMouseOver={this.handleMouseOver.bind(this)}
          onMouseOut={this.handleMouseOut.bind(this)}
          style={visible?{}:{visibility:'hidden'}}
        >
            <Link
              to={routeMap.project_details.replace(':slug', this.props.project.name)}
              className="animation-link"
            >
              <MediaQuery maxDeviceWidth={1023}>
                <img className="portfolio-img" src={"img/background.png"} alt={this.props.project.name}/>
              </MediaQuery>
              <MediaQuery minDeviceWidth={1024}>
                {DescriptionOnHover}
                {DescriptionOutHover}
              </MediaQuery>
              <MediaQuery maxDeviceWidth={1023}>
              <h6 className="portfolio-title">
                {this.props.project.title}
              </h6>
              <div className="portfolio-categories">
                {this.props.project.short_description}
              </div>
            </MediaQuery>
          </Link>
        </li>
    );
  }
}
