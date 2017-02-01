import React, { Component } from 'react';


class SkillsItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isHoveringSkill: false,
    };
  };

  handleMouseOver() {
    this.setState({
      isHoveringSkill: true,
    });
  }

  handleMouseOut() {
    this.setState({
      isHoveringSkill: false,
    });
  }

  render() {
    var WidthChartLine = {width: this.props.skillsShot.percent + '%'};
    return (
      <div
        className="skill-one-shot"
        onMouseOver={this.handleMouseOver.bind(this)}
        onMouseOut={this.handleMouseOut.bind(this)}
      >
        <p className="skill-name">{this.props.skillsShot.name}</p>
        <div className="skill-chart-line">
          <div className="skill-chart-line-percent" style={WidthChartLine}>
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
