import React from 'react';
import { Link } from 'react-router';
import isMediaGreaterThan from '../../web_modules/isMediaGreaterThan';
import isMediaLessThan from '../../web_modules/isMediaLessThan';
import { Motion, spring } from 'react-motion';
import classnames from 'classnames';
import ElementIcon from '../Elements/IconSvg';
import { TimelineLite } from "gsap";
import { intlShape } from 'react-intl';

export default class PortfolioGrid extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isHovering: false,
    };
  };

  static contextTypes = {
    currentMedia: React.PropTypes.string,
    routeMap: React.PropTypes.object,
    intl: intlShape.isRequired,
  };

  handleMouseOver = () => {
    this.setState({
      isHovering: true,
    });
    this.props.onHoverChange(this.props.project.slug, this.props.project.background, true);
  };

  handleMouseOut = () => {
    this.setState({
      isHovering: false,
    });
    this.props.onHoverChange(this.props.project.name, this.props.project.background, false);
  };

  componentDidMount = () => {
    const skeletonAnimation = new TimelineLite();
    skeletonAnimation.to(this.refs.skeletonBox, .1, { x:-100+'%', y:0, backgroundColor: '#ffffff' }, 'firstStep')
      .to(this.refs.skeletonBox, 1, { x:100+'%', y:0 }, 'secondStep')
      .to(this.refs.skeletonImg, .1, { x:-100+'%', y:0 }, 'firstStep')
      .to(this.refs.skeletonImg, 1, { x:0+'%', y:0 }, 'secondStep', '+=.6');
  };

  componentWillMount = () => {
    const languesLocation = this.context.intl.locale;
    const ShortDescription = this.props.project.short_description;

    if (languesLocation === 'en') {
      this.CurrentDescription = ShortDescription.en
    } else {
      this.CurrentDescription = ShortDescription.pl
    }
  };

  render() {
    const routeMap = this.props.route;
    const slug = this.props.project.slug;
    let visible = true;
    if (this.props.currentProjectName !== null && this.props.currentProjectName !== this.props.project.slug) {
      visible = false;
    }
    var DescriptionOnHover = !this.state.isHovering &&
      <img
        className={'portfolio-svg ' + this.props.project.logo.size}
        ref="skeletonImg"
        src={'/img/logos/' + this.props.project.logo.svg + '.svg'}
        alt={this.props.project.slug}
      />;
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
          <h4 className="portfolio-box-name qanelas-bold">{this.props.project.name}</h4>
          <h5 className="project-mini-categories">{this.CurrentDescription}</h5>
        </div>
        )}
      </Motion>;

    return (
      <li
        className="portfolio-item"
        onMouseEnter={this.handleMouseOver}
        onMouseLeave={this.handleMouseOut}
        style={visible?{}:{visibility:'hidden'}}
      >
        <Link
          to={routeMap.path + '/' + slug}
          className="animation-link"
        >
          {isMediaLessThan('Small', this.context.currentMedia) && (
            <div className={classnames({'portfolio-info-box':this.context.currentMedia <= 'Mobile' })}>
              <h4 className="portfolio-title qanelas-bold">
                {this.props.project.name}
              </h4>
              <h5 className="project-mini-categories left">
                {this.CurrentDescription}
              </h5>
              <div className="relative">
                <div className="back-image" ref="skeletonBox"></div>
                <img className="portfolio-img grayscale" ref="skeletonImg" src={'/img/project_grid/' + this.props.project.background + '.png'} alt={this.props.project.slug}/>
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
  }
}
