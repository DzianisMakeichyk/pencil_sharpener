import React, { Component } from 'react';

class Chart extends Component {

  render(){
    return (
      <svg className="recharts-surface" viewBox="0 0 930 250" version="1.1">
        <g className="recharts-cartesian-grid">
          <g className="recharts-cartesian-grid-horizontal">
            <line strokeDasharray="3 3" x="60" y="10" width="840" height="210" stroke="#ccc" fill="none" x1="60" y1="220" x2="900" y2="220"/>
            <line strokeDasharray="3 3" x="60" y="10" width="840" height="210" stroke="#ccc" fill="none" x1="60" y1="167.5" x2="900" y2="167.5"/>
            <line strokeDasharray="3 3" x="60" y="10" width="840" height="210" stroke="#ccc" fill="none" x1="60" y1="115" x2="900" y2="115"/>
            <line strokeDasharray="3 3" x="60" y="10" width="840" height="210" stroke="#ccc" fill="none" x1="60" y1="62.5" x2="900" y2="62.5"/>
            <line strokeDasharray="3 3" x="60" y="10" width="840" height="210" stroke="#ccc" fill="none" x1="60" y1="10" x2="900" y2="10"/>
          </g>
          <g className="recharts-cartesian-grid-vertical">
            <line strokeDasharray="3 3" x="60" y="10" width="840" height="210" stroke="#ccc" fill="none" x1="60" y1="10" x2="60" y2="220"/>
            <line strokeDasharray="3 3" x="60" y="10" width="840" height="210" stroke="#ccc" fill="none" x1="200" y1="10" x2="200" y2="220"/>
            <line strokeDasharray="3 3" x="60" y="10" width="840" height="210" stroke="#ccc" fill="none" x1="340" y1="10" x2="340" y2="220"/>
            <line strokeDasharray="3 3" x="60" y="10" width="840" height="210" stroke="#ccc" fill="none" x1="480" y1="10" x2="480" y2="220"/>
            <line strokeDasharray="3 3" x="60" y="10" width="840" height="210" stroke="#ccc" fill="none" x1="620" y1="10" x2="620" y2="220"/>
            <line strokeDasharray="3 3" x="60" y="10" width="840" height="210" stroke="#ccc" fill="none" x1="760" y1="10" x2="760" y2="220"/>
            <line strokeDasharray="3 3" x="60" y="10" width="840" height="210" stroke="#ccc" fill="none" x1="900" y1="10" x2="900" y2="220"/>
          </g>
        </g>
        <g className="recharts-layer recharts-x-axis">
          <g className="recharts-layer recharts-cartesian-axis">
            <line className="recharts-cartesian-axis-line" width="840" height="30" x="60" y="220" stroke="#666" fill="none" x1="60" y1="220" x2="900" y2="220"/>
            <g className="recharts-cartesian-axis-ticks">
              <g className="recharts-layer recharts-cartesian-axis-tick">
                <line className="recharts-cartesian-axis-tick-line" width="840" height="30" x="60" y="220" stroke="#666" fill="none" x1="60" y1="226" x2="60" y2="220"/>
                <text width="840" height="30" x="60" y="226" stroke="none" fill="#666" className="recharts-text recharts-cartesian-axis-tick-value" textAnchor="middle">
                  <tspan x="60" y="230" dy="0.71em">
                    Illustrator
                  </tspan>
                </text>
              </g>
              <g className="recharts-layer recharts-cartesian-axis-tick">
                <line className="recharts-cartesian-axis-tick-line" width="840" height="30" x="60" y="220" stroke="#666" fill="none" x1="200" y1="226" x2="200" y2="220"/>
                <text width="840" height="30" x="200" y="226" stroke="none" fill="#666" className="recharts-text recharts-cartesian-axis-tick-value" textAnchor="middle">
                  <tspan x="200" y="230" dy="0.71em">
                    PhotoShop
                  </tspan>
                </text>
              </g>
              <g className="recharts-layer recharts-cartesian-axis-tick">
                <line className="recharts-cartesian-axis-tick-line" width="840" height="30" x="60" y="220" stroke="#666" fill="none" x1="340" y1="226" x2="340" y2="220"/>
                <text width="840" height="30" x="340" y="226" stroke="none" fill="#666" className="recharts-text recharts-cartesian-axis-tick-value" textAnchor="middle">
                  <tspan x="340" y="230" dy="0.71em">
                    Jade/HTML
                  </tspan>
                </text>
              </g>
              <g className="recharts-layer recharts-cartesian-axis-tick">
                <line className="recharts-cartesian-axis-tick-line" width="840" height="30" x="60" y="220" stroke="#666" fill="none" x1="480" y1="226" x2="480" y2="220"/>
                <text width="840" height="30" x="480" y="226" stroke="none" fill="#666" className="recharts-text recharts-cartesian-axis-tick-value" textAnchor="middle">
                  <tspan x="480" y="230" dy="0.71em">
                    SASS/SCSS
                  </tspan>
                </text>
              </g>
              <g className="recharts-layer recharts-cartesian-axis-tick">
                <line className="recharts-cartesian-axis-tick-line" width="840" height="30" x="60" y="220" stroke="#666" fill="none" x1="620" y1="226" x2="620" y2="220"/>
                <text width="840" height="30" x="620" y="226" stroke="none" fill="#666" className="recharts-text recharts-cartesian-axis-tick-value" textAnchor="middle">
                  <tspan x="620" y="230" dy="0.71em">
                    WordPress
                  </tspan>
                </text>
              </g>
              <g className="recharts-layer recharts-cartesian-axis-tick">
                <line className="recharts-cartesian-axis-tick-line" width="840" height="30" x="60" y="220" stroke="#666" fill="none" x1="760" y1="226" x2="760" y2="220"/>
                <text width="840" height="30" x="760" y="226" stroke="none" fill="#666" className="recharts-text recharts-cartesian-axis-tick-value" textAnchor="middle">
                  <tspan x="760" y="230" dy="0.71em">
                    Jquery
                  </tspan>
                </text>
              </g>
              <g className="recharts-layer recharts-cartesian-axis-tick">
                <line className="recharts-cartesian-axis-tick-line" width="840" height="30" x="60" y="220" stroke="#666" fill="none" x1="900" y1="226" x2="900" y2="220"/>
                <text width="840" height="30" x="900" y="226" stroke="none" fill="#666" className="recharts-text recharts-cartesian-axis-tick-value" textAnchor="middle">
                  <tspan x="900" y="230" dy="0.71em">
                    ReactJs
                  </tspan>
                </text>
              </g>
            </g>
          </g>
        </g>
        <g className="recharts-layer recharts-y-axis">
          <g className="recharts-layer recharts-cartesian-axis">
            <line className="recharts-cartesian-axis-line" width="60" height="210" x="0" y="10" stroke="#666" fill="none" x1="60" y1="10" x2="60" y2="220"/>
            <g className="recharts-cartesian-axis-ticks">
              <g className="recharts-layer recharts-cartesian-axis-tick">
                <line className="recharts-cartesian-axis-tick-line" width="60" height="210" x="0" y="10" stroke="#666" fill="none" x1="54" y1="220" x2="60" y2="220"/>
                <text width="60" height="210" x="54" y="220" stroke="none" fill="#666" className="recharts-text recharts-cartesian-axis-tick-value" textAnchor="end">
                  <tspan x="54" dy="0.355em">
                  </tspan>
                </text>
              </g>
              <g className="recharts-layer recharts-cartesian-axis-tick">
                <line className="recharts-cartesian-axis-tick-line" width="60" height="210" x="0" y="10" stroke="#666" fill="none" x1="54" y1="167.5" x2="60" y2="167.5"/>
                <text width="60" height="210" x="54" y="167.5" stroke="none" fill="#666" className="recharts-text recharts-cartesian-axis-tick-value" textAnchor="end">
                  <tspan x="44" dy="0.355em">
                    20%
                  </tspan>
                </text>
              </g>
              <g className="recharts-layer recharts-cartesian-axis-tick">
                <line className="recharts-cartesian-axis-tick-line" width="60" height="210" x="0" y="10" stroke="#666" fill="none" x1="54" y1="115" x2="60" y2="115"/>
                <text width="60" height="210" x="54" y="115" stroke="none" fill="#666" className="recharts-text recharts-cartesian-axis-tick-value" textAnchor="end">
                  <tspan x="44" dy="0.355em">
                    40%
                  </tspan>
                </text>
              </g>
              <g className="recharts-layer recharts-cartesian-axis-tick">
                <line className="recharts-cartesian-axis-tick-line" width="60" height="210" x="0" y="10" stroke="#666" fill="none" x1="54" y1="62.5" x2="60" y2="62.5"/>
                <text width="60" height="210" x="54" y="62.5" stroke="none" fill="#666" className="recharts-text recharts-cartesian-axis-tick-value" textAnchor="end">
                  <tspan x="44" dy="0.355em">
                    60%
                  </tspan>
                </text>
              </g>
              <g className="recharts-layer recharts-cartesian-axis-tick">
                <line className="recharts-cartesian-axis-tick-line" width="60" height="210" x="0" y="10" stroke="#666" fill="none" x1="54" y1="10" x2="60" y2="10"/>
                <text width="60" height="210" x="54" y="10" stroke="none" fill="#666" className="recharts-text recharts-cartesian-axis-tick-value" textAnchor="end">
                  <tspan x="44" dy="0.355em">
                    80%
                  </tspan>
                </text>
              </g>
            </g>
          </g>
        </g>
        <g className="recharts-layer recharts-area-graphical">
          <g className="recharts-layer recharts-area-chart-group">
            <g className="recharts-layer recharts-area-chart-shapes">
              <g className="recharts-layer recharts-area">
                <defs>
                  <clipPath id="animationClipPath-recharts-area-3">
                    <rect x="60" y="0" width="840" height="221"/>
                  </clipPath>
                </defs>
                <g className="recharts-layer">
                  <g className="recharts-layer" clipPath="url(#animationClipPath-recharts-area-3)">
                    <g>
                      <path stroke="#00e1d9" fillOpacity="0.8" height="210" fill="none" width="840" className="recharts-curve recharts-area-curve" d="M60 62.5C106.66666666666666 58.125 153.33333333333334 53.75 200 49.375 246.66666666666666 45 293.3333333333333 40.625 340 36.25 386.6666666666667 31.875 433.3333333333333 23.125 480 23.125 526.6666666666666 23.125 573.3333333333334 51.5625 620 62.5 666.6666666666666 73.4375 713.3333333333334 82.1875 760 88.75 806.6666666666666 95.3125 853.3333333333334 98.59375 900 101.875"/>
                      <path stroke="none" fillOpacity="0.8" height="210" fill="url(#colorPv)" width="840" className="recharts-curve recharts-area-area" d="M60 62.5C106.66666666666666 58.125 153.33333333333334 53.75 200 49.375 246.66666666666666 45 293.3333333333333 40.625 340 36.25 386.6666666666667 31.875 433.3333333333333 23.125 480 23.125 526.6666666666666 23.125 573.3333333333334 51.5625 620 62.5 666.6666666666666 73.4375 713.3333333333334 82.1875 760 88.75 806.6666666666666 95.3125 853.3333333333334 98.59375 900 101.875L900 220C853.3333333333334 220 806.6666666666666 220 760 220 713.3333333333334 220 666.6666666666666 220 620 220 573.3333333333334 220 526.6666666666666 220 480 220 433.3333333333333 220 386.6666666666667 220 340 220 293.3333333333333 220 246.66666666666666 220 200 220 153.33333333333334 220 106.66666666666666 220 60 220Z"/>
                    </g>
                  </g>
                </g>
                <g className="recharts-layer recharts-area-dots">
                  <svg version="1.1" x="55" y="57.5" width="10" height="10" fill="#fcd600" viewBox="0 0 29.107 29.107" xmlSpace="preserve">
              <g>
                <g id="c147_full_moon">
                  <g>
                    <path d="M14.554 0C6.561 0 0 6.562 0 14.552c0 7.996 6.561 14.555 14.554 14.555 7.996 0 14.553-6.559 14.553-14.555C29.106 6.562 22.55 0 14.554 0z"/>
                  </g>
                </g>
              </g>
            </svg>
            <svg version="1.1" x="195" y="44.375" width="10" height="10" fill="#00e1d9" viewBox="0 0 29.107 29.107" xmlSpace="preserve">
              <g>
                <g id="c147_full_moon">
                  <g>
                    <path d="M14.554 0C6.561 0 0 6.562 0 14.552c0 7.996 6.561 14.555 14.554 14.555 7.996 0 14.553-6.559 14.553-14.555C29.106 6.562 22.55 0 14.554 0z"/>
                  </g>
                </g>
              </g>
            </svg>
            <svg version="1.1" x="335" y="31.25" width="10" height="10" fill="#00e1d9" viewBox="0 0 29.107 29.107" xmlSpace="preserve">
              <g>
                <g id="c147_full_moon">
                  <g>
                    <path d="M14.554 0C6.561 0 0 6.562 0 14.552c0 7.996 6.561 14.555 14.554 14.555 7.996 0 14.553-6.559 14.553-14.555C29.106 6.562 22.55 0 14.554 0z"/>
                  </g>
                </g>
              </g>
            </svg>
            <svg version="1.1" x="475" y="18.125" width="10" height="10" fill="#00e1d9" viewBox="0 0 29.107 29.107" xmlSpace="preserve">
              <g>
                <g id="c147_full_moon">
                  <g>
                    <path d="M14.554 0C6.561 0 0 6.562 0 14.552c0 7.996 6.561 14.555 14.554 14.555 7.996 0 14.553-6.559 14.553-14.555C29.106 6.562 22.55 0 14.554 0z"/>
                  </g>
                </g>
              </g>
            </svg>
            <svg version="1.1" x="615" y="57.5" width="10" height="10" fill="#00e1d9" viewBox="0 0 29.107 29.107" xmlSpace="preserve">
              <g>
                <g id="c147_full_moon">
                  <g>
                    <path d="M14.554 0C6.561 0 0 6.562 0 14.552c0 7.996 6.561 14.555 14.554 14.555 7.996 0 14.553-6.559 14.553-14.555C29.106 6.562 22.55 0 14.554 0z"/>
                  </g>
                </g>
              </g>
            </svg>
            <svg version="1.1" x="755" y="83.75" width="10" height="10" fill="#00e1d9" viewBox="0 0 29.107 29.107" xmlSpace="preserve">
              <g>
                <g id="c147_full_moon">
                  <g>
                    <path d="M14.554 0C6.561 0 0 6.562 0 14.552c0 7.996 6.561 14.555 14.554 14.555 7.996 0 14.553-6.559 14.553-14.555C29.106 6.562 22.55 0 14.554 0z"/>
                  </g>
                </g>
              </g>
            </svg>
            <svg version="1.1" x="895" y="96.875" width="10" height="10" fill="#00e1d9" viewBox="0 0 29.107 29.107" xmlSpace="preserve">
              <g>
                <g id="c147_full_moon">
                  <g>
                    <path d="M14.554 0C6.561 0 0 6.562 0 14.552c0 7.996 6.561 14.555 14.554 14.555 7.996 0 14.553-6.559 14.553-14.555C29.106 6.562 22.55 0 14.554 0z"/>
                  </g>
                </g>
              </g>
            </svg>
                </g>
              </g>
            </g>
            <g className="recharts-layer recharts-area-chart-dots"/>
          </g>
        </g>
        <defs>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#01e6ae" stopOpacity="0.6"/>
            <stop offset="95%" stopColor="#01e6ae" stopOpacity="0"/>
          </linearGradient>
        </defs>
      </svg>
    )
  }
}

export default Chart;
