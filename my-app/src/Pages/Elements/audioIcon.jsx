import React from 'react';
import { TimelineLite, Linear } from "gsap";

export default class audioIcon extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      runWolf: true,
    };
  }
  componentDidMount() {
    this.musicWave = new TimelineLite();
    this.musicWave.to(this.refs.wave, 1.4, {
      scale: 1.8,
      opacity: 0,
      repeat: -1,
      ease: Linear.easeNone,
    });
  }

  handleClick = () => {
    if (this.state.runWolf === true) {
      this.musicWave.remove();
      this.setState({
        runWolf: false
      })
    } else {
      this.musicWave.play();
      this.setState({
        runWolf: true
      })
    }
  };

  render() {
    return (
      <div className="audio-wolf" onClick={this.handleClick}>
        <svg className="audio-wolf-logo" style={{"enableBackground":"new 0 0 290 309"}} version="1.1" viewBox="0 0 290 309" x="0px" y="0px" xmlSpace="preserve">
          <g id="v_x5F_2">
            <polyline style={{"fill":"none","stroke":"#ffffff","strokeWidth":"4","strokeMiterlimit":"10"}} points="143.8,27.7 115.8,132.2 128.7,234.7 &#xA;&#x9;&#x9;144,249 159.4,234.5 &#x9;"/>
            <polyline style={{"fill":"none","stroke":"#ffffff","strokeWidth":"4","strokeMiterlimit":"10"}} points="186,118 244,118 252.7,44 172.1,132.2 &#x9;&#xA;&#x9;&#x9;"/>
            <polyline style={{"fill":"none","stroke":"#ffffff","strokeWidth":"4","strokeMiterlimit":"10"}} points="102.6,118.8 43.3,118.3 35,44 &#xA;&#x9;&#x9;115.8,132.2 &#x9;"/>
            <polyline style={{"fill":"none","stroke":"#ffffff","strokeWidth":"4","strokeMiterlimit":"10"}} points="30.2,3.7 89.5,67.3 144,90 198.3,68 &#xA;&#x9;&#x9;255.7,4.7 &#x9;"/>
            <path style={{"fill":"none","stroke":"#ffffff","strokeWidth":"4","strokeMiterlimit":"10"}} d="M25.5,138.1L2,164v46c0,0,55.3-6.7,77.3,54&#xA;&#x9;&#x9;c4.4,12.1,7.7,41.9,32.7,42.3c23.3,0.4,22.9-17,32.4-16.7c8.4,0.3,6.2,16.7,31.5,16.7c23,0,27.3-29.2,32.2-41.7&#xA;&#x9;&#x9;c23.2-59,78.8-55.7,78.8-55.7v-45l-24.3-26.3"/>
            <polyline style={{"fill":"none","stroke":"#ffffff","strokeWidth":"4","strokeMiterlimit":"10"}} points="143,200.2 193.7,147.3 244.5,154.8 &#xA;&#x9;&#x9;287,164 &#x9;"/>
            <polyline style={{"fill":"none","stroke":"#ffffff","strokeWidth":"4","strokeMiterlimit":"10"}} points="171.4,169.7 196.7,169.3 218.4,150.7 &#x9;&#xA;&#x9;&#x9;"/>
            <polyline style={{"fill":"none","stroke":"#ffffff","strokeWidth":"4","strokeMiterlimit":"10"}} points="145,200.3 94.7,147 44.5,154.9 2,164 &#x9;&#xA;&#x9;&#x9;"/>
            <polyline style={{"fill":"none","stroke":"#ffffff","strokeWidth":"4","strokeMiterlimit":"10"}} points="70.4,151 92,170 116,170 &#x9;"/>
            <line style={{"fill":"none","stroke":"#ffffff","strokeWidth":"4","strokeMiterlimit":"10"}} x1="44.5" x2="78.1" y1="154.9" y2="261.7"/>
            <line style={{"fill":"none","stroke":"#ffffff","strokeWidth":"4","strokeMiterlimit":"10"}} x1="244.5" x2="208.2" y1="154.8" y2="263.6"/>
            <path style={{"fill":"none","stroke":"#ffffff","strokeWidth":"4","strokeMiterlimit":"10"}} d="M144,288.7c11.8,0,23.3-7.6,23.3-19.3&#xA;&#x9;&#x9;S155.8,250,144,250s-24.3,7.6-24.3,19.3C119.7,281.1,132.2,288.7,144,288.7z"/>
            <polyline style={{"fill":"none","stroke":"#ffffff","strokeWidth":"4","strokeMiterlimit":"10"}} points="159.4,234.5 172.1,132.2 143.8,27.7 &#x9;"/>
            <line style={{"fill":"none","stroke":"#ffffff","strokeWidth":"4","strokeMiterlimit":"10"}} x1="112" x2="84.9" y1="219" y2="282.3"/>
            <line style={{"fill":"none","stroke":"#ffffff","strokeWidth":"4","strokeMiterlimit":"10"}} x1="176" x2="202.9" y1="219" y2="282.3"/>
            <line style={{"fill":"none","stroke":"#ffffff","strokeWidth":"4","strokeMiterlimit":"10"}} x1="43.6" x2="2" y1="155" y2="210"/>
            <line style={{"fill":"none","stroke":"#ffffff","strokeWidth":"4","strokeMiterlimit":"10"}} x1="244.8" x2="287" y1="154.9" y2="209"/>
            <path style={{"fill":"none","stroke":"#ffffff","strokeWidth":"4","strokeMiterlimit":"10"}} d="M29.9,3.7C21.5-1.8,10.2,6,10,18&#xA;&#x9;&#x9;c-0.6,28,0,106,0,106l15.3,14.1L143.8,249l118.8-111.3l13.6-12.7c0,0,0.7-80.3,0.7-109c0-11.3-13.3-17.3-21.7-11.2&#xA;&#x9;&#x9;c-15.1,11-61.9,42.2-61.9,42.2l-49.5-19.3L93.4,46.3C93.4,46.3,51.8,17.9,29.9,3.7z"/>
          </g>
        </svg>
        <svg className="audio-wolf-wave" ref="wave" style={{"enableBackground":"new 0 0 290 309"}} version="1.1" viewBox="0 0 290 309" x="0px" y="0px" xmlSpace="preserve">
          <g>
            <path style={{"fill":"none","stroke":"#ffffff","strokeWidth":"4","strokeMiterlimit":"10"}} d="M262.6,137.7l13.6-12.7c0,0,0.7-80.3,0.7-109&#xA;&#x9;&#x9;c0-11.3-13.3-17.3-21.7-11.2c-15.1,11-61.9,42.2-61.9,42.2l-49.5-19.3L93.4,46.3c0,0-41.6-28.4-63.5-42.6C21.5-1.8,10.2,6,10,18&#xA;&#x9;&#x9;c-0.6,28,0,106,0,106l15.3,14.1"/>
            <path style={{"fill":"none","stroke":"#ffffff","strokeWidth":"4","strokeMiterlimit":"10"}} d="M25.3,138.1L2,164v46c0,0,55.3-6.7,77.3,54&#xA;&#x9;&#x9;c4.4,12.1,7.7,41.9,32.7,42.3c23.3,0.4,22.9-17,32.4-16.7c8.4,0.3,6.2,16.7,31.5,16.7c23,0,27.3-29.2,32.2-41.7&#xA;&#x9;&#x9;c23.2-59,78.8-55.7,78.8-55.7v-45l-24.3-26.3"/>
          </g>
        </svg>
      </div>
    );
  }
}
