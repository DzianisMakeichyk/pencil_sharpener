import React from 'react';


export default function SkillsItem(props) {

  return (
    <div className="progress-bar">
      <h6>{props.skills.name}</h6>
      <div className="progress-outer">
        <div className="progress-inner">
          <span>{props.skills.percent}</span>
        </div>
      </div>
    </div>
  );
}

SkillsItem.contextTypes = {
  router: React.PropTypes.object,
};
