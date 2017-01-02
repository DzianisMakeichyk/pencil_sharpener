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
    // var filtersClass = this.props.project.filters + ("portfolio-item-wrap");
    // var hoverItem = cx([
    //   this.state.isHovering && 'is_hover',
    // ]);
    // className={"portfolio_item " + cx(hoverItem)}
    var DescriptionOnHover = !this.state.isHovering && <img className="portfolio_svg" src={"img/svg/logo.svg"} alt={this.props.project.name}/>;
    var DescriptionOutHover = this.state.isHovering && <div className="portfolio_title_box"><h6 className="portfolio_box_name">{this.props.project.title}</h6></div> ;

    return (
        <li
          className="portfolio_item"
          onMouseOver={this.handleMouseOver.bind(this)}
          onMouseOut={this.handleMouseOut.bind(this)}
        >
            <Link
              to={routeMap.project_details.replace(':slug', this.props.project.name)}
              className="animsition_link"
            >
              <MediaQuery maxDeviceWidth={1023}>
                <img className="portfolio_img" src={"img/background.png"} alt={this.props.project.name}/>
              </MediaQuery>
              <MediaQuery minDeviceWidth={1024}>
                {DescriptionOnHover}
                {DescriptionOutHover}
              </MediaQuery>
            </Link>
            <MediaQuery maxDeviceWidth={1023}>
              <h6 className="portfolio_title">
                {this.props.project.title}
              </h6>
              <div className="portfolio_categories">
                {this.props.project.short_description}
              </div>
            </MediaQuery>
        </li>
    );
  }
}
