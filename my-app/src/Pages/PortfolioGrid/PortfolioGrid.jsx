import React from 'react';
import { Link } from 'react-router';
import isMediaGreaterThan from '../../web_modules/isMediaGreaterThan';
import isMediaLessThan from '../../web_modules/isMediaLessThan';
import routeMap from '../../../routeMap.json';
import { Motion, spring } from 'react-motion';
import classnames from 'classnames';
import ElementIcon from '../Elements/IconSvg';
import { TimelineLite } from "gsap";

export default class PortfolioGrid extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isHovering: false,
    };
  };

  static contextTypes = {
    currentMedia: React.PropTypes.string,
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

  componentDidMount = () => {
    const skeletonAnimation = new TimelineLite();
    skeletonAnimation.to(this.refs.skeletonBox, .1, { x:-100+'%', y:0, backgroundColor: '#ffffff' }, 'firstStep')
      .to(this.refs.skeletonBox, 1, { x:100+'%', y:0 }, 'secondStep')
      .to(this.refs.skeletonImg, .1, { x:-100+'%', y:0 }, 'firstStep')
      .to(this.refs.skeletonImg, 1, { x:0+'%', y:0 }, 'secondStep', '+=.6');
  };

  render() {
    // var filtersClass = this.props.project.filters + ("portfolio-item-wrap");
    // var hoverItem = cx([
    //   this.state.isHovering && 'is_hover',
    // ]);
    // className={'portfolio_item ' + cx(hoverItem)};
    var DescriptionOnHover = !this.state.isHovering && <img className="portfolio-svg" ref="skeletonImg" src={"img/pencil_wolf_white.svg"} alt={this.props.project.name}/>;
    var DescriptionOutHover = this.state.isHovering &&
      <Motion
        defaultStyle={{
          opacity: 0,
        }} style={{
        opacity: spring(1),
      }}>
        {style => (
        <div
          className="portfolio-title-box"
          style={{
            opacity: style.opacity,
          }}
        >
          <h6 className="portfolio-box-name qanelas-bold">{this.props.project.title}</h6>
          <p className="project-mini-categories">{this.props.project.short_description}</p>
        </div>
        )}
      </Motion>;

    let visible = true;
    if (this.props.currentProjectName !== null && this.props.currentProjectName !== this.props.project.name) {
      visible = false;
    }
    return (
      <li
        className="portfolio-item"
        onMouseEnter={this.handleMouseOver.bind(this)}
        onMouseLeave={this.handleMouseOut.bind(this)}
        style={visible?{}:{visibility:'hidden'}}
      >
        <Link
          to={routeMap.project_details.replace(':slug', this.props.project.name)}
          className={classnames('animation-link', {'is-mobile':this.context.currentMedia <= 'Mobile' })}
        >
          {isMediaLessThan('Small', this.context.currentMedia) && (
            <div className={classnames({'portfolio-info-box':this.context.currentMedia <= 'Mobile' })}>
              <h6 className="portfolio-title qanelas-bold">
                {this.props.project.title}
              </h6>
              <p className="project-mini-categories left">
                {this.props.project.short_description}
              </p>
              <div className="relative">
                <div className="back-image" ref="skeletonBox"></div>
                <img className="portfolio-img" ref="skeletonImg" src={'img/project_grid/' + this.props.project.background + '.png'} alt={this.props.project.name}/>
              </div>
              <ElementIcon />
            </div>
          )}
          {isMediaGreaterThan('Mobile', this.context.currentMedia) && (
            <div>
              {DescriptionOnHover}
              {DescriptionOutHover}
              <span ref="skeletonBox"></span>
              <span ref="skeletonImg"></span>
            </div>
          )}
        </Link>
      </li>
    );

    console.log(this.state.width);
  }
}
