import React, { Component } from 'react';
import { Link } from 'react-router';

class NotFound extends Component {

  render() {
    return (
      <div className="not-found">
        <div className="not-found-box">
          <p className="not-found-text">Error 404</p>
          <br />
          <Link className="glitch-btn not-found-home" to="/">
            <div className="label">Back to home</div>
            <div className="mask"><span>Back to home</span></div>
            <div className="mask"><span>Back to home</span></div>
            <div className="mask"><span>Back to home</span></div>
            <div className="mask"><span>Back to home</span></div>
            <div className="mask"><span>Back to home</span></div>
          </Link>
        </div>
      </div>
    );
  }
}

export default NotFound;
