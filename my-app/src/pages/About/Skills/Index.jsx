import React, { Component } from 'react';
import { TimelineLite } from "gsap";


class SkillsItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isHoveringSkill: false,
    };
  };

  handleMouseOver = () => {
    this.setState({
      isHoveringSkill: true,
    });
  };

  handleMouseOut = () => {
    this.setState({
      isHoveringSkill: false,
    });
  };

  componentDidMount = () => {
  const skeletonAnimation = new TimelineLite();
  skeletonAnimation.to(this.refs.lineChart, 1.5, { width: this.props.skillsShot.percent + '%'}, '+=.5', 'secondStep')
  };

  render() {
    return (
      <div
        className="skill-one-shot"
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}
      >
        <p className="skill-name">{this.props.skillsShot.name}</p>
        <div className="skill-chart-line">
          <div
            className="skill-chart-line-percent"
            ref="lineChart"
            >
              <span className="skill-chart-line"></span>
            </div>
        </div>
        <p className="skill-percent">{this.props.skillsShot.percent}%</p>
      </div>
    );
  }
}

SkillsItem.contextTypes = {
  skillsShot: React.PropTypes.object,
};
export default SkillsItem;
