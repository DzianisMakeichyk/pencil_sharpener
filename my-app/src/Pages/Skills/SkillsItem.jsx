import React, { Component } from 'react';


class SkillsItem extends Component {

  render() {
    return (
      <div className="skill-box">
        <div className="skill-percent">
          <div className="skill-percent-up" style={{ width: this.props.skillsShot.percent+'%' }}>
            <span className="skill-percent-text">{this.props.skillsShot.percent}%</span>
          </div>
        </div>
        <div className="skill-name">{this.props.skillsShot.name}</div>
      </div>
    );
  }
}

SkillsItem.contextTypes = {
  skillsShot: React.PropTypes.object,
};

export default SkillsItem;