import React, { Component } from 'react';

class Separation extends Component {

  render(){
    return (
        <div className="separation">
          <div className="separator-circul-one">
            <div className="separator-circul-two"></div>
          </div>
          <svg className="separation-arrow" x="0px" y="0px" viewBox="0 0 284.9 284.9" xmlSpace="preserve">
            <g>
              <path d="M149,222.7l133-133c1.9-1.9,2.9-4.1,2.9-6.6s-1-4.7-2.9-6.6l-14.3-14.3c-1.9-1.9-4.1-2.9-6.6-2.9s-4.7,0.9-6.6,2.9
                            l-112,112.2L30.3,62.2c-1.9-1.9-4.1-2.9-6.6-2.9s-4.7,0.9-6.6,2.9L2.9,76.5C1,78.4,0,80.6,0,83.1s1,4.7,2.9,6.6l133,133
                            c1.9,1.9,4.1,2.9,6.6,2.9S147.1,224.6,149,222.7z"/>
            </g>
          </svg>
        </div>
    )
  }
}

export default Separation;
